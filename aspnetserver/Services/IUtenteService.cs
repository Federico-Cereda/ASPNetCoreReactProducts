using aspnetserver.Resources;

namespace aspnetserver.Services
{
    public interface IUtenteService
    {
        Task<UtenteResource> Register(RegisterResource resource);
        Task<UtenteResource> Login(LoginResource resource);
        string GenerateToken(UtenteResource user);
    }
}
