using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using Repositories.Implementations;
using Repositories.Models;
using System.Collections.Concurrent;
using System.Text;
using System.Threading.Tasks;

public class ChatHub : Hub
{
    private static readonly ConcurrentDictionary<string, string> _userConnections = new();
    private readonly ChatService _chatService;

    public ChatHub(ChatService chatService)
    {
        _chatService = chatService;
    }

    public override async Task OnConnectedAsync()
    {
        var userId = Context.GetHttpContext()?.Request.Query["userId"].ToString();
        if (!string.IsNullOrEmpty(userId))
        {
            _userConnections[userId] = Context.ConnectionId; // Store user connection ID

            // Subscribe to RabbitMQ messages for the user
            _chatService.SubscribeToMessages(userId, async (sender, args) =>
            {
                var body = args.Body.ToArray();
                var messageJson = Encoding.UTF8.GetString(body);
                var message = JsonConvert.DeserializeObject<Message>(messageJson);

                if (_userConnections.TryGetValue(userId, out var connectionId))
                {
                    await Clients.Client(connectionId).SendAsync("ReceiveMessage", message.SenderId, message.Content);
                }
            });
        }

        await base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        var userId = _userConnections.FirstOrDefault(x => x.Value == Context.ConnectionId).Key;
        if (!string.IsNullOrEmpty(userId))
        {
            _userConnections.TryRemove(userId, out _);
        }

        await base.OnDisconnectedAsync(exception);
    }

    public async Task SendMessage(string senderId, string receiverId, string message)
    {
        var chatMessage = new Message
        {
            SenderId = senderId,
            ReceiverId = receiverId,
            Content = message,
            Timestamp = DateTime.UtcNow
        };

        await _chatService.SaveMessage(chatMessage);

        if (_userConnections.TryGetValue(receiverId, out var connectionId))
        {
            await Clients.Client(connectionId).SendAsync("ReceiveMessage", senderId, message);
        }
    }
}
