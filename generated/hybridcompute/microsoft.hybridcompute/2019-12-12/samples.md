# Microsoft.HybridCompute

## microsoft.hybridcompute/machines

Create or update a machine resource.
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines@2019-12-12' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
  properties: {
    clientPublicKey: 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCqGKukO1De7zhZj6+H0qtjTkVxwTCpvKe4eCZ0FPqri0cb2JZfXJ/DgYSF6vUpwmJG8wVQZKjeGcjDOL5UlsuusFncCzWBQ7RKNUSesmQRMSGkVb1/3j+skZ6UtW+5u09lHNsj6tQ51s1SPrCBkedbNf0Tp0GbMJDyR4e9T04ZZwIDAQAB'
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
resource exampleResource 'Microsoft.HybridCompute/machines/extensions@2019-12-12' = {
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
