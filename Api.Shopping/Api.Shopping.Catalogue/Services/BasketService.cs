using Api.Shopping.Catalogue.Interfaces;
using Api.Shopping.Catalogue.Models;
using Shopping.Interfaces.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Shopping.Services
{
    public class BasketService: IBasketService
    {
        private IProductsRepository repo;

        public BasketService(IProductsRepository repo)
        {
            this.repo = repo;
        }

        public async Task<IEnumerable<Product>> Get(IEnumerable<Product> products)
        {
            return await repo.GetProducts(products);
        }
    
    }
}
