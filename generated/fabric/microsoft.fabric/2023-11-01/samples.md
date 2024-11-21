# Microsoft.Fabric

## microsoft.fabric/capacities

Create or update a capacity
```bicep
resource exampleResource 'Microsoft.Fabric/capacities@2023-11-01' = {
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
