namespace Bourque.GridUpload.Data.Models.DbModels;

public class ColumnValidationRule
{
    public int Id { get; set; }

    public int ColumnMetadataId { get; set; }

    public string Type { get; set; }

    public string Pattern { get; set; }

    public string Message { get; set; }

    public ColumnMetadata ColumnMetadata { get; set; }
}