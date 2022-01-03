using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bourque.GridUpload.Data.EntityFramework.Mappers
{
    public static class TemplateEntityMapper
    {
        public static ModelBuilder MapTemplateEntity(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TemplateEntity>( b =>
            {
                b.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int")
                    .HasColumnName("id")
                    .UseIdentityColumn();
                
                b.Property(e => e.EntityId)
                    .HasColumnType("int")
                    .HasColumnOrder(1);

                b.Property(e => e.TemplateId)
                    .HasColumnType("int")
                    .HasColumnOrder(0);

                b.HasKey(e => e.Id);

                b.HasIndex(e => e.EntityId);

                b.HasIndex(e => e.TemplateId);

                b.ToTable("GRID_UPLOAD_TEMPLATE_ENTITY");
            });

            modelBuilder.Entity<TemplateEntity>( b =>
            {
                b.HasOne(e => e.Entity)
                    .WithMany()
                    .HasForeignKey("EntityId")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();

                b.HasOne(e => e.Template)
                    .WithMany()
                    .HasForeignKey("TemplateId")
                    .OnDelete(DeleteBehavior.Cascade)
                    .IsRequired();

                b.Navigation(e => e.Entity);

                b.Navigation(e => e.Template);
            });
            return modelBuilder;
        }
    }
}
