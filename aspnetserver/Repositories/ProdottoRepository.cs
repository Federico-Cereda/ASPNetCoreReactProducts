using aspnetserver.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace aspnetserver.Repositories
{
    public class ProdottoRepository : IProdottoRepository
    {
        private readonly CarrelloSpesaContext _context;

        public ProdottoRepository(CarrelloSpesaContext context)
        {
            _context = context;
        }

        public async Task<List<Prodotto>> GetProdotti()
        {
            return await (from p in _context.Prodotto
                          join m in _context.Marca on p.IdMarca equals m.Id
                          select new Prodotto{
                              Id = p.Id,
                              Nome = p.Nome,
                              Prezzo = p.Prezzo,
                              Peso = p.Peso,
                              IdMarca = p.IdMarca,
                              IdMarcaNavigation = m
                          }).ToListAsync();
        }

        public async Task<Prodotto> GetProdottoById(int id)
        {
            return await (from p in _context.Prodotto
                          join m in _context.Marca on p.IdMarca equals m.Id
                          select new Prodotto
                          {
                              Id = p.Id,
                              Nome = p.Nome,
                              Prezzo = p.Prezzo,
                              Peso = p.Peso,
                              IdMarca = p.IdMarca,
                              IdMarcaNavigation = m
                          }).FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<bool> CreaProdotto(Prodotto prodotto)
        {
            try
            {
                await _context.Prodotto.AddAsync(prodotto);

                return await _context.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> ModificaProdotto(Prodotto prodotto)
        {
            try
            {
                _context.Prodotto.Update(prodotto);

                return await _context.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }

        public async Task<bool> EliminaProdotto(int id)
        {
            try
            {
                Prodotto prodotto = await GetProdottoById(id);

                _context.Prodotto.Remove(prodotto);

                return await _context.SaveChangesAsync() >= 1;
            }
            catch (Exception e)
            {
                return false;
            }
        }

    }
}
