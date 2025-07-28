# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/privatelinks

Create private link
```bicep
resource exampleResource 'Microsoft.Security/privateLinks@2025-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
  tags: {
    environment: 'production'
    owner: 'security-team'
    project: 'private-links'
  }
}
```

## microsoft.security/privatelinks/privateendpointconnections

Create or update private endpoint connection
```bicep
resource exampleResource 'Microsoft.Security/privateLinks/privateEndpointConnections@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by administrator'
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```
