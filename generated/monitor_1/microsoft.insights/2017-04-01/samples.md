# microsoft.insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/actiongroups

Create or update an action group
```bicep
resource exampleResource 'microsoft.insights/actionGroups@2017-04-01' = {
  name: 'example'
  location: 'Global'
  properties: {
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

## microsoft.insights/activitylogalerts

Create or update an activity log alert
```bicep
resource exampleResource 'microsoft.insights/activityLogAlerts@2017-04-01' = {
  name: 'example'
  location: 'Global'
  properties: {
    description: 'Sample activity log alert description'
    actions: {
      actionGroups: [
        {
          actionGroupId: '/subscriptions/187f412d-1758-44d9-b052-169e2564721d/resourceGroups/Default-ActionGroups/providers/microsoft.insights/actionGroups/SampleActionGroup'
          webhookProperties: {
            sampleWebhookProperty: 'samplePropertyValue'
          }
        }
      ]
    }
    condition: {
      allOf: [
        {
          equals: 'Administrative'
          field: 'Category'
        }
        {
          equals: 'Error'
          field: 'Level'
        }
      ]
    }
    enabled: true
    scopes: [
      'subscriptions/187f412d-1758-44d9-b052-169e2564721d'
    ]
  }
  tags: {
  }
}
```
