using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskTrackPro.Core.Models;

namespace TaskTrackPro.Core.Repositories.Commands.Interfaces
{
    public interface IUserInterface 
    {
        Task<int> Add(t_User userData);
        Task<t_User> Login(Login user);
        Task<t_User> GetUser(int userid);
        Task<int> ChangePassword(t_User userData);
        Task<int> UpdateProfile(t_UserUpdate userData);
        Task<t_User> GetUserByEmail(string email);
        Task<List<t_User>> LoadUsers();

    }
}