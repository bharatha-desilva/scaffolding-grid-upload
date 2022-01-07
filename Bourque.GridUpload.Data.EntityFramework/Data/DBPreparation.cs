using Bourque.GridUpload.Data.EntityFramework.Context;
using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bourque.GridUpload.Data.Models.DbModels;

namespace Bourque.GridUpload.Data.EntityFramework.Data;

public static class DBPreparation
{
    public static void Prepare(IApplicationBuilder app,
        bool isProd)
    {
        using var serviceScop = app.ApplicationServices.CreateScope();
        Migrate(serviceScop.ServiceProvider.GetService<GridUploadContext>(),
            serviceScop.ServiceProvider.GetService<ILogger<GridUploadContext>>(),
            isProd);
    }

    private static void Migrate(GridUploadContext context,
        ILogger<GridUploadContext> logger,
        bool isProd)
    {
        if (isProd)
        {
            logger.LogInformation("--> Attempting to apply migrations...");
            try
            {
                context.Database.Migrate();
            }
            catch (Exception ex)
            {
                logger.LogError($"--> Could not migrate due to {ex.Message}");
            }
        }

        if (!context.Applications.Any(a => a.ApplicationName == "TestApp"))
        {
            var application = context.Applications.Add(new ApplicationCode{ApplicationName = "TestApp"}).Entity;

            var col1 = CreateColumnMetadata("title", "Title", "string");
            context.ColumnMetadata.Add(col1);
            
            var col2 = CreateColumnMetadata("fname", "First Name", "string");
            context.ColumnMetadata.Add(col2);
            
            var col3 = CreateColumnMetadata("lname", "Last Name", "string");
            context.ColumnMetadata.Add(col3);

            var col4 = CreateColumnMetadata("email", "Email", "string");
            context.ColumnMetadata.Add(col4);

            var col5 = CreateColumnMetadata("address", "Address", "string");
            context.ColumnMetadata.Add(col5);

            var col6 = CreateColumnMetadata("city", "City", "string");
            context.ColumnMetadata.Add(col6);

            var col7 = CreateColumnMetadata("country", "Country", "string");
            context.ColumnMetadata.Add(col7);
            
            context.SaveChanges();

            
            CreateColumnRules(context, col1, new (ValidationRuleType ruleType, string message)[]
            {
                new () {ruleType = ValidationRuleType.required, message = "Title is required."}
            });
            context.ColumnMetadata.Update(col1);

            CreateColumnRules(context, col2, new (ValidationRuleType ruleType, string message)[]
            {
                new () {ruleType = ValidationRuleType.required, message = "First name is required."}
            });
            context.ColumnMetadata.Update(col2);

            CreateColumnRules(context, col4, new (ValidationRuleType ruleType, string message)[]
            {
                new () {ruleType = ValidationRuleType.required, message = "Email address is required."},
                new () {ruleType = ValidationRuleType.email, message = "Email address is not valid."}
            });
            context.ColumnMetadata.Update(col4);

            CreateColumnRules(context, col6, new (ValidationRuleType ruleType, string message)[]
            {
                new () {ruleType = ValidationRuleType.required, message = "City is required."}
            });
            context.ColumnMetadata.Update(col6);

            CreateColumnRules(context, col7, new (ValidationRuleType ruleType, string message)[]
            {
                new () {ruleType = ValidationRuleType.required, message = "Country is required."}
            });
            context.ColumnMetadata.Update(col7);
            context.SaveChanges();

            context.ColumnMetadataApplications.Add(new ColumnMetadataApplication
                {ApplicationId = application.Id, ColumnMetadataId = col1.Id});
            context.ColumnMetadataApplications.Add(new ColumnMetadataApplication
                {ApplicationId = application.Id, ColumnMetadataId = col2.Id});
            context.ColumnMetadataApplications.Add(new ColumnMetadataApplication
                {ApplicationId = application.Id, ColumnMetadataId = col3.Id});
            context.ColumnMetadataApplications.Add(new ColumnMetadataApplication
                {ApplicationId = application.Id, ColumnMetadataId = col4.Id});
            context.ColumnMetadataApplications.Add(new ColumnMetadataApplication
                {ApplicationId = application.Id, ColumnMetadataId = col5.Id});
            context.ColumnMetadataApplications.Add(new ColumnMetadataApplication
                {ApplicationId = application.Id, ColumnMetadataId = col6.Id});
            context.ColumnMetadataApplications.Add(new ColumnMetadataApplication
                {ApplicationId = application.Id, ColumnMetadataId = col7.Id});
            context.SaveChanges();

            context.Templates.Add(new Template
            {
                TemplateOwner = "Bha", TemplateDisplayName = "Person Details Min",
                Columns = new List<TemplateColumn>
                {
                    new(){ Position = 1, ColumnMetadataId = col1.Id},
                    new(){ Position = 2, ColumnMetadataId = col2.Id},
                    new(){ Position = 3, ColumnMetadataId = col3.Id},
                    new(){ Position = 4, ColumnMetadataId = col4.Id},
                }
            });
            context.Templates.Add(new Template
            {
                TemplateOwner = "Bha", TemplateDisplayName = "Person Details Medium",
                Columns = new List<TemplateColumn>
                {
                    new(){ Position = 1, ColumnMetadataId = col1.Id},
                    new(){ Position = 2, ColumnMetadataId = col2.Id},
                    new(){ Position = 3, ColumnMetadataId = col3.Id},
                    new(){ Position = 4, ColumnMetadataId = col4.Id},
                    new(){ Position = 5, ColumnMetadataId = col5.Id},
                    new(){ Position = 6, ColumnMetadataId = col6.Id},
                    new(){ Position = 7, ColumnMetadataId = col7.Id},
                }
            });
            context.SaveChanges();
        }
        
        // Do some data seeding here if required,
        //context.SaveChanges();
    }

    private static ColumnMetadata CreateColumnMetadata(string cellName, string displayName, string dataType)
    {
        return new ColumnMetadata{ColumnCellName = cellName, ColumnDisplayName = displayName, ColumnDataType = dataType};
    }

    private static void CreateColumnRules(GridUploadContext context, ColumnMetadata columnMetadata, 
        (ValidationRuleType ruleType, string message)[] rules)
    {
        rules.Select(r => new ColumnValidationRule
            {
                ColumnMetadata = columnMetadata,
                ColumnMetadataId = columnMetadata.Id,
                Type = r.ruleType.ToString(), 
                Message = r.message
            }).ToList().ForEach(r =>
        {
            context.ColumnValidationRules.Add(r);
        });
    }
}