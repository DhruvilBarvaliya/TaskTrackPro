using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TaskTrackPro.Repositories.Interfaces;
using TaskTrackPro.Core.Models;

namespace TaskTrackPro.API
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserApiController : ControllerBase
    {
        private readonly IUserInterface _user;
        private readonly IConfiguration myconfig;
        public UserApiController(IConfiguration config, IUserInterface user)
        {
            myconfig = config;
            _user = user;
        }
        [HttpPost]
        [Route("/Register")]
        public async Task<IActionResult> Register([FromForm] t_User user)
        {
            if (user.c_profile != null && user.c_profile.Length > 0)
            {
                var fileName = user.c_email + Path.GetExtension(
                 user.c_profile.FileName);
                var filePath = Path.Combine("../TaskTrackPro.MVC/wwwroot/profile_images", fileName);
                user.c_profilepicture = fileName;
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    user.c_profile.CopyTo(stream);
                }
            }
            Console.WriteLine("user: " + user.c_uname);
            var status = await _user.Add(user);
            if (status == 1)
            {
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

    }
}