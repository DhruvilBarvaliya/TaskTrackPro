using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using RabbitMQ.Client;

namespace TaskTrackPro.API.Services
{
    public class RabbitMqPublisher
    {
        private readonly string _queueName = "taskQueue";

    public void PublishNotification(string userId, string notificationTitle)
    {
        var factory = new ConnectionFactory() { HostName = "localhost" };
        using var connection = factory.CreateConnection();
        using var channel = connection.CreateModel();

        channel.QueueDeclare(queue: _queueName,
                             durable: false,
                             exclusive: false,
                             autoDelete: false,
                             arguments: null);

        var message = new { UserId = userId, NotificationTitle = notificationTitle };
        var body = Encoding.UTF8.GetBytes(JsonSerializer.Serialize(message));

        channel.BasicPublish(exchange: "", routingKey: _queueName, basicProperties: null, body: body);
    }
    }
}