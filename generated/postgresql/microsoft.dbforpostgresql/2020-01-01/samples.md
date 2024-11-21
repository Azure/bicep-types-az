# Microsoft.DBforPostgreSQL
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbforpostgresql/servers/keys

Creates or updates a PostgreSQL Server key
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers/keys@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyType: 'AzureKeyVault'
    uri: 'https://someVault.vault.azure.net/keys/someKey/01234567890123456789012345678901'
  }
}
```
