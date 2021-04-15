using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Interfaces
{
    public interface IProductsService
    {
        Task<IEnumerable<Product>> GetProducts(string productKey);

        Task<Product> GetProduct(string productKey, string productId);
    }
}
