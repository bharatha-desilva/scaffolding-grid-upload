using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bourque.GridUpload.Data.Models.DbModels;

[Table("GRID_UPLOAD_TEMPLATE")]
public class Template
{
    [Key] 
    [Column("id")] 
    public int Id { get; set; }
    
    [Column("template_display_name")] 
    public string TemplateDisplayName { get; set; }
    
    [Column("template_owner")] 
    public string TemplateOwner { get; set; }

    public ICollection<TemplateColumn> Columns;
}