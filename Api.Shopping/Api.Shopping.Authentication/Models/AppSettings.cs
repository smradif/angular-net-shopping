namespace Api.Shopping.Authentication.Models
{
    public class AppSettings
    {
        public string[] AllowedHosts { get; set; }
        public string ApiHost { get; set; }
        public JwtSettings JwtSettings { get; set; }
        public bool IsDevelopment { get; set; }
        public string SwaggerName { get; set; }
        public string SwaggerVersion { get; set; }
    }
}
