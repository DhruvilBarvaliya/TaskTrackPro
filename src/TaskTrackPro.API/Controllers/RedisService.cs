using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using StackExchange.Redis;
using TaskTrackPro.Core.Models;

namespace TaskTrackPro.API.Controllers
{
    public class RedisService
    {
        private readonly IDatabase _redisDb; 
        public RedisService(IDatabase redisDb)
        {
            _redisDb = redisDb;
        }
        public async Task<List<User_List>> GetCachedUsersAsync(string CacheKey)
        {
            var data = await _redisDb.StringGetAsync(CacheKey);
            if (data.IsNullOrEmpty)
            return new List<User_List>();
            return JsonSerializer.Deserialize<List<User_List>>(data);
        }
        public async Task SetCachedUsersAsync(string CacheKey, List<User_List> userlist)
        {
            var serializedCities = JsonSerializer.Serialize(userlist);
            await _redisDb.StringSetAsync(CacheKey, serializedCities);
        }
    }
}