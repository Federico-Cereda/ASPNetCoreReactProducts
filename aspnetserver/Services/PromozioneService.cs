using aspnetserver.Models;
using aspnetserver.Repositories;

namespace aspnetserver.Services
{
    public class PromozioneService : IPromozioneService
    {
        private readonly IPromozioneRepository _promozioneRepository;

        public PromozioneService(IPromozioneRepository promozioneRepository)
        {
            _promozioneRepository = promozioneRepository;
        }

        public async Task<List<Promozione>> GetPromozioni()
        {
            return await _promozioneRepository.GetPromozioni();
        }

        public async Task<Promozione> GetPromozioneById(int id)
        {
            return await _promozioneRepository.GetPromozioneById(id);
        }

        public async Task<bool> CreaPromozione(Promozione promozione)
        {
            return await _promozioneRepository.CreaPromozione(promozione);
        }

        public async Task<bool> ModificaPromozione(Promozione promozione)
        {
            return await _promozioneRepository.ModificaPromozione(promozione);
        }

    }
}
