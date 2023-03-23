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
        public async Task<IResult> PostMarca(Marca marca)
        {
            bool createSuccessful = await _marcaService.PostMarca(marca);

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
