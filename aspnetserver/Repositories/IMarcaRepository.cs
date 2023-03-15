using aspnetserver.Models;

namespace aspnetserver.Repositories
{
    public interface IMarcaRepository
    {
        Task<List<Marca>> GetMarche();

    }
}
