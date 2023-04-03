using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Models;

public partial class CarrelloSpesaContext : DbContext
{
    public CarrelloSpesaContext()
    {
    }

    public CarrelloSpesaContext(DbContextOptions<CarrelloSpesaContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Marca> Marca { get; set; }

    public virtual DbSet<Prodotto> Prodotto { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlServer("Server=tcp:eudbs-sql.database.windows.net,1433;Initial Catalog=CarrelloSpesa;Persist Security Info=False;User ID=azureuser;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Marca>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_dbo.Marca");

            entity.ToTable("Marca");

            entity.Property(e => e.Nome).HasMaxLength(256);
        });

        modelBuilder.Entity<Prodotto>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_dbo.Prodotto");

            entity.ToTable("Prodotto");

            entity.Property(e => e.Nome).HasMaxLength(512);
            entity.Property(e => e.Prezzo).HasColumnType("smallmoney");

            entity.HasOne(d => d.IdMarcaNavigation).WithMany(p => p.Prodotto)
                .HasForeignKey(d => d.IdMarca)
                .HasConstraintName("FK_Prodotto_Marca");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
