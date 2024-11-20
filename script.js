var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseDefaultFiles(); // Automatikusan az index.html-t használja
app.UseStaticFiles();  // Statikus fájlok engedélyezése

app.Run();
