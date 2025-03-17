using Npgsql;

using TaskTrackPro.Core.Repositories.Commands.Implementations;
using TaskTrackPro.Core.Repositories.Commands.Interfaces;
using TaskTrackPro.Core.Repositories.Queries.Implementations;
using TaskTrackPro.Core.Repositories.Queries.Interfaces;
using TaskTrackPro.API.Services;


var builder = WebApplication.CreateBuilder(args);

// ✅ Add CORS Policy (Keeping only ONE policy)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        policy =>
        {
            policy.AllowAnyOrigin()  // Allows requests from any frontend (Avoid in production)
                  .AllowAnyMethod()  // Allows GET, POST, PUT, DELETE, etc.
                  .AllowAnyHeader(); // Allows all headers
        });
});

// ✅ Configure PostgreSQL connection (Scoped for each request)
var connectionString = builder.Configuration.GetConnectionString("pgconnection");
builder.Services.AddScoped<NpgsqlConnection>(_ => new NpgsqlConnection(connectionString));

// ✅ Register Core Services
builder.Services.AddSingleton<RabbitMqConsumer>();
builder.Services.AddScoped<RedisService>();
builder.Services.AddScoped<RabbitMqPublisher>();
builder.Services.AddScoped<ITaskInterface, TaskRepository>();
builder.Services.AddScoped<IAdminQuery, AdminQuery>();
builder.Services.AddScoped<IAdminCommand, AdminCommand>();

// ✅ Add Services for Controllers & API
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// ✅ Use CORS Middleware (Must be before `UseAuthorization`)
app.UseCors("AllowAllOrigins");

// ✅ Configure Swagger for API documentation
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
var rabbitConsumer = app.Services.GetRequiredService<RabbitMqConsumer>();
Task.Run(() => rabbitConsumer.ConsumeNotifications());  // Run in a separate thread
app.UseHttpsRedirection();
app.UseAuthorization();  // Handles authentication & authorization
app.MapControllers();    // ✅ Replaces `UseRouting()` and `UseEndpoints()`
app.Run();
