
using backend.Models;
using backend.data;
using Microsoft.Extensions.Caching.Memory;

namespace backend.Services
{
    public class BankService : IBankService
    {
        private readonly IMemoryCache _cache;
        private readonly TimeSpan _cacheExpiration;

        public BankService(IMemoryCache cache, IConfiguration configuration)
        {
            _cache = cache;
            _cacheExpiration = TimeSpan.FromMinutes(configuration.GetValue<int>("CacheSettings:CacheExpirationMinutes"));
        }

        public List<Bank> GetBanks()
        {

            const string cacheKey = "Banks";
            if (!_cache.TryGetValue(cacheKey, out List<Bank> banks))
            {
                banks = mockData.Banks;
                var cacheEntryOptions = new MemoryCacheEntryOptions
                {
                    AbsoluteExpirationRelativeToNow = _cacheExpiration
                };

                _cache.Set(cacheKey, banks, cacheEntryOptions);
            }
            return banks;
        }
    }

}