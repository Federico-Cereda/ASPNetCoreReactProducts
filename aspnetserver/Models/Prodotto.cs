using System;
using System.Collections.Generic;

namespace aspnetserver.Models;

public partial class Prodotto
{
    public int Id { get; set; }

    public string Nome { get; set; } = null!;

    public string Prezzo { get; set; } = null!;

    public string Peso { get; set; } = null!;

    public int? IdMarca { get; set; }

    public int? IdCategoria { get; set; }

    public int? IdLifeStyle { get; set; }

    public int? IdGalleria { get; set; }

    public int? IdPromozione { get; set; }

    public int? IdInformazione { get; set; }

    public virtual Marca? IdMarcaNavigation { get; set; }
}
