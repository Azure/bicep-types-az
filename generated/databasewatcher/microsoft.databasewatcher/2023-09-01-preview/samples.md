# Microsoft.DatabaseWatcher

## microsoft.databasewatcher/watchers

Watchers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DatabaseWatcher/watchers@2023-09-01-preview' = {
  name: 'example'
  location: 'westus'
}
```

## microsoft.databasewatcher/watchers/sharedprivatelinkresources

SharedPrivateLinkResources_Create
```bicep
resource exampleResource 'Microsoft.DatabaseWatcher/watchers/sharedPrivateLinkResources@2023-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dnsZone: 'ec3ae9d410ba'
    groupId: 'vault'
    privateLinkResourceId: '/subscriptions/6f53185c-ea09-4fc3-9075-318dec805303/resourceGroups/apiTest-ddat4p/providers/Microsoft.KeyVault/vaults/kvmo3ej9ih'
    requestMessage: 'request message'
  }
}
```

## microsoft.databasewatcher/watchers/targets

Targets_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DatabaseWatcher/watchers/targets@2023-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectionServerName: 'sqlServero1ihe2'
    sqlDbResourceId: '/subscriptions/6f53185c-ea09-4fc3-9075-318dec805303/resourceGroups/apiTest-ddat4p/providers/Microsoft.Sql/servers/m1/databases/m2'
    targetAuthenticationType: 'Aad'
    targetType: 'SqlDb'
  }
}
```
