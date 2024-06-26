using backend.Models;
using System;
using System.Collections.Generic;
using System.IO;

namespace backend.data
{
    public static class mockData
    {
        public static readonly List<Bank> Banks = new List<Bank>
        {
            new Bank { BankCode = "001", BankName = "JPMorgan Chase & Co.", Description = "JPMorgan Chase & Co. is a leading global financial services firm with assets over $3 trillion. It offers a wide range of financial services, including investment banking, financial services for consumers and businesses, financial transaction processing, asset management, and private equity. It is headquartered in New York City and operates worldwide." },
            new Bank { BankCode = "002", BankName = "Bank of America", Description = "Bank of America is one of the world's largest financial institutions, providing a full range of banking, investing, asset management, and other financial and risk management products and services. It serves individuals, small- and middle-market businesses, and large corporations with operations in more than 35 countries." },
            new Bank { BankCode = "003", BankName = "Wells Fargo & Co.", Description = " Wells Fargo & Co. is a diversified financial services company providing banking, insurance, investments, mortgage, and consumer and commercial finance across more than 8,000 locations and over 13,000 ATMs. Headquartered in San Francisco, Wells Fargo serves one in three households in the United States." },
            new Bank { BankCode = "004", BankName = "HSBC Holdings plc", Description = "HSBC is one of the largest banking and financial services organizations in the world. With a network that covers 64 countries and territories, HSBC provides a wide range of financial services, including personal finance, commercial banking, corporate banking, investment banking, and wealth management. It is headquartered in London, United Kingdom." },
        };

        public static readonly List<Card> Cards = new List<Card>
        {
            new Card { CardNumber = "1234567890123456", IssuanceDate = DateTime.Now.AddMonths(-4), CardImage = "Assets/JPMorganChaseCo.png", IsBlocked = false, IsDigital = true, CreditLimit = 20000, BankName = "JPMorgan Chase & Co.", Occupation = "שכיר", AverageMonthlyIncome = 15000 },
            new Card { CardNumber = "2345678901234567", IssuanceDate = DateTime.Now.AddMonths(-6), CardImage = "Assets/BankOfAmerica.png", IsBlocked = false, IsDigital = false, CreditLimit = 30000, BankName = "Bank of America", Occupation = "עצמאי", AverageMonthlyIncome = 20000 },
            new Card { CardNumber = "3456789012345678", IssuanceDate = DateTime.Now.AddMonths(-8), CardImage = "Assets/WellsFargoCo.png", IsBlocked = true, IsDigital = true, CreditLimit = 30000, BankName = "Wells Fargo & Co.", Occupation = "שכיר", AverageMonthlyIncome = 18000 },
            new Card { CardNumber = "4567890123456789", IssuanceDate = DateTime.Now.AddMonths(-2), CardImage = "Assets/HSBCHoldingsplc.png", IsBlocked = false, IsDigital = false, CreditLimit = 20000, BankName = "HSBC Holdings plc", Occupation = "אחר", AverageMonthlyIncome = 12000 },
            new Card { CardNumber = "5678901234567890", IssuanceDate = DateTime.Now.AddMonths(-10), CardImage = "Assets/HSBCHoldingsplc.png", IsBlocked = false, IsDigital = true, CreditLimit = 25000, BankName = "HSBC Holdings plc", Occupation = "שכיר", AverageMonthlyIncome = 25000 },
            new Card { CardNumber = "6789012345678901", IssuanceDate = DateTime.Now.AddMonths(-3), CardImage = "Assets/JPMorganChaseCo.png", IsBlocked = false, IsDigital = false, CreditLimit = 30000, BankName = "JPMorgan Chase & Co.", Occupation = "עצמאי", AverageMonthlyIncome = 30000 },
            new Card { CardNumber = "7890123456789012", IssuanceDate = DateTime.Now.AddMonths(-1), CardImage = "Assets/BankOfAmerica.png", IsBlocked = true, IsDigital = true, CreditLimit = 35000, BankName = "Bank of America", Occupation = "שכיר", AverageMonthlyIncome = 35000 },
            new Card { CardNumber = "8901234567890123", IssuanceDate = DateTime.Now.AddMonths(-5), CardImage = "Assets/WellsFargoCo.png", IsBlocked = false, IsDigital = false, CreditLimit = 22000, BankName = "Wells Fargo & Co.", Occupation = "עצמאי", AverageMonthlyIncome = 17000 },
            new Card { CardNumber = "9012345678901234", IssuanceDate = DateTime.Now.AddMonths(-7), CardImage = "Assets/JPMorganChaseCo.png", IsBlocked = true, IsDigital = true, CreditLimit = 24000, BankName = "JPMorgan Chase & Co.", Occupation = "אחר", AverageMonthlyIncome = 16000 },
            new Card { CardNumber = "0123456789012345", IssuanceDate = DateTime.Now.AddMonths(-9), CardImage = "Assets/BankOfAmerica.png", IsBlocked = false, IsDigital = false, CreditLimit = 18000, BankName = "Bank of America", Occupation = "שכיר", AverageMonthlyIncome = 14000 },
            new Card { CardNumber = "1234509876543210", IssuanceDate = DateTime.Now.AddMonths(-11), CardImage = "Assets/HSBCHoldingsplc.png", IsBlocked = true, IsDigital = true, CreditLimit = 26000, BankName = "HSBC Holdings plc", Occupation = "עצמאי", AverageMonthlyIncome = 27000 },
            new Card { CardNumber = "2345670987654321", IssuanceDate = DateTime.Now.AddMonths(-4), CardImage = "Assets/WellsFargoCo.png", IsBlocked = false, IsDigital = false, CreditLimit = 32000, BankName = "Wells Fargo & Co.", Occupation = "שכיר", AverageMonthlyIncome = 29000 },
            new Card { CardNumber = "3456789098765432", IssuanceDate = DateTime.Now.AddMonths(-6), CardImage = "Assets/JPMorganChaseCo.png", IsBlocked = true, IsDigital = true, CreditLimit = 33000, BankName = "JPMorgan Chase & Co.", Occupation = "אחר", AverageMonthlyIncome = 19000 },
            new Card { CardNumber = "4567890987654323", IssuanceDate = DateTime.Now.AddMonths(-8), CardImage = "Assets/BankOfAmerica.png", IsBlocked = false, IsDigital = false, CreditLimit = 27000, BankName = "Bank of America", Occupation = "עצמאי", AverageMonthlyIncome = 22000 }
        };
    }
}
