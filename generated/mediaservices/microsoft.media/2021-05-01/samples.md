# Microsoft.Media

## microsoft.media/mediaservices

Create a Media Services account
```bicep
resource exampleResource 'Microsoft.Media/mediaservices@2021-05-01' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    storageAccounts: [
      {
        type: 'Primary'
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso/providers/Microsoft.Storage/storageAccounts/contososportsstore'
      }
    ]
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.media/mediaservices/privateendpointconnections

Update private endpoint connection.
```bicep
resource exampleResource 'Microsoft.Media/mediaservices/privateEndpointConnections@2021-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Test description.'
      status: 'Approved'
    }
  }
}
```
