using Api.Shopping.Catalogue.Interfaces;
using Api.Shopping.Catalogue.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Api.Shopping.Catalogue.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MenuController : BaseController
    {
        private IMenuService service;

        public MenuController(IMenuService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<IEnumerable<NavigationItem>> Get()
        {
            return await service.GetItems();
        }
    }
}
