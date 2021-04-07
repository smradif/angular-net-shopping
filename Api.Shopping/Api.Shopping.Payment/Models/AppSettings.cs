using System.Collections.Generic;

namespace Api.Shopping.Payment.Models
{
    public class AppSettings
    {
        public string[] AllowedHosts { get; set; }
        public string ApiHost { get; set; }
        public bool IsDevelopment { get; set; }
        public string ImagesPath { get; set; }
        public string SwaggerName { get; set; }
        public string SwaggerVersion { get; set; }
        public string StaticFilesLocation { get; set; }
        public PaymentMethods PaymentMethods { get; set; }
    }

    public class PaymentMethods : Dictionary<string, PaymentMethod>
    {
    }

    public class PaymentMethod
    {
        public double Fee { get; set; }
        public string Title { get; set; }
        public string Logo { get; set; }
    }
}
