# Microsoft.AgFoodPlatform
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.agfoodplatform/farmbeats

FarmBeatsModels_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AgFoodPlatform/farmBeats@2021-09-01-preview' = {
  name: 'example'
  location: 'eastus2'
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.agfoodplatform/farmbeats/privateendpointconnections

PrivateEndpointConnections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AgFoodPlatform/farmBeats/privateEndpointConnections@2021-09-01-preview' = {
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

## microsoft.agfoodplatform/farmbeats/solutions

Solutions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AgFoodPlatform/farmBeats/solutions@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    marketplacePublisherId: 'publisherId'
    offerId: 'offerId'
    planId: 'planId'
    saasSubscriptionId: '123'
    saasSubscriptionName: 'name'
    termId: 'termId'
  }
}
```
