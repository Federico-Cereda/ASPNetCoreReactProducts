using aspnetserver.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Repositories
{
    public class MarcaRepository : IMarcaRepository
    {
        private readonly CarrelloSpesaContext _context;

        public MarcaRepository(CarrelloSpesaContext context)
        {
            this._context = context;
        }

        public async Task<List<Marca>> Get()
        {
            return await _context.Marca.ToListAsync();
        }
    }
}
