using aspnetserver.Models;

namespace aspnetserver.Services
{
    public interface IPromozioneService
    {
        Task<List<Promozione>> GetPromozioni();
        Task<bool> CreaPromozione(Promozione promozione);

    }
}
