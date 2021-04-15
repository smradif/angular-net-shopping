using System.IO;

namespace Api.Shopping.Catalogue.Interfaces
{
    public interface IImagesService
    {
        (FileStream, string) GetImageStream(string productKey, string imageName);
    }
}
