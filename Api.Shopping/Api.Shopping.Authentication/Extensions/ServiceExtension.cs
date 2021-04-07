using Api.Shopping.Authentication.Models;
using Api.Shopping.Authentication.Services;
using Api.Shopping.Common.Extensions;
using Api.Shopping.Common.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Shopping.Authentication.Extensions
{
    public static class ServiceExtensions
    {
        public static void Configure(this IServiceCollection services, AppSettings settings)
        {
            services.ConfigureCommonServices(settings);
            services.AddAuthorization();
            services.ConfigureJwt(settings);
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

        private static void ConfigureJwt(this IServiceCollection services, AppSettings settings)
        {
            var jwtService = new JwtService(settings.JwtSettings);
            services.AddAuthentication(auth =>
            {
                auth.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                auth.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(opt =>
            {
                opt.RequireHttpsMetadata = false;
                opt.SaveToken = true;
                opt.TokenValidationParameters = jwtService.GetTokenValidationParameters();
            });

        }
    }
}
