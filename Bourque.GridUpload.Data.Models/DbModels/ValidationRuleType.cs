using System.Runtime.Serialization;

namespace Bourque.GridUpload.Data.Models.DbModels;

public enum ValidationRuleType
{
    [EnumMember(Value = "numeric")]
    numeric = 1,
    
    [EnumMember(Value = "required")]
    required = 2,
    
    [EnumMember(Value = "email")]
    email = 3,
    
    [EnumMember(Value = "pattern")]
    pattern = 4
}