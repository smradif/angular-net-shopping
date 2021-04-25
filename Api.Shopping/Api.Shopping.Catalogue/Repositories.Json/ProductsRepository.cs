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

        public async Task<IEnumerable<Product>> GetProducts(IEnumerable<Product> products)
        {
            var tasks = new List<Task<Product>>();

            foreach(var product in products)
            {
                var task = Task.Run(async () => {
                    key = product.ProductKey;
                    var products = await GetAsync();
                    return products.First(p => p.Id == product.Id);
                });
                tasks.Add(task);
            }

            await Task.WhenAll(tasks);
            return tasks.Select(t => t.Result);
        }

        public async Task<Product> GetProduct(string productKey, string productId)
        {
            key = productKey;
            var data = productId.Split("-", System.StringSplitOptions.TrimEntries);
            return (await GetAsync(t => t.Name == data.First() && t.Description.Colour == data.Last())).First();
        }
    }
}
