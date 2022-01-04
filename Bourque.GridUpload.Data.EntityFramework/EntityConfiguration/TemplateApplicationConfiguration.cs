using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bourque.GridUpload.Data.EntityFramework.EntityConfiguration;

public class TemplateApplicationConfiguration : IEntityTypeConfiguration<TemplateApplication>
{
    public void Configure(EntityTypeBuilder<TemplateApplication> builder)
    {
        builder.Property(e => e.Id)
            .ValueGeneratedOnAdd()
            .HasColumnName("id");
        
        builder.Property(e => e.ApplicationId)
            .HasColumnName("application_id")
            .HasColumnOrder(0);

        builder.Property(e => e.TemplateId)
            .HasColumnName("template_id")
            .HasColumnOrder(1);

        builder.HasKey(e => e.Id);

        builder.HasIndex(e => e.ApplicationId);

        builder.HasIndex(e => e.TemplateId);

        builder.ToTable("GRID_UPLOAD_TEMPLATE_APPLICATION");
        
        builder.HasOne(e => e.ApplicationCode)
            .WithMany()
            .HasForeignKey(e => e.ApplicationId);

        builder.HasOne(e => e.Template)
            .WithMany()
            .HasForeignKey(e => e.TemplateId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Navigation(e => e.ApplicationCode);

        builder.Navigation(e => e.Template);
    }
}