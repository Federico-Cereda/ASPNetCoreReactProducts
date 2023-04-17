using aspnetserver.Models;
using aspnetserver.Repositories;
using aspnetserver.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("CORSPolicy",
        builder =>
        {
            builder
            .AllowAnyOrigin()
            .AllowAnyHeader()
            .AllowAnyMethod();
        });
});

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<CarrelloSpesaContext>();
builder.Services.AddScoped<IProdottoRepository, ProdottoRepository>();
builder.Services.AddScoped<IProdottoService, ProdottoService>();
builder.Services.AddScoped<IMarcaRepository, MarcaRepository>();
builder.Services.AddScoped<IMarcaService, MarcaService>();
builder.Services.AddScoped<IPromozioneRepository, PromozioneRepository>();
builder.Services.AddScoped<IPromozioneService, PromozioneService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

app.UseSwagger();
app.UseSwaggerUI(c => {
    string swaggerJsonBasePath = string.IsNullOrWhiteSpace(c.RoutePrefix) ? "." : "..";
    c.SwaggerEndpoint($"{swaggerJsonBasePath}/swagger/v1/swagger.json", "aspnetserver");
});

app.UseHttpsRedirection();

app.UseCors("CORSPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
