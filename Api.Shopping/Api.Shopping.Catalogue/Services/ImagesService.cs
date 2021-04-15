using Api.Shopping.Catalogue.Helpers;
using Api.Shopping.Catalogue.Interfaces;
using System.IO;
using System.Linq;

namespace Api.Shopping.Catalogue.Services
{
    public class ImagesService : BaseService, IImagesService
    {
        public (FileStream, string) GetImageStream(string productKey, string imageName)
        {
            var imagesPath = FileHelper.GetImagesPath(productKey);
            var directory = new DirectoryInfo(imagesPath);
            var file = directory.GetFiles().FirstOrDefault(f => f.Name.StartsWith(imageName + "."));
            var contentType = FileHelper.GetContentType(file.Name);
            return (File.OpenRead(file.FullName), contentType);
        }
    }
}
