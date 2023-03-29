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
            _marcaService = marcaService;
        }

        [HttpGet]
        public async Task<List<Marca>> GetMarche()
        {
            return await _marcaService.GetMarche();
        }

        [HttpPost]
        public async Task<IResult> CreaMarca(Marca marca)
        {
            bool creata = await _marcaService.CreaMarca(marca);

            if (creata)
            {
                return Results.Ok($"{marca.Nome} creata.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

    }
}
