using Microsoft.EntityFrameworkCore;
using Student_Management_System.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();
var connection = builder.Configuration.GetConnectionString("StudentPortalConnection");
builder.Services.AddDbContext<ApplicationContext>(options => 
options.UseMySQL(connection));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
