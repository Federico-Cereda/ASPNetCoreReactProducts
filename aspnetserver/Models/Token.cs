namespace aspnetserver.Models
{
    public sealed partial class Token
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set;}
        public DateTime Expiration { get; set; }
    }
}
