using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bourque.GridUpload.Data.EntityFramework.EntityConfiguration;

public class TemplateColumnConfiguration : IEntityTypeConfiguration<TemplateColumn>
{
    public void Configure(EntityTypeBuilder<TemplateColumn> builder)
    {
        builder.Property(e => e.Id)
            .ValueGeneratedOnAdd()
            .HasColumnName("id");
        
        builder.Property(e => e.ColumnMetadataId)
            .HasColumnName("column_metadata_id")
            .HasColumnOrder(1);

        builder.Property(e => e.Position).HasColumnName("position");

        builder.Property(e => e.TemplateId)
            .HasColumnName("template_id")
            .HasColumnOrder(0);

        builder.HasKey(e => e.Id);

        builder.HasIndex(e => e.ColumnMetadataId);

        builder.HasIndex(e => e.TemplateId);

        builder.ToTable("GRID_UPLOAD_TEMPLATE_COLUMN");    
        
        builder.HasOne(e => e.ColumnMetadata)
            .WithMany()
            .HasForeignKey(e => e.ColumnMetadataId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.HasOne(e => e.Template)
            .WithMany()
            .HasForeignKey(e => e.TemplateId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Navigation(e => e.ColumnMetadata).AutoInclude();

        builder.Navigation(e => e.Template);
    }
}