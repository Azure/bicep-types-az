# Microsoft.Search
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.search/searchservices

SearchCreateOrUpdateService
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2023-11-01' = {
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
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceAuthOptions
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2023-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    authOptions: {
      aadOrApiKey: {
        aadAuthFailureMode: 'http401WithBearerChallenge'
      }
    }
    hostingMode: 'default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceDisableLocalAuth
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2023-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    disableLocalAuth: true
    hostingMode: 'default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceToAllowAccessFromPrivateEndpoints
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2023-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hostingMode: 'default'
    partitionCount: 1
    publicNetworkAccess: 'disabled'
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceToAllowAccessFromPublicCustomIPs
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2023-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hostingMode: 'default'
    networkRuleSet: {
      ipRules: [
        {
          value: '123.4.5.6'
        }
        {
          value: '123.4.6.0/18'
        }
      ]
    }
    partitionCount: 1
    replicaCount: 1
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceWithCmkEnforcement
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2023-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    encryptionWithCmk: {
      enforcement: 'Enabled'
    }
    hostingMode: 'default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceWithIdentity
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2023-11-01' = {
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
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateWithSemanticSearch
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2023-11-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hostingMode: 'default'
    partitionCount: 1
    replicaCount: 3
    semanticSearch: 'free'
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

## microsoft.search/searchservices/privateendpointconnections

PrivateEndpointConnectionUpdate
```bicep
resource exampleResource 'Microsoft.Search/searchServices/privateEndpointConnections@2023-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Rejected for some reason'
      status: 'Rejected'
    }
  }
}
```

## microsoft.search/searchservices/sharedprivatelinkresources

SharedPrivateLinkResourceCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Search/searchServices/sharedPrivateLinkResources@2023-11-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: 'blob'
    privateLinkResourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Storage/storageAccounts/storageAccountName'
    requestMessage: 'please approve'
    resourceRegion: {
    }
  }
}
```
