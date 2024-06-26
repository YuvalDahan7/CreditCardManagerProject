using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/Bank")]
    public class BankController : ControllerBase
    {
        private readonly IBankService _bankService;

        public BankController(IBankService bankService)
        {
            _bankService = bankService;
        }

        [HttpGet("GetBanks")]
        public ActionResult<List<Bank>> Get()
        {
            return _bankService.GetBanks();
        }
    }
}