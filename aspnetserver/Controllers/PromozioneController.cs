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

    }
}