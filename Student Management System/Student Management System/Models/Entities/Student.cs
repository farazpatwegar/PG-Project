namespace Student_Management_System.Models.Entities
{
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string EmailId { get; set; }
        public string MobileNo { get; set; }
        public string Address { get; set; }
        public DateTime Date { get; set; }
        public double Fees { get; set; }
        public bool Status { get; set; }
        public string Role { get; set; }
    }
}
