# Microsoft.SignalRService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.signalrservice/signalr

CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/SignalR@2018-03-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    hostNamePrefix: {
    }
  }
  sku: {
    name: 'Standard_S1'
    capacity: 1
    tier: 'Standard'
  }
  tags: {
    key1: 'value1'
  }
}
```
