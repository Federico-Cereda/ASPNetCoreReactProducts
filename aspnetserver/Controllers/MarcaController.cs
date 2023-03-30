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
        public async Task<IResult> GetMarche()
        {
            List<Marca> marche = await _marcaService.GetMarche();

            if (marche != null)
            {
                return Results.Ok(marche);
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpGet("{id}")]
        public async Task<IResult> GetMarcaById(int id)
        {
            Marca marca = await _marcaService.GetMarcaById(id);

            if (marca != null)
            {
                return Results.Ok(marca);
            }
            else
            {
                return Results.BadRequest();
            }
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
