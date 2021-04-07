using Api.Shopping.Catalogue.Interfaces.Repositories;
using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Repositories.Json
{
    public class NavigationRepository : CommonRepository<NavigationItem>, INavigationRepository
    {
        public async Task<IEnumerable<NavigationItem>> GetItems()
        {
            key = "navigation-items";
            return await GetAsync();
        }
    }
}
