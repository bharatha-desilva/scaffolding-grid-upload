namespace Bourque.GridUpload.Data.Models.DbModels;

public class Entity
{
    public int Id { get; set; }

    public string EntityName { get; set; }

    public string ValidateURL { get; set; }

    public string ProcessURL { get; set; }
}