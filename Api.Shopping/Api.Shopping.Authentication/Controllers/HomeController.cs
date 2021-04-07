using Microsoft.AspNetCore.Mvc;

namespace Api.Shopping.Authentication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : BaseController
    {
        [HttpGet]
        [Route("/")]
        public string Get()
        {
            return "Authenticated";
        }
    }
}
