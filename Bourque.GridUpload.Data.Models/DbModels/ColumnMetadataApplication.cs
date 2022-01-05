namespace Bourque.GridUpload.Data.Models.DbModels;

public class ColumnMetadataApplication
{
    public int Id { get; set; }

    public int ApplicationId { get; set; }

    public int ColumnMetadataId { get; set; }
    
    public ApplicationCode ApplicationCode { get; set; }

    public ColumnMetadata ColumnMetadata { get; set; }
}