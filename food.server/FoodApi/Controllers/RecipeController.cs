using Azure.Storage.Blobs;
using Azure.Storage.Blobs.Models;
using FoodBackend.Data;
using FoodBackend.Models;
using FoodBackend.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace FoodBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecipeController : ControllerBase
    {
        private readonly FoodContext _context;
        private readonly BlobService _blobService;

        public RecipeController(FoodContext context, BlobService blobService)
        {
            _context = context;
            _blobService = blobService;
        }

        // Получить все рецепты
        [HttpGet]
        public IActionResult GetAllRecipes()
        {
            return Ok(_context.Recipes.ToList());
        }

        // Получить рецепт по id
        [HttpGet("{id}")]
        public IActionResult GetRecipeById(int id)
        {
            var recipe = _context.Recipes.FirstOrDefault(r => r.Id == id);
            if (recipe == null)
                return NotFound();
            return Ok(recipe);
        }

        // Добавить новый рецепт
        [HttpPost]
        public async Task<IActionResult> CreateRecipe([FromForm] Recipe recipe, IFormFile imageFile)
        {
            // Загрузка изображения в Azure Blob Storage
            if (imageFile != null)
            {
                var imageUrl = await _blobService.UploadImageAsync(imageFile.OpenReadStream(), imageFile.FileName);
                recipe.ImageUrl = imageUrl;
            }

            // Добавление рецепта в базу данных
            _context.Recipes.Add(recipe);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRecipeById), new { id = recipe.Id }, recipe);
        }

        // Обновить рецепт
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateRecipe(int id, [FromForm] Recipe recipe, IFormFile imageFile)
        {
            var existingRecipe = await _context.Recipes.FirstOrDefaultAsync(r => r.Id == id);
            if (existingRecipe == null)
                return NotFound();

            if (imageFile != null)
            {
                var imageUrl = await _blobService.UploadImageAsync(imageFile.OpenReadStream(), imageFile.FileName);
                existingRecipe.ImageUrl = imageUrl;
            }

            existingRecipe.Name = recipe.Name;
            existingRecipe.Category = recipe.Category;
            existingRecipe.Difficulty = recipe.Difficulty;
            existingRecipe.Steps = recipe.Steps;

            await _context.SaveChangesAsync();
            return NoContent();
        }

        // Удалить рецепт
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRecipe(int id)
        {
            var recipe = await _context.Recipes.FirstOrDefaultAsync(r => r.Id == id);
            if (recipe == null)
                return NotFound();

            _context.Recipes.Remove(recipe);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
