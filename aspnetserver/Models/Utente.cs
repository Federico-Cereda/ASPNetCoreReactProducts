namespace aspnetserver.Models
{
    public sealed class Utente
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string PasswordSalt { get; set; }
        public string PasswordHash { get; set; }
        //public int IdRuolo { get; set; }

    }
}
