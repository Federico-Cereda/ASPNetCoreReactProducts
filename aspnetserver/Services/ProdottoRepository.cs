using aspnetserver.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Services
{
    public class ProdottoRepository : IProdottoRepository
    {
        private readonly CarrelloSpesaContext context;

        public ProdottoRepository(CarrelloSpesaContext context)
        {
            this.context = context;
        }

        public async Task<ActionResult<List<Prodotto>>> Get()
        {
            return await context.Prodotto.ToListAsync();
        }

    }
}
