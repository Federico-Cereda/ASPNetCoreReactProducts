using aspnetserver.Models;

namespace aspnetserver.Services
{
    public interface IProdottoRepository
    {
        Task<List<Prodotto>> Get();

    }
}
