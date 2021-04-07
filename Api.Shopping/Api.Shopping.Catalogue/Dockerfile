#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443


FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["Api.Shopping.Catalogue/Api.Shopping.Catalogue.csproj", "Api.Shopping.Catalogue/"]
COPY ["Api.Shopping.Common/Api.Shopping.Common.csproj", "Api.Shopping.Common/"]

RUN dotnet restore "Api.Shopping.Catalogue/Api.Shopping.Catalogue.csproj"
COPY . .
WORKDIR "/src/Api.Shopping.Catalogue"
RUN dotnet build "Api.Shopping.Catalogue.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Api.Shopping.Catalogue.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Api.Shopping.Catalogue.dll"]