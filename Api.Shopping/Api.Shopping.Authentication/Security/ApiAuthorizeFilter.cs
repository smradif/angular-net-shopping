using Api.Shopping.Authentication.Interfaces;
using Api.Shopping.Authentication.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Shopping.Authentication.Security
{
    public class AuthorizeAttribute : TypeFilterAttribute
    {
        public AuthorizeAttribute() : base(typeof(ApiAuthorizeFilter))
        {
            IsReusable = false;
        }

        public AuthorizeAttribute(params string[] claims) : base(typeof(ApiAuthorizeFilter))
        {
            IsReusable = false;
            Arguments = new object[] { claims };
        }
    }

    public class ApiAuthorizeFilter : IAsyncAuthorizationFilter
    {
        private string[] claims;
        public ApiAuthorizeFilter(string[] claims)
        {
            this.claims = claims;
        }
        async Task IAsyncAuthorizationFilter.OnAuthorizationAsync(AuthorizationFilterContext context)
        {
            try
            {
                var IsAuthenticated = context.HttpContext.User.Identity.IsAuthenticated;
                if (IsAuthenticated)
                {
                    if (claims != null && claims.Length > 0)
                    {
                        var claimsIndentity = context.HttpContext.User.Identity as ClaimsIdentity;
                        var userIdClaim = claimsIndentity.Claims.FirstOrDefault(c => c.Type == CustomClaimType.Id);

                        var tokenService = context.HttpContext.RequestServices.GetService<ITokenService>();
                        var hasClaims = await tokenService.HasClaimsAsync(userIdClaim.Value, GetClaims(claims, context));
                        if (!hasClaims)
                        {
                            context.Result = new UnauthorizedResult();
                        }
                    }
                }
                else
                {
                    context.Result = new UnauthorizedResult();
                }
            }
            catch (Exception)
            {
                context.Result = new UnauthorizedResult();
            }
            await Task.CompletedTask;
        }

        private static string[] GetClaims(string[] claims, AuthorizationFilterContext context)
        {
            return claims;
        }
    }
}
