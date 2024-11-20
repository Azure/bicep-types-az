# Microsoft.HybridCompute

## microsoft.hybridcompute/machines

Create or Update a Machine
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines@2020-07-30-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
  properties: {
    clientPublicKey: 'string'
    locationData: {
      name: 'Redmond'
    }
    vmId: 'b7a098cc-b0b8-46e8-a205-62f301a62a8f'
  }
}
```

## microsoft.hybridcompute/machines/extensions

Create or Update a Machine Extension
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines/extensions@2020-07-30-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus2euap'
  properties: {
    type: 'CustomScriptExtension'
    publisher: 'Microsoft.Compute'
    settings: {
      commandToExecute: 'powershell.exe -c "Get-Process | Where-Object { $_.CPU -gt 10000 }"'
    }
    typeHandlerVersion: '1.10'
  }
}
```
