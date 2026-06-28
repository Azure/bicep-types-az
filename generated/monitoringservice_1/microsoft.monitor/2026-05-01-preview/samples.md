# Microsoft.Monitor
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.monitor/observabilityagents

ObservabilityAgents_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Monitor/observabilityAgents@2026-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    enabled: true
    monitoringAccountId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Monitor/accounts/myAzureMonitorWorkspace'
    operations: [
      {
        type: 'IssueCreation'
        instructions: 'use includeAlertsFromGlobalRules'
        mode: 'Auto'
      }
      {
        type: 'Investigation'
        instructions: 'focus on recent issues'
        mode: 'Auto'
      }
    ]
  }
  tags: {
    env: 'dev'
  }
}
```

ObservabilityAgents_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.Monitor/observabilityAgents@2026-05-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    monitoringAccountId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Monitor/accounts/myAzureMonitorWorkspace'
  }
}
```
