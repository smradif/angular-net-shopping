
namespace Api.Shopping.Authentication.Models
{
    public class JwtSettings
    {
        public string TokenIssuer { get; set; }
        public string SecretKey { get; set; }
        public int AccessTokenExpiry { get; set; }
        public int RefreshTokenExpiry { get; set; }
        public string ValidIssuer { get; set; }
        public string ValidAudience { get; set; }
        public string KeyFilePath { get; set; }
        public bool IsDevelopment { get; set; }
    }
}
