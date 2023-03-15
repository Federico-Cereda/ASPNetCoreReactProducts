using aspnetserver.Models;

namespace aspnetserver.Services
{
    public interface IProdottoService
    {
        Task<List<Prodotto>> GetProdotti();

    }
}
