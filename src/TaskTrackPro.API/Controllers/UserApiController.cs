using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskTrackPro.Repositories.Interfaces;
using TaskTrackPro.Core.Models;
using TaskTrackPro.Repositories.Servcies;

namespace TaskTrackPro.API
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserApiController : ControllerBase
    {
        private readonly IUserInterface _user;
        private readonly IConfiguration myconfig;
        private readonly IEmailService _emailService;
        public UserApiController(IConfiguration config, IEmailService emailService, IUserInterface user)
        {
            myconfig = config;
            _user = user;
            _emailService = emailService;
        }
        [HttpPost]
        [Route("/Register")]
        public async Task<IActionResult> Register([FromForm] t_User user)
        {
            if (user.c_profile != null && user.c_profile.Length > 0)
            {
                var fileName = user.c_email + Path.GetExtension(user.c_profile.FileName);
                var filePath = Path.Combine("../TaskTrackPro.MVC/wwwroot/profile_images", fileName);
                user.c_profilepicture = fileName;
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    user.c_profile.CopyTo(stream);
                }
                System.Console.WriteLine("File upload success");
            }
            Console.WriteLine("user: " + user.c_uname);
            var status = await _user.Add(user);
            if (status == 1)
            {
                // Send an email to the admin
                var adminEmail = "ritadehrawala3@gmail.com";
                var subject = "New User Registration";
                var body = $"A new user has registered.\n\nName: {user.c_uname}\nEmail: {user.c_email}";

                await _emailService.SendEmailAsync(adminEmail, subject, body);
                return Ok(new { success = true, message = "User Registered" });
            }
            else if (status == 0)
            {
                return Ok(new { success = false, message = "User Already Exist" });
            }
            else
            {
                return BadRequest(new
                {
                    success = false,
                    message = "There was some error while Registration"
                });
            }
        }
    // [HttpPost]
    //     [Route("Login")]
    //     public async Task<IActionResult> Login([FromForm] t_Login user)
    //     {
    //         try
    //         {
    //             if (!ModelState.IsValid) 
    //             {
    //                 return BadRequest(new { message = "All Fields are Required" });
    //             }

    //             if(user.role == "Admin")
    //             {
    //                 if(user.Email == "ritadehrawala3@gmail.com" && user.Password == "admin@123")
    //                 {
    //                     return Ok(new { message = "Login Success"});
    //                 }
    //                 else
    //                 {
    //                     return BadRequest(new { message = "Invalid Credentials" });
    //                 }
    //             }

    //             var data = await _user.Login(user);
    //             HttpContext.Session.SetInt32("c_uid", data.c_uid);
    //             if (data == null)
    //             {
    //                 Console.WriteLine("User Not Found");
    //                 return BadRequest(new { message = "User Not Found" });
    //             }
    //             else
    //             {
    //                 Console.WriteLine("Login Success");
    //                 Console.WriteLine(data.c_email);

    //                 return Ok(new { message = "Login Success", data = data });
    //             }

    //         }
    //         catch (Exception ex)
    //         {
    //             Console.WriteLine($"Error in Login method of UserAuthController: {ex.Message}");
    //             return StatusCode(500, new { message = "Internal Server Error" });
    //         }
    //     }


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

        // 🔹 Admin login logic
        if (user.role == "Admin")
        {
            if (user.Email == "ritadehrawala3@gmail.com" && user.Password == "admin@123")
            {
                return Ok(new { message = "Login Success" });
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
        
        Console.WriteLine("Login Success");
        Console.WriteLine($"User Email: {data.c_email}");

        return Ok(new { message = "Login Success", data = data });
    }
    catch (Exception ex)
    {
        Console.WriteLine($"Error in Login method of UserAuthController: {ex}");
        return StatusCode(500, new { message = "Internal Server Error", error = ex.Message });
    }
}



        // [Route("GetUsers")]
        // public async Task<IActionResult> GetUsers()
        // {
        //     try
        //     {
        //         List<User_List> temp = await _redisService.GetCachedUsersAsync("users");
        //         if(temp.Count == 0)
        //         {
        //             temp = _userLoginRepo.GetUsers();
        //             _redisService.SetCachedUsersAsync("users", temp);
        //         }

        //         return Ok(temp);
        //     }
        //     catch(Exception ex)
        //     {
        //         Console.WriteLine($"Database Access Error {ex.Message}");
        //         return BadRequest(new {message=$"{ex.Message}"});
        //     }
        // }

        [HttpPut]
        [Route("UpdateProfile")]
        public async Task<IActionResult> UpdateProfile([FromForm] t_UserUpdate model)
        {
            var userId = HttpContext.Session.GetInt32("c_uid");
            if (userId == null) return Unauthorized(new { success = false, message = "User not logged in." });

            var user = await _user.GetUser(userId.Value);
            if (user == null) return NotFound(new { success = false, message = "User not found." });

            user.c_uname = model.c_uname;
            user.c_email = model.c_email;
            user.c_gender = model.c_gender;

            if (model.c_profile != null && model.c_profile.Length > 0)
            {
                var fileName = user.c_email + Path.GetExtension(model.c_profile.FileName);
                var filePath = Path.Combine("../TaskTrackPro.MVC/wwwroot/profile_images", fileName);
                user.c_profilepicture = fileName;

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await model.c_profile.CopyToAsync(stream);
                }
            }

            var status = await _user.UpdateProfile(user);

            if (status > 0)
                return Ok(new { success = true, message = "Profile updated successfully" });

            return BadRequest(new { success = false, message = "Error updating profile" });
        }

        [HttpPut]
        [Route("ChangePassword")]
        public async Task<IActionResult> ChangePassword([FromForm] t_ChangePassword model)
        {
            var userId = HttpContext.Session.GetInt32("c_uid");
            if (userId == null) return Unauthorized(new { success = false, message = "User not logged in." });

            var user = await _user.GetUser(userId.Value);
            if (user == null) return NotFound(new { success = false, message = "User not found." });

            if (model.OldPassword == null && user.c_password == null && !BCrypt.Net.BCrypt.Verify(model.OldPassword, user.c_password))
            {
               
                return BadRequest(new { success = false, message = "Current password is incorrect" });
            }

            user.c_password = BCrypt.Net.BCrypt.HashPassword(model.NewPassword);
            var status = await _user.ChangePassword(user);

            if (status > 0)
                return Ok(new { success = true, message = "Password changed successfully" });

            return BadRequest(new { success = false, message = "Error changing password" });
        }

        
    
    }
}
