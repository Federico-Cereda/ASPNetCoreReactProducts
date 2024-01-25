using aspnetserver.Models;
using aspnetserver.Resources;
using aspnetserver.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace aspnetserver.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UtenteController : ControllerBase
    {
        private readonly IUtenteService _utenteService;
        private readonly ITokenService _tokenService;

        public UtenteController(IUtenteService utenteService, ITokenService tokenService)
        {
            _utenteService = utenteService;
            _tokenService = tokenService;
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

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginResource resource)
        {
            try
            {
                var response = await _utenteService.Login(resource);
                var result = _tokenService.GenerateToken(response);
                var token = new Token
                {
                    AccessToken = result.Result.AccessToken,
                    RefreshToken = result.Result.RefreshToken,
                    Expiration = result.Result.Expiration
                };

                return Ok(new LoginResponseResource(token, response.IdRuolo));
            }
            catch (Exception e)
            {
                return BadRequest(new { ErrorMessage = e.Message });
            }
        }
    }
}
