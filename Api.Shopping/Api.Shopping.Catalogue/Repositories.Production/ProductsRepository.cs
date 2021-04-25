using Api.Shopping.Catalogue.Models;
using Shopping.Interfaces.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Repositories.Production
{
    public class ProductsRepository : CommonRepository<Product>, IProductsRepository
    {
        public async Task<IEnumerable<Product>> GetProducts(string productKey)
        {
            throw new System.NotImplementedException();
        }

        public async Task<IEnumerable<Product>> GetProducts(IEnumerable<Product> products)
        {
            throw new System.NotImplementedException();
        }

        public async Task<Product> GetProduct(string productKey, string productId)
        {
            throw new System.NotImplementedException();
        }
    }
}
