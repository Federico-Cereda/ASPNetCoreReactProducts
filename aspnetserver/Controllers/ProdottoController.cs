using aspnetserver.Models;
using aspnetserver.Repository;
using Microsoft.AspNetCore.Mvc;

namespace aspnetserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdottoController : ControllerBase
    {
        private readonly CarrelloSpesaContext context;
        private readonly IProdottoRepository prodottoRepository;

        public ProdottoController(CarrelloSpesaContext context, IProdottoRepository prodottoRepository)
        {
            this.context = context;
            this.prodottoRepository = prodottoRepository;
        }

        [HttpGet]
        public async Task<ActionResult<List<Prodotto>>> GetProdotto()
        {
            //return Ok(await context.Prodotto.ToListAsync());
            return Ok(await prodottoRepository.Get());
        }

    }
}
