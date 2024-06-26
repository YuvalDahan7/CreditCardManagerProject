using backend.Models;
using backend.data;


namespace backend.Services
{
    public class CardService : ICardService
    {
        static List<Card> cards = mockData.Cards;
        public List<Card> GetCards(bool? isBlocked = null, string? cardNumber = null, string? bankCode = null)
        {

            if (isBlocked.HasValue)
            {
                cards = cards.Where(c => c.IsBlocked == isBlocked.Value).ToList();
            }

            if (!string.IsNullOrEmpty(cardNumber))
            {
                cards = cards.Where(c => c.CardNumber.Contains(cardNumber)).ToList();
            }

            if (!string.IsNullOrEmpty(bankCode))
            {
                cards = cards.Where(c => c.BankCode == bankCode).ToList();
            }

            return cards.ToList();
        }

        public bool IncreaseCreditLimit(string cardNumber, decimal requestedLimit, string occupation, decimal averageMonthlyIncome)
        {
            var card = cards.FirstOrDefault(c => c.CardNumber == cardNumber);
            if (card == null || card.IsBlocked || card.IssuanceDate > DateTime.Now.AddMonths(-3) || card.AverageMonthlyIncome < 12000)
            {
                return false;
            }

            decimal maxLimit = occupation switch
            {
                "שכיר" => averageMonthlyIncome + averageMonthlyIncome / 2,
                "עצמאי" => averageMonthlyIncome + averageMonthlyIncome / 3,
                _ => 0
            };

            if (requestedLimit <= 100000 && requestedLimit <= maxLimit)
            {
                card.CreditLimit = card.CreditLimit + requestedLimit;
                return true;
            }

            return false;
        }
    }

}