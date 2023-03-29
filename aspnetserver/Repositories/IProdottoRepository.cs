using aspnetserver.Models;

namespace aspnetserver.Repositories
{
    public interface IProdottoRepository
    {
        Task<List<Prodotto>> GetProdotti();
        Task<Prodotto> GetProdottoById(int id);
        Task<bool> CreaProdotto(Prodotto prodotto);
        Task<bool> ModificaProdotto(Prodotto prodotto);
        Task<bool> EliminaProdotto(int id);

    }
}
