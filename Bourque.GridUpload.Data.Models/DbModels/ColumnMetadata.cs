namespace Bourque.GridUpload.Data.Models.DbModels;

public class ColumnMetadata
{
    public int Id { get; set; }
    
    public string ColumnDisplayName { get; set; }

    public string ColumnCellName { get; set; }

    public string ColumnDataType { get; set; }
}