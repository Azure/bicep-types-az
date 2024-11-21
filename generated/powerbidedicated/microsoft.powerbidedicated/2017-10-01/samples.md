# Microsoft.PowerBIDedicated
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
