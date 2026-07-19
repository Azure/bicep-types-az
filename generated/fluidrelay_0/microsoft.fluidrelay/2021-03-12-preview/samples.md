# Microsoft.FluidRelay
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.fluidrelay/fluidrelayservers

Create a Fluid Relay server
```bicep
resource exampleResource 'Microsoft.FluidRelay/fluidRelayServers@2021-03-12-preview' = {
  name: 'example'
  location: 'west-us'
  tags: {
    Category: 'sales'
  }
}
```
