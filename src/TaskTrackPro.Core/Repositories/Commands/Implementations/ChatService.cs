using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using Newtonsoft.Json;
using Npgsql;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using Repositories.Models;
using StackExchange.Redis;

namespace Repositories.Implementations
{
    public class ChatService : IDisposable
    {
        private readonly NpgsqlConnection _dbConnection;
        private readonly IConnectionMultiplexer _redis;
        private readonly IModel _channel;
        private readonly IConnection _rabbitMqConnection;
        private bool _disposed;

        public ChatService(NpgsqlConnection dbConnection, IConnectionMultiplexer redis)
        {
            _dbConnection = dbConnection;
            _redis = redis;

            var factory = new ConnectionFactory()
            {
                HostName = "localhost",
                AutomaticRecoveryEnabled = true, // Auto-reconnect if the connection drops
                NetworkRecoveryInterval = TimeSpan.FromSeconds(10)
            };

            _rabbitMqConnection = factory.CreateConnection();
            _channel = _rabbitMqConnection.CreateModel();

            _channel.ExchangeDeclare("chat_exchange", ExchangeType.Direct);
        }

        public async Task<List<Message>> GetChatHistory(string userId, string otherUserId)
        {
            var cache = _redis.GetDatabase();
            string cacheKey = $"chat:{userId}:{otherUserId}";

            var cachedMessages = await cache.ListRangeAsync(cacheKey, 0, -1);
            if (cachedMessages.Length > 0)
            {
                return cachedMessages.Select(m => JsonConvert.DeserializeObject<Message>(m)).ToList();
            }

            try
            {
                var query = @"
                    SELECT SenderId, ReceiverId, Content, Timestamp 
                    FROM Messages 
                    WHERE (SenderId = @UserId AND ReceiverId = @OtherUserId) 
                       OR (SenderId = @OtherUserId AND ReceiverId = @UserId) 
                    ORDER BY Timestamp ASC";

                var messages = (await _dbConnection.QueryAsync<Message>(query, new { UserId = userId, OtherUserId = otherUserId })).ToList();

                if (messages.Any())
                {
                    foreach (var msg in messages)
                    {
                        await cache.ListRightPushAsync(cacheKey, JsonConvert.SerializeObject(msg));
                    }
                    await cache.KeyExpireAsync(cacheKey, TimeSpan.FromDays(30));
                }
                return messages;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching chat history: {ex}");
                return new List<Message>();
            }
        }

        public async Task<int> SaveMessage(Message message)
        {
            try
            {
                var query = "INSERT INTO Messages (SenderId, ReceiverId, Content, Timestamp) VALUES (@SenderId, @ReceiverId, @Content, @Timestamp)";
                await _dbConnection.ExecuteAsync(query, message);

                var body = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(message));
                var properties = _channel.CreateBasicProperties();
                properties.Persistent = true;

                _channel.QueueDeclare(queue: message.ReceiverId, durable: true, exclusive: false, autoDelete: false);
                _channel.QueueBind(queue: message.ReceiverId, exchange: "chat_exchange", routingKey: message.ReceiverId);

                _channel.BasicPublish(exchange: "chat_exchange", routingKey: message.ReceiverId, basicProperties: properties, body: body);

                var cache = _redis.GetDatabase();
                string cacheKey = $"chat:{message.SenderId}:{message.ReceiverId}";
                string reverseCacheKey = $"chat:{message.ReceiverId}:{message.SenderId}";

                // First, push the new message to Redis
                await cache.ListRightPushAsync(cacheKey, JsonConvert.SerializeObject(message));
                await cache.ListRightPushAsync(reverseCacheKey, JsonConvert.SerializeObject(message));

                // Then, trim the list to keep only the last 1000 messages
                await cache.ListTrimAsync(cacheKey, -1000, -1);
                await cache.ListTrimAsync(reverseCacheKey, -1000, -1);

                await cache.KeyExpireAsync(cacheKey, TimeSpan.FromDays(30));
                await cache.KeyExpireAsync(reverseCacheKey, TimeSpan.FromDays(30));

                return 1;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error saving message: {ex}");
                return 0;
            }
        }

        public void SubscribeToMessages(string userId, EventHandler<BasicDeliverEventArgs> handler)
        {
            _channel.QueueDeclare(queue: userId, durable: true, exclusive: false, autoDelete: false);
            _channel.QueueBind(queue: userId, exchange: "chat_exchange", routingKey: userId);

            var consumer = new EventingBasicConsumer(_channel);
            consumer.Received += handler;
            _channel.BasicConsume(queue: userId, autoAck: true, consumer: consumer);
        }

        public void Dispose()
        {
            if (_disposed) return;
            _disposed = true;

            _channel?.Close();
            _channel?.Dispose();
            _rabbitMqConnection?.Close();
            _rabbitMqConnection?.Dispose();
        }
    }
}
