# Microsoft.FluidRelay

## microsoft.fluidrelay/fluidrelayservers

Create a Fluid Relay server
```bicep
resource exampleResource 'Microsoft.FluidRelay/fluidRelayServers@2021-08-30-preview' = {
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
