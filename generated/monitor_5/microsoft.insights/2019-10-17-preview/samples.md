# microsoft.insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/privatelinkscopes/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.Insights/privateLinkScopes/privateEndpointConnections@2019-10-17-preview' = {
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
resource exampleResource 'Microsoft.Insights/privateLinkScopes/scopedResources@2019-10-17-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    linkedResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/MyResourceGroup/providers/Microsoft.Insights/components/my-component'
  }
}
```
