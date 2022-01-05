using Bourque.GridUpload.Data.EntityFramework.Context;
using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.AspNetCore.Mvc;

namespace Bourque.GridUpload.Api.Controllers;

[ApiController]
[Route("[controller]")]
public class MetadataController : ControllerBase
{
    private GridUploadContext _context;
    
    public MetadataController(GridUploadContext context)
    {
        _context = context;
    }

    [HttpGet("validation-rule-types", Name = "GetValidationRuleTypes")]
    public string[] GetValidationRuleTypes()
    {
        return Enum.GetNames<ValidationRuleType>();
    }

    [HttpGet("validation-rule", Name = "GetValidationRules")]
    public ColumnValidationRule[] GetValidationRules()
    {
        return new ColumnValidationRule[]
        {
            new (){ Type = ValidationRuleType.required.ToString(), Message = "field is required"},
            new (){ Type = ValidationRuleType.email.ToString(), Message = "valid email"},
        };
    }
}