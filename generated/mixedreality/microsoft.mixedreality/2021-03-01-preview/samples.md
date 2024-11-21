# Microsoft.MixedReality

## microsoft.mixedreality/spatialanchorsaccounts

Create spatial anchor account
```bicep
resource exampleResource 'Microsoft.MixedReality/spatialAnchorsAccounts@2021-03-01-preview' = {
  name: 'example'
  location: 'eastus2euap'
}
```

## microsoft.mixedreality/remoterenderingaccounts

Create remote rendering account
```bicep
resource exampleResource 'Microsoft.MixedReality/remoteRenderingAccounts@2021-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
}
```

## microsoft.mixedreality/objectanchorsaccounts

Create object anchors account
```bicep
resource exampleResource 'Microsoft.MixedReality/objectAnchorsAccounts@2021-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
}
```
