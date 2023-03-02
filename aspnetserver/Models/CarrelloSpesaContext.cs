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
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=WINAPLY2UGMYFWK;Database=CarrelloSpesa;Trusted_Connection=True;TrustServerCertificate=True;");

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
