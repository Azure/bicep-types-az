# Microsoft.NetworkFunction

## microsoft.networkfunction/azuretrafficcollectors

Create a traffic collector
```bicep
resource exampleResource 'Microsoft.NetworkFunction/azureTrafficCollectors@2021-09-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    collectorPolicies: [
    ]
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.networkfunction/azuretrafficcollectors/collectorpolicies

Create a collection policy
```bicep
resource exampleResource 'Microsoft.NetworkFunction/azureTrafficCollectors/collectorPolicies@2021-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    emissionPolicies: [
      {
        emissionDestinations: [
          {
            destinationType: 'AzureMonitor'
          }
        ]
        emissionType: 'IPFIX'
      }
    ]
    ingestionPolicy: {
      ingestionSources: [
        {
          resourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/expressRouteCircuits/circuitName'
          sourceType: 'Resource'
        }
      ]
      ingestionType: 'IPFIX'
    }
  }
}
```
