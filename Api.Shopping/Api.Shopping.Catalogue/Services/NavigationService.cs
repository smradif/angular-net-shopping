using Api.Shopping.Catalogue.Interfaces;
using Api.Shopping.Catalogue.Interfaces.Repositories;
using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Services
{
    public class NavigationService : BaseService, INavigationService
    {
        private INavigationRepository repo;

        public NavigationService(INavigationRepository repo)
        {
            this.repo = repo;
        }

        public async Task<IEnumerable<NavigationItem>> GetItems()
        {
            return await repo.GetItems();
        }
    }
}
