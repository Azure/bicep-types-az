# Microsoft.HybridCompute

## microsoft.hybridcompute/machines

Create or Update a Machine
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines@2020-08-15-preview' = {
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
resource exampleResource 'Microsoft.HybridCompute/machines/extensions@2020-08-15-preview' = {
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

## microsoft.hybridcompute/privatelinkscopes

PrivateLinkScopeCreate
```bicep
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes@2020-08-15-preview' = {
  name: 'example'
  location: 'westus'
}
```

PrivateLinkScopeUpdate
```bicep
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes@2020-08-15-preview' = {
  name: 'example'
  location: 'westus'
  tags: {
    Tag1: 'Value1'
  }
}
```

## microsoft.hybridcompute/privatelinkscopes/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2020-08-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```

## microsoft.hybridcompute/privatelinkscopes/scopedresources

Update a scoped resource in a private link scope.
```bicep
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes/scopedResources@2020-08-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    linkedResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/myResourceGroup/providers/Microsoft.HybridCompute/Machines/machineName1'
  }
}
```
