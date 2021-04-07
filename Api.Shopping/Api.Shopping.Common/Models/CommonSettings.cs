namespace Api.Shopping.Common.Models
{
    public class CommonSettings
    {
        public string CorsAllowedOrigins { get; set; } = CommonConstants.ALLOW_SPECIFIC_ORIGINS;
        public string[] AllowedHosts { get; set; }
        public string SwaggerName { get; set; }
        public string SwaggerVersion { get; set; }
        public bool IsDevelopment { get; set; }
    }
}
