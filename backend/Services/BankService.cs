
using backend.Models;
using backend.data;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;

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
            if (!_cache.TryGetValue(cacheKey, out List<Bank> banks)) //check if there are any banks on the cache.
            {
                banks = mockData.Banks; //getting the cache from the mockData.
                var cacheEntryOptions = new MemoryCacheEntryOptions //set the time expiration for the cache.
                {
                    AbsoluteExpirationRelativeToNow = _cacheExpiration
                };

                _cache.Set(cacheKey, banks, cacheEntryOptions);
            }
            return banks;
        }
    }

}