# Microsoft.MixedReality

## microsoft.mixedreality/remoterenderingaccounts

Create remote rendering account
```bicep
resource exampleResource 'Microsoft.MixedReality/remoteRenderingAccounts@2020-04-06-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
}
```
