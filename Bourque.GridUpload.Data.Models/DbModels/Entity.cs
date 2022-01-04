using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bourque.GridUpload.Data.Models.DbModels;

[Table("GRID_UPLOAD_ENTITY")]
public class Entity
{
    [Key] [Column("id")] public int Id { get; set; }

    [Column("entity_name")] public string EntityName { get; set; }

    [Column("validate_url")] public string ValidateURL { get; set; }

    [Column("process_url")] public string ProcessURL { get; set; }
}