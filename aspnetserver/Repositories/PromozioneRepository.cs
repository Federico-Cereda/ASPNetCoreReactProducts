using aspnetserver.Models;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Repositories
{
    public class PromozioneRepository : IPromozioneRepository
    {
        private readonly CarrelloSpesaContext _context;

        public PromozioneRepository(CarrelloSpesaContext context)
        {
            _context = context;
        }

        public async Task<List<Promozione>> GetPromozioni()
        {
            return await _context.Promozione.ToListAsync();
        }

    }
}
