# Microsoft.PowerBIDedicated

## microsoft.powerbidedicated/capacities

Create capacity
```bicep
resource exampleResource 'Microsoft.PowerBIDedicated/capacities@2017-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    administration: {
      members: [
        'azsdktest@microsoft.com'
        'azsdktest2@microsoft.com'
      ]
    }
  }
  sku: {
    name: 'A1'
    tier: 'PBIE_Azure'
  }
  tags: {
    testKey: 'testValue'
  }
}
```
