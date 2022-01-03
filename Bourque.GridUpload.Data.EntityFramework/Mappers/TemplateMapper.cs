using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bourque.GridUpload.Data.EntityFramework.Mappers
{
    public static class TemplateMapper
    {
        public static ModelBuilder MapTemplate(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Template>( b =>
            {
                b.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnName("id")
                    .UseIdentityColumn();

                b.Property(e => e.TemplateDisplayName)
                    .HasColumnType("nvarchar(max)")
                    .HasColumnName("template_display_name");

                b.Property(e => e.TemplateOwner)
                    .HasColumnType("nvarchar(max)")
                    .HasColumnName("template_owner");

                b.HasKey(e => e.Id);

                b.ToTable("GRID_UPLOAD_TEMPLATE");
            });
            return modelBuilder;
        }
    }
}
