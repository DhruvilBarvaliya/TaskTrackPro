using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using StackExchange.Redis;
using System;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;
using Microsoft.Extensions.Configuration;
using TaskTrackPro.Core.Models;

public class UserRegistrationConsumer
{
    private readonly IConnection _rabbitConnection;
    private readonly IDatabase _redis;
    private readonly IConfiguration _config;
    private readonly IModel _channel;

    public UserRegistrationConsumer(IConnection rabbitConnection, IConnectionMultiplexer redis, IConfiguration config)
    {
        _rabbitConnection = rabbitConnection;
        _redis = redis.GetDatabase();
        _config = config;
        _channel = _rabbitConnection.CreateModel(); // Persistent channel
    }

    public void StartListening()
    {
        _channel.QueueDeclare(queue: "UserRegistrationQueue", durable: false, exclusive: false, autoDelete: false, arguments: null);

        var consumer = new EventingBasicConsumer(_channel);
        consumer.Received += async (model, ea) =>
        {
            var body = ea.Body.ToArray();
            var message = Encoding.UTF8.GetString(body);
            Console.WriteLine($"Message received from RabbitMQ: {message}");

            var user = JsonSerializer.Deserialize<t_User>(message);
            if (user != null)
            {
                Console.WriteLine($"Processing registration for {user.c_email}");
                await SendEmailToAdmin(user.c_email, user.c_uname);
                Console.WriteLine("Email sending process completed.");
            }
        };

        _channel.BasicConsume(queue: "UserRegistrationQueue", autoAck: true, consumer: consumer);
        Console.WriteLine("Listening for new user registrations...");
    }

    private async Task SendEmailToAdmin(string userEmail, string userName)
    {
        Console.WriteLine("Email: " + userEmail + " Name: " + userName);
        var emailSettings = _config.GetSection("EmailSettings");

        var email = new MimeMessage();
        email.From.Add(new MailboxAddress("TaskTrackPro", emailSettings["SenderEmail"]));
        email.To.Add(new MailboxAddress("Admin", emailSettings["AdminEmail"]));
        email.Subject = "New User Registered";
        email.Body = new TextPart("plain")
        {
            Text = $"A new user has registered:\n\nName: {userName}\nEmail: {userEmail}"
        };

        using var smtp = new MailKit.Net.Smtp.SmtpClient();
        await smtp.ConnectAsync(emailSettings["SmtpServer"], int.Parse(emailSettings["SmtpPort"]), SecureSocketOptions.StartTls);
        await smtp.AuthenticateAsync(emailSettings["SenderEmail"], emailSettings["SenderPassword"]); // ✅ Updated this
        await smtp.SendAsync(email);
        await smtp.DisconnectAsync(true);

        Console.WriteLine($"Admin notified via email: {emailSettings["AdminEmail"]}");
    }
}
