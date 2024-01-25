using aspnetserver.Models;
using aspnetserver.Resources;

namespace aspnetserver.Services
{
    public interface ITokenService
    {
        Task<Token> GenerateToken(UtenteResource user);
        string GenerateRefreshToken();
        Task<Token> RefreshToken(Token token);
    }
}
