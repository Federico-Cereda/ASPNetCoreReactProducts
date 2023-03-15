using aspnetserver.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Repositories
{
    public class ProdottoRepository : IProdottoRepository
    {
        private readonly CarrelloSpesaContext _context;

        public ProdottoRepository(CarrelloSpesaContext context)
        {
            this._context = context;
        }

        public async Task<List<Prodotto>> Get()
        {
            return await _context.Prodotto.ToListAsync();
        }

    }
}
