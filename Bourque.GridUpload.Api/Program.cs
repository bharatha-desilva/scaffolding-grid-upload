using Bourque.GridUpload.Data.EntityFramework.Context;
using Bourque.GridUpload.Data.EntityFramework.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

var builder = WebApplication.CreateBuilder(args);

builder.Host.ConfigureAppConfiguration((hostingContext, configuration) =>
{
    configuration.AddEnvironmentVariables("GridUpload_");
});

// Add services to the container.
builder.Services.AddDbContext<GridUploadContext>(options => {
        options.UseSqlServer( builder.Configuration.GetConnectionString("TcmsConnectionString")); 
    }
);

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "Bourque Grid Upload",
        Description = "Template management and template driven data upload solution.",
    });
});

builder.Services.AddMvc().AddNewtonsoftJson(options =>
{
    options.SerializerSettings.Converters.Add(new StringEnumConverter());
    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

DBPreparation.Prepare(app, app.Environment.IsProduction());

app.Run();
