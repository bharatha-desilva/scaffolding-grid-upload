using System.Collections.Generic;

namespace Bourque.GridUpload.Data.Models.DbModels;

public class Template
{
    public int Id { get; set; }
    
    public string TemplateDisplayName { get; set; }
    
    public string TemplateOwner { get; set; }

    public ICollection<TemplateColumn> Columns;
}