using aspnetserver.Models;

namespace aspnetserver.Services
{
    public interface IProdottoService
    {
        Task<List<Prodotto>> GetProdotti();
        Task<Prodotto> GetProdottoById(int id);
        Task<bool> CreaProdotto(Prodotto prodotto);
        Task<bool> ModificaProdotto(Prodotto prodotto);

    }
}
