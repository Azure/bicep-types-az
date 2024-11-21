# Microsoft.Search

## microsoft.search/searchservices

SearchCreateOrUpdateService
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2015-08-19' = {
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
resource exampleResource 'Microsoft.Search/searchServices@2015-08-19' = {
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
