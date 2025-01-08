using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;

namespace PaymentAPI.Models
{
    public class PaymentDetailContext : DbContext
    {
        public PaymentDetailContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<PaymentDetail> PaymentDetails { get; set;} 
    }
}
