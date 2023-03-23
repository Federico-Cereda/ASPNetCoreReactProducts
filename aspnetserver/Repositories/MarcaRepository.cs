using aspnetserver.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Repositories
{
    public class MarcaRepository : IMarcaRepository
    {
        private readonly CarrelloSpesaContext _context;

        public MarcaRepository(CarrelloSpesaContext context)
        {
            _context = context;
        }

        public async Task<List<Marca>> GetMarche()
        {
            return await _context.Marca.ToListAsync();
        }

        public async Task<bool> PostMarca(Marca marca)
        {
            try
            {
                await _context.Marca.AddAsync(marca);

                return await _context.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }

    }
}
