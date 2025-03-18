using Npgsql;
using TaskTrackPro.Repositories.Interfaces;
using TaskTrackPro.Repositories.Servcies; 

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSingleton<IConfiguration>(builder.Configuration);
builder.Services.AddScoped<IEmailService, EmailService>();
builder.Services.AddSingleton<IUserInterface, UserRepository>();
builder.Services.AddSingleton<NpgsqlConnection>((UserRepository) =>
{
    var connectionString = UserRepository.GetRequiredService<IConfiguration>().GetConnectionString("pgconnection");
    return new NpgsqlConnection(connectionString);
});

builder.Services.AddControllers();
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

// ✅ Move this **before** `builder.Build()`
builder.Services.AddDistributedMemoryCache();  

builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

var app = builder.Build(); 


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseSession(); 
app.UseCors("corsapp");
app.UseHttpsRedirection();
app.UseRouting();
app.UseEndpoints(endpoints => { endpoints.MapControllers(); });
app.MapControllers();

app.Run();
