# Microsoft.SignalRService

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
