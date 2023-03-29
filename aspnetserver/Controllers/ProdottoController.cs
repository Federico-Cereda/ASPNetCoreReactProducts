using aspnetserver.Models;
using aspnetserver.Services;
using Microsoft.AspNetCore.Mvc;

namespace aspnetserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdottoController : ControllerBase
    {
        private readonly IProdottoService _prodottoService;

        public ProdottoController(IProdottoService prodottoService)
        {
            _prodottoService = prodottoService;
        }

        [HttpGet]
        public async Task<IResult> GetProdotti()
        {
            List<Prodotto> prodotti = await _prodottoService.GetProdotti();

            if (prodotti != null)
            {
                return Results.Ok(prodotti);
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpGet("{id}")]
        public async Task<IResult> GetProdottoById(int id)
        {
            Prodotto prodotto = await _prodottoService.GetProdottoById(id);

            if (prodotto != null)
            {
                return Results.Ok(prodotto);
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpPost]
        public async Task<IResult> CreaProdotto(Prodotto prodotto)
        {
            bool creato = await _prodottoService.CreaProdotto(prodotto);

            if (creato)
            {
                return Results.Ok($"{prodotto.Nome} creato.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpPut]
        public async Task<IResult> ModificaProdotto(Prodotto prodotto)
        {
            bool modificato = await _prodottoService.ModificaProdotto(prodotto);

            if (modificato)
            {
                return Results.Ok($"{prodotto.Nome} modificato.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpDelete]
        public async Task<IResult> EliminaProdotto(int id)
        {
            string nome = _prodottoService.GetProdottoById(id).Result.Nome;

            bool eliminato = await _prodottoService.EliminaProdotto(id);

            if (eliminato)
            {
                return Results.Ok($"{nome} eliminato");
            }
            else
            {
                return Results.BadRequest();
            }
        }

    }
}
