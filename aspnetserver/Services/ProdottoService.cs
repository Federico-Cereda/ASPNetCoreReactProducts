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

        public async Task<Prodotto> GetProdottoById(int id)
        {
            return await _prodottoRepository.GetProdottoById(id);
        }

        public async Task<bool> CreaProdotto(Prodotto prodotto)
        {
            return await _prodottoRepository.CreaProdotto(prodotto);
        }

        public async Task<bool> ModificaProdotto(Prodotto prodotto)
        {
            return await _prodottoRepository.ModificaProdotto(prodotto);
        }

        public async Task<bool> EliminaProdotto(int id)
        {
            return await _prodottoRepository.EliminaProdotto(id);
        }
    }
}
