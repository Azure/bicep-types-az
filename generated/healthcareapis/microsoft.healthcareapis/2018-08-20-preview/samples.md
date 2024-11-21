# Microsoft.HealthcareApis

## microsoft.healthcareapis/services

ServicePut
```bicep
resource exampleResource 'Microsoft.HealthcareApis/services@2018-08-20-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  kind: 'fhir'
  location: 'eastus'
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
  }
  tags: {
  }
}
```
