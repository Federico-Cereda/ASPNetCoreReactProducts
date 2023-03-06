using aspnetserver.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Repositories
{
    public class ProdottoRepository : IProdottoRepository
    {
        private readonly CarrelloSpesaContext context;

        public ProdottoRepository(CarrelloSpesaContext context)
        {
            this.context = context;
        }

        public async Task<List<Prodotto>> Get()
        {
            return await context.Prodotto.ToListAsync();
        }

    }
}
