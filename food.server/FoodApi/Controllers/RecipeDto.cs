namespace FoodBackend.Controllers
{
    public class RecipeDto
    {
        public string ImageUrl { get; internal set; }
        public object?[] Steps { get; internal set; }
        public string Difficulty { get; internal set; }
        public string Category { get; internal set; }
        public string Name { get; internal set; }
    }
}