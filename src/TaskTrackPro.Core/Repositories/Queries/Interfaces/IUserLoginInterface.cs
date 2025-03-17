using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskTrackPro.Core.Models;

namespace TaskTrackPro.Core.Repositories.Commands.Interfaces
{
    public interface IUserLoginInterface
    {
        Task<t_User> login(t_Login login);
        public List<User_List> GetUsers();
    }
}