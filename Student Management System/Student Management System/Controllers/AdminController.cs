using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Asn1.Mozilla;
using Student_Management_System.Data;
using Student_Management_System.Models.Entities;

namespace Student_Management_System.Controllers
{
    public class AdminController : Controller
    {
        private readonly ApplicationContext context;

        public AdminController(ApplicationContext context)
        {
            this.context = context;
        }
        public IActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public IActionResult Add()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Add(Student s)
        {
            var student = new Student { 
                Id = s.Id,
                Name = s.Name,
                EmailId = s.EmailId,
                MobileNo = s.MobileNo,
                Address = s.Address,
                Date = s.Date,
                Fees = s.Fees,
                Role = s.Role,
                Status = s.Status
            };
            context.Students.Add(student);
            context.SaveChanges();
            return View("Index");
        }
        [HttpGet]
        public IActionResult List() 
        {
            var student = context.Students.ToList();
            return View(student);
        }
        [HttpGet]
        public IActionResult Edit(int id)
        {
            var student = context.Students.Find(id);
            return View(student);
        }
        [HttpPost]
        public IActionResult Edit(Student s) 
        {
            var student = context.Students.Find(s.Id);
            if(student is not null) 
            {
                student.Name = s.Name;
                student.EmailId = s.EmailId;
                student.MobileNo = s.MobileNo;
                student.Address = s.Address;
                student.Date = s.Date;
                student.Fees = s.Fees;
                student.Status = s.Status;

                context.SaveChanges();
            }
            return RedirectToAction("List", "Admin");
        }
        
        [HttpPost]
        public IActionResult Delete(Student s)
        {
            var student = context.Students.Find(s.Id);
            if(student is null)
            {
                return NotFound();
            }
            context.Students.Remove(student);
            context.SaveChanges();
            return RedirectToAction("List", "Admin");
        }
        [HttpGet]
        public IActionResult Search() 
        {
            var student = context.Students.ToList();

            return View(student);
        }
        [HttpGet]
        public IActionResult Sort()
        {
            var student = context.Students.OrderByDescending(x => x.Name).ToList();
            
            return View(student);
        }
    }
}
