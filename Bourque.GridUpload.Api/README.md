# Grid Upload API

## Local setup and configuration

In order to successfully configure the runtime instance of the service,
make sure the following environment variables are set properly.

Followings are the environment variables to be located in `appsettings.json`
- GridUpload SQL connection string ``ConnectionStrings.ConnectionString``

#### Above environment variables or any variable can be set by any of the following ways
- Manually editing `appsettings.json` locally
- Or setting key values read from the environment - [Environment variable configuration](https://docs.microsoft.com/en-us/dotnet/core/extensions/configuration-providers#environment-variable-configuration-provider)

  Ex: In order to set those on **Windows**, run as below by substituting with real values (note the double-underscores for dot (.) separator) 
  
   ``setx GridUpload_ConnectionStrings__TcmsConnectionString "Server=xx;Initial Catalog=xxxxxxxxxxxxxxxxxxetc.,"``
