# Microsoft.FluidRelay

## microsoft.fluidrelay/fluidrelayservers

Create a Fluid Relay server
```bicep
resource exampleResource 'Microsoft.FluidRelay/fluidRelayServers@2022-02-15' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'west-us'
  tags: {
    Category: 'sales'
  }
}
```

Create a Fluid Relay server with AMI
```bicep
resource exampleResource 'Microsoft.FluidRelay/fluidRelayServers@2022-02-15' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      /subscriptions/xxxx-xxxx-xxxx-xxxx/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
      }
      /subscriptions/xxxx-xxxx-xxxx-xxxx/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2: {
      }
    }
  }
  location: 'west-us'
  tags: {
    Category: 'sales'
  }
}
```
