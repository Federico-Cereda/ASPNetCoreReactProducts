﻿using aspnetserver.Models;
using aspnetserver.Services;
using Microsoft.AspNetCore.Mvc;

namespace aspnetserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromozioneController : ControllerBase
    {
        private readonly IPromozioneService _promozioneService;

        public PromozioneController(IPromozioneService promozioneService)
        {
            _promozioneService = promozioneService;
        }

        [HttpGet]
        public async Task<IResult> GetPromozioni()
        {
            List<Promozione> promozioni = await _promozioneService.GetPromozioni();

            if (promozioni != null)
            {
                return Results.Ok(promozioni);
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpGet("{id}")]
        public async Task<IResult> GetPromozioneById(int id)
        {
            Promozione promozione = await _promozioneService.GetPromozioneById(id);

            if (promozione != null)
            {
                return Results.Ok(promozione);
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpPost]
        public async Task<IResult> CreaPromozione(Promozione promozione)
        {
            bool creata = await _promozioneService.CreaPromozione(promozione);

            if (creata)
            {
                return Results.Ok($"Promozione {promozione.Nome} creata.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpPut]
        public async Task<IResult> ModificaPromozione(Promozione promozione)
        {
            bool modificata = await _promozioneService.ModificaPromozione(promozione);

            if (modificata)
            {
                return Results.Ok($"Promozione {promozione.Nome} modificata.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

        [HttpDelete]
        public async Task<IResult> EliminaPromozione(int id)
        {
            string nome = _promozioneService.GetPromozioneById(id).Result.Nome;

            bool eliminata = await _promozioneService.EliminaPromozione(id);

            if (eliminata)
            {
                return Results.Ok($"Promozione {nome} eliminata.");
            }
            else
            {
                return Results.BadRequest();
            }
        }

    }
}
