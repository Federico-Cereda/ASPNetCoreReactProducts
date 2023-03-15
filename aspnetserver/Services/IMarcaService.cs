using aspnetserver.Models;

namespace aspnetserver.Services
{
    public interface IMarcaService
    {
        Task<List<Marca>> GetMarche();

    }
}
