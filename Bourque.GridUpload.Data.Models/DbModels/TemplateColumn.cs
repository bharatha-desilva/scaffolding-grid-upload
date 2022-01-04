using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bourque.GridUpload.Data.Models.DbModels;

[Table("GRID_UPLOAD_TEMPLATE_COLUMN")]
public class TemplateColumn
{
    [Key] 
    [Column("id")] 
    public int Id { get; set; }

    [Column("position")] 
    public int Position { get; set; }

    [ForeignKey("Template")]
    [Column("template_id", Order = 0)]
    public int TemplateId { get; set; }

    [ForeignKey("ColumnMetadata")]
    [Column("column_metadata_id", Order = 1)]
    public int ColumnMetadataId { get; set; }
    
    public Template Template { get; set; }

    public ColumnMetadata ColumnMetadata { get; set; }
}