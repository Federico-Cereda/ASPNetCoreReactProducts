﻿using aspnetserver.Resources;
using aspnetserver.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace aspnetserver.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UtenteController : ControllerBase
    {
        private readonly IUtenteService _utenteService;

        public UtenteController(IUtenteService utenteService)
        {
            _utenteService = utenteService;
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterResource resource)
        {
            try
            {
                var response = await _utenteService.Register(resource);
                return Ok(response);
            }
            catch (Exception e)
            {
                return BadRequest(new { ErrorMessage = e.Message });
            }
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginResource resource)
        {
            try
            {
                var response = await _utenteService.Login(resource);
                return Ok(response);
            }
            catch (Exception e)
            {
                return BadRequest(new { ErrorMessage = e.Message });
            }
        }
    }
}
