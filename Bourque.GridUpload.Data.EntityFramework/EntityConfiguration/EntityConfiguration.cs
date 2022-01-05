using System;
using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bourque.GridUpload.Data.EntityFramework.EntityConfiguration;

public class EntityConfiguration : IEntityTypeConfiguration<Entity>
{
    public void Configure(EntityTypeBuilder<Entity> builder)
    {
        builder.Property(e => e.Id).HasColumnName("id")
            .ValueGeneratedOnAdd()
            .UseIdentityColumn();
        
        builder.Property(e => e.EntityName).HasColumnName("entity_name").IsRequired();
        builder.Property(e => e.ProcessURL).HasColumnName("process_url").IsRequired();
        builder.Property(e => e.ValidateURL).HasColumnName("validate_url").IsRequired();

        builder.HasKey(e => e.Id);
            
        builder.ToTable("GRID_UPLOAD_ENTITY");
    }
}