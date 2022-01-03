using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bourque.GridUpload.Data.EntityFramework.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GRID_UPLOAD_ENTITY",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    entity_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    validate_url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    process_url = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRID_UPLOAD_ENTITY", x => x.id);
                });

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

            migrationBuilder.CreateTable(
                name: "GRID_UPLOAD_TEMPLATE_ENTITY",
                columns: table => new
                {
                    TemplateId = table.Column<int>(type: "int", nullable: false),
                    EntityId = table.Column<int>(type: "int", nullable: false),
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRID_UPLOAD_TEMPLATE_ENTITY", x => x.id);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_TEMPLATE_ENTITY_GRID_UPLOAD_ENTITY_EntityId",
                        column: x => x.EntityId,
                        principalTable: "GRID_UPLOAD_ENTITY",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_TEMPLATE_ENTITY_GRID_UPLOAD_TEMPLATE_TemplateId",
                        column: x => x.TemplateId,
                        principalTable: "GRID_UPLOAD_TEMPLATE",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_TEMPLATE_ENTITY_EntityId",
                table: "GRID_UPLOAD_TEMPLATE_ENTITY",
                column: "EntityId");

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_TEMPLATE_ENTITY_TemplateId",
                table: "GRID_UPLOAD_TEMPLATE_ENTITY",
                column: "TemplateId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_TEMPLATE_ENTITY");

            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_ENTITY");

            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_TEMPLATE");
        }
    }
}
