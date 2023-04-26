using aspnetserver.Models;

namespace aspnetserver.Repositories
{
    public interface IPromozioneRepository
    {
        Task<List<Promozione>> GetPromozioni();
        Task<Promozione> GetPromozioneById(int id);
        Task<bool> CreaPromozione(Promozione promozione);
        Task<bool> ModificaPromozione(Promozione promozione);
        Task<bool> EliminaPromozione(int id);

    }
}
