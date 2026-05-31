# microsoft.insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/diagnosticsettings

Creates or Updates the management group diagnostic setting
```bicep
resource exampleResource 'microsoft.insights/diagnosticSettings@2020-01-01-preview' = {
  name: 'example'
  properties: {
    eventHubAuthorizationRuleId: '/subscriptions/fb9f25f9-5785-4510-a38f-a62f188eb9f8/resourceGroups/montest/providers/microsoft.eventhub/namespaces/mynamespace/eventhubs/myeventhub/authorizationrules/myrule'
    eventHubName: 'myeventhub'
    logs: [
      {
        category: 'Administrative'
        enabled: true
      }
      {
        category: 'Policy'
        enabled: true
      }
    ]
    storageAccountId: '/subscriptions/bfaef57f-297e-4210-bfe5-27c18cc671f7/resourceGroups/FuncAppRunners/providers/Microsoft.Storage/storageAccounts/testpersonalb6a5'
    workspaceId: '/subscriptions/9cf7cc0a-0ba1-4624-bc82-97e1ee25dc45/resourceGroups/mgTest/providers/Microsoft.OperationalInsights/workspaces/mgTestWorkspace'
  }
}
```
