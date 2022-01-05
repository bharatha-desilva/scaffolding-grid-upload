using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bourque.GridUpload.Data.EntityFramework.EntityConfiguration;

public class ColumnMetadataApplicationConfiguration : IEntityTypeConfiguration<ColumnMetadataApplication>
{
    public void Configure(EntityTypeBuilder<ColumnMetadataApplication> builder)
    {
        builder.Property(e => e.Id)
            .ValueGeneratedOnAdd()
            .HasColumnName("id");

        builder.Property(e => e.ApplicationId)
            .HasColumnName("application_id")
            .HasColumnOrder(0);

        builder.Property(e => e.ColumnMetadataId)
            .HasColumnName("column_metadata_id")
            .HasColumnOrder(1);

        builder.HasKey(e => e.Id);

        builder.HasIndex(e => e.ApplicationId);

        builder.HasIndex(e => e.ColumnMetadataId);

        builder.ToTable("GRID_UPLOAD_COLUMN_METADATA_APPLICATION");

        builder.HasOne(e => e.ApplicationCode)
            .WithMany()
            .HasForeignKey(e => e.ApplicationId);

        builder.HasOne(e => e.ColumnMetadata)
            .WithMany()
            .HasForeignKey(e => e.ColumnMetadataId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Navigation(e => e.ApplicationCode);
        builder.Navigation(e => e.ColumnMetadata);
    }
}