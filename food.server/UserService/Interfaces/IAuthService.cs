

using AuthData.DTO;
using AuthData.Models;

namespace UserService.Interfaces;

public interface IAuthService
{
    public Task<User> LoginUserAsync(LoginDTO user);
    public Task<User> RegisterUserAsync(RegisterDTO user);
    public Task<AccessInfo_DTO> RefreshTokenAsync(TokenDTO userAccessData);

    public Task LogOutAsync(TokenDTO userTokenInfo);
}
