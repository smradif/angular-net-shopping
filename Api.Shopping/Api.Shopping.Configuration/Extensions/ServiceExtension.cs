using Api.Shopping.Common.Extensions;
using Api.Shopping.Common.Models;
using Api.Shopping.Configuration.Models;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Shopping.Configuration.Extensions
{
    public static class ServiceExtensions
    {
        public static void Configure(this IServiceCollection services, AppSettings settings)
        {
            services.ConfigureCommonServices(settings);
            services.AddAuthorization();
        }

        private static void ConfigureCommonServices(this IServiceCollection services, AppSettings settings)
        {
            var commonSettings = new CommonSettings
            {
                AllowedHosts = settings.AllowedHosts,
                SwaggerName = settings.SwaggerName,
                SwaggerVersion = settings.SwaggerVersion
            };
            services.ConfigureCommon(commonSettings);
        }
    }
}
