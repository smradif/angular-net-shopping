using Api.Shopping.Authentication.Models;
using System.Security.Claims;

namespace Api.Shopping.Authentication.Interfaces
{
    public interface IJwtService
    {
        string GenerateAccessToken(JwtUser user, params Claim[] customClaims);
        string GenerateRefreshToken(JwtUser user);
        bool ValidateToken(string token);
    }
}
