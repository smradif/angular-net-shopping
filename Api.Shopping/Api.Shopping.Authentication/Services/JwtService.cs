using Api.Shopping.Authentication.Interfaces;
using Api.Shopping.Authentication.Models;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Api.Shopping.Authentication.Services
{
    public class JwtService: IJwtService
    {
        private readonly JwtSettings jwtSettings;

        public JwtService(JwtSettings jwtSettings)
        {
            this.jwtSettings = jwtSettings;
        }

        public string GenerateAccessToken(JwtUser user, params Claim[] customClaims)
        {
            var claims = new List<Claim>
            {
                new Claim(CustomClaimType.Id, user.Id)
            };
            if (customClaims != null)
            {
                claims.AddRange(customClaims);
            }
            var claimsIdentity = new ClaimsIdentity(claims, "Custom");

            return GetToken(DateTime.Now.AddMinutes(jwtSettings.AccessTokenExpiry), claimsIdentity.Claims);
        }

        public string GenerateRefreshToken(JwtUser user)
        {
            var claimsIdentity = new ClaimsIdentity(new List<Claim>()
            {
                new Claim(CustomClaimType.Id, user.Id),
                new Claim(CustomClaimType.Email, user.UserName)
            }, "Custom");

            var expiry = DateTime.Now.AddDays(jwtSettings.RefreshTokenExpiry);
            return GetToken(expiry, claimsIdentity.Claims);
        }

        private string GetToken(DateTime expireIn, IEnumerable<Claim> claims = null)
        {
            var jwtToken = new JwtSecurityToken(
                issuer: jwtSettings.ValidIssuer,
                audience: jwtSettings.ValidAudience,
                claims: claims,
                notBefore: new DateTimeOffset(DateTime.Now).DateTime,
                expires: expireIn,
                signingCredentials: GetSigningCredentials()
            );
            return new JwtSecurityTokenHandler().WriteToken(jwtToken);
        }

        public TokenValidationParameters GetTokenValidationParameters()
        {
            if (jwtSettings.IsDevelopment)
            {
                return GetTokenValidationParametersForSecretKey();
            }
            return GetTokenValidationParametersForCertificate();
        }

        public TokenValidationParameters GetTokenValidationParametersForSecretKey()
        {
            var securityKey = jwtSettings.SecretKey;
            var key = Encoding.ASCII.GetBytes(securityKey);
            return new TokenValidationParameters
            {
                ValidIssuer = jwtSettings.ValidIssuer,
                ValidAudience = jwtSettings.ValidAudience,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ClockSkew = TimeSpan.Zero,
                ValidateIssuer = true,
                ValidateAudience = false,
                ValidateLifetime = true,
            };
        }

        public TokenValidationParameters GetTokenValidationParametersForCertificate()
        {
            var keyFilePath = jwtSettings.KeyFilePath;
            var x509SecurityKey = new X509SecurityKey(new X509Certificate2(keyFilePath, "",
                X509KeyStorageFlags.MachineKeySet));

            return new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                //Same Secret key will be used while creating the token
                IssuerSigningKey = x509SecurityKey,
                ValidateIssuer = true,
                ValidIssuer = jwtSettings.ValidIssuer,
                ValidateAudience = false,
                ValidAudience = jwtSettings.ValidAudience,
                ValidateLifetime = true,
                ClockSkew = TimeSpan.Zero
            };
        }

        public bool ValidateToken(string token)
        {
            var tokenValidationParams = GetTokenValidationParameters();

            var tokenHandler = new JwtSecurityTokenHandler();
            try
            {
                tokenHandler.ValidateToken(token, tokenValidationParams, out SecurityToken validatedToken);
            }
            catch
            {
                return false;
            }
            return true;
        }

        private SigningCredentials GetSigningCredentials()
        {
            if (jwtSettings.IsDevelopment)
            {
                var securityKey = jwtSettings.SecretKey;
                var key = Encoding.ASCII.GetBytes(securityKey);
                return new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature);
            }

            var keyFilePath = jwtSettings.KeyFilePath;
            var cert = new X509Certificate2(new X509Certificate2(keyFilePath, "", X509KeyStorageFlags.MachineKeySet));
            return new X509SigningCredentials(cert);
        }
    }

    public class CustomClaimType
    {
        public const string Id = "Id";
        public const string Email = "Email";
    }
}
