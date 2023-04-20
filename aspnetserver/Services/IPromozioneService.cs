using aspnetserver.Models;

namespace aspnetserver.Services
{
    public interface IPromozioneService
    {
        Task<List<Promozione>> GetPromozioni();
        Task<Promozione> GetPromozioneById(int id);
        Task<bool> CreaPromozione(Promozione promozione);
        Task<bool> ModificaPromozione(Promozione promozione);
        Task<bool> EliminaPromozione(int id);

    }
}
