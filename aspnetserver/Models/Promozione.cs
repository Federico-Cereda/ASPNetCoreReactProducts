using System;
using System.Collections.Generic;

namespace aspnetserver.Models;

public partial class Promozione
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public int? Valore { get; set; }

    public DateTime? DataFine { get; set; }

    public virtual ICollection<Prodotto> Prodotto { get; set; } = new List<Prodotto>();
}
