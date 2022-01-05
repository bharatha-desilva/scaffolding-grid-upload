using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bourque.GridUpload.Data.EntityFramework.EntityConfiguration;

public class ColumnValidationRuleConfiguration : IEntityTypeConfiguration<ColumnValidationRule>
{
    public void Configure(EntityTypeBuilder<ColumnValidationRule> builder)
    {
        builder.Property(e => e.Id)
            .ValueGeneratedOnAdd()
            .HasColumnName("id");
        
        builder.Property(e => e.ColumnMetadataId)
            .HasColumnName("column_metadata_id");

        builder.Property(e => e.Type).HasColumnName("type").IsRequired();
        
        builder.Property(e => e.Pattern).HasColumnName("pattern");
        
        builder.Property(e => e.Message).HasColumnName("message");

        builder.HasKey(e => e.Id);

        builder.HasIndex(e => e.ColumnMetadataId);
        
        builder.ToTable("GRID_UPLOAD_COLUMN_VALIDATION_RULE");    
        
        builder.HasOne(e => e.ColumnMetadata)
            .WithMany(e => e.ValidationRules)
            .HasForeignKey(e => e.ColumnMetadataId)
            .OnDelete(DeleteBehavior.Cascade)
            .IsRequired();

        builder.Navigation(e => e.ColumnMetadata);
    }
}