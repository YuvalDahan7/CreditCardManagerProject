namespace backend
{
    public class IncreaseCreditLimitRequest
    {
        public string CardNumber { get; set; }
        public decimal RequestedLimit { get; set; }
        public string Occupation { get; set; }
        public decimal AverageMonthlyIncome { get; set; }
    }
}