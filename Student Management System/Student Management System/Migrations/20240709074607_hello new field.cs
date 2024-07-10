using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Student_Management_System.Migrations
{
    /// <inheritdoc />
    public partial class hellonewfield : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Role",
                table: "Students",
                type: "longtext",
                nullable: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Role",
                table: "Students");
        }
    }
}
