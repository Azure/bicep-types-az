# Microsoft.HealthcareApis
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.healthcareapis/services

Create or Update a service with all parameters
```bicep
resource exampleResource 'Microsoft.HealthcareApis/services@2019-09-16' = {
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
      offerThroughput: 1000
    }
    exportConfiguration: {
      storageAccountName: 'existingStorageAccount'
    }
  }
  tags: {
  }
}
```

Create or Update a service with minimum parameters
```bicep
resource exampleResource 'Microsoft.HealthcareApis/services@2019-09-16' = {
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
