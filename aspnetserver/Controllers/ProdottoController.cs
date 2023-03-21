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
        public async Task<List<Prodotto>> GetProdotti()
        {
            return await _prodottoService.GetProdotti();
        }

        [HttpPost]
        public async Task<IResult> PostProdotto(Prodotto prodotto)
        {
            bool createSuccessful = await _prodottoService.PostProdotto(prodotto);

            if (createSuccessful)
            {
                return Results.Ok("Create successful.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

    }
}
