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

        public string c_profilepicture { get; set; }

        public IFormFile? c_profile { get; set; }

        public bool c_approve_status { get ; set; }
    }
}