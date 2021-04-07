using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Interfaces.Repositories
{
    public interface INavigationRepository: ICommonRepository<NavigationItem>
    {
        Task<IEnumerable<NavigationItem>> GetItems();
    }
}
