
namespace Api.Shopping.Catalogue.Models
{
    public class AppSettings
    {
        public string[] AllowedHosts { get; set; }
        public string ApiHost { get; set; }
        public bool IsDevelopment { get; set; }
        public bool UseProductionData { get; set; }
        public string SwaggerName { get; set; }
        public string SwaggerVersion { get; set; }
        public string StaticFilesLocation { get; set; }
        public string ProductsImagesLocation { get; set; }
    }
}
