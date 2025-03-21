# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/fleets

Creates or update a fleet resource
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets@2022-06-02-preview' = {
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

Create a fleet member resource. Joins an existing cluster to the fleet
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets/members@2022-06-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clusterResourceId: '/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster-1'
  }
}
```
