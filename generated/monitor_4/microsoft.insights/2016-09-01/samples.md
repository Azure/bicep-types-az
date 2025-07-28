# microsoft.insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/diagnosticsettings

Create or update a service diagnostic setting
```bicep
resource exampleResource 'microsoft.insights/diagnosticSettings@2016-09-01' = {
  name: 'example'
  location: ''
  properties: {
    eventHubAuthorizationRuleId: '/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/resourceGroups/montest/providers/microsoft.eventhub/namespaces/mynamespace/eventhubs/myeventhub/authorizationrules/myrule'
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
        enabled: true
        retentionPolicy: {
          days: 0
          enabled: false
        }
        timeGrain: 'PT1M'
      }
    ]
    serviceBusRuleId: '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/andy1101/providers/Microsoft.EventHub/namespaces/andy1101/authorizationrules/RootManageSharedAccessKey'
    storageAccountId: '/subscriptions/df602c9c-7aa0-407d-a6fb-eb20c8bd1192/resourceGroups/apptest/providers/Microsoft.Storage/storageAccounts/appteststorage1'
    workspaceId: ''
  }
}
```
