using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskTrackPro.Core.Models
{
    public class t_ChangePassword
    {
    public int c_uid { get; set; }
    public string OldPassword { get; set; }
    public string NewPassword { get; set; }
    }
}