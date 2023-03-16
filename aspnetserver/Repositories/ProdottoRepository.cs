using aspnetserver.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Repositories
{
    public class ProdottoRepository : IProdottoRepository
    {
        private readonly CarrelloSpesaContext _context;

        public ProdottoRepository(CarrelloSpesaContext context)
        {
            _context = context;
        }

        public async Task<List<Prodotto>> GetProdotti()
        {
            return await (from p in _context.Prodotto
                          join m in _context.Marca on p.IdMarca equals m.Id
                          select new Prodotto{
                              Id = p.Id,
                              Nome = p.Nome,
                              Prezzo = p.Prezzo,
                              Peso = p.Peso,
                              IdMarca = p.IdMarca,
                              IdMarcaNavigation = m
                          }).ToListAsync();
        }

    }
}
