# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/autoscalesettings

Create or update an autoscale setting
```bicep
resource exampleResource 'Microsoft.Insights/autoscalesettings@2021-05-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    enabled: true
    notifications: [
      {
        email: {
          customEmails: [
            'gu@ms.com'
            'ge@ns.net'
          ]
          sendToSubscriptionAdministrator: true
          sendToSubscriptionCoAdministrators: true
        }
        operation: 'Scale'
        webhooks: [
          {
            properties: {
            }
            serviceUri: 'http://myservice.com'
          }
        ]
      }
    ]
    predictiveAutoscalePolicy: {
      scaleMode: 'Enabled'
    }
    profiles: [
      {
        name: 'adios'
        capacity: {
          default: '1'
          maximum: '10'
          minimum: '1'
        }
        fixedDate: {
          end: '2015-03-05T14:30:00Z'
          start: '2015-03-05T14:00:00Z'
          timeZone: 'UTC'
        }
        rules: [
          {
            metricTrigger: {
              dividePerInstance: false
              metricName: 'Percentage CPU'
              metricResourceUri: '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/TestingMetricsScaleSet/providers/Microsoft.Compute/virtualMachineScaleSets/testingsc'
              operator: 'GreaterThan'
              statistic: 'Average'
              threshold: 10
              timeAggregation: 'Average'
              timeGrain: 'PT1M'
              timeWindow: 'PT5M'
            }
            scaleAction: {
              type: 'ChangeCount'
              cooldown: 'PT5M'
              direction: 'Increase'
              value: '1'
            }
          }
          {
            metricTrigger: {
              dividePerInstance: false
              metricName: 'Percentage CPU'
              metricResourceUri: '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/TestingMetricsScaleSet/providers/Microsoft.Compute/virtualMachineScaleSets/testingsc'
              operator: 'GreaterThan'
              statistic: 'Average'
              threshold: 15
              timeAggregation: 'Average'
              timeGrain: 'PT2M'
              timeWindow: 'PT5M'
            }
            scaleAction: {
              type: 'ChangeCount'
              cooldown: 'PT6M'
              direction: 'Decrease'
              value: '2'
            }
          }
        ]
      }
      {
        name: 'saludos'
        capacity: {
          default: '1'
          maximum: '10'
          minimum: '1'
        }
        recurrence: {
          frequency: 'Week'
          schedule: {
            days: [
              '1'
            ]
            hours: [
              5
            ]
            minutes: [
              15
            ]
            timeZone: 'UTC'
          }
        }
        rules: [
          {
            metricTrigger: {
              dividePerInstance: false
              metricName: 'Percentage CPU'
              metricResourceUri: '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/TestingMetricsScaleSet/providers/Microsoft.Compute/virtualMachineScaleSets/testingsc'
              operator: 'GreaterThan'
              statistic: 'Average'
              threshold: 10
              timeAggregation: 'Average'
              timeGrain: 'PT1M'
              timeWindow: 'PT5M'
            }
            scaleAction: {
              type: 'ChangeCount'
              cooldown: 'PT5M'
              direction: 'Increase'
              value: '1'
            }
          }
          {
            metricTrigger: {
              dividePerInstance: false
              metricName: 'Percentage CPU'
              metricResourceUri: '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/TestingMetricsScaleSet/providers/Microsoft.Compute/virtualMachineScaleSets/testingsc'
              operator: 'GreaterThan'
              statistic: 'Average'
              threshold: 15
              timeAggregation: 'Average'
              timeGrain: 'PT2M'
              timeWindow: 'PT5M'
            }
            scaleAction: {
              type: 'ChangeCount'
              cooldown: 'PT6M'
              direction: 'Decrease'
              value: '2'
            }
          }
        ]
      }
    ]
    targetResourceUri: '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/TestingMetricsScaleSet/providers/Microsoft.Compute/virtualMachineScaleSets/testingsc'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.insights/diagnosticsettings

Creates or Updates the diagnostic setting
```bicep
resource exampleResource 'Microsoft.Insights/diagnosticSettings@2021-05-01-preview' = {
  name: 'example'
  properties: {
    eventHubAuthorizationRuleId: '/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/resourceGroups/montest/providers/microsoft.eventhub/namespaces/mynamespace/authorizationrules/myrule'
    eventHubName: 'myeventhub'
    logAnalyticsDestinationType: 'Dedicated'
    logs: [
      {
        categoryGroup: 'allLogs'
        enabled: true
        retentionPolicy: {
          days: 0
          enabled: false
        }
      }
    ]
    marketplacePartnerId: '/subscriptions/abcdeabc-1234-1234-ab12-123a1234567a/resourceGroups/test-rg/providers/Microsoft.Datadog/monitors/dd1'
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

Creates or Updates the diagnostic setting for category
```bicep
resource exampleResource 'Microsoft.Insights/diagnosticSettings@2021-05-01-preview' = {
  name: 'example'
  properties: {
    eventHubAuthorizationRuleId: '/subscriptions/1a66ce04-b633-4a0b-b2bc-a912ec8986a6/resourceGroups/montest/providers/microsoft.eventhub/namespaces/mynamespace/authorizationrules/myrule'
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
    marketplacePartnerId: '/subscriptions/abcdeabc-1234-1234-ab12-123a1234567a/resourceGroups/test-rg/providers/Microsoft.Datadog/monitors/dd1'
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
