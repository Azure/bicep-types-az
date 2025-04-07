# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/actiongroups

Create or update an action group
```bicep
resource exampleResource 'microsoft.insights/actionGroups@2018-03-01' = {
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

## microsoft.insights/metricalerts

Create or update a dynamic alert rule for Multiple Resources
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: 'example'
  location: 'global'
  properties: {
    description: 'This is the description of the rule1'
    actions: [
      {
        actionGroupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    autoMitigate: true
    criteria: {
      allOf: [
        {
          name: 'High_CPU_80'
          alertSensitivity: 'Medium'
          criterionType: 'DynamicThresholdCriterion'
          dimensions: [
          ]
          failingPeriods: {
            minFailingPeriodsToAlert: 4
            numberOfEvaluationPeriods: 4
          }
          metricName: 'Percentage CPU'
          metricNamespace: 'microsoft.compute/virtualmachines'
          operator: 'GreaterOrLessThan'
          timeAggregation: 'Average'
        }
      ]
      'odata.type': 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    scopes: [
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme1'
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme2'
    ]
    severity: 3
    targetResourceRegion: 'southcentralus'
    targetResourceType: 'Microsoft.Compute/virtualMachines'
    windowSize: 'PT15M'
  }
  tags: {
  }
}
```

Create or update a dynamic alert rule for Single Resource
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: 'example'
  location: 'global'
  properties: {
    description: 'This is the description of the rule1'
    actions: [
      {
        actionGroupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    autoMitigate: true
    criteria: {
      allOf: [
        {
          name: 'High_CPU_80'
          alertSensitivity: 'Medium'
          criterionType: 'DynamicThresholdCriterion'
          dimensions: [
          ]
          failingPeriods: {
            minFailingPeriodsToAlert: 4
            numberOfEvaluationPeriods: 4
          }
          ignoreDataBefore: '2019-04-04T21:00:00.000Z'
          metricName: 'Percentage CPU'
          metricNamespace: 'microsoft.compute/virtualmachines'
          operator: 'GreaterOrLessThan'
          timeAggregation: 'Average'
        }
      ]
      'odata.type': 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    scopes: [
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme'
    ]
    severity: 3
    windowSize: 'PT15M'
  }
  tags: {
  }
}
```

Create or update a web test alert rule
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: 'example'
  location: 'global'
  properties: {
    description: 'Automatically created alert rule for availability test "component-example" a'
    actions: [
    ]
    criteria: {
      componentId: '/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/components/webtest-name-example'
      failedLocationCount: 2
      'odata.type': 'Microsoft.Azure.Monitor.WebtestLocationAvailabilityCriteria'
      webTestId: '/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/webtests/component-example'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    scopes: [
      '/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/webtests/component-example'
      '/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/components/webtest-name-example'
    ]
    severity: 4
    windowSize: 'PT15M'
  }
  tags: {
    'hidden-link:/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/components/webtest-name-example': 'Resource'
    'hidden-link:/subscriptions/12345678-1234-1234-1234-123456789101/resourcegroups/rg-example/providers/microsoft.insights/webtests/component-example': 'Resource'
  }
}
```

Create or update an alert rule for Multiple Resource
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: 'example'
  location: 'global'
  properties: {
    description: 'This is the description of the rule1'
    actions: [
      {
        actionGroupId: '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    autoMitigate: true
    criteria: {
      allOf: [
        {
          name: 'High_CPU_80'
          criterionType: 'StaticThresholdCriterion'
          dimensions: [
          ]
          metricName: 'Percentage CPU'
          metricNamespace: 'microsoft.compute/virtualmachines'
          operator: 'GreaterThan'
          threshold: 80.5
          timeAggregation: 'Average'
        }
      ]
      'odata.type': 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    scopes: [
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme1'
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme2'
    ]
    severity: 3
    targetResourceRegion: 'southcentralus'
    targetResourceType: 'Microsoft.Compute/virtualMachines'
    windowSize: 'PT15M'
  }
  tags: {
  }
}
```

Create or update an alert rule for Single Resource
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: 'example'
  location: 'global'
  properties: {
    description: 'This is the description of the rule1'
    actions: [
      {
        actionGroupId: '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    autoMitigate: true
    criteria: {
      allOf: [
        {
          name: 'High_CPU_80'
          criterionType: 'StaticThresholdCriterion'
          dimensions: [
          ]
          metricName: '\\Processor(_Total)\\% Processor Time'
          operator: 'GreaterThan'
          threshold: 80.5
          timeAggregation: 'Average'
        }
      ]
      'odata.type': 'Microsoft.Azure.Monitor.SingleResourceMultipleMetricCriteria'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    scopes: [
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/Microsoft.Compute/virtualMachines/gigwadme'
    ]
    severity: 3
    windowSize: 'PT15M'
  }
  tags: {
  }
}
```

Create or update an alert rule on Resource group(s)
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: 'example'
  location: 'global'
  properties: {
    description: 'This is the description of the rule1'
    actions: [
      {
        actionGroupId: '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    autoMitigate: true
    criteria: {
      allOf: [
        {
          name: 'High_CPU_80'
          criterionType: 'StaticThresholdCriterion'
          dimensions: [
          ]
          metricName: 'Percentage CPU'
          metricNamespace: 'microsoft.compute/virtualmachines'
          operator: 'GreaterThan'
          threshold: 80.5
          timeAggregation: 'Average'
        }
      ]
      'odata.type': 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    scopes: [
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest1'
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest2'
    ]
    severity: 3
    targetResourceRegion: 'southcentralus'
    targetResourceType: 'Microsoft.Compute/virtualMachines'
    windowSize: 'PT15M'
  }
  tags: {
  }
}
```

Create or update an alert rule on Subscription 
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: 'example'
  location: 'global'
  properties: {
    description: 'This is the description of the rule1'
    actions: [
      {
        actionGroupId: '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    autoMitigate: true
    criteria: {
      allOf: [
        {
          name: 'High_CPU_80'
          criterionType: 'StaticThresholdCriterion'
          dimensions: [
          ]
          metricName: 'Percentage CPU'
          metricNamespace: 'microsoft.compute/virtualmachines'
          operator: 'GreaterThan'
          threshold: 80.5
          timeAggregation: 'Average'
        }
      ]
      'odata.type': 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    scopes: [
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7'
    ]
    severity: 3
    targetResourceRegion: 'southcentralus'
    targetResourceType: 'Microsoft.Compute/virtualMachines'
    windowSize: 'PT15M'
  }
  tags: {
  }
}
```

Create or update an alert rules with dimensions
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2018-03-01' = {
  name: 'example'
  location: 'global'
  properties: {
    description: 'This is the description of the rule1'
    actions: [
      {
        actionGroupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    autoMitigate: true
    criteria: {
      allOf: [
        {
          name: 'Metric1'
          criterionType: 'StaticThresholdCriterion'
          dimensions: [
            {
              name: 'ActivityName'
              operator: 'Include'
              values: [
                '*'
              ]
            }
            {
              name: 'StatusCode'
              operator: 'Include'
              values: [
                '200'
              ]
            }
          ]
          metricName: 'Availability'
          metricNamespace: 'Microsoft.KeyVault/vaults'
          operator: 'GreaterThan'
          threshold: 55
          timeAggregation: 'Average'
        }
      ]
      'odata.type': 'Microsoft.Azure.Monitor.MultipleResourceMultipleMetricCriteria'
    }
    enabled: true
    evaluationFrequency: 'PT1H'
    scopes: [
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/Microsoft.KeyVault/vaults/keyVaultResource'
    ]
    severity: 3
    windowSize: 'P1D'
  }
  tags: {
  }
}
```
