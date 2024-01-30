using aspnetserver.Models;
using aspnetserver.Resources;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace aspnetserver.Services
{
    public sealed class TokenService : ITokenService
    {
        private readonly CarrelloSpesaContext _context;
        private readonly IConfiguration _configuration;

        public TokenService(CarrelloSpesaContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<Token> GenerateToken(UtenteResource user)
        {
            var token = new Token();
            token.Expiration = DateTime.Now.AddMinutes(15);

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JwtSettings:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.IdRuolo.ToString())
            };

            var accessToken = new JwtSecurityToken(_configuration["JwtSettings:Issuer"],
                _configuration["JwtSettings:Audience"],
                claims,
                expires: token.Expiration,
                signingCredentials: credentials);

            token.AccessToken = new JwtSecurityTokenHandler().WriteToken(accessToken);
            token.RefreshToken = GenerateRefreshToken();

            await _context.Token.AddAsync(token);
            await _context.SaveChangesAsync();

            return token;
        }

        public string GenerateRefreshToken()
        {
            byte[] number = new byte[32];
            using (RandomNumberGenerator random = RandomNumberGenerator.Create())
            {
                random.GetBytes(number);
                return Convert.ToBase64String(number);
            }
        }

        public async Task<Token> RefreshToken(Token token)
        {
            if (token.Expiration > DateTime.Now)
            {
                var response = await _context.Token.AsNoTracking().FirstOrDefaultAsync(x => x.AccessToken == token.AccessToken);
                if (response == null) throw new Exception("Invalid token.");
                
                var refreshToken = GenerateRefreshToken();
                token.RefreshToken = refreshToken;
                token.Expiration = DateTime.Now.AddMinutes(15);
                
                _context.Token.Update(token);
                await _context.SaveChangesAsync();
            } else
            {
                throw new Exception("Refresh token expired.");
            }

            return token;
        }
    }
}
