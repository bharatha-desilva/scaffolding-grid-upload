#Grid Upload EF

##Grid Upload Entity Framework Migrations

This section covers how to make use __EF (Entity Framework) Tools__ and methodologies in order to easily manage MS SQL db migrations
* Create or update DB schemas through so called __migration points__.
* Seed data management through the source code itself.

####Create or re-create initial migration point

####To re-create first use `dotnet ef ???? migrations remove` command

~~~
dotnet ef --startup-project ..\Bourque.GridUpload.Api\ migrations add InitialCreate
~~~

####Removes the last migration, rolling back the code changes that were done for the latest migration.

####To remove the previous migration point, usefull for when it comes modify existing without adding another migration point

~~~
dotnet ef --startup-project ..\Bourque.GridUpload.Api\ migrations remove
~~~


####To generates a SQL script from migrations.

~~~
dotnet ef --startup-project ..\Bourque.GridUpload.Api\ dbcontext script
~~~
