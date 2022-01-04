using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bourque.GridUpload.Data.Models.DbModels;

[Table("GRID_UPLOAD_TEMPLATE_APPLICATION")]
public class TemplateApplication
{
    [Key] 
    [Column("id")] 
    public int Id { get; set; }

    [ForeignKey("Template")]
    [Column("template_id", Order = 0)]
    public int TemplateId { get; set; }

    [ForeignKey("ApplicationId")]
    [Column("application_id", Order = 1)]
    public int ApplicationId { get; set; }

    public Template Template { get; set; }

    public ApplicationCode ApplicationCode { get; set; }
}