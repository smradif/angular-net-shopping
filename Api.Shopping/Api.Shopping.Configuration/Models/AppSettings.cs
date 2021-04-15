using System.Collections.Generic;

namespace Api.Shopping.Configuration.Models
{
    public class AppSettings
    {
        public IDictionary<string, IDictionary<string, string>> ApiUrls { get; set; }
        public string[] AllowedHosts { get; set; }
        public string ApiHost { get; set; }
        public string SwaggerName { get; set; }
        public string SwaggerVersion { get; set; }
        public bool IsDevelopment { get; set; }
        public string SiteName { get; set; }
        public string DefaultCurrency { get; set; }
    }
}
