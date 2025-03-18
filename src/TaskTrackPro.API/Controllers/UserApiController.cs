using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RabbitMQ.Client;
using StackExchange.Redis;
using TaskTrackPro.Core.Models;
using TaskTrackPro.Core.Repositories.Commands.Interfaces;

namespace TaskTrackPro.API.Controllers
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
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromForm] Login user)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(new { message = "All Fields are Required" });
                }

                // 🔹 Admin login logic
                if (user.c_role == "Admin")
                {
                    if (user.c_email == "ritadehrawala3@gmail.com" && user.c_password == "admin@123")
                    {
                        return Ok(new { success = true, message = "Login Success", role = user.c_role });
                    }
                    else
                    {
                        return BadRequest(new { message = "Invalid Credentials" });
                    }
                }

                // 🔹 Fetch user from DB
                var data = await _user.Login(user);

                // 🔹 Ensure user exists before accessing properties
                if (data == null)
                {
                    Console.WriteLine("User Not Found");
                    return BadRequest(new { message = "User Not Found" });
                }

                // 🔹 Set session variable only if user is valid
                HttpContext.Session.SetInt32("c_uid", data.c_uid);
                HttpContext.Session.SetInt32("userid", data.c_uid);
                HttpContext.Session.SetString("UserQueue", data.c_email);
                _redis.SetAdd("online_users", data.c_email);

                Console.WriteLine("Login Success");
                Console.WriteLine($"User Email: {data.c_email}");

                return Ok(new { success = true, message = "Login Success", data = data });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in Login method of UserAuthController: {ex}");
                return StatusCode(500, new { message = "Internal Server Error", error = ex.Message });
            }
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