using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http;

namespace TaskTrackPro.Core.Models
{
    public class t_UserUpdate
    {
        [Required]
        public string c_uname { get; set; }

        [Required]
        [EmailAddress]
        public string c_email { get; set; }

        public string c_gender { get; set; }

        public string c_profilepicture { get; set; }

        public IFormFile? c_profile { get; set; } // For profile picture upload
    }
}
