using aspnetserver.Models;
using aspnetserver.Repositories;

namespace aspnetserver.Services
{
    public class MarcaService : IMarcaService
    {
        private readonly IMarcaRepository marcaRepository;

        public MarcaService(IMarcaRepository marcaRepository)
        {
            this.marcaRepository = marcaRepository;
        }

        public async Task<List<Marca>> Get()
        {
            return await marcaRepository.Get();
        }

    }
}
