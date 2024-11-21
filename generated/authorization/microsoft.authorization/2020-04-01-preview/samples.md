# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/roleassignments

Create role assignment
```bicep
resource exampleResource 'Microsoft.Authorization/roleAssignments@2020-04-01-preview' = {
  name: 'example'
  properties: {
    description: 'Grants UserFoo role assignment bar in scope baz'
    canDelegate: false
    condition: '@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase \'foo_storage_container\''
    conditionVersion: '1.0'
    principalId: 'd93a38bc-d029-4160-bfb0-fbda779ac214'
    principalType: 'User'
    roleDefinitionId: '/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/de139f84-1756-47ae-9be6-808fbbe84772'
  }
}
```
