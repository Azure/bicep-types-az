# Microsoft.Authorization

## microsoft.authorization/roleassignments

Create role assignment for resource
```bicep
resource exampleResource 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: 'example'
  properties: {
    principalId: 'ce2ce14e-85d7-4629-bdbc-454d0519d987'
    principalType: 'User'
    roleDefinitionId: '/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d'
  }
}
```

Create role assignment for resource group
```bicep
resource exampleResource 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: 'example'
  properties: {
    principalId: 'ce2ce14e-85d7-4629-bdbc-454d0519d987'
    principalType: 'User'
    roleDefinitionId: '/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d'
  }
}
```

Create role assignment for subscription
```bicep
resource exampleResource 'Microsoft.Authorization/roleAssignments@2022-04-01' = {
  name: 'example'
  properties: {
    principalId: 'ce2ce14e-85d7-4629-bdbc-454d0519d987'
    principalType: 'User'
    roleDefinitionId: '/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d'
  }
}
```

## microsoft.authorization/roledefinitions

Create role definition
```bicep
resource exampleResource 'Microsoft.Authorization/roleDefinitions@2022-04-01' = {
  name: 'example'
}
```
