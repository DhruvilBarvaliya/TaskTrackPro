using Npgsql;
using TaskTrackPro.Core.Repositories.Commands.Interfaces;
using TaskTrackPro.Core.Repositories.Queries.Implementations;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();  // ✅ Ensure API controllers work correctly
builder.Services.AddControllersWithViews();

// Add Session services
builder.Services.AddSession(options => {
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

// Add PostgreSQL connection
builder.Services.AddSingleton<NpgsqlConnection>(provider =>
{
    var connectionString = builder.Configuration.GetConnectionString("pgconnection");
    return new NpgsqlConnection(connectionString);
});

// Add Repository for Dependency Injection
builder.Services.AddSingleton<IUserLoginInterface, UserLoginRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseSession();          // ✅ Ensure session is set up before authentication
app.UseAuthentication();   // ✅ Ensure authentication happens before authorization
app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
