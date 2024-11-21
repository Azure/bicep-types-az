# microsoft.insights

## microsoft.insights/privatelinkscopes/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2021-07-01-preview' = {
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

## microsoft.insights/privatelinkscopes/scopedresources

Update a scoped resource in a private link scope.
```bicep
resource exampleResource 'Microsoft.Insights/privateLinkScopes/scopedResources@2021-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    linkedResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/MyResourceGroup/providers/Microsoft.Insights/components/my-component'
  }
}
```
