using aspnetserver.Models;
using aspnetserver.Repositories;

namespace aspnetserver.Services
{
    public class ProdottoService : IProdottoService
    {
        private readonly IProdottoRepository prodottoRepository;

        public ProdottoService(IProdottoRepository prodottoRepository)
        {
            this.prodottoRepository = prodottoRepository;
        }

        public async Task<List<Prodotto>> Get()
        {
            return await prodottoRepository.Get();
        }

    }
}
