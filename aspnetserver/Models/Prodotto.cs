using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Models
{
    public class Prodotto
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public double Prezzo { get; set; }
        public double Peso { get; set; }
        public int IdMarca { get; set; }
        public int IdCategoria { get; set; }
        public int IdLifeStyle { get; set; }
        public int IdGalleria { get; set; }
        public int IdPromozione { get; set; }
        public int IdInformazione { get; set; }
    }
}
