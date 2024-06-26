using backend.Models;
using backend.Services;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserAuthController : ControllerBase
    {
        private readonly IUserAuthService _userAuthService;

        public UserAuthController(IUserAuthService userAuthService)
        {
            _userAuthService = userAuthService;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginRequest request)
        {
            var token = _userAuthService.Authenticate(request);

            if (token == null)
                return Unauthorized();

            return Ok(new { token });
        }
    }
}