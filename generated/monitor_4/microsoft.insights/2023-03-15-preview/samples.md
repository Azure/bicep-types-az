# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/scheduledqueryrules

Create or update a scheduled query rule for Single Resource
```bicep
resource exampleResource 'Microsoft.Insights/scheduledQueryRules@2023-03-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'Performance rule'
    actions: {
      actionGroups: [
        '/subscriptions/1cf177ed-1330-4692-80ea-fd3d7783b147/resourcegroups/sqrapi/providers/microsoft.insights/actiongroups/myactiongroup'
      ]
      customProperties: {
        key11: 'value11'
        key12: 'value12'
      }
    }
    checkWorkspaceAlertsStorageConfigured: true
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
    resolveConfiguration: {
      autoResolved: true
      timeToResolve: 'PT10M'
    }
    scopes: [
      '/subscriptions/aaf177ed-1330-a9f2-80ea-fd3d7783b147/resourceGroups/scopeResourceGroup1/providers/Microsoft.Compute/virtualMachines/vm1'
    ]
    severity: 4
    skipQueryValidation: true
    windowSize: 'PT10M'
  }
}
```

Create or update a scheduled query rule on Resource group(s)
```bicep
resource exampleResource 'Microsoft.Insights/scheduledQueryRules@2023-03-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'Health check rule'
    actions: {
      actionGroups: [
        '/subscriptions/1cf177ed-1330-4692-80ea-fd3d7783b147/resourcegroups/sqrapi/providers/microsoft.insights/actiongroups/myactiongroup'
      ]
      customProperties: {
        key11: 'value11'
        key12: 'value12'
      }
    }
    checkWorkspaceAlertsStorageConfigured: true
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
    resolveConfiguration: {
      autoResolved: true
      timeToResolve: 'PT10M'
    }
    scopes: [
      '/subscriptions/aaf177ed-1330-a9f2-80ea-fd3d7783b147/resourceGroups/scopeResourceGroup1'
    ]
    severity: 4
    skipQueryValidation: true
    targetResourceTypes: [
      'Microsoft.Compute/virtualMachines'
    ]
    windowSize: 'PT10M'
  }
}
```

Create or update a scheduled query rule on Subscription 
```bicep
resource exampleResource 'Microsoft.Insights/scheduledQueryRules@2023-03-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'Performance rule'
    actions: {
      actionGroups: [
        '/subscriptions/1cf177ed-1330-4692-80ea-fd3d7783b147/resourcegroups/sqrapi/providers/microsoft.insights/actiongroups/myactiongroup'
      ]
      customProperties: {
        key11: 'value11'
        key12: 'value12'
      }
    }
    checkWorkspaceAlertsStorageConfigured: true
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
    resolveConfiguration: {
      autoResolved: true
      timeToResolve: 'PT10M'
    }
    scopes: [
      '/subscriptions/aaf177ed-1330-a9f2-80ea-fd3d7783b147'
    ]
    severity: 4
    skipQueryValidation: true
    targetResourceTypes: [
      'Microsoft.Compute/virtualMachines'
    ]
    windowSize: 'PT10M'
  }
}
```
