using Api.Shopping.Configuration.Interfaces;
using Api.Shopping.Configuration.Models;
using System;

namespace Api.Shopping.Configuration.Services
{
    public class ConfigService: BaseService, IConfigService
    {
        private AppSettings appSettings;

        public ConfigService(AppSettings appSettings)
        {
            this.appSettings = appSettings;
        }


        public Config GetConfig()
        {
            return new Config
            {
                Apis = appSettings.ApiUrls,
                Copyright = GetCopyright(),
                SiteName = appSettings.SiteName,
                DefaultCurrency = appSettings.DefaultCurrency
            };
        }
        private string GetCopyright()
        {
            return $"{DateTime.Now.Year} - {appSettings.SiteName}";
        }
    }
}
