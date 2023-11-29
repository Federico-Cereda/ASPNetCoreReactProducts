using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Models;

public sealed partial class CarrelloSpesaContext : DbContext
{
    public CarrelloSpesaContext()
    {
    }

    public CarrelloSpesaContext(DbContextOptions<CarrelloSpesaContext> options)
        : base(options)
    {
    }

    public DbSet<Marca> Marca { get; set; }

    public DbSet<Prodotto> Prodotto { get; set; }

    public DbSet<Promozione> Promozione { get; set; }

    public DbSet<Utente> Utente { get; set; }

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

            entity.HasOne(d => d.IdPromozioneNavigation).WithMany(p => p.Prodotto)
                .HasForeignKey(d => d.IdPromozione)
                .HasConstraintName("FK_Prodotto_Promozione");
        });

        modelBuilder.Entity<Promozione>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_dbo.Promozione");

            entity.ToTable("Promozione");

            entity.Property(e => e.DataFine).HasColumnType("datetime");
            entity.Property(e => e.Nome).HasMaxLength(256);
        });

        modelBuilder.Entity<Utente>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK_dbo.Utente");

            entity.HasIndex(e => e.Email).IsUnique();

            entity.ToTable("Utente");

            entity.Property(e => e.Username).HasMaxLength(50);
            entity.Property(e => e.Email).HasMaxLength(50);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
