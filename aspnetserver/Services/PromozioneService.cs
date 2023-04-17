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

    }
}
