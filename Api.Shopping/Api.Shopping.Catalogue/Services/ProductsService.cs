using Api.Shopping.Catalogue.Interfaces;
using Api.Shopping.Catalogue.Models;
using Shopping.Interfaces.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Shopping.Services
{
    public class ProductsService: IProductsService
    {
        private IProductsRepository repo;

        public ProductsService(IProductsRepository repo)
        {
            this.repo = repo;
        }

        public async Task<IEnumerable<Product>> GetProducts(string productKey)
        {
            return await repo.GetProducts(productKey);
    }

        public async Task<Product> GetProduct(string productKey, string productId)
        {
            return await repo.GetProduct(productKey, productId);
        }
    }
}
