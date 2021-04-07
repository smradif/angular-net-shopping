using Api.Shopping.Authentication.Models;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Shopping.Authentication.Interfaces
{
    public interface IUsersService
    {
        Task<User> FindByIdAsync(string id);

        Task<IEnumerable<Claim>> GetClaimsAsync(User user);
    }
}
