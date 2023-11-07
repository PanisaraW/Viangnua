using Microsoft.EntityFrameworkCore;
using Viangnua.Web.Data.Context;

var builder = WebApplication.CreateBuilder(args); //build the web application. args is the parameter that contains the arguments which are added to the application

// Add services to the container.

builder.Services.AddControllers();
//use in configuring the services for our application
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(); //adding swagger to ducument our API
builder.Services.AddCors(options =>
{
    options.AddPolicy("MyCorsPolicy", builder =>
    {
        builder.WithOrigins("http://localhost:4200")
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});

// instead of using appsetting.json, we are using user secret to store our sensitive data
// https://learn.microsoft.com/en-us/aspnet/core/security/app-secrets?view=aspnetcore-7.0&tabs=linux
var config = builder.Configuration.GetConnectionString("Development");

builder.Services.AddDbContext<ClothDbContext>(options => options.UseSqlServer(config));
// config builder.Services.AddDbContext<ClothDbContext> // for NoSQL Database

var app = builder.Build(); //building the web application using the settings

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("MyCorsPolicy"); // it enables cross origin resource sharing. it prevents forgery and unauthorized access to our data. can choose who are allowed to access our resource
app.UseHttpsRedirection(); //redirecting http tp https

app.UseAuthorization();

app.MapControllers();

app.Run(); //run the application. it is the entry point of incoming http requests