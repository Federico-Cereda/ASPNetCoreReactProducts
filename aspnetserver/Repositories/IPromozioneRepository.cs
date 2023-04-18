using aspnetserver.Models;

namespace aspnetserver.Repositories
{
    public interface IPromozioneRepository
    {
        Task<List<Promozione>> GetPromozioni();
        Task<bool> CreaPromozione(Promozione promozione);

    }
}
