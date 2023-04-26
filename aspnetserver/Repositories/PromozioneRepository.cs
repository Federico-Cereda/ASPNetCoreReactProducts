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

        public async Task<Promozione> GetPromozioneById(int id)
        {
            return await _context.Promozione.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> CreaPromozione(Promozione promozione)
        {
            try
            {
                await _context.Promozione.AddAsync(promozione);

                return await _context.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> ModificaPromozione(Promozione promozione)
        {
            try
            {
                _context.Promozione.Update(promozione);

                return await _context.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> EliminaPromozione(int id)
        {
            try
            {
                Promozione promozione = await GetPromozioneById(id);

                _context.Promozione.Remove(promozione);

                return await _context.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }

    }
}
