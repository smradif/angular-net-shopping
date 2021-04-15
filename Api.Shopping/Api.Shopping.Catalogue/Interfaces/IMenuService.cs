using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Interfaces
{
    public interface IMenuService
    {
        Task<IEnumerable<NavigationItem>> GetItems();
    }
}
