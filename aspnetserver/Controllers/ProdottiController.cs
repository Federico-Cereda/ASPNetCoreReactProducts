using aspnetserver.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdottiController : ControllerBase
    {
        private readonly CarrelloSpesaContext context;

        public ProdottiController(CarrelloSpesaContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Prodotto>>> GetProdotto()
        {
            return Ok(await context.Prodotto.ToListAsync());
        }

    }
}
