using Azure.Storage.Blobs;
using System.Threading.Tasks;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace FoodBackend.Services
{
    public class BlobService
    {
        private readonly string _connectionString;
        private readonly string _containerName;
        private readonly BlobContainerClient _blobContainerClient;

        // Используем IConfiguration для получения строки подключения и имени контейнера
        public BlobService(IConfiguration configuration)
        {
            _connectionString = configuration["Azure:ConnectionsString"];
            _containerName = configuration["Azure:ContainerName"];
            var blobServiceClient = new BlobServiceClient(_connectionString);
            _blobContainerClient = blobServiceClient.GetBlobContainerClient(_containerName);
        }

        public async Task<string> UploadImageAsync(Stream imageStream, string fileName)
        {
            var blobClient = _blobContainerClient.GetBlobClient(fileName);
            await blobClient.UploadAsync(imageStream, overwrite: true);

            return blobClient.Uri.ToString();
        }
    }
}
