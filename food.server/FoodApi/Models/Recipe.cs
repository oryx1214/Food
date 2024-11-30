public class Recipe
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public string Difficulty { get; set; }
    public string ImageUrl { get; set; }

    // Добавляем шаги рецепта
    public List<string> Steps { get; set; } = new List<string>();  // Шаги рецепта
}
