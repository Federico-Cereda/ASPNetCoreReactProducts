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

        public async Task<List<Prodotto>> GetProdotti()
        {
            return await _prodottoRepository.GetProdotti();
        }

        public async Task<bool> PostProdotto(Prodotto prodotto)
        {
            return await _prodottoRepository.PostProdotto(prodotto);
        }

    }
}
