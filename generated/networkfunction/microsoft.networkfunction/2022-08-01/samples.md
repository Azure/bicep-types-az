# Microsoft.NetworkFunction

## microsoft.networkfunction/azuretrafficcollectors

Create a traffic collector
```bicep
resource exampleResource 'Microsoft.NetworkFunction/azureTrafficCollectors@2022-08-01' = {
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
resource exampleResource 'Microsoft.NetworkFunction/azureTrafficCollectors/collectorPolicies@2022-08-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
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
