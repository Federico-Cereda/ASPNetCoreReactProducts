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
            return await _context.Prodotto.ToListAsync();
        }

    }
}
