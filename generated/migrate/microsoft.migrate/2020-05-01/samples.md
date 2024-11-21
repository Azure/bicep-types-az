# Microsoft.Migrate

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
