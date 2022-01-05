using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bourque.GridUpload.Data.EntityFramework.Context;

public partial class GridUploadContext : DbContext
{
    public GridUploadContext()
    {
    }

    public GridUploadContext(DbContextOptions<GridUploadContext> options) : base(options)
    {
    }

    public virtual DbSet<ApplicationCode> Applications { get; set; }
    
    public virtual DbSet<ColumnMetadata> ColumnMetadata { get; set; }
    
    public virtual DbSet<ColumnValidationRule> ColumnValidationRules { get; set; }

    public virtual DbSet<ColumnMetadataApplication> ColumnMetadataApplications { get; set; }
    
    public virtual DbSet<Template> Templates { get; set; }
    
    public virtual DbSet<TemplateApplication> TemplateApplications { get; set; }

    public virtual DbSet<Entity> Entities { get; set; }

    public virtual DbSet<TemplateEntity> TemplateEntities { get; set; }
    
    public virtual DbSet<TemplateColumn> TemplateColumns { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(GridUploadContext).Assembly);
    }
}
