# microsoft.aadiam
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.aadiam/diagnosticsettings

BatchAccountDelete
```bicep
resource exampleResource 'microsoft.aadiam/diagnosticSettings@2017-04-01' = {
  name: 'example'
  properties: {
    eventHubAuthorizationRuleId: '/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/resourceGroups/montest/providers/microsoft.eventhub/namespaces/mynamespace/eventhubs/myeventhub/authorizationrules/myrule'
    eventHubName: 'myeventhub'
    logs: [
      {
        category: 'AuditLogs'
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
