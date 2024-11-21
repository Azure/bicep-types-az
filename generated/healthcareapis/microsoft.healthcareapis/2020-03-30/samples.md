# Microsoft.HealthcareApis
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.healthcareapis/services

Create or Update a service with all parameters
```bicep
resource exampleResource 'Microsoft.HealthcareApis/services@2020-03-30' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  kind: 'fhir-R4'
  location: 'westus2'
  properties: {
    accessPolicies: [
      {
        objectId: 'c487e7d1-3210-41a3-8ccc-e9372b78da47'
      }
      {
        objectId: '5b307da8-43d4-492b-8b66-b0294ade872f'
      }
    ]
    authenticationConfiguration: {
      audience: 'https://azurehealthcareapis.com'
      authority: 'https://login.microsoftonline.com/abfde7b2-df0f-47e6-aabf-2462b07508dc'
      smartProxyEnabled: true
    }
    corsConfiguration: {
      allowCredentials: false
      headers: [
        '*'
      ]
      maxAge: 1440
      methods: [
        'DELETE'
        'GET'
        'OPTIONS'
        'PATCH'
        'POST'
        'PUT'
      ]
      origins: [
        '*'
      ]
    }
    cosmosDbConfiguration: {
      keyVaultKeyUri: 'https://my-vault.vault.azure.net/keys/my-key'
      offerThroughput: 1000
    }
    exportConfiguration: {
      storageAccountName: 'existingStorageAccount'
    }
    privateEndpointConnections: [
    ]
    publicNetworkAccess: 'Disabled'
  }
  tags: {
  }
}
```

Create or Update a service with minimum parameters
```bicep
resource exampleResource 'Microsoft.HealthcareApis/services@2020-03-30' = {
  name: 'example'
  kind: 'fhir-R4'
  location: 'westus2'
  properties: {
    accessPolicies: [
      {
        objectId: 'c487e7d1-3210-41a3-8ccc-e9372b78da47'
      }
    ]
  }
  tags: {
  }
}
```

## microsoft.healthcareapis/services/privateendpointconnections

PrivateEndpointConnection_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.HealthcareApis/services/privateEndpointConnections@2020-03-30' = {
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
