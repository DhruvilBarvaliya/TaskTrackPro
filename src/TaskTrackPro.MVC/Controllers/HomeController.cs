using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TaskTrackPro.MVC.Models;

namespace TaskTrackPro.MVC.Controllers;

public class HomeController : Controller
{


    public IActionResult Login()
    {
        return View();
    }

    public IActionResult Register()
    {
        return View();
    }

    public IActionResult Logout()
    {
        return View();
    }

    
}
