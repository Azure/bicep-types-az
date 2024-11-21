# Microsoft.RecommendationsService

## microsoft.recommendationsservice/accounts

Create or update RecommendationsService Account resource
```bicep
resource exampleResource 'Microsoft.RecommendationsService/accounts@2022-02-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    configuration: 'Capacity'
    endpointAuthentications: [
      {
        aadTenantID: 'tenant'
        principalID: 'oid'
        principalType: 'User'
      }
    ]
  }
  tags: {
    Environment: 'Prod'
  }
}
```

## microsoft.recommendationsservice/accounts/modeling

Create or update Modeling resource
```bicep
resource exampleResource 'Microsoft.RecommendationsService/accounts/modeling@2022-02-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    features: 'Standard'
    frequency: 'High'
    inputData: {
      connectionString: 'https://storageAccount.blob.core.windows.net/container/root'
    }
    size: 'Medium'
  }
  tags: {
    Environment: 'Prod'
  }
}
```

## microsoft.recommendationsservice/accounts/serviceendpoints

Create or update ServiceEndpoint resource
```bicep
resource exampleResource 'Microsoft.RecommendationsService/accounts/serviceEndpoints@2022-02-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    preAllocatedCapacity: 100
  }
  tags: {
    Environment: 'Prod'
  }
}
```
