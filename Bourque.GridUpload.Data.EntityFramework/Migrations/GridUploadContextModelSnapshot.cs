﻿// <auto-generated />
using Bourque.GridUpload.Data.EntityFramework.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Bourque.GridUpload.Data.EntityFramework.Migrations
{
    [DbContext(typeof(GridUploadContext))]
    partial class GridUploadContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.1")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("Bourque.GridUpload.Data.Models.DbModels.Template", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("id");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<string>("TemplateDisplayName")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("template_display_name");

                    b.Property<string>("TemplateOwner")
                        .HasColumnType("nvarchar(max)")
                        .HasColumnName("template_owner");

                    b.HasKey("Id");

                    b.ToTable("GRID_UPLOAD_TEMPLATE", (string)null);
                });
#pragma warning restore 612, 618
        }
    }
}
