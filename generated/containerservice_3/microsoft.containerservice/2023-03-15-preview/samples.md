# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/fleets

Creates a Fleet resource with a long running operation.
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets@2023-03-15-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/fleets/members@2023-03-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clusterResourceId: '/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster-1'
  }
}
```

## microsoft.containerservice/fleets/updateruns

Create an UpdateRun.
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets/updateRuns@2023-03-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    managedClusterUpdate: {
      upgrade: {
        type: 'Full'
        kubernetesVersion: '1.26.1'
      }
    }
    strategy: {
      stages: [
        {
          name: 'stage1'
          afterStageWaitInSeconds: 3600
          groups: [
            {
              name: 'group-a'
            }
          ]
        }
      ]
    }
  }
}
```
