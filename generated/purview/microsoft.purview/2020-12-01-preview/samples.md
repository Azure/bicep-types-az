# Microsoft.Purview

## microsoft.purview/accounts

Accounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Purview/accounts@2020-12-01-preview' = {
  name: 'example'
  location: 'West US 2'
  properties: {
    managedResourceGroupName: 'custom-rgname'
  }
}
```

## microsoft.purview/accounts/privateendpointconnections

PrivateEndpointConnections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Purview/accounts/privateEndpointConnections@2020-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@company.com'
      status: 'Approved'
    }
  }
}
```
