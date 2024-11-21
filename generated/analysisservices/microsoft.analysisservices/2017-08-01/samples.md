# Microsoft.AnalysisServices

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
