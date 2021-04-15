using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Interfaces.Repositories
{
    public interface IMenuRepository: ICommonRepository<NavigationItem>
    {
        Task<IEnumerable<NavigationItem>> GetItems();
    }
}
