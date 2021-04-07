using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Interfaces
{
    public interface IProductsService
    {
        Task<IEnumerable<Product>> GetProducts();

        Task<Product> GetProduct(string id);
    }
}
