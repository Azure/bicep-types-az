# Microsoft.HybridCompute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hybridcompute/machines

Create or Update a Machine
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines@2022-03-10' = {
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
    parentClusterResourceId: '{AzureStackHCIResourceId}'
    privateLinkScopeResourceId: '/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.HybridCompute/privateLinkScopes/privateLinkScopeName'
    vmId: 'b7a098cc-b0b8-46e8-a205-62f301a62a8f'
  }
}
```

## microsoft.hybridcompute/machines/extensions

Create or Update a Machine Extension
```bicep
resource exampleResource 'Microsoft.HybridCompute/machines/extensions@2022-03-10' = {
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
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes@2022-03-10' = {
  name: 'example'
  location: 'westus'
}
```

PrivateLinkScopeUpdate
```bicep
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes@2022-03-10' = {
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
resource exampleResource 'Microsoft.HybridCompute/privateLinkScopes/privateEndpointConnections@2022-03-10' = {
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
