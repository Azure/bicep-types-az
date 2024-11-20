# Microsoft.Maps

## microsoft.maps/accounts/privateendpointconnections

PrivateEndpointConnections_Create
```bicep
resource exampleResource 'Microsoft.Maps/accounts/privateEndpointConnections@2023-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```
