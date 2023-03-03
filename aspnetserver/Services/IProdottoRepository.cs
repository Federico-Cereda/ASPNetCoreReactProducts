using aspnetserver.Models;
using Microsoft.AspNetCore.Mvc;

namespace aspnetserver.Services
{
    public interface IProdottoRepository
    {
        Task<ActionResult<List<Prodotto>>> Get();

    }
}
