using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Bourque.GridUpload.Data.EntityFramework.EntityConfiguration;

public class ColumnMetadataConfiguration : IEntityTypeConfiguration<ColumnMetadata>
{
    public void Configure(EntityTypeBuilder<ColumnMetadata> builder)
    {
        builder.Property(e => e.Id).ValueGeneratedOnAdd().HasColumnName("id");
        
        builder.Property<string>("ColumnCellName").HasColumnName("column_cell_name").IsRequired();

        builder.Property<string>("ColumnDataType").HasColumnName("column_data_type").IsRequired();

        builder.Property<string>("ColumnDisplayName").HasColumnName("column_display_name").IsRequired();

        builder.HasKey(e => e.Id);

        builder.ToTable("GRID_UPLOAD_COLUMN_METADATA");

        builder.HasMany(e => e.ValidationRules)
            .WithOne(e => e.ColumnMetadata)
            .HasForeignKey(e => e.ColumnMetadataId);

        builder.Navigation(e => e.ValidationRules).AutoInclude();
    }
}