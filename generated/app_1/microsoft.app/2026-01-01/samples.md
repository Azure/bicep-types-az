# Microsoft.App
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.app/agents

Agents_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.App/agents@2026-01-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'East US'
  properties: {
    actionConfiguration: {
      accessLevel: 'High'
      identity: '/subscriptions/8efdecc5-919e-44eb-b179-915dca89ebf9/resourceGroups/examplerg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/actionIdentity'
      mode: 'Review'
    }
    agentIdentity: {
      initialSponsorGroupId: '99999999-aaaa-bbbb-cccc-dddddddddddd'
    }
    agentSpaceId: '/subscriptions/8efdecc5-919e-44eb-b179-915dca89ebf9/resourceGroups/examplerg/providers/Microsoft.App/agentSpaces/testAgentSpace'
    defaultModel: {
      name: 'gpt-5'
      provider: 'MicrosoftFoundry'
    }
    knowledgeGraphConfiguration: {
      identity: '/subscriptions/8efdecc5-919e-44eb-b179-915dca89ebf9/resourceGroups/examplerg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testIdentity'
      managedResources: [
        '/subscriptions/8efdecc5-919e-44eb-b179-915dca89ebf9/resourceGroups/examplerg/providers/Microsoft.Storage/storageAccounts/teststorage'
      ]
    }
    logConfiguration: {
      applicationInsightsConfiguration: {
        appId: '87654321-4321-4321-4321-210987654321'
        connectionString: 'InstrumentationKey=87654321-4321-4321-4321-210987654321;IngestionEndpoint=https://eastus-0.in.applicationinsights.azure.com/'
      }
    }
  }
  tags: {
    environment: 'production'
    team: 'platform'
  }
}
```

## microsoft.app/agents/connectors

AgentsConnectors_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.App/agents/connectors@2026-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataConnectorType: 'Kusto'
    endpoint: 'https://newcluster.eastus.kusto.windows.net'
    extendedProperties: {
      AuthType: 'Custom'
      CustomHeader: {
        DD_API_KEY: 'value 1'
        DD_APPLICATION_KEY: 'value 2'
      }
    }
    identity: '/subscriptions/8efdecc5-919e-44eb-b179-915dca89ebf9/resourceGroups/examplerg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/kustoIdentity'
  }
}
```

## microsoft.app/agentspaces

AgentSpaces_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.App/agentSpaces@2026-01-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'East US'
  properties: {
    description: 'New production agent space for AI assistant services'
    maxAgentCount: 15
    policies: {
      genevaActionsConfiguration: {
        acisEndpoint: 'https://acis.eastus.monitoring.azure.com'
        allowedActions: [
          {
            actionName: 'RestartService'
            actionParameters: [
              {
                name: 'serviceName'
                type: 'string'
              }
            ]
            approvalRequired: true
            extension: 'GenevaActions'
          }
          {
            actionName: 'GetMetrics'
            actionParameters: [
              {
                name: 'metricName'
                type: 'string'
              }
              {
                name: 'timeRange'
                type: 'string'
              }
            ]
            approvalRequired: false
            extension: 'GenevaActions'
          }
        ]
        authenticationMode: 'OAuth'
        certificateSubjectName: 'CN=AgentSpaceAuth'
        clientId: '12345678-1234-1234-1234-123456789012'
        extensionName: 'GenevaActions'
      }
    }
    serviceTreeId: 'abcdef12-3456-7890-abcd-ef1234567890'
  }
  tags: {
    environment: 'production'
    project: 'aiAssistant'
    team: 'platform'
  }
}
```

## microsoft.app/agentspaces/connectors

AgentSpacesConnectors_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.App/agentSpaces/connectors@2026-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataConnectorType: 'Kusto'
    endpoint: 'https://newsharedkusto.kusto.windows.net'
    extendedProperties: {
      additionalEndpoints: [
        'https://foo.kusto.windows.net/databasename'
        'https://bar.kusto.windows.net/databasename'
      ]
      environment: 'production'
      owner: 'alice'
    }
    identity: '/subscriptions/8efdecc5-919e-44eb-b179-915dca89ebf9/resourceGroups/examplerg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/sharedCosmosIdentity'
  }
}
```
