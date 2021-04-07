using Api.Shopping.Catalogue.Controllers;
using Api.Shopping.Catalogue.Models;
using Api.Shopping.Common.Models;
using Api.Shopping.Common.Extensions;
using Autofac;
using System;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace Api.Shopping.Catalogue.Extensions
{
    public static class ContainerExtensions
    {
        private static ContainerBuilder builder;
        private static AppSettings appSettings;

        public static void ConfigureContainer(ContainerBuilder containerBuilder, AppSettings setttings)
        {
            builder = containerBuilder;
            appSettings = setttings;

            RegisterProperties();
            RegsiterServices();
            RegisterSettings();
        }

        private static void RegisterProperties()
        {
            var controllersTypesInAssembly = typeof(Startup).Assembly.GetExportedTypes()
             .Where(type => typeof(BaseController).IsAssignableFrom(type)).ToArray();

            builder.RegisterTypes(controllersTypesInAssembly).PropertiesAutowired();

            builder.RegisterType<HttpContextAccessor>()
              .As<IHttpContextAccessor>()
              .SingleInstance();
        }

        private static void RegsiterServices()
        {
            builder.RegisterAssemblyTypes(typeof(BaseController).Assembly)
                .Where(t => t.IsService() || IsRepository(t))
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

        private static bool IsRepository(Type t)
        {
            if (appSettings.UseProductionData)
            {
                return t.IsRepository(nameof(Repositories.Production));
            }
            return t.IsRepository(nameof(Repositories.Json));
        }
    }
}
