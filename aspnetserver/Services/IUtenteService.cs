using aspnetserver.Resources;

namespace aspnetserver.Services
{
    public interface IUtenteService
    {
        Task<UtenteResource> Register(RegisterResource resource, CancellationToken cancellationToken);
        Task<UtenteResource> Login(LoginResource resource, CancellationToken cancellationToken);
    }
}
