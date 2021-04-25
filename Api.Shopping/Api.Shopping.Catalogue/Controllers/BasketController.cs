using Api.Shopping.Catalogue.Interfaces;
using Api.Shopping.Catalogue.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class BasketController : BaseController
    {
        private IBasketService service;

        public BasketController(IBasketService service)
        {
            this.service = service;
        }

        [HttpPost]
        public async Task<IEnumerable<Product>> Get(IEnumerable<Product> products)
        {
            return await service.Get(products);
        }
    }
}
