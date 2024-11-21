# Microsoft.AnalysisServices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.analysisservices/servers

Create a server.
```bicep
resource exampleResource 'Microsoft.AnalysisServices/servers@2017-08-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    asAdministrators: {
      members: [
        'azsdktest@microsoft.com'
        'azsdktest2@microsoft.com'
      ]
    }
  }
  sku: {
    name: 'S1'
    capacity: 1
    tier: 'Standard'
  }
  tags: {
    testKey: 'testValue'
  }
}
```
