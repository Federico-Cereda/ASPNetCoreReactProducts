using aspnetserver.Models;
using aspnetserver.Services;
using Autofac;
using Autofac.Core;
using Autofac.Integration.WebApi;
using Microsoft.AspNetCore.Cors;
using Microsoft.OpenApi.Writers;
using System.Reflection;
using System.Web.Http;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<CarrelloSpesaContext>();

void Container(HttpConfiguration httpConfiguration)
{
    var containerBuilder = new ContainerBuilder();
    containerBuilder.RegisterApiControllers(Assembly.GetExecutingAssembly());
    containerBuilder.RegisterType<ProdottoRepository>().As<IProdottoRepository>();
    containerBuilder.RegisterType<CarrelloSpesaContext>().InstancePerRequest();
    var container = containerBuilder.Build();
    httpConfiguration.DependencyResolver = new AutofacWebApiDependencyResolver(container);
}
Container(GlobalConfiguration.Configuration);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
