using Api.Shopping.Catalogue.Models;
using Shopping.Interfaces.Repositories;
using System.Collections.Generic;
using System.Linq;
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
            var data = productId.Split("-", System.StringSplitOptions.TrimEntries);
            return (await GetAsync(t => t.Name == data.First() && t.Description.Colour == data.Last())).First();
        }
    }
}
