using aspnetserver.Models;
using aspnetserver.Repositories;

namespace aspnetserver.Services
{
    public class MarcaService : IMarcaService
    {
        private readonly IMarcaRepository _marcaRepository;

        public MarcaService(IMarcaRepository marcaRepository)
        {
            _marcaRepository = marcaRepository;
        }

        public async Task<List<Marca>> GetMarche()
        {
            return await _marcaRepository.GetMarche();
        }

        public async Task<bool> CreaMarca(Marca marca)
        {
            return await _marcaRepository.CreaMarca(marca);
        }

    }
}
