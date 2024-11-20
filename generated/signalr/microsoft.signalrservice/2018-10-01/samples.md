# Microsoft.SignalRService

## microsoft.signalrservice/signalr

SignalR_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/signalR@2018-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    cors: {
      allowedOrigins: [
        'https://foo.com'
        'https://bar.com'
      ]
    }
    features: [
      {
        flag: 'ServiceMode'
        properties: {
        }
        value: 'Serverless'
      }
    ]
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
