# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects

AssessmentProjectsOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects@2024-03-03-preview' = {
  name: 'example'
  location: 'southeastasia'
  properties: {
    assessmentSolutionId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/sakanwar/providers/Microsoft.Storage/storageAccounts/sakanwar1204usa'
    customerStorageAccountArmId: '/subscriptions/4bd2aa0f-2bd2-4d67-91a8-5a4533d58600/resourceGroups/sakanwar/providers/Microsoft.Storage/storageAccounts/sakanwar1204usa'
    customerWorkspaceId: {
    }
    customerWorkspaceLocation: {
    }
    projectStatus: 'Active'
    publicNetworkAccess: 'Disabled'
  }
  tags: {
    'Migrate Project': 'sakanwar-PE-SEA'
  }
}
```

## microsoft.migrate/assessmentprojects/privateendpointconnections

PrivateEndpointConnectionOperations_Update
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/privateEndpointConnections@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: {
      }
      actionsRequired: ''
      status: 'Approved'
    }
  }
}
```
