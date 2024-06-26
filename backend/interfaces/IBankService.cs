using backend.Models;

namespace backend
{
    public interface IBankService
    {
        List<Bank> GetBanks();
    }
}