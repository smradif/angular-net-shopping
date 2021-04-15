using Api.Shopping.Authentication.Extensions;
using Api.Shopping.Authentication.Models;
using Api.Shopping.Common.Extensions;
using Api.Shopping.Common.Models;
using Autofac;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Api.Shopping.Authentication
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

            app.UseCors(CommonConstants.ALLOW_SPECIFIC_ORIGINS);

            app.UseExceptionHandler(AppSettings.IsDevelopment);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
