using System.IO;

namespace Api.Shopping.Catalogue.Helpers
{
    public class FileHelper
    {
        public static string GetContentType(string file)
        {
            string extension = Path.GetExtension(file).ToLowerInvariant();
            switch (extension)
            {
                case ".txt": return "text/plain";
                case ".pdf": return "application/pdf";
                case ".doc": return "application/vnd.ms-word";
                case ".docx": return "application/vnd.ms-word";
                case ".xls": return "application/vnd.ms-excel";
                case ".xlsx": return "application/vnd.ms-excel";
                case ".png": return "image/png";
                case ".jpg": return "image/jpeg";
                case ".jpeg": return "image/jpeg";
                case ".gif": return "image/gif";
                case ".webp": return "image/webp";
                case ".csv": return "text/csv";
                default: return "";
            }
        }

        public static string BaseDirectory
        {
            get { return Directory.GetCurrentDirectory(); }
        }

        public static string GetImagesPath(string productKey)
        {
            return Path.Combine(BaseDirectory, "StaticFiles", "images", "products", productKey);
        }

        public static string GetFileNameFromUrl(string fileUrl)
        {
            return Path.GetFileName(fileUrl);
        }

        public static string GetFileExtension(string file)
        {
            return Path.GetExtension(file).ToLowerInvariant();
        }
    }
}
