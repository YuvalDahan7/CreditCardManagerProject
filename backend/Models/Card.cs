namespace backend.Models
{
    public class Card
    {
        public string CardNumber { get; set; }
        public DateTime IssuanceDate { get; set; }
        public string CardImage { get; set; }
        public bool IsBlocked { get; set; }
        public bool IsDigital { get; set; }
        public decimal CreditLimit { get; set; }
        public string BankName { get; set; }
        public string Occupation { get; set; }
        public decimal AverageMonthlyIncome { get; set; }
    }
}