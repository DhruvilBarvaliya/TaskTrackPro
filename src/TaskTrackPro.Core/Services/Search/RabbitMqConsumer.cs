using System;
using System.Text;
using System.Text.Json;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using StackExchange.Redis;

namespace TaskTrackPro.API.Services
{
    public class RabbitMqConsumer
    {
        private readonly IDatabase _redis;
        private readonly ConnectionFactory _factory;
        private readonly string _queueName = "taskQueue";

        public RabbitMqConsumer()
        {
            // ✅ Connect to Redis
            _redis = ConnectionMultiplexer.Connect("localhost").GetDatabase();

            // ✅ RabbitMQ Connection
            _factory = new ConnectionFactory()
            {
                HostName = "localhost",
                Port = 5672,
                UserName = "guest",
                Password = "guest"
            };
        }

        public void ConsumeNotifications()
        {
            using var connection = _factory.CreateConnection();
            using var channel = connection.CreateModel();

            // ✅ Declare queue to ensure it exists
            channel.QueueDeclare(queue: _queueName,
                                 durable: true,
                                 exclusive: false,
                                 autoDelete: false,
                                 arguments: null);

            var consumer = new EventingBasicConsumer(channel);
            consumer.Received += async (model, ea) =>
            {
                var body = ea.Body.ToArray();
                var message = Encoding.UTF8.GetString(body);
                var notification = JsonSerializer.Deserialize<TaskNotification>(message);

                Console.WriteLine($"[RabbitMQ] Received Notification: {notification.NotificationTitle} for User {notification.UserId}");

                // ✅ Store notification in Redis
                await _redis.ListRightPushAsync($"notifications:{notification.UserId}", notification.NotificationTitle);
                Console.WriteLine($"[Redis] Stored notification for User {notification.UserId}");

                // ✅ Acknowledge message
                channel.BasicAck(ea.DeliveryTag, false);
            };

            channel.BasicConsume(queue: _queueName, autoAck: false, consumer: consumer);
            Console.WriteLine("[RabbitMQ] Consumer started. Listening for messages...");

            // ✅ Keep the consumer running
            while (true) { }
        }
    }

    public class TaskNotification
    {
        public string UserId { get; set; }
        public string NotificationTitle { get; set; }
    }
}
