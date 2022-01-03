using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bourque.GridUpload.Data.EntityFramework.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GRID_UPLOAD_TEMPLATE",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    template_display_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    template_owner = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRID_UPLOAD_TEMPLATE", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_TEMPLATE");
        }
    }
}
