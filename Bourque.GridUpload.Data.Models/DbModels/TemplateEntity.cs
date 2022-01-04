namespace Bourque.GridUpload.Data.Models.DbModels;

public class TemplateEntity
{
    public int Id { get; set; }

    public int TemplateId { get; set; }

    public int EntityId { get; set; }

    public Template Template { get; set; }

    public Entity Entity { get; set; }
}