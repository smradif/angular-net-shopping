using Api.Shopping.Catalogue.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Interfaces
{
    public interface IBasketService
    {
        Task<IEnumerable<Product>> Get(IEnumerable<Product> products);
    }
}
