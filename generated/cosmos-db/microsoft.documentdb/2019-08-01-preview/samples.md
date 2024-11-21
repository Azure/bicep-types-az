# Microsoft.DocumentDB

## microsoft.documentdb/databaseaccounts/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2019-08-01-preview' = {
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
