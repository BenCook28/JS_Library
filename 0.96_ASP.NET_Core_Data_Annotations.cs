// In a Models folder file:

using Microsoft.EntityFrameworkCore;  
// gives us access to DbContext

namespace ForgingAhead.Models
{
    public class ApplicatoinDbContext : DbContext
    {
        public DbSet<Character> Characters { get; set; }
    }
}

// DbSet represents an individual database table or view.