using backend.Models;

namespace backend.Services
{
    public interface IUserAuthService
    {
        string Authenticate(LoginRequest request);
    }
}