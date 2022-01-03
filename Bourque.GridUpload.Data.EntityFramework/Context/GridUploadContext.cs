using Bourque.GridUpload.Data.EntityFramework.Mappers;
using Bourque.GridUpload.Data.Models.DbModels;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bourque.GridUpload.Data.EntityFramework.Context
{
    public partial class GridUploadContext : DbContext
    {
        public GridUploadContext()
        {

        }

        public GridUploadContext(DbContextOptions<GridUploadContext> options) : base(options)
        {

        }

        public virtual DbSet<Template> Templates { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.MapTemplate();
        }
    }
}
