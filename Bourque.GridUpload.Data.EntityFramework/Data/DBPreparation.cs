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

        // Do some data seeding here if required,
        //context.SaveChanges();
    }
}