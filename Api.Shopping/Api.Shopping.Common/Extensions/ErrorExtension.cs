using Api.Shopping.Common.Interfaces;
using Api.Shopping.Common.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using Newtonsoft.Json;
using System;
using System.Net;

namespace Api.Shopping.Authentication.Extensions
{
    public static class ErrorExtension
    {
        public static IApplicationBuilder UseExceptionHandler(this IApplicationBuilder app, bool isDevelopment)
        {
            return app.UseExceptionHandler(appError =>
            {
                appError.Run(async context =>
                {
                    context.Response.ContentType = "application/json";

                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();

                    if (contextFeature != null)
                    {
                        var exception = (contextFeature.Error as ApiException) ?? contextFeature.Error;

                        var loggerService = context.RequestServices.GetService(typeof(ILoggerService)) as ILoggerService;

                        loggerService.Log(exception);

                        var statusCode = (int)HttpStatusCode.InternalServerError;

                        await context.Response.WriteAsync(JsonConvert.SerializeObject(new
                        {
                            code = statusCode.ToString(),
                            message = GetMessage(exception),
                            stackTrace = isDevelopment ? exception?.StackTrace : null
                        }));
                    }
                });
            });
        }

        private static string GetMessage(Exception shoppingException)
        {
            if (shoppingException != null)
            {
                return shoppingException.Message;
            }
            return "The application has encountered an unknown error. \n " + "Please try again later";
        }
    }
}
