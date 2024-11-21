# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/fleets

Creates a Fleet resource with a long running operation.
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets@2024-05-02-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    hubProfile: {
      agentProfile: {
        vmSize: 'Standard_DS1'
      }
      dnsPrefix: 'dnsprefix1'
    }
  }
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```

## microsoft.containerservice/fleets/autoupgradeprofiles

Create an AutoUpgradeProfile.
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets/autoUpgradeProfiles@2024-05-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    channel: 'Stable'
  }
}
```

## microsoft.containerservice/fleets/members

Creates a FleetMember resource with a long running operation.
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets/members@2024-05-02-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/fleets/updateRuns@2024-05-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    managedClusterUpdate: {
      nodeImageSelection: {
        type: 'Latest'
      }
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
    updateStrategyId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ContainerService/fleets/myFleet/updateStrategies/strategy1'
  }
}
```

## microsoft.containerservice/fleets/updatestrategies

Create a FleetUpdateStrategy.
```bicep
resource exampleResource 'Microsoft.ContainerService/fleets/updateStrategies@2024-05-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
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
