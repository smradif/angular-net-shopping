using Api.Shopping.Authentication.Interfaces;
using Api.Shopping.Authentication.Models;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Shopping.Authentication.Services
{
    public class UsersService: IUsersService
    {
        public async Task<User> FindByIdAsync(string id)
        {
            return await Task.Run(() => new User());
        }

        public async Task<IEnumerable<Claim>> GetClaimsAsync(User user)
        {
            return await Task.Run(() => new List<Claim>());
        }
    }
}
