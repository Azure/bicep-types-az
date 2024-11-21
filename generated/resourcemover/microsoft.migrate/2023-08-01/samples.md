# Microsoft.Migrate

## microsoft.migrate/movecollections

MoveCollections_Create
```bicep
resource exampleResource 'Microsoft.Migrate/moveCollections@2023-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2'
  properties: {
    moveType: 'RegionToRegion'
    sourceRegion: 'eastus'
    targetRegion: 'westus'
  }
}
```

## microsoft.migrate/movecollections/moveresources

MoveResources_Create
```bicep
resource exampleResource 'Microsoft.Migrate/moveCollections/moveResources@2023-08-01' = {
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
      userManagedIdentities: [
        '/subscriptions/subid/resourceGroups/eastusRG/providers/Microsoft.ManagedIdentity/userAssignedIdentities/umi1'
      ]
    }
    sourceId: '/subscriptions/subid/resourceGroups/eastusRG/providers/Microsoft.Compute/virtualMachines/eastusvm1'
  }
}
```
