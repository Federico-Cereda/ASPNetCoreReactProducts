using aspnetserver.Models;

namespace aspnetserver.Repositories
{
    public interface IMarcaRepository
    {
        Task<List<Marca>> GetMarche();
        Task<Marca> GetMarcaById(int id);
        Task<bool> CreaMarca(Marca marca);
        Task<bool> ModificaMarca(Marca marca);
        Task<bool> EliminaMarca(int id);

    }
}
