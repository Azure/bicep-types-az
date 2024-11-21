# Microsoft.Dynamics365FraudProtection

## microsoft.dynamics365fraudprotection/instances

Create instance
```bicep
resource exampleResource 'Microsoft.Dynamics365FraudProtection/instances@2021-02-01-preview' = {
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
  tags: {
    testKey: 'testValue'
  }
}
```
