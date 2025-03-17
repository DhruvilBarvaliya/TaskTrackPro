using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using StackExchange.Redis;

namespace TaskTrackPro.API.Services
{
    public class RedisService
    {
        private readonly IDatabase _database;

    public RedisService(IConfiguration configuration)
    {
        var redisHost = configuration["Redis:Host"] ?? "localhost";
        var connection = ConnectionMultiplexer.Connect(redisHost);
        _database = connection.GetDatabase();
    }

    /// <summary>
    /// Stores a notification in Redis for a specific user.
    /// </summary>
    public async Task StoreNotificationAsync(string userId, string notification)
    {
        await _database.ListRightPushAsync($"notifications:{userId}", notification);
    }

    /// <summary>
    /// Retrieves all notifications for a specific user.
    /// </summary>
    public async Task<List<string>> GetNotificationsAsync(string userId)
    {
        var notifications = await _database.ListRangeAsync($"notifications:{userId}");
        return new List<string>(notifications.ToStringArray());
    }

    /// <summary>
    /// Clears notifications for a user after retrieval.
    /// </summary>
    public async Task ClearNotificationsAsync(string userId)
    {
        await _database.KeyDeleteAsync($"notifications:{userId}");
    }
    }
}