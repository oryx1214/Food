namespace FoodBackend.Models
{
    public class RecipeDto
    {
        public string Name { get; set; }
        public string Category { get; set; }
        public string Difficulty { get; set; }
        public string[] Steps { get; set; }
        public string ImageUrl { get; set; }
    }
}
