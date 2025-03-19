using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace TaskTrackPro.MVC.Controllers
{
    public class UserController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Task()
        {
            return View();
        }
        public IActionResult Messages()
        {
            return View();
        }
        public IActionResult Settings()
        {
            return View();
        }
    }
}