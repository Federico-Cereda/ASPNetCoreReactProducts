using aspnetserver.Models;

namespace aspnetserver.Repositories
{
    public interface IProdottoRepository
    {
        Task<List<Prodotto>> GetProdotti();
        Task PostProdotto(Prodotto prodotto);

    }
}
