
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/Card")]
    public class CardController : ControllerBase
    {
        private readonly ICardService _cardService;

        public CardController(ICardService cardService)
        {
            _cardService = cardService;
        }

        [HttpGet("GetCards")]
        public ActionResult<Card> GetCards([FromQuery] bool? isBlocked=null, [FromQuery] string cardNumber=null, [FromQuery] string bankName=null)
        {
            var cards = _cardService.GetCards(isBlocked, cardNumber, bankName);
            return Ok(cards);
        }


        [HttpPost("IncreaseCreditLimit")]
        public IActionResult IncreaseCreditLimit([FromBody] IncreaseCreditLimitRequest request)
        {
            var result = _cardService.IncreaseCreditLimit(request.CardNumber, request.RequestedLimit, request.Occupation, request.AverageMonthlyIncome);
            if (result)
            {
                return Ok(new { Message = "Credit limit increase successfully." });
            }
            return BadRequest(new { Message = "Failed to increase credit limit" });
        }
    }
}