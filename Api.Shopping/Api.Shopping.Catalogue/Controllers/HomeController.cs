using Microsoft.AspNetCore.Mvc;

namespace Api.Shopping.Catalogue.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : BaseController
    {
        [HttpGet]
        public string Get()
        {
            return "Home";
        }
    }
}
