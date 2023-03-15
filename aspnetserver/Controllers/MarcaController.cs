using aspnetserver.Models;
using aspnetserver.Services;
using Microsoft.AspNetCore.Mvc;

namespace aspnetserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarcaController : ControllerBase
    {
        private readonly IMarcaService _marcaService;

        public MarcaController(IMarcaService marcaService)
        {
            this._marcaService = marcaService;
        }

        [HttpGet]
        public async Task<List<Marca>> GetMarca()
        {
            return await _marcaService.Get();
        }

    }
}
