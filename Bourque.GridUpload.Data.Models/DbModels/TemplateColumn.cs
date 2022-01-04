namespace Bourque.GridUpload.Data.Models.DbModels;

public class TemplateColumn
{
    public int Id { get; set; }

    public int Position { get; set; }

    public int TemplateId { get; set; }

    public int ColumnMetadataId { get; set; }
    
    public Template Template { get; set; }

    public ColumnMetadata ColumnMetadata { get; set; }
}