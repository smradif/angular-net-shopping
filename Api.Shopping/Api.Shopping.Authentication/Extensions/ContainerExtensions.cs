using Api.Shopping.Authentication.Controllers;
using Api.Shopping.Authentication.Models;
using Api.Shopping.Common.Extensions;
using Api.Shopping.Common.Models;
using Autofac;
using System.Linq;

namespace Api.Shopping.Authentication.Extensions
{
    public static class ContainerExtensions
    {
        private static ContainerBuilder builder;
        private static AppSettings appSettings;

        public static void ConfigureContainer(ContainerBuilder containerBuilder, AppSettings settings)
        {
            builder = containerBuilder;
            appSettings = settings;

            RegisterProperties();
            RegsiterServices();
            RegisterSettings();
        }

        private static void RegisterProperties()
        {
            var controllersTypesInAssembly = typeof(Startup).Assembly.GetExportedTypes()
             .Where(type => typeof(BaseController).IsAssignableFrom(type)).ToArray();

            builder.RegisterTypes(controllersTypesInAssembly).PropertiesAutowired();
        }

        private static void RegsiterServices()
        {
            builder.RegisterAssemblyTypes(typeof(BaseController).Assembly)
                .Where(t => t.IsService())
                .AsImplementedInterfaces();

            builder.RegisterAssemblyTypes(typeof(Common.Services.BaseService).Assembly)
               .Where(t => t.IsService())
               .AsImplementedInterfaces();
        }

        private static void RegisterSettings()
        {
            var commonSettings = new CommonSettings
            {
                AllowedHosts = appSettings.AllowedHosts,
                SwaggerName = appSettings.SwaggerName,
                SwaggerVersion = appSettings.SwaggerVersion,
                IsDevelopment = appSettings.IsDevelopment
            };

            builder.RegisterInstance(appSettings);
            builder.RegisterInstance(commonSettings);
        }
    }
}
