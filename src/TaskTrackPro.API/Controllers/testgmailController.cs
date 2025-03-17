using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TaskTrackPro.Repositories.Servcies;

namespace MyApp.Namespace
{
    [Route("api/[controller]")]
    [ApiController]
    public class testgmailController : ControllerBase
    {
        private readonly IEmailService _emailService;

        public testgmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }

        [HttpGet("test")]
        public async Task<IActionResult> TestEmail()
        {
            try
            {
                await _emailService.SendEmailAsync("harnish.dhimar@gmail.com", "Test Email", "This is a test email.");
                return Ok("Email sent successfully.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error: {ex.Message}");
            }
        }
    }
}
