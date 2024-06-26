using System.Text;
using backend;
using backend.Configurations;
using backend.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddMemoryCache();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IBankService, BankService>();
builder.Services.AddScoped<ICardService, CardService>();
builder.Services.Configure<CacheSettings>(builder.Configuration.GetSection("CacheSettings"));
builder.Services.AddScoped<IUserAuthService, UserService>();
builder.Services.AddScoped<JwtHandler>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        po =>
        {
            po.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
});
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll",
        po =>
        {
            po.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
        });
});

builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection("JWTSettings"));
var JWTSettings = builder.Configuration.GetSection("JWTSettings");
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;

}).AddJwtBearer(options =>
{
    options.SaveToken = true;
    options.RequireHttpsMetadata = false;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidAudience = JWTSettings["ValidAudience"],
        ValidIssuer = JWTSettings["ValidIssuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(JWTSettings["SecurityKey"]!)),
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
    };

});
var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
