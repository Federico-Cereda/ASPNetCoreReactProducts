using aspnetserver.Models;
using aspnetserver.Services;
using Microsoft.AspNetCore.Mvc;

namespace aspnetserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdottoController : ControllerBase
    {
        private readonly IProdottoService prodottoService;

        public ProdottoController(IProdottoService prodottoService)
        {
            this.prodottoService = prodottoService;
        }

        [HttpGet]
        public async Task<List<Prodotto>> GetProdotto()
        {
            return await prodottoService.Get();
        }

    }
}
