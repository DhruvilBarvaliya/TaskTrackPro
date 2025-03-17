using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TaskTrackPro.Core.Models;
using TaskTrackPro.Core.Repositories.Commands.Interfaces;

namespace TaskTrackPro.API.Controllers
{
    [ApiController]
    // [Route("api/[controller]")]
    [Route("api/task")]

    public class TaskController : ControllerBase
    {
        private readonly ITaskInterface _taskRepository;

        public TaskController(ITaskInterface taskRepository)
        {
            _taskRepository = taskRepository;
        }

        // POST: api/task/add
        [HttpPost("add")]
        public async Task<IActionResult> AddTask([FromBody] t_task task)
        {
            if (task == null)
            {
                return BadRequest("Task data is required.");
            }

            int result = await _taskRepository.Add(task);

            if (result > 0)
            {
                return Ok(new { message = "Task added successfully!" });
            }
            else
            {
                return StatusCode(500, "Failed to add task.");
            }
        }


        [HttpGet("users")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _taskRepository.GetAllUsers();
            return Ok(users);
        }


        [HttpGet("approved-users")]
        public async Task<IActionResult> GetApprovedUsernames()
        {
            var usernames = await _taskRepository.GetApprovedUsernames();
            return Ok(usernames);
        }


        [HttpPut("approve/{userId}")]
        public async Task<IActionResult> ApproveUser(int userId)
        {
            bool isUpdated = await _taskRepository.ApproveUser(userId);

            if (isUpdated)
            {
                return Ok(new { message = "User approved successfully!" });
            }
            else
            {
                return NotFound("User not found or update failed.");
            }
        }


        [HttpPut("update")]
        public async Task<IActionResult> UpdateTask([FromBody] t_task task)
        {
            if (task == null || task.c_tid == 0)
            {
                return BadRequest("Invalid task data.");
            }

            int result = await _taskRepository.Update(task);

            if (result > 0)
            {
                return Ok(new { message = "Task updated successfully!" });
            }
            else
            {
                return NotFound("Task not found or update failed.");
            }
        }
        [HttpDelete("delete/{taskId}")]
        public async Task<IActionResult> DeleteTask(int taskId)
        {
            if (taskId == 0)
            {
                return BadRequest("Invalid task ID.");
            }

            int result = await _taskRepository.Delete(taskId);

            if (result > 0)
            {
                return Ok(new { message = "Task deleted successfully!" });
            }
            else
            {
                return NotFound("Task not found or delete failed.");
            }
        }
    }
}
