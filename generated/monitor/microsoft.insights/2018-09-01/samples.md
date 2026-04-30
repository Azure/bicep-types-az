# microsoft.insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/actiongroups

Create or update an action group
```bicep
resource exampleResource 'microsoft.insights/actionGroups@2018-09-01' = {
  name: 'example'
  location: 'Global'
  properties: {
    armRoleReceivers: [
      {
        name: 'Sample armRole'
        roleId: '8e3af657-a8ff-443c-a75c-2fe8c4bcb635'
      }
    ]
    automationRunbookReceivers: [
      {
        name: 'testRunbook'
        automationAccountId: '/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/runbookTest/providers/Microsoft.Automation/automationAccounts/runbooktest'
        isGlobalRunbook: false
        runbookName: 'Sample runbook'
        serviceUri: '<serviceUri>'
        webhookResourceId: '/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/runbookTest/providers/Microsoft.Automation/automationAccounts/runbooktest/webhooks/Alert1510184037084'
      }
    ]
    azureAppPushReceivers: [
      {
        name: 'Sample azureAppPush'
        emailAddress: 'johndoe@email.com'
      }
    ]
    azureFunctionReceivers: [
      {
        name: 'Sample azureFunction'
        functionAppResourceId: '/subscriptions/5def922a-3ed4-49c1-b9fd-05ec533819a3/resourceGroups/aznsTest/providers/Microsoft.Web/sites/testFunctionApp'
        functionName: 'HttpTriggerCSharp1'
        httpTriggerUrl: '<httpTriggerUrl>'
      }
    ]
    emailReceivers: [
      {
        name: 'John Doe\'s email'
        emailAddress: 'johndoe@email.com'
      }
      {
        name: 'Jane Smith\'s email'
        emailAddress: 'janesmith@email.com'
      }
    ]
    enabled: true
    groupShortName: 'sample'
    itsmReceivers: [
      {
        name: 'Sample itsm'
        connectionId: 'a3b9076c-ce8e-434e-85b4-aff10cb3c8f1'
        region: 'westcentralus'
        ticketConfiguration: '{"PayloadRevision":0,"WorkItemType":"Incident","UseTemplate":false,"WorkItemData":"{}","CreateOneWIPerCI":false}'
        workspaceId: '5def922a-3ed4-49c1-b9fd-05ec533819a3|55dfd1f8-7e59-4f89-bf56-4c82f5ace23c'
      }
    ]
    logicAppReceivers: [
      {
        name: 'Sample logicApp'
        callbackUrl: 'https://prod-27.northcentralus.logic.azure.com/workflows/68e572e818e5457ba898763b7db90877/triggers/manual/paths/invoke/azns/test?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Abpsb72UYJxPPvmDo937uzofupO5r_vIeWEx7KVHo7w'
        resourceId: '/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/LogicApp/providers/Microsoft.Logic/workflows/testLogicApp'
      }
    ]
    smsReceivers: [
      {
        name: 'John Doe\'s mobile'
        countryCode: '1'
        phoneNumber: '1234567890'
      }
      {
        name: 'Jane Smith\'s mobile'
        countryCode: '1'
        phoneNumber: '0987654321'
      }
    ]
    voiceReceivers: [
      {
        name: 'Sample voice'
        countryCode: '1'
        phoneNumber: '1234567890'
      }
    ]
    webhookReceivers: [
      {
        name: 'Sample webhook'
        serviceUri: 'http://www.example.com/webhook'
      }
    ]
  }
  tags: {
  }
}
```
