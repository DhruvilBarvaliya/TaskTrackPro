using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Repositories.Models;
using TaskTrackPro.Core.Models;

namespace TaskTrackPro.Core.Repositories.Commands.Interfaces
{
    public interface ITaskInterface
    {
        Task<int> Add(t_task taskData);
        Task<int> Update(t_task taskData);
        Task<int> Delete(int c_TaskID);
        Task<List<t_User>> GetAllUsers();  // New Method
        Task<List<string>> GetApprovedUsernames();
        Task<bool> ApproveUser(int userId);
    }
}
