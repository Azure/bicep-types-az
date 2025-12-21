# Microsoft.ComputeLimit
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.computelimit/locations/guestsubscriptions

Create a guest subscription
```bicep
resource exampleResource 'Microsoft.ComputeLimit/locations/guestSubscriptions@2025-08-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.computelimit/locations/sharedlimits

Create a shared limit
```bicep
resource exampleResource 'Microsoft.ComputeLimit/locations/sharedLimits@2025-08-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```
