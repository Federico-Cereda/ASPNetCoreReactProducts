using aspnetserver.Models;
using aspnetserver.Resources;
using aspnetserver.Utilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace aspnetserver.Services
{
    public sealed class UtenteService : IUtenteService
    {
        private readonly CarrelloSpesaContext _context;
        private readonly string _pepper;
        private readonly int _iteration = 3;
        private readonly IConfiguration _config;

        public UtenteService(CarrelloSpesaContext context, IConfiguration config)
        {
            _context = context;
            _pepper = Environment.GetEnvironmentVariable("Pepper");
            _config = config;
        }

        public async Task<UtenteResource> Register(RegisterResource resource)
        {
            var utente = new Utente
            {
                Username = resource.Username,
                Email = resource.Email,
                PasswordSalt = PasswordHasher.GenerateSalt(),
                IdRuolo = resource.IdRuolo
            };
            utente.PasswordHash = PasswordHasher.ComputeHash(resource.Password, utente.PasswordSalt, _pepper, _iteration);
            await _context.Utente.AddAsync(utente);
            await _context.SaveChangesAsync();

            return new UtenteResource(utente.Id, utente.Username, utente.Email, utente.IdRuolo);
        }

        public async Task<UtenteResource> Login(LoginResource resource)
        {
            var utente = await _context.Utente.FirstOrDefaultAsync(x => x.Email == resource.Email);
            if (utente == null) throw new Exception("Email or password did not match.");

            var passwordHash = PasswordHasher.ComputeHash(resource.Password,utente.PasswordSalt, _pepper,  _iteration);
            if(utente.PasswordHash != passwordHash) throw new Exception("Email or password did not match.");

            return new UtenteResource(utente.Id, utente.Username, utente.Email,utente.IdRuolo);
        }

        public string GenerateToken(UtenteResource user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["JwtSettings:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.IdRuolo.ToString())
            };

            var token = new JwtSecurityToken(_config["JwtSettings:Issuer"],
                _config["JwtSettings:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
