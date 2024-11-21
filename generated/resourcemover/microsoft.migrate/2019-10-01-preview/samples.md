# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/movecollections

MoveCollections_Create
```bicep
resource exampleResource 'Microsoft.Migrate/moveCollections@2019-10-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2'
  properties: {
    sourceRegion: 'eastus'
    targetRegion: 'westus'
  }
}
```

## microsoft.migrate/movecollections/moveresources

MoveResources_Create
```bicep
resource exampleResource 'Microsoft.Migrate/moveCollections/moveResources@2019-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dependsOnOverrides: [
      {
        id: '/subscriptions/c4488a3f-a7f7-4ad4-aa72-0e1f4d9c0756/resourceGroups/eastusRG/providers/Microsoft.Network/networkInterfaces/eastusvm140'
        targetId: '/subscriptions/c4488a3f-a7f7-4ad4-aa72-0e1f4d9c0756/resourceGroups/westusRG/providers/Microsoft.Network/networkInterfaces/eastusvm140'
      }
    ]
    resourceSettings: {
      resourceType: 'Microsoft.Compute/virtualMachines'
      targetAvailabilitySetId: '/subscriptions/subid/resourceGroups/eastusRG/providers/Microsoft.Compute/availabilitySets/avset1'
      targetAvailabilityZone: '2'
      targetResourceName: 'westusvm1'
      targetVmSize: {
      }
    }
    sourceId: '/subscriptions/subid/resourceGroups/eastusRG/providers/Microsoft.Compute/virtualMachines/eastusvm1'
  }
}
```
