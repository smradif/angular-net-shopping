namespace Api.Shopping.Authentication.Models
{
    public class User: BaseModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }
}
