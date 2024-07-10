using Microsoft.EntityFrameworkCore;
using Student_Management_System.Models.Entities;

namespace Student_Management_System.Data
{
    public class ApplicationContext : DbContext
    {
        

        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options) 
        {
            
        }

        public DbSet<Student> Students { get; set; }
    }
}
