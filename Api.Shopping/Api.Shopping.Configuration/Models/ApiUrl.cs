namespace Api.Shopping.Configuration.Models
{
    public class ApiUrl
    {
        public AuthApi Auth { get; set; }
        public CatalogueApi Catalogue { get; set; }
        public PaymentApi Payment { get; set; }
    }

    public class AuthApi
    {
        public string Authenticate { get; set; }
        public string Verify { get; set; }
        public string RefreshToken { get; set; }
        public string SignOut { get; set; }
    }

    public class CatalogueApi
    {
        public string Navigation { get; set; }
        public string Products { get; set; }
        public string Product { get; set; }
    }

    public class PaymentApi
    {
        public string Methods { get; set; }
        public string Cost { get; set; }
    }
}
