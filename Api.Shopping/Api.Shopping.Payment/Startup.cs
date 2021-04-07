using Api.Shopping.Authentication.Extensions;
using Api.Shopping.Common.Models;
using Api.Shopping.Payment.Extensions;
using Api.Shopping.Payment.Models;
using Autofac;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using System.IO;

namespace Api.Shopping.Payment
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            AppSettings = Configuration.GetSection(nameof(AppSettings)).Get<AppSettings>();
        }

        public IConfiguration Configuration { get; }

        public AppSettings AppSettings { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure(AppSettings);
        }

        public void ConfigureContainer(ContainerBuilder builder)
        {
            Extensions.ContainerExtensions.ConfigureContainer(builder, AppSettings);
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (AppSettings.IsDevelopment)
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint($"/swagger/{AppSettings.SwaggerVersion}/swagger.json", AppSettings.SwaggerName));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseStaticFiles();

            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), AppSettings.StaticFilesLocation)),
                RequestPath = new PathString($"/{AppSettings.StaticFilesLocation}")
            });

            app.UseCors(CommonConstants.ALLOW_SPECIFIC_ORIGINS);

            app.UseExceptionHandler(AppSettings.IsDevelopment);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
