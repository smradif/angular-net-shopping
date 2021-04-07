using System.Threading.Tasks;

namespace Api.Shopping.Authentication.Interfaces
{
    public interface ITokenService
    {
        Task<bool> HasClaimsAsync(string id, string[] claims);
    }
}
