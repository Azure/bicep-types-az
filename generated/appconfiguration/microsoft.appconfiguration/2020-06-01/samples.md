# Microsoft.AppConfiguration

## microsoft.appconfiguration/configurationstores

ConfigurationStores_Create
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores@2020-06-01' = {
  name: 'example'
  location: 'westus'
  sku: {
    name: 'Standard'
  }
  tags: {
    myTag: 'myTagValue'
  }
}
```

ConfigurationStores_Create_WithIdentity
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores@2020-06-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      /subscriptions/c80fb759-c965-4c6a-9110-9b2b2d038882/resourcegroups/myResourceGroup1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity2: {
      }
    }
  }
  location: 'westus'
  sku: {
    name: 'Standard'
  }
  tags: {
    myTag: 'myTagValue'
  }
}
```

## microsoft.appconfiguration/configurationstores/privateendpointconnections

PrivateEndpointConnection_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AppConfiguration/configurationStores/privateEndpointConnections@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```
