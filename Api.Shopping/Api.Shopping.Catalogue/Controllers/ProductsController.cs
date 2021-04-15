using Api.Shopping.Catalogue.Interfaces;
using Api.Shopping.Catalogue.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ProductsController : BaseController
    {
        private IProductsService service;

        public ProductsController(IProductsService service)
        {
            this.service = service;
        }

        [HttpGet]
        [Route(ApiConstants.PRODUCTS_GET)]
        public async Task<IEnumerable<Product>> Get(string key = null)
        {
            return await service.GetProducts(key);
        }

        [HttpGet]
        [Route(ApiConstants.PRODUCT_GET)]
        public async Task<Product> GetProduct(string key, string id)
        {
            return await service.GetProduct(key, id);
        }
    }
}
