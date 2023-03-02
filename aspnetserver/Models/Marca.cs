using System;
using System.Collections.Generic;

namespace aspnetserver.Models;

public partial class Marca
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public virtual ICollection<Prodotto> Prodotto { get; } = new List<Prodotto>();
}
