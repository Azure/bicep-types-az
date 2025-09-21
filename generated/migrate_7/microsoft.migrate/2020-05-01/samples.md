# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/migrateprojects

MigrateProject_Put
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects@2020-05-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    publicNetworkAccess: 'Enabled'
  }
}
```

## microsoft.migrate/migrateprojects/privateendpointconnections

PrivateEndpointConnection_Put
```bicep
resource exampleResource 'Microsoft.Migrate/migrateProjects/privateEndpointConnections@2020-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: {
      }
      actionsRequired: ''
      status: 'Approved'
    }
  }
}
```
