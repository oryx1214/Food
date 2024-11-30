using Microsoft.EntityFrameworkCore;
using FoodBackend.Models;

namespace FoodBackend.Data
{
    public class FoodContext : DbContext
    {
        public FoodContext(DbContextOptions<FoodContext> options) : base(options) { }

        public DbSet<Recipe> Recipes { get; set; }
    }
}
