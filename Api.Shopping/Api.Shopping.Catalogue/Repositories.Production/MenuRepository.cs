using Api.Shopping.Catalogue.Interfaces.Repositories;
using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Repositories.Production
{
    public class MenuRepository : CommonRepository<NavigationItem>, IMenuRepository
    {
        public async Task<IEnumerable<NavigationItem>> GetItems()
        {
            return await GetAsync();
        }
    }
}
