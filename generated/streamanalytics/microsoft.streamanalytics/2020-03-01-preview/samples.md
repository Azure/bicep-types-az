# Microsoft.StreamAnalytics
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.streamanalytics/clusters

Create a new cluster
```bicep
resource exampleResource 'Microsoft.StreamAnalytics/clusters@2020-03-01-preview' = {
  name: 'example'
  location: 'North US'
  sku: {
    name: 'Default'
    capacity: 48
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.streamanalytics/clusters/privateendpoints

Create a private endpoint
```bicep
resource exampleResource 'Microsoft.StreamAnalytics/clusters/privateEndpoints@2020-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    manualPrivateLinkServiceConnections: [
      {
        properties: {
          groupIds: [
            'groupIdFromResource'
          ]
          privateLinkServiceId: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/privateLinkServices/testPls'
        }
      }
    ]
  }
}
```
