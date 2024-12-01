# Microsoft.ApiCenter
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.apicenter/services

Services_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ApiCenter/services@2024-06-01-preview' = {
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

## microsoft.apicenter/services/workspaces/apisources

ApiSources_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ApiCenter/services/workspaces/apiSources@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    azureApiManagementSource: {
      msiResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso-resources/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-identity'
      resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso-resources/providers/Microsoft.ApiManagement/service/contoso'
    }
    importSpecification: 'ondemand'
    targetEnvironmentId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso-resources/providers/Microsoft.ApiCenter/services/contoso/workspaces/default/environments/azure-api-management'
    targetLifecycleStage: 'design'
  }
}
```
