using System.Collections.Generic;

namespace Api.Shopping.Configuration.Models
{
    public class Config
    {
        public IDictionary<string, IDictionary<string, string>> Apis { get; set; }
        public string Copyright { get; set; }
        public string SiteName { get; set; }
        public string DefaultCurrency { get; set; }
    }
}
