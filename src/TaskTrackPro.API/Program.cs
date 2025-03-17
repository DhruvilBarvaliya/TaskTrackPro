using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Npgsql;
using RabbitMQ.Client;
using Repositories.Implementations;
using StackExchange.Redis;
using TaskTrackPro.Core.Repositories.Commands.Implementations;
using TaskTrackPro.Core.Repositories.Commands.Interfaces;
using TaskTrackPro.Repositories.Interfaces;
// using TaskTrackPro.Core.Messaging; // ✅ Include namespace for UserRegistrationConsumer

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddSignalR();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

// ✅ Configure PostgreSQL
builder.Services.AddScoped<NpgsqlConnection>(serviceProvider =>
{
    var configuration = serviceProvider.GetRequiredService<IConfiguration>();
    var connectionString = configuration.GetConnectionString("pgcon");
    return new NpgsqlConnection(connectionString);
});

// ✅ Configure Redis
builder.Services.AddSingleton<IConnectionMultiplexer>(sp =>
{
    var configuration = ConfigurationOptions.Parse("127.0.0.1:6379");
    return ConnectionMultiplexer.Connect(configuration);
});

// ✅ Configure RabbitMQ
builder.Services.AddSingleton<IConnection>(sp =>
{
    var factory = new ConnectionFactory
    {
        HostName = "localhost",
        Port = 5672,
        UserName = "guest",
        Password = "guest"
    };
    return factory.CreateConnection();
});

// ✅ Register Repositories & Services
builder.Services.AddScoped<ITaskInterface, TaskRepository>();
builder.Services.AddScoped<IUserInterface, UserRepository>();
builder.Services.AddScoped<ChatService>();

// ✅ Register RabbitMQ Consumer
builder.Services.AddSingleton<UserRegistrationConsumer>();

// ✅ Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("corsapp", policy =>
    {
        policy.WithOrigins("http://localhost:3000", "http://localhost:5136", "http://localhost:5285")
              .AllowAnyMethod()
              .AllowAnyHeader()
              .AllowCredentials();
    });
});

var app = builder.Build();

app.UseCors("corsapp");
app.UseSession();
app.UseAuthentication();
app.UseAuthorization();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// ✅ Start RabbitMQ Consumer
var consumer = app.Services.GetRequiredService<UserRegistrationConsumer>();
Task.Run(() => consumer.StartListening());

app.MapControllers();
app.MapHub<ChatHub>("/chathub");

app.Run();
