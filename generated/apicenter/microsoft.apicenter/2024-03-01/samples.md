# Microsoft.ApiCenter

## microsoft.apicenter/services

Services_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ApiCenter/services@2024-03-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso-resources/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-identity: {
      }
    }
  }
  location: 'East US'
  properties: {
  }
  tags: {
  }
}
```
