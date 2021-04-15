using Api.Shopping.Common.Models;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;
using System.Text.Json;

namespace Api.Shopping.Common.Extensions
{
    public static class ServiceExtensions
    {
        public static void ConfigureCommon(this IServiceCollection services, CommonSettings settings)
        {
            services.ConfigureCors(settings);
            services.ConfigureControllers();
            services.ConfigureSwagger(settings);
        }
       
        private static void ConfigureCors(this IServiceCollection services, CommonSettings settings)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(settings.CorsAllowedOrigins, builder =>
                {
                    builder.WithOrigins(settings.AllowedHosts)
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .WithExposedHeaders("Content-Disposition");
                });
            });
        }

        private static void ConfigureControllers(this IServiceCollection services)
        {
            services.AddControllers().AddJsonOptions(options =>
            {
                options.JsonSerializerOptions.IgnoreNullValues = true;
                options.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
                options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
            });
        }

        private static void ConfigureSwagger(this IServiceCollection services, CommonSettings settings)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc(settings.SwaggerVersion, new OpenApiInfo { Title = settings.SwaggerName, Version = settings.SwaggerVersion });
            });
        }
    }
}
