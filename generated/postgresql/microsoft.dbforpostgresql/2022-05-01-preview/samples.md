# Microsoft.DBforPostgreSQL
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbforpostgresql/flexibleservers/migrations

Migrations_Create
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/migrations@2022-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    dBsToMigrate: [
      'db1'
      'db2'
      'db3'
      'db4'
    ]
    sourceDBServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.DBForPostgreSql/servers/testsource'
  }
}
```
