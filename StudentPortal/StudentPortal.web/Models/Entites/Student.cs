using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace StudentPortal.web.Models.Entites
{
    public class Student
    {
        public Guid Id { get; set; } //auto generated
        public string Name { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public bool Subscribed { get; set; }


    }
}
