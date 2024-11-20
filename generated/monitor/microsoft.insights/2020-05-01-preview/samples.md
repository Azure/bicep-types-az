# Microsoft.Insights

## microsoft.insights/scheduledqueryrules

Create or update a scheduled query rule for Single Resource
```bicep
resource exampleResource 'Microsoft.Insights/scheduledQueryRules@2020-05-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'Performance rule'
    actions: [
      {
        actionGroupId: '/subscriptions/1cf177ed-1330-4692-80ea-fd3d7783b147/resourcegroups/sqrapi/providers/microsoft.insights/actiongroups/myactiongroup'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    criteria: {
      allOf: [
        {
          dimensions: [
            {
              name: 'ComputerIp'
              operator: 'Exclude'
              values: [
                '192.168.1.1'
              ]
            }
            {
              name: 'OSType'
              operator: 'Include'
              values: [
                '*'
              ]
            }
          ]
          failingPeriods: {
            minFailingPeriodsToAlert: 1
            numberOfEvaluationPeriods: 1
          }
          metricMeasureColumn: '% Processor Time'
          operator: 'GreaterThan'
          query: 'Perf | where ObjectName == "Processor"'
          resourceIdColumn: 'resourceId'
          threshold: 70
          timeAggregation: 'Average'
        }
      ]
    }
    enabled: true
    evaluationFrequency: 'PT5M'
    muteActionsDuration: 'PT30M'
    scopes: [
      '/subscriptions/aaf177ed-1330-a9f2-80ea-fd3d7783b147/resourceGroups/scopeResourceGroup1/providers/Microsoft.Compute/virtualMachines/vm1'
    ]
    severity: 4
    windowSize: 'PT10M'
  }
}
```

Create or update a scheduled query rule on Resource group(s)
```bicep
resource exampleResource 'Microsoft.Insights/scheduledQueryRules@2020-05-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'Health check rule'
    actions: [
      {
        actionGroupId: '/subscriptions/1cf177ed-1330-4692-80ea-fd3d7783b147/resourcegroups/sqrapi/providers/microsoft.insights/actiongroups/myactiongroup'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    criteria: {
      allOf: [
        {
          dimensions: [
          ]
          failingPeriods: {
            minFailingPeriodsToAlert: 1
            numberOfEvaluationPeriods: 1
          }
          operator: 'GreaterThan'
          query: 'Heartbeat'
          threshold: 360
          timeAggregation: 'Count'
        }
      ]
    }
    enabled: true
    evaluationFrequency: 'PT5M'
    muteActionsDuration: 'PT30M'
    scopes: [
      '/subscriptions/aaf177ed-1330-a9f2-80ea-fd3d7783b147/resourceGroups/scopeResourceGroup1'
    ]
    severity: 4
    targetResourceTypes: [
      'Microsoft.Compute/virtualMachines'
    ]
    windowSize: 'PT10M'
  }
}
```

Create or update a scheduled query rule on Subscription 
```bicep
resource exampleResource 'Microsoft.Insights/scheduledQueryRules@2020-05-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'Performance rule'
    actions: [
      {
        actionGroupId: '/subscriptions/1cf177ed-1330-4692-80ea-fd3d7783b147/resourcegroups/sqrapi/providers/microsoft.insights/actiongroups/myactiongroup'
        webHookProperties: {
          key11: 'value11'
          key12: 'value12'
        }
      }
    ]
    criteria: {
      allOf: [
        {
          dimensions: [
            {
              name: 'ComputerIp'
              operator: 'Exclude'
              values: [
                '192.168.1.1'
              ]
            }
            {
              name: 'OSType'
              operator: 'Include'
              values: [
                '*'
              ]
            }
          ]
          failingPeriods: {
            minFailingPeriodsToAlert: 1
            numberOfEvaluationPeriods: 1
          }
          metricMeasureColumn: '% Processor Time'
          operator: 'GreaterThan'
          query: 'Perf | where ObjectName == "Processor"'
          resourceIdColumn: 'resourceId'
          threshold: 70
          timeAggregation: 'Average'
        }
      ]
    }
    enabled: true
    evaluationFrequency: 'PT5M'
    muteActionsDuration: 'PT30M'
    scopes: [
      '/subscriptions/aaf177ed-1330-a9f2-80ea-fd3d7783b147'
    ]
    severity: 4
    targetResourceTypes: [
      'Microsoft.Compute/virtualMachines'
    ]
    windowSize: 'PT10M'
  }
}
```
