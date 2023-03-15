using aspnetserver.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Repositories
{
    public class MarcaRepository : IMarcaRepository
    {
        private readonly CarrelloSpesaContext context;

        public MarcaRepository(CarrelloSpesaContext context)
        {
            this.context = context;
        }

        public async Task<List<Marca>> Get()
        {
            return await context.Marca.ToListAsync();
        }
    }
}
