using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bourque.GridUpload.Data.EntityFramework.EntityConfiguration;

public class ApplicationCodeConfiguration : IEntityTypeConfiguration<ApplicationCode>
{
    public void Configure(EntityTypeBuilder<ApplicationCode> builder)
    {
        builder.Property(e => e.Id)
            .ValueGeneratedOnAdd()
            .HasColumnName("id");
        
        builder.Property(e => e.ApplicationName).HasColumnName("application_name");

        builder.HasKey(e => e.Id);

        builder.ToTable("GRID_UPLOAD_APPLICATION_CODE");
    }
}