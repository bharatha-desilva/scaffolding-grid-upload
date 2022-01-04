using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bourque.GridUpload.Data.Models.DbModels;

[Table("GRID_UPLOAD_COLUMN_METADATA_APPLICATION")]
public class ColumnMetadataApplication
{
    [Key] 
    [Column("id")] 
    public int Id { get; set; }

    [ForeignKey("ApplicationId")]
    [Column("application_id", Order = 0)]
    public int ApplicationId { get; set; }

    [ForeignKey("ColumnMetadata")]
    [Column("column_metadata_id", Order = 1)]
    public int ColumnMetadataId { get; set; }
    
    public ApplicationCode ApplicationCode { get; set; }

    public ColumnMetadata ColumnMetadata { get; set; }
}