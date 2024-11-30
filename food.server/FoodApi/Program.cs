using Azure.Storage.Blobs;
using FoodBackend.Data;
using FoodBackend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Добавление контекста базы данных
builder.Services.AddDbContext<FoodContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Регистрация BlobService с использованием IConfiguration
builder.Services.AddSingleton<BlobService>(provider =>
{
    var configuration = provider.GetRequiredService<IConfiguration>();
    return new BlobService(configuration); // Используем IConfiguration
});

// Добавление контроллеров
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
