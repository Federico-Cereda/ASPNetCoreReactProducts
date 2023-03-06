using aspnetserver.Models;
using aspnetserver.Repositories;

namespace aspnetserver.Services
{
    public class ProdottoService : IProdottoService
    {
        private readonly IProdottoRepository _prodottoRepository;
        public ProdottoService(IProdottoRepository prodottoRepository)
        {
            _prodottoRepository = prodottoRepository;
        }

        public async Task<List<Prodotto>> Get()
        {
            return await _prodottoRepository.Get();
        }

    }
}
