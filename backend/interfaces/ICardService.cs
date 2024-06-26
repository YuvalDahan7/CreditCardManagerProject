using backend.Models;

namespace backend
{
    public interface ICardService
    {
        List<Card> GetCards(bool? isBlocked=null, string cardNumber=null, string bankName=null);
        bool IncreaseCreditLimit(string cardNumber, decimal requestedLimit, string occupation, decimal averageMonthlyIncome);
    }
}