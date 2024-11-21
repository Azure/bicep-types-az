# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/roleassignmentschedulerequests

PutRoleAssignmentScheduleRequest
```bicep
resource exampleResource 'Microsoft.Authorization/roleAssignmentScheduleRequests@2022-04-01-preview' = {
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
resource exampleResource 'Microsoft.Authorization/roleEligibilityScheduleRequests@2022-04-01-preview' = {
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
