# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/diagnosticsettings

Creates or Updates the diagnostic setting
```bicep
resource exampleResource 'Microsoft.Insights/diagnosticSettings@2017-05-01-preview' = {
  name: 'example'
  properties: {
    eventHubAuthorizationRuleId: '/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/resourceGroups/montest/providers/microsoft.eventhub/namespaces/mynamespace/eventhubs/myeventhub/authorizationrules/myrule'
    eventHubName: 'myeventhub'
    logAnalyticsDestinationType: 'Dedicated'
    logs: [
      {
        category: 'WorkflowRuntime'
        enabled: true
        retentionPolicy: {
          days: 0
          enabled: false
        }
      }
    ]
    metrics: [
      {
        category: 'WorkflowMetrics'
        enabled: true
        retentionPolicy: {
          days: 0
          enabled: false
        }
      }
    ]
    storageAccountId: '/subscriptions/df602c9c-7aa0-407d-a6fb-eb20c8bd1192/resourceGroups/apptest/providers/Microsoft.Storage/storageAccounts/appteststorage1'
    workspaceId: ''
  }
}
```
