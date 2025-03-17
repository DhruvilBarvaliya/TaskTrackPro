using System;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using RabbitMQ.Client;
using StackExchange.Redis;
using TaskTrackPro.Core.Models;
using TaskTrackPro.Repositories.Interfaces;

namespace TaskTrackPro.API
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserApiController : ControllerBase
    {
        private readonly IUserInterface _user;
        private readonly IConfiguration _config;
        private readonly IDatabase _redis;
        private readonly ILogger<UserApiController> _logger;
        private readonly IModel _channel;

        public UserApiController(IConfiguration config, IUserInterface user, ILogger<UserApiController> logger, IConnectionMultiplexer redis, IConnection rabbitConnection)
        {
            _config = config;
            _user = user;
            _redis = redis.GetDatabase();
            _logger = logger;
            _channel = rabbitConnection.CreateModel(); // Persistent channel
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromForm] t_User user)
        {
            if (user.c_profile != null && user.c_profile.Length > 0)
            {
                var fileName = user.c_email + Path.GetExtension(user.c_profile.FileName);
                var filePath = Path.Combine("../TaskTrackPro.MVC/wwwroot/profile_images", fileName);
                user.c_profilepicture = fileName;
                using var stream = new FileStream(filePath, FileMode.Create);
                await user.c_profile.CopyToAsync(stream);
                _logger.LogInformation("File uploaded successfully: {FileName}", fileName);
            }

            var status = await _user.Add(user);
            if (status == 1)
            {
                var userData = new { Email = user.c_email, Name = user.c_uname };
                _redis.StringSet($"User:{user.c_email}", JsonSerializer.Serialize(userData));

                _channel.QueueDeclare(queue: "UserRegistrationQueue", durable: false, exclusive: false, autoDelete: false, arguments: null);

                var message = JsonSerializer.Serialize(userData);
                var body = Encoding.UTF8.GetBytes(message);
                _channel.BasicPublish(exchange: "", routingKey: "UserRegistrationQueue", basicProperties: null, body: body);

                _logger.LogInformation("User registration event published to RabbitMQ: {Email}", user.c_email);
                return Ok(new { success = true, message = "User Registered successfully. Admin will be notified." });
            }
            else if (status == 0)
            {
                return Ok(new { success = false, message = "User Already Exists" });
            }
            else
            {
                return BadRequest(new { success = false, message = "An error occurred during registration." });
            }
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromForm] Login loginData)
        {
            if (!ModelState.IsValid)
            {
                var errors = ModelState.Where(e => e.Value.Errors.Count > 0)
                    .ToDictionary(kvp => kvp.Key, kvp => kvp.Value.Errors.Select(err => err.ErrorMessage).ToArray());

                return BadRequest(new { success = false, message = errors });
            }

            try
            {
                var userData = await _user.Login(loginData);
                if (userData.c_uid == 0)
                {
                    return Ok(new { success = false, message = "Invalid email or password" });
                }

                HttpContext.Session.SetInt32("userid", userData.c_uid);
                HttpContext.Session.SetString("UserQueue", userData.c_email);
                _redis.SetAdd("online_users", userData.c_email);

                return Ok(new { success = true, message = "Login successful", UserData = userData });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred during user login.");
                return StatusCode(500, new { success = false, message = "An unexpected error occurred. Please try again later." });
            }
        }

        [HttpPost("logout")]
        public IActionResult Logout([FromQuery] string userEmail)
        {
            try
            {
                _redis.SetRemove("online_users", userEmail);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Redis connection failed while removing user from online list.");
            }

            HttpContext.Session.Clear();
            return Ok(new { success = true, message = "Logout successful" });
        }

        [HttpGet("loadUsers")]
        public async Task<IActionResult> LoadUsers()
        {
            try
            {
                var userList = await _user.LoadUsers();
                return Ok(new { success = true, message = "Users loaded successfully!", Users = userList });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching user list.");
                return StatusCode(500, new { success = false, message = "An error occurred while loading users." });
            }
        }

        [HttpGet("getOnlineUsers")]
        public IActionResult GetOnlineUsers()
        {
            try
            {
                var onlineUsers = _redis.SetMembers("online_users").Select(x => x.ToString()).ToArray();
                return Ok(new { success = true, onlineUsers });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Redis connection failed while retrieving online users.");
                return StatusCode(500, new { success = false, message = "An error occurred while retrieving online users." });
            }
        }
    }
}
