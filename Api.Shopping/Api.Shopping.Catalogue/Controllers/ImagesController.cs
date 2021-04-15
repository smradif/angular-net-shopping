using Api.Shopping.Catalogue.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Shopping.Catalogue.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ImagesController : BaseController
    {
        private IImagesService service;

        public ImagesController(IImagesService service)
        {
            this.service = service;
        }

        [HttpGet]
        [Route("{productKey}/{imageName}")]
        public IActionResult Get(string productKey, string imageName)
        {
            var (image, contentType) = service.GetImageStream(productKey, imageName);
            return File(image, contentType);
        }
    }
}
