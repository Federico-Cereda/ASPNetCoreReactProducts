using aspnetserver.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Services
{
    public class CarrelloSpesaDbContext : DbContext
    {
        public DbSet<Prodotto> Prodotti { get; set; }
        public DbSet<Marca> Marche { get; set; }
    }
}
