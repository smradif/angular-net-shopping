using Api.Shopping.Catalogue.Models;
using Shopping.Interfaces.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Repositories.Json
{
    public class ProductsRepository : CommonRepository<Product>, IProductsRepository
    {
        public async Task<IEnumerable<Product>> GetProducts(string productKey)
        {
            key = productKey ?? "featured";
            return await GetAsync();
        }

        public async Task<Product> GetProduct(string productKey, string productId)
        {
            key = productKey;
            return await GetByIdAsync(productId);
        }
    }
}
