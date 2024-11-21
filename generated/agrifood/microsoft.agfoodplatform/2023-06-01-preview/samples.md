# Microsoft.AgFoodPlatform
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.agfoodplatform/farmbeats

DataManagerForAgricultureResources_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AgFoodPlatform/farmBeats@2023-06-01-preview' = {
  name: 'example'
  location: 'eastus2'
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.agfoodplatform/farmbeats/dataconnectors

DataConnectors_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AgFoodPlatform/farmBeats/dataConnectors@2023-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    credentials: {
      apiKey: {
        keyName: 'abcApiKey'
        keyVaultUri: 'https://testKeyVault.vault.azure.net/'
        keyVersion: '239c0475c7d44f20b0fc27d3fe90a41d'
      }
      kind: 'ApiKeyAuthCredentials'
    }
  }
}
```

## microsoft.agfoodplatform/farmbeats/privateendpointconnections

PrivateEndpointConnections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections@2023-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```
