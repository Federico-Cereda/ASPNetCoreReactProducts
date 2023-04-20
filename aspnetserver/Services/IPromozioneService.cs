using aspnetserver.Models;

namespace aspnetserver.Services
{
    public interface IPromozioneService
    {
        Task<List<Promozione>> GetPromozioni();
        Task<Promozione> GetPromozioneById(int id);
        Task<bool> CreaPromozione(Promozione promozione);

    }
}
