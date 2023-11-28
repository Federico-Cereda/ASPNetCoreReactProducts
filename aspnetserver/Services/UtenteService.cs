using aspnetserver.Models;
using aspnetserver.Resources;
using Microsoft.EntityFrameworkCore;

namespace aspnetserver.Services
{
    public sealed class UtenteService : IUtenteService
    {
        private readonly CarrelloSpesaContext _context;
        private readonly string _pepper;
        private readonly int _iteration = 3;

        public UtenteService(CarrelloSpesaContext context)
        {
            _context = context;
            _pepper = Environment.GetEnvironmentVariable("PasswordHashExamplePepper");
        }

        public async Task<UtenteResource> Register(RegisterResource resource, CancellationToken cancellationToken)
        {
            var utente = new Utente
            {
                Username = resource.Username,
                Email = resource.Email,
                PasswordSalt = PasswordHasher.GenerateSalt(),
                IdRuolo = resource.IdRuolo
            };
            utente.PasswordHash = PasswordHasher.ComputeHash(resource.Password, utente.PasswordSalt, _pepper, _iteration);
            await _context.Utente.AddAsync(utente, cancellationToken);
            await _context.SaveChangesAsync(cancellationToken);

            return new UtenteResource(utente.Id, utente.Username, utente.Email, utente.IdRuolo);
        }

        public async Task<UtenteResource> Login(LoginResource resource, CancellationToken cancellationToken)
        {
            var utente = await _context.Utente.FirstOrDefaultAsync(x => x.Username == resource.Username, cancellationToken);
            
            if (utente == null) throw new Exception("Username or password did not match.");

            var passwordHash = PasswordHasher.ComputeHash(resource.Password,utente.PasswordSalt, utente.PasswordSalt,  _iteration);
            if(utente.PasswordHash != passwordHash) throw new Exception("Username or password did not match.");

            return new UtenteResource(utente.Id, utente.Username, utente.Email,utente.IdRuolo);
        }
    }
}
