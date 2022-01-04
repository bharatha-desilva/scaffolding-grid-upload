using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bourque.GridUpload.Data.EntityFramework.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "GRID_UPLOAD_APPLICATION_CODE",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    application_name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRID_UPLOAD_APPLICATION_CODE", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "GRID_UPLOAD_COLUMN_METADATA",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    column_display_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    column_cell_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    column_data_type = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRID_UPLOAD_COLUMN_METADATA", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "GRID_UPLOAD_ENTITY",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    entity_name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    validate_url = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    process_url = table.Column<string>(type: "nvarchar(max)", nullable: false)
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
                name: "GRID_UPLOAD_COLUMN_METADATA_APPLICATION",
                columns: table => new
                {
                    application_id = table.Column<int>(type: "int", nullable: false),
                    column_metadata_id = table.Column<int>(type: "int", nullable: false),
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRID_UPLOAD_COLUMN_METADATA_APPLICATION", x => x.id);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_COLUMN_METADATA_APPLICATION_GRID_UPLOAD_APPLICATION_CODE_application_id",
                        column: x => x.application_id,
                        principalTable: "GRID_UPLOAD_APPLICATION_CODE",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_COLUMN_METADATA_APPLICATION_GRID_UPLOAD_COLUMN_METADATA_column_metadata_id",
                        column: x => x.column_metadata_id,
                        principalTable: "GRID_UPLOAD_COLUMN_METADATA",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GRID_UPLOAD_TEMPLATE_APPLICATION",
                columns: table => new
                {
                    application_id = table.Column<int>(type: "int", nullable: false),
                    template_id = table.Column<int>(type: "int", nullable: false),
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRID_UPLOAD_TEMPLATE_APPLICATION", x => x.id);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_TEMPLATE_APPLICATION_GRID_UPLOAD_APPLICATION_CODE_application_id",
                        column: x => x.application_id,
                        principalTable: "GRID_UPLOAD_APPLICATION_CODE",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_TEMPLATE_APPLICATION_GRID_UPLOAD_TEMPLATE_template_id",
                        column: x => x.template_id,
                        principalTable: "GRID_UPLOAD_TEMPLATE",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GRID_UPLOAD_TEMPLATE_COLUMN",
                columns: table => new
                {
                    template_id = table.Column<int>(type: "int", nullable: false),
                    column_metadata_id = table.Column<int>(type: "int", nullable: false),
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    position = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRID_UPLOAD_TEMPLATE_COLUMN", x => x.id);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_TEMPLATE_COLUMN_GRID_UPLOAD_COLUMN_METADATA_column_metadata_id",
                        column: x => x.column_metadata_id,
                        principalTable: "GRID_UPLOAD_COLUMN_METADATA",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_TEMPLATE_COLUMN_GRID_UPLOAD_TEMPLATE_template_id",
                        column: x => x.template_id,
                        principalTable: "GRID_UPLOAD_TEMPLATE",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GRID_UPLOAD_TEMPLATE_ENTITY",
                columns: table => new
                {
                    entity_id = table.Column<int>(type: "int", nullable: false),
                    template_id = table.Column<int>(type: "int", nullable: false),
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GRID_UPLOAD_TEMPLATE_ENTITY", x => x.id);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_TEMPLATE_ENTITY_GRID_UPLOAD_ENTITY_entity_id",
                        column: x => x.entity_id,
                        principalTable: "GRID_UPLOAD_ENTITY",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_GRID_UPLOAD_TEMPLATE_ENTITY_GRID_UPLOAD_TEMPLATE_template_id",
                        column: x => x.template_id,
                        principalTable: "GRID_UPLOAD_TEMPLATE",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_COLUMN_METADATA_APPLICATION_application_id",
                table: "GRID_UPLOAD_COLUMN_METADATA_APPLICATION",
                column: "application_id");

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_COLUMN_METADATA_APPLICATION_column_metadata_id",
                table: "GRID_UPLOAD_COLUMN_METADATA_APPLICATION",
                column: "column_metadata_id");

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_TEMPLATE_APPLICATION_application_id",
                table: "GRID_UPLOAD_TEMPLATE_APPLICATION",
                column: "application_id");

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_TEMPLATE_APPLICATION_template_id",
                table: "GRID_UPLOAD_TEMPLATE_APPLICATION",
                column: "template_id");

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_TEMPLATE_COLUMN_column_metadata_id",
                table: "GRID_UPLOAD_TEMPLATE_COLUMN",
                column: "column_metadata_id");

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_TEMPLATE_COLUMN_template_id",
                table: "GRID_UPLOAD_TEMPLATE_COLUMN",
                column: "template_id");

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_TEMPLATE_ENTITY_entity_id",
                table: "GRID_UPLOAD_TEMPLATE_ENTITY",
                column: "entity_id");

            migrationBuilder.CreateIndex(
                name: "IX_GRID_UPLOAD_TEMPLATE_ENTITY_template_id",
                table: "GRID_UPLOAD_TEMPLATE_ENTITY",
                column: "template_id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_COLUMN_METADATA_APPLICATION");

            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_TEMPLATE_APPLICATION");

            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_TEMPLATE_COLUMN");

            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_TEMPLATE_ENTITY");

            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_APPLICATION_CODE");

            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_COLUMN_METADATA");

            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_ENTITY");

            migrationBuilder.DropTable(
                name: "GRID_UPLOAD_TEMPLATE");
        }
    }
}
