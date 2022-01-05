using Bourque.GridUpload.Data.EntityFramework.Context;
using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Bourque.GridUpload.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class TemplateController : ControllerBase
{
    private GridUploadContext _context;
    
    public TemplateController(GridUploadContext context)
    {
        _context = context;
    }

    [HttpGet(Name = "GetAllTemplates")]
    public Template[] GetAllTemplates()
    {
        return _context.Templates.ToArray();
    }

    [HttpGet("{id}",Name = "GetTemplateById")]
    public Template? GetTemplateById(long id)
    {
        return _context.Templates.Where(t => t.Id == id)
            .Include(t => t.Columns).FirstOrDefault();
    }

    [HttpGet("{id}/dev-extreme-json",Name = "GetTemplateDevExtremeJson")]
    public dynamic GetTemplateDevExtremeJson(long id)
    {
        var template = _context.Templates.Where(t => t.Id == id)
            .Include(t => t.Columns).FirstOrDefault();
        if (template != null)
        {
            return new
            {
                keyField = "ID",
                columns = template.Columns.Select(col => new
                    {
                        property = col.ColumnMetadata.ColumnCellName,
                        caption = col.ColumnMetadata.ColumnDisplayName ?? col.ColumnMetadata.ColumnCellName,
                        dataType = col.ColumnMetadata.ColumnDataType,
                        validationRules = col.ColumnMetadata.ValidationRules?.Select(r => new
                        {
                            type = r.Type, 
                            message = r.Message,
                            pattern = r.Pattern
                        }).ToArray()
                    }
                ).ToArray(),
            };
        }
        return new {};
    }
}