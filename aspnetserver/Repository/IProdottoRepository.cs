using aspnetserver.Models;

namespace aspnetserver.Repository
{
    public interface IProdottoRepository
    {
        Task<List<Prodotto>> Get();

    }
}
