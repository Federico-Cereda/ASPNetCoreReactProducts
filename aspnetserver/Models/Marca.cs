using System.ComponentModel.DataAnnotations;

namespace aspnetserver.Models
{
    public class Marca
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
    }
}
