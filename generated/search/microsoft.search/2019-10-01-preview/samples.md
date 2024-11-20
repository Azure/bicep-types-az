# Microsoft.Search

## microsoft.search/searchservices

SearchCreateOrUpdateService
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2019-10-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    hostingMode: 'default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    app-name: 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceWithIdentity
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2019-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'westus'
  properties: {
    hostingMode: 'default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    app-name: 'My e-commerce app'
  }
}
```

## microsoft.search/searchservices/privateendpointconnections

PrivateEndpointConnectionUpdate
```bicep
resource exampleResource 'Microsoft.Search/searchServices/privateEndpointConnections@2019-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Search/searchServices/mysearchservice/privateEndpointConnections/testEndpoint.50bf4fbe-d7c1-4b48-a642-4f5892642546'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Rejected for some reason'
      status: 'Rejected'
    }
  }
}
```
