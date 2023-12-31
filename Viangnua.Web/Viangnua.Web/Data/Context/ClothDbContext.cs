using Microsoft.EntityFrameworkCore;
using Viangnua.Web.Data.Models.Entities.Cloth;
using Viangnua.Web.Data.Models.Entities.Enum;
using Viangnua.Web.Data.Models.Entities.Lookup;
using Viangnua.Web.Extension;

namespace Viangnua.Web.Data.Context;

/// <summary>
/// This is the context of accessing database tables
/// </summary>
public class ClothDbContext : DbContext
{
    //DbSet is used to query and manipulate the data inside the table
    public DbSet<Cloth> Cloth { get; set; }
    public DbSet<FabricPiece> FabricPiece { get; set; }
    public DbSet<Belt> Belt { get; set; }
    public DbSet<Dress> Dress { get; set; }
    public DbSet<Scarf> Scarf { get; set; }
    public DbSet<Top> Top { get; set; }
    public DbSet<BottomWear> BottomWear { get; set; }
    
    public DbSet<ColorLookup> ColorLookup { get; set; }

    public ClothDbContext(DbContextOptions<ClothDbContext> options) : base(options)
    {
    }
    
    //configure the database scheme and model relationships
    protected override void OnModelCreating(ModelBuilder modelBuilder) 
    {
        modelBuilder.Entity<Cloth>()
            .ToTable(nameof(Cloth));
        
        modelBuilder.Entity<Belt>()
            .ToTable(nameof(Belt));

        modelBuilder.Entity<Dress>()
            .ToTable(nameof(Dress));

        modelBuilder.Entity<FabricPiece>()
            .ToTable(nameof(FabricPiece));

        modelBuilder.Entity<Scarf>()
            .ToTable(nameof(Scarf));

        modelBuilder.Entity<Top>()
            .ToTable(nameof(Top));

        modelBuilder.Entity<BottomWear>()
            .ToTable(nameof(BottomWear));
        
        modelBuilder.Entity<ColorLookup>().HasData(
            Enum.GetValues<ClothColor>()
                .Select(e => new ColorLookup { Id = (byte)e, Name = e.MapToName() })
        );

        modelBuilder.Entity<QualityLookup>().HasData(
            Enum.GetValues<QualityType>()
                .Select(e => new QualityLookup { Id = (byte)e, Name = e.MapToName() })
        );

        modelBuilder.Entity<GenderLookup>().HasData(
            Enum.GetValues<GenderType>()
                .Select(e => new GenderLookup { Id = (byte)e, Name = e.MapToName() })
        );
    }
}