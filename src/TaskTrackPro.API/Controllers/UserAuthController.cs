using System;
using Microsoft.AspNetCore.Mvc;
using Npgsql;
using TaskTrackPro.Core.Models;
using TaskTrackPro.Core.Repositories.Commands.Interfaces;

namespace TaskTrackPro.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserAuthController : ControllerBase
    {
        private readonly IUserLoginInterface _userLoginRepo;
        private readonly RedisService _redisService;
        public UserAuthController(IUserLoginInterface loginInterface, RedisService redisService)
        {
            _userLoginRepo = loginInterface;
            _redisService = redisService;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromForm] t_Login user)
        {
            try
            {
                if (!ModelState.IsValid) 
                {
                    return BadRequest(new { message = "All Fields are Required" });
                }

                if(user.role == "Admin")
                {
                    if(user.Email == "ritadehrawala3@gmail.com" && user.Password == "admin@123")
                    {
                        return Ok(new { message = "Login Success"});
                    }
                    else
                    {
                        return BadRequest(new { message = "Invalid Credentials" });
                    }
                }

                var data = await _userLoginRepo.login(user);

                if (data == null)
                {
                    Console.WriteLine("User Not Found");
                    return BadRequest(new { message = "User Not Found" });
                }
                else
                {
                    Console.WriteLine("Login Success");
                    Console.WriteLine(data.c_email);

                    return Ok(new { message = "Login Success", data = data });
                }

            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error in Login method of UserAuthController: {ex.Message}");
                return StatusCode(500, new { message = "Internal Server Error" });
            }
        }
        [Route("GetUsers")]
        public async Task<IActionResult> GetUsers()
        {
            try
            {
                List<User_List> temp = await _redisService.GetCachedUsersAsync("users");
                if(temp.Count == 0)
                {
                    temp = _userLoginRepo.GetUsers();
                    _redisService.SetCachedUsersAsync("users", temp);
                }

                return Ok(temp);
            }
            catch(Exception ex)
            {
                Console.WriteLine($"Database Access Error {ex.Message}");
                return BadRequest(new {message=$"{ex.Message}"});
            }
        }

        [HttpPost("assign")]
        public IActionResult AssignTask([FromBody] AssignTaskDto taskDto)
        {
            if (taskDto == null || taskDto.UserIds == null || taskDto.UserIds.Count == 0 ||
                string.IsNullOrEmpty(taskDto.Title) || string.IsNullOrEmpty(taskDto.Description) ||
                taskDto.StartDate == default || taskDto.EndDate == default)
            {
                Console.WriteLine("Error Occured");
                return BadRequest(new { message = "Invalid input data." });
            }

            string connString = "Server=cipg01;Port=5432;Database=Group_C_2025;User Id=postgres;Password=123456;";

            try
            {
                using (var conn = new NpgsqlConnection(connString))
                {
                    conn.Open();
                    using (var cmd = new NpgsqlCommand())
                    {
                        cmd.Connection = conn;

                        // Use bulk insert instead of looping over each user
                        var insertQuery = "INSERT INTO t_task (c_uid, c_task_title, c_description, c_start_date, c_end_date) VALUES ";
                        var values = new List<string>();
                        var parameters = new List<NpgsqlParameter>();

                        for (int i = 0; i < taskDto.UserIds.Count; i++)
                        {
                            values.Add($"(@userid{i}, @title, @description, @startDate, @endDate)");
                            parameters.Add(new NpgsqlParameter($"@userid{i}", taskDto.UserIds[i]));
                        }

                        cmd.CommandText = insertQuery + string.Join(", ", values);
                        cmd.Parameters.AddRange(parameters.ToArray());
                        cmd.Parameters.AddWithValue("@title", taskDto.Title);
                        cmd.Parameters.AddWithValue("@description", taskDto.Description);
                        cmd.Parameters.AddWithValue("@startDate", taskDto.StartDate);
                        cmd.Parameters.AddWithValue("@endDate", taskDto.EndDate);

                        cmd.ExecuteNonQuery();
                    }
                }

                return Ok(new { message = "Task assigned successfully!" });
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Database Error: {ex.Message}");
                return StatusCode(500, new { message = "Internal Server Error" });
            }
        }
    }
}
