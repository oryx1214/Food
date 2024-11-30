using Azure.Storage.Blobs;
using FoodBackend.Data;
using FoodBackend.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// ���������� ��������� ���� ������
builder.Services.AddDbContext<FoodContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// ����������� BlobService � �������������� IConfiguration
builder.Services.AddSingleton<BlobService>(provider =>
{
    var configuration = provider.GetRequiredService<IConfiguration>();
    return new BlobService(configuration); // ���������� IConfiguration
});

// ���������� ������������
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
