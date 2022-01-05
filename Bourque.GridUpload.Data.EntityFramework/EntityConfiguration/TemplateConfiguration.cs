using System;
using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bourque.GridUpload.Data.EntityFramework.EntityConfiguration;

public class TemplateConfiguration : IEntityTypeConfiguration<Template>
{
    public void Configure(EntityTypeBuilder<Template> builder)
    {
        builder.Property(e => e.Id)
            .ValueGeneratedOnAdd()
            .HasColumnName("id")
            .UseIdentityColumn();

        builder.Property(e => e.TemplateDisplayName).HasColumnName("template_display_name");

        builder.Property(e => e.TemplateOwner).HasColumnName("template_owner");

        builder.HasKey(e => e.Id);

        builder.ToTable("GRID_UPLOAD_TEMPLATE");

        builder.HasMany(e => e.Columns)
            .WithOne(e => e.Template)
            .HasForeignKey(e => e.TemplateId);
    }
}