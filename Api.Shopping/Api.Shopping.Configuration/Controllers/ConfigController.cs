using Api.Shopping.Configuration.Interfaces;
using Api.Shopping.Configuration.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Api.Shopping.Configuration.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConfigController : BaseController
    {
        private IConfigService service;

        public ConfigController(IConfigService service)
        {
            this.service = service;
        }

        [HttpGet]
        public Config Get()
        {
            return service.GetConfig();
        }
    }
}
