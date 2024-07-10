using Microsoft.AspNetCore.Mvc;

namespace Student_Management_System.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return View("Studentview");
        }
        [HttpGet]
        public IActionResult Details() 
        {
            return View();
        }
    }
}
