using Npgsql;
using StackExchange.Redis;
using TaskTrackPro.API.Controllers;
using TaskTrackPro.Core.Repositories.Commands.Interfaces;
using TaskTrackPro.Core.Repositories.Queries.Implementations;

var builder = WebApplication.CreateBuilder(args);

// Configure CORS 
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

// Add services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers();
builder.Services.AddScoped<IUserLoginInterface, UserLoginRepository>();

// Configure PostgreSQL connection
builder.Services.AddScoped<NpgsqlConnection>((ServiceProvider) =>
{
    var configuration = ServiceProvider.GetRequiredService<IConfiguration>();
    var connectionString = configuration.GetConnectionString("pgconnection");
    return new NpgsqlConnection(connectionString);
});
builder.Services.AddSingleton<IConnectionMultiplexer>( (provider) => {
    var configuration = provider.GetRequiredService<IConfiguration>();
    var redisConnectionString = configuration["Redis:ConnectionStrings"];

    return ConnectionMultiplexer.Connect(redisConnectionString);
});
builder.Services.AddSingleton<IDatabase>(provider => {
    var multiplexer = provider.GetRequiredService<IConnectionMultiplexer>();

    return multiplexer.GetDatabase();
});
builder.Services.AddStackExchangeRedisCache(options =>
{
    options.Configuration = "localhost:6380"; // Redis Server Address
    options.InstanceName = "Session_"; // Prefix for session keys in Redis
});
builder.Services.AddSingleton<RedisService>();
var app = builder.Build();

// Configure middleware
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseRouting();  // ✅ Ensure routing is set before CORS
app.UseCors("corsapp");
app.UseHttpsRedirection();
app.MapControllers();  // ✅ No need for app.UseEndpoints()

// Example Minimal API
var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.Run();

record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
