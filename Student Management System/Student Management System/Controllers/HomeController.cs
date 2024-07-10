using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Student_Management_System.Data;
using Student_Management_System.Models;
using Student_Management_System.Models.Entities;
using System.Diagnostics;

namespace Student_Management_System.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationContext _context;
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger, ApplicationContext context)
        {
            _logger = logger;
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Login()
        {
            return View();
        }

            [HttpPost]
        public IActionResult Login(String EmailId, String MobileNo)
        {

            var student = _context.Students.ToList();
            
            foreach (var Stud in student)
            {
                if ((Stud.EmailId.Equals(EmailId)) && (Stud.MobileNo.Equals(MobileNo)))
                {
                    if (Stud.Role.Equals("Student"))
                    {
                        return RedirectToAction("Index", "Student");
                    }
                    return RedirectToAction("Index","Admin");
                }
            }
                return View("Index","Home");
        }
        
    }
}
