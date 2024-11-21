# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/alertrules

Create or update an alert rule
```bicep
resource exampleResource 'Microsoft.Insights/alertrules@2014-04-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    name: 'chiricutin'
    description: 'Pura Vida'
    actions: [
    ]
    condition: {
      dataSource: {
        metricName: 'Requests'
        odata.type: 'Microsoft.Azure.Management.Insights.Models.RuleMetricDataSource'
        resourceUri: '/subscriptions/b67f7fec-69fc-4974-9099-a26bd6ffeda3/resourceGroups/Rac46PostSwapRG/providers/Microsoft.Web/sites/leoalerttest'
      }
      odata.type: 'Microsoft.Azure.Management.Insights.Models.ThresholdRuleCondition'
      operator: 'GreaterThan'
      threshold: 3
      timeAggregation: 'Total'
      windowSize: 'PT5M'
    }
    isEnabled: true
  }
  tags: {
  }
}
```

## microsoft.insights/autoscalesettings

Create or update an autoscale setting
```bicep
resource exampleResource 'Microsoft.Insights/autoscalesettings@2014-04-01' = {
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
  }
}
```
