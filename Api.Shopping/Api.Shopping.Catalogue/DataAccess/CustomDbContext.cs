using Microsoft.EntityFrameworkCore;

namespace Api.Shopping.Payment.DataAccess
{
    public class CustomDbContext : DbContext
    {
        private readonly string _connectionString;

        public CustomDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        public CustomDbContext(DbContextOptions options)
            : base(options)
        {
        }
    }
}

