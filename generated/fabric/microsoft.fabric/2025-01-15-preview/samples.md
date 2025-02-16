# Microsoft.Fabric
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.fabric/capacities

Create or update a capacity
```bicep
resource exampleResource 'Microsoft.Fabric/capacities@2025-01-15-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    administration: {
      members: [
        'azsdktest@microsoft.com'
        'azsdktest2@microsoft.com'
      ]
    }
  }
  sku: {
    name: 'F2'
    tier: 'Fabric'
  }
}
```
