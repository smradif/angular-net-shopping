using Microsoft.AspNetCore.Mvc;

namespace Api.Shopping.Authentication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : BaseController
    {
        [HttpPost]
        [Route("/authenticate")]
        public string Authenticate(string userName, string password)
        {
            return "Authenticated";
        }

        [HttpPost]
        [Route("/refresh-token")]
        public string RefreshToken(string token, string refreshToken)
        {
            return "Refreshed";
        }

        [HttpPost]
        [Route("/verify")]
        public string Verify(string token)
        {
            return "Verify";
        }

        [HttpPost]
        [Route("/signout")]
        public string SignOut(string token)
        {
            return "Sign out";
        }
    }
}
