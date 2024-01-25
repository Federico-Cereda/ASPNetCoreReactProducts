namespace aspnetserver.Models
{
    public sealed partial class Utente
    {
        public int Id { get; set; }
        public string Username { get; set; } = null!;
        public string Email { get; set; } = null!;
        public string PasswordSalt { get; set; } = null!;
        public string PasswordHash { get; set; } = null!;
        public int IdRuolo { get; set; }
    }
}
