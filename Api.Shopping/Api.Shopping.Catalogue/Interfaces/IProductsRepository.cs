using Api.Shopping.Catalogue.Interfaces;
using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Shopping.Interfaces.Repositories
{
    public interface IProductsRepository : ICommonRepository<Product>
    {
        Task<IEnumerable<Product>> GetProducts(string productKey);
        Task<Product> GetProduct(string productKey, string productId);
    }
}
