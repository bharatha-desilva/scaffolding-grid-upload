﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bourque.GridUpload.Data.Models.DbModels;

[Table("GRID_UPLOAD_TEMPLATE_ENTITY")]
public class TemplateEntity
{
    [Key] 
    [Column("id")] 
    public int Id { get; set; }

    [ForeignKey("Template")]
    [Column("template_id", Order = 0)]
    public int TemplateId { get; set; }

    [ForeignKey("Entity")]
    [Column("entity_id", Order = 1)]
    public int EntityId { get; set; }

    public Template Template { get; set; }

    public Entity Entity { get; set; }
}