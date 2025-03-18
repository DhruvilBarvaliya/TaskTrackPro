using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskTrackPro.Core.Models;

namespace TaskTrackPro.Repositories.Interfaces
{
    public interface IUserInterface
    {
        Task<int> Add(t_User userData);
        Task<t_User> Login(t_Login user);
        Task<t_User> GetUser(int userid);
        Task<int> ChangePassword(t_User userData);
        Task<int> UpdateProfile(t_User userData);

        Task<t_User> GetUserByEmail(string email);
    }
}