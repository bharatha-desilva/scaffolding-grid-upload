using System;
using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bourque.GridUpload.Data.EntityFramework.EntityConfiguration;

public class TemplateEntityConfiguration : IEntityTypeConfiguration<TemplateEntity>
{
    public void Configure(EntityTypeBuilder<TemplateEntity> builder)
    {
        builder.Property(e => e.Id)
            .ValueGeneratedOnAdd()
            .HasColumnName("id")
            .UseIdentityColumn();
            
        builder.Property(e => e.EntityId)
            .HasColumnName("entity_id")
            .HasColumnOrder(0);
            
        builder.Property(e => e.TemplateId)
            .HasColumnName("template_id")
            .HasColumnOrder(1);
            
        builder.HasKey(e => e.Id);
        builder.HasIndex(e => e.EntityId);
        builder.HasIndex(e => e.TemplateId);
        
        builder.ToTable("GRID_UPLOAD_TEMPLATE_ENTITY");
        
        builder.HasOne(e => e.Entity)
            .WithMany()
            .HasForeignKey("EntityId")
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
            
        builder.HasOne(e => e.Template)
            .WithMany()
            .HasForeignKey("TemplateId")
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();
            
        builder.Navigation(e => e.Entity);
        builder.Navigation(e => e.Template);
    }
}