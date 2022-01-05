namespace Bourque.GridUpload.Data.Models.DbModels;

public class TemplateApplication
{
    public int Id { get; set; }

    public int TemplateId { get; set; }

    public int ApplicationId { get; set; }

    public Template Template { get; set; }

    public ApplicationCode ApplicationCode { get; set; }
}