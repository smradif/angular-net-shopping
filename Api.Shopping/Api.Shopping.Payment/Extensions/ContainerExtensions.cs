using Api.Shopping.Common.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Autofac;
using Api.Shopping.Payment.Models;
using Api.Shopping.Payment.Controllers;
using Api.Shopping.Common.Extensions;
using Microsoft.AspNetCore.Http;

namespace Api.Shopping.Payment.Extensions
{
    public static class ContainerExtensions
    {
        private static ContainerBuilder builder;

        public static void ConfigureContainer(ContainerBuilder containerBuilder, AppSettings appSettings)
        {
            builder = containerBuilder;
            RegisterForThisAssembly();
            RegsiterServices();
            RegisterSettings(appSettings);
        }

        private static void RegisterForThisAssembly()
        {
            var controllersTypesInAssembly = typeof(Startup).Assembly.GetExportedTypes()
             .Where(type => typeof(ControllerBase).IsAssignableFrom(type)).ToArray();
            builder.RegisterTypes(controllersTypesInAssembly).PropertiesAutowired();

            builder.RegisterType<HttpContextAccessor>()
               .As<IHttpContextAccessor>()
               .SingleInstance();
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

        private static void RegisterSettings(AppSettings appSettings)
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
