using Api.Shopping.Authentication.Interfaces;
using Api.Shopping.Authentication.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Shopping.Authentication.Services
{
    public class TokenService: ITokenService
    {
        private readonly IUsersService userService;

        public TokenService(IUsersService userService)
        {
            this.userService = userService;
        }

        public async Task<bool> HasClaimsAsync(string id, string[] claims)
        {
            var user = await FindByIdAsync(id);
            if (user != null)
            {
                var allClaims = await GetClaimsAsync(user);
                return allClaims
                    .Any(x => claims.Contains(x.Type));
            }
            return false;
        }

        private async Task<User> FindByIdAsync(string id)
        {
            var result = await userService.FindByIdAsync(id);
            return result;
        }

        private async Task<IEnumerable<Claim>> GetClaimsAsync(User user)
        {
            return await userService.GetClaimsAsync(user);
        }
    }
}
