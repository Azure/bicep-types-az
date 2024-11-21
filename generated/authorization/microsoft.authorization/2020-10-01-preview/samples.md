# Microsoft.Authorization

## microsoft.authorization/rolemanagementpolicyassignments

PutRoleManagementPolicyAssignment
```bicep
resource exampleResource 'Microsoft.Authorization/roleManagementPolicyAssignments@2020-10-01-preview' = {
  name: 'example'
  properties: {
    policyId: '/providers/Microsoft.Subscription/subscriptions/129ff972-28f8-46b8-a726-e497be039368/providers/Microsoft.Authorization/roleManagementPolicies/b959d571-f0b5-4042-88a7-01be6cb22db9'
    roleDefinitionId: '/subscriptions/129ff972-28f8-46b8-a726-e497be039368/providers/Microsoft.Authorization/roleDefinitions/a1705bd2-3a8f-45a5-8683-466fcfd5cc24'
    scope: '/subscriptions/129ff972-28f8-46b8-a726-e497be039368'
  }
}
```

## microsoft.authorization/roleassignments

Create role assignment for resource
```bicep
resource exampleResource 'Microsoft.Authorization/roleAssignments@2020-10-01-preview' = {
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
resource exampleResource 'Microsoft.Authorization/roleAssignments@2020-10-01-preview' = {
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
resource exampleResource 'Microsoft.Authorization/roleAssignments@2020-10-01-preview' = {
  name: 'example'
  properties: {
    principalId: 'ce2ce14e-85d7-4629-bdbc-454d0519d987'
    principalType: 'User'
    roleDefinitionId: '/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d'
  }
}
```

## microsoft.authorization/roleassignmentschedulerequests

PutRoleAssignmentScheduleRequest
```bicep
resource exampleResource 'Microsoft.Authorization/roleAssignmentScheduleRequests@2020-10-01-preview' = {
  name: 'example'
  properties: {
    condition: '@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase \'foo_storage_container\''
    conditionVersion: '1.0'
    linkedRoleEligibilityScheduleId: 'b1477448-2cc6-4ceb-93b4-54a202a89413'
    principalId: 'a3bb8764-cb92-4276-9d2a-ca1e895e55ea'
    requestType: 'SelfActivate'
    roleDefinitionId: '/subscriptions/dfa2a084-766f-4003-8ae1-c4aeb893a99f/providers/Microsoft.Authorization/roleDefinitions/c8d4ff99-41c3-41a8-9f60-21dfdad59608'
    scheduleInfo: {
      expiration: {
        type: 'AfterDuration'
        duration: 'PT8H'
        endDateTime: {
        }
      }
      startDateTime: '2020-09-09T21:35:27.91Z'
    }
  }
}
```

## microsoft.authorization/roleeligibilityschedulerequests

PutRoleEligibilityScheduleRequest
```bicep
resource exampleResource 'Microsoft.Authorization/roleEligibilityScheduleRequests@2020-10-01-preview' = {
  name: 'example'
  properties: {
    condition: '@Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase \'foo_storage_container\''
    conditionVersion: '1.0'
    principalId: 'a3bb8764-cb92-4276-9d2a-ca1e895e55ea'
    requestType: 'AdminAssign'
    roleDefinitionId: '/subscriptions/dfa2a084-766f-4003-8ae1-c4aeb893a99f/providers/Microsoft.Authorization/roleDefinitions/c8d4ff99-41c3-41a8-9f60-21dfdad59608'
    scheduleInfo: {
      expiration: {
        type: 'AfterDuration'
        duration: 'P365D'
        endDateTime: {
        }
      }
      startDateTime: '2020-09-09T21:31:27.91Z'
    }
  }
}
```
