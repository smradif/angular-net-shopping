using Api.Shopping.Catalogue.Models;
using Shopping.Interfaces.Repositories;

namespace Api.Shopping.Catalogue.Repositories.Production
{
    public class ProductsRepository : CommonRepository<Product>, IProductsRepository
    {
    }
}
