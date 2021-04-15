using Api.Shopping.Common.Extensions;
using Api.Shopping.Common.Models;
using Api.Shopping.Configuration.Extensions;
using Api.Shopping.Configuration.Models;
using Autofac;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Api.Shopping.Configuration
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
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Api.Shopping.Configuration v1"));
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
