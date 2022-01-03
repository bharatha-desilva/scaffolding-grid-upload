using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bourque.GridUpload.Data.EntityFramework.Mappers
{
    public static class EntityMapper
    {
        public static ModelBuilder MapEntity(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Entity>(b =>
            {
                b.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int")
                    .HasColumnName("id")
                    .UseIdentityColumn();
                
                b.Property(e => e.EntityName)
                    .HasColumnType("nvarchar(max)")
                    .HasColumnName("entity_name");

                b.Property(e => e.ProcessURL)
                    .HasColumnType("nvarchar(max)")
                    .HasColumnName("process_url");

                b.Property(e => e.ValidateURL)
                    .HasColumnType("nvarchar(max)")
                    .HasColumnName("validate_url");

                b.HasKey(e => e.Id);

                b.ToTable("GRID_UPLOAD_ENTITY");
            });
            return modelBuilder;
        }
    }
}
