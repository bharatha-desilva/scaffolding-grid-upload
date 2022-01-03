#Create or re-create initial migration point
#To re-create use `dotnet ef ???? migrations remove` command first
dotnet ef --startup-project ..\Bourque.GridUpload.Api\ migrations add Initial

#Removes the last migration, rolling back the code changes that were done for the latest migration.
#To remove the previous migration point, usefull for when it comes modify existing without adding another migration point
dotnet ef --startup-project ..\Bourque.GridUpload.Api\ migrations remove


#To generates a SQL script from migrations.
dotnet ef --startup-project ..\Bourque.GridUpload.Api\ dbcontext script