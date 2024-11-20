# Microsoft.ContainerService

## microsoft.containerservice/fleets

Creates a Fleet resource with a long running operation.
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets@2022-09-02-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    hubProfile: {
      dnsPrefix: 'dnsprefix1'
    }
  }
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```

## microsoft.containerservice/fleets/members

Creates a FleetMember resource with a long running operation.
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets/members@2022-09-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clusterResourceId: '/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster-1'
  }
}
```
