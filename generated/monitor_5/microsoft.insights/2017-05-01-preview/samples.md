# microsoft.insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/diagnosticsettings

Creates or Updates the subscription diagnostic setting
```bicep
resource exampleResource 'microsoft.insights/diagnosticSettings@2017-05-01-preview' = {
  name: 'example'
  properties: {
    eventHubAuthorizationRuleId: '/subscriptions/fb9f25f9-5785-4510-a38f-a62f188eb9f8/resourceGroups/montest/providers/microsoft.eventhub/namespaces/mynamespace/eventhubs/myeventhub/authorizationrules/myrule'
    eventHubName: 'myeventhub'
    logs: [
      {
        category: 'Security'
        enabled: true
      }
    ]
    storageAccountId: '/subscriptions/df602c9c-7aa0-407d-a6fb-eb20c8bd1192/resourceGroups/apptest/providers/Microsoft.Storage/storageAccounts/appteststorage1'
    workspaceId: ''
  }
}
```
