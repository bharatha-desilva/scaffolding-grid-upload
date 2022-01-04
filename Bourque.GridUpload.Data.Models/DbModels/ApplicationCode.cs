using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bourque.GridUpload.Data.Models.DbModels;

[Table("GRID_UPLOAD_APPLICATION_CODE")]
public class ApplicationCode
{
    [Key] 
    [Column("id")] 
    public int Id { get; set; }

    [Column("application_name")] 
    public string ApplicationName { get; set; }
}