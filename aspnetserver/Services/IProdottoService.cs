using aspnetserver.Models;

namespace aspnetserver.Services
{
    public interface IProdottoService
    {
        Task<List<Prodotto>> GetProdotti();
        Task<Prodotto> GetProdottoById(int id);
        Task<bool> PostProdotto(Prodotto prodotto);
        Task<bool> PutProdotto(Prodotto prodotto);

    }
}
