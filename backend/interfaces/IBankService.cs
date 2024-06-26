using backend.Models;
using backend.Services;

namespace backend
{
    public interface IBankService
    {
        List<Bank> GetBanks();
    }
}