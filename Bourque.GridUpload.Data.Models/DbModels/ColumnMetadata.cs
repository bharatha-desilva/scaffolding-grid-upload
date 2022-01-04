using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bourque.GridUpload.Data.Models.DbModels;

[Table("GRID_UPLOAD_COLUMN_METADATA")]
public class ColumnMetadata
{
    [Key] 
    [Column("id")] 
    public int Id { get; set; }
    
    [Column("column_display_name")]
    public string ColumnDisplayName { get; set; }

    [Column("column_cell_name")]
    public string ColumnCellName { get; set; }

    [Column("column_data_type")]
    public string ColumnDataType { get; set; }
}