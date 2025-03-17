using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;
using Repositories.Implementations;
// using Repositories.Interfaces;
using Repositories.Models;
using System;
using System.Threading.Tasks;

[Route("api/chat")]
[ApiController]
public class ChatController : ControllerBase
{
    private readonly ChatService _chatService;
    private readonly IHubContext<ChatHub> _hubContext;
    private readonly ILogger<ChatController> _logger;

    public ChatController(ChatService chatService, IHubContext<ChatHub> hubContext, ILogger<ChatController> logger)
    {
        _chatService = chatService;
        _hubContext = hubContext;
        _logger = logger;
    }

    /// <summary>
    /// Get chat history between two users
    /// </summary>
    [HttpGet("history")]
    public async Task<IActionResult> GetChatHistory([FromQuery] string userId, [FromQuery] string otherUserId)
    {
        if (string.IsNullOrWhiteSpace(userId) || string.IsNullOrWhiteSpace(otherUserId))
            return BadRequest(new { success = false, message = "User IDs cannot be empty." });

        try
        {
            var messages = await _chatService.GetChatHistory(userId, otherUserId);
            return Ok(new { success = true, data = messages });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error fetching chat history for UserId: {UserId}, OtherUserId: {OtherUserId}", userId, otherUserId);
            return StatusCode(500, new { success = false, message = "An unexpected error occurred. Please try again later." });
        }
    }

    /// <summary>
    /// Send a chat message with real-time notification
    /// </summary>
    [HttpPost("send")]
    public async Task<IActionResult> SendMessage([FromBody] MessageRequest request)
    {
        if (request == null || string.IsNullOrWhiteSpace(request.SenderId) ||
            string.IsNullOrWhiteSpace(request.ReceiverId) || string.IsNullOrWhiteSpace(request.Content))
        {
            return BadRequest(new { success = false, message = "Invalid message data." });
        }

        var message = new Message
        {
            SenderId = request.SenderId,
            ReceiverId = request.ReceiverId,
            Content = request.Content,
            Timestamp = DateTime.UtcNow
        };

        try
        {
            await _chatService.SaveMessage(message);

            // Notify Receiver in Real-time via SignalR
            await _hubContext.Clients.User(request.ReceiverId)
                .SendAsync("ReceiveMessage", request.SenderId, request.Content);

            return Ok(new { success = true, message = "Message sent successfully.", data = message });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error sending message from {SenderId} to {ReceiverId}", request.SenderId, request.ReceiverId);
            return StatusCode(500, new { success = false, message = "An error occurred while sending the message. Please try again." });
        }
    }
}

/// <summary>
/// DTO for sending a message (To avoid exposing full Message model)
/// </summary>
public class MessageRequest
{
    public string SenderId { get; set; }
    public string ReceiverId { get; set; }
    public string Content { get; set; }
}