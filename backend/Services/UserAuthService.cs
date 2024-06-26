
using backend.Models;

namespace backend.Services
{
    public class UserService : IUserAuthService
    {
        private readonly JwtHandler _jwtHandler;
        public UserService(JwtHandler jwtHandler)
        {
            _jwtHandler = jwtHandler;
        }

        public string Authenticate(LoginRequest request)
        {
            if (request.Username != "Isracard" || request.Password != "Isracard")
            {
                return null;
            }
            var token = _jwtHandler.GenerateJwtToken(request);
            return token;
        }
    }
}