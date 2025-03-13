using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace TaskTrackPro.Core.Models
{
    public class t_User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int c_uid { get; set; }

        public string c_uname { get; set; }

        public string c_email { get; set; }

        public string c_password { get; set; }

        public string c_cnf_password { get; set; }

        public string c_gender { get; set; }

        public string? c_profilepicture { get; set; }

        public IFormFile? c_profile { get; set; }
    }

    public class Login
    {
        [StringLength(100)]
        [Required(ErrorMessage = "Email is required.")]
        [EmailAddress(ErrorMessage = "Invalid email format.")]
        public string c_email { get; set; }

        [StringLength(100)]
        [Required(ErrorMessage = "Password is required.")]
        public string c_password { get; set; }
    }

    public class EditProfile
    {
        [StringLength(100)]
        [Required(ErrorMessage = "Name is required.")]
        public string c_uname { get; set; }

        public int c_uid { get; set; }

        [StringLength(100)]
        [Required(ErrorMessage = "Email is required.")]
        public string c_email { get; set; }

        [StringLength(100)]
        [Required(ErrorMessage = "Profile is required.")]
        public string profile_image { get; set; }
        public IFormFile? ProfileImage { get; set; }
    }
}