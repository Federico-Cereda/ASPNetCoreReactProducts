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
                return Results.Ok($"Marca {marca.Nome} creata.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpPut]
        public async Task<IResult> ModificaMarca(Marca marca)
        {
            bool modificata = await _marcaService.ModificaMarca(marca);

            if (modificata)
            {
                return Results.Ok($"Marca {marca.Nome} modificata.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpDelete]
        public async Task<IResult> EliminaMarca(int id)
        {
            string nome = _marcaService.GetMarcaById(id).Result.Nome;

            bool eliminata = await _marcaService.EliminaMarca(id);

            if (eliminata)
            {
                return Results.Ok($"Marca {nome} eliminata.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

    }
}
