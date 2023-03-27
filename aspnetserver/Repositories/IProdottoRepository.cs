using aspnetserver.Models;

namespace aspnetserver.Repositories
{
    public interface IProdottoRepository
    {
        Task<List<Prodotto>> GetProdotti();
        Task<Prodotto> GetProdottoById(int id);
        Task<bool> PostProdotto(Prodotto prodotto);

    }
}
