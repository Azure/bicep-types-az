# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/metricalerts

Create or update a dynamic alert rule for Multiple Resources
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
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
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
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

Create or update a query based alert rule
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/2f1a501a-6e1d-4f37-a445-462d7f8a563d/resourceGroups/AdisTest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/msi-test-euap': {
      }
    }
  }
  location: 'eastus'
  properties: {
    description: 'This is the description of the rule1'
    actionProperties: {
      'Email.Sujbect': 'my custom email subject'
    }
    actions: [
      {
        actionGroupId: '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
      }
    ]
    criteria: {
      allOf: [
        {
          name: 'Metric1'
          criterionType: 'StaticThresholdCriterion'
          query: 'avg({"system.cpu.utilization"}) > 90'
        }
      ]
      failingPeriods: {
        for: 'PT5M'
      }
      'odata.type': 'Microsoft.Azure.Monitor.PromQLCriteria'
    }
    customProperties: {
      key11: 'value11'
      key12: 'value12'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    resolveConfiguration: {
      autoResolved: true
      timeToResolve: 'PT10M'
    }
    scopes: [
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/microsoft.monitor/accounts/gigwadme'
    ]
    severity: 3
  }
  tags: {
  }
}
```

Create or update a query based alert rule with dynamic threshold
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/2f1a501a-6e1d-4f37-a445-462d7f8a563d/resourceGroups/AdisTest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/msi-test-euap': {
      }
    }
  }
  location: 'eastus'
  properties: {
    description: 'This is the description of the rule1'
    actionProperties: {
      'Email.Sujbect': 'my custom email subject'
    }
    actions: [
      {
        actionGroupId: '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
      }
    ]
    criteria: {
      allOf: [
        {
          name: 'Metric1'
          alertSensitivity: 'Medium'
          criterionType: 'DynamicThresholdCriterion'
          ignoreDataBefore: '2019-04-04T21:00:00.000Z'
          operator: 'LessThan'
          query: 'avg({"system.cpu.utilization"})'
        }
      ]
      failingPeriods: {
        for: 'PT5M'
      }
      'odata.type': 'Microsoft.Azure.Monitor.PromQLCriteria'
    }
    customProperties: {
      key11: 'value11'
      key12: 'value12'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    resolveConfiguration: {
      autoResolved: true
      timeToResolve: 'PT10M'
    }
    scopes: [
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/microsoft.monitor/accounts/gigwadme'
    ]
    severity: 3
  }
  tags: {
  }
}
```

Create or update a resource centric query based alert rule
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/2f1a501a-6e1d-4f37-a445-462d7f8a563d/resourceGroups/AdisTest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/msi-test-euap': {
      }
    }
  }
  location: 'eastus'
  properties: {
    description: 'This is the description of the rule1'
    actionProperties: {
      'Email.Sujbect': 'my custom email subject'
    }
    actions: [
      {
        actionGroupId: '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
      }
    ]
    criteria: {
      allOf: [
        {
          name: 'Metric1'
          criterionType: 'StaticThresholdCriterion'
          query: 'avg({"system.cpu.utilization"}) > 90'
        }
      ]
      failingPeriods: {
        for: 'PT5M'
      }
      'odata.type': 'Microsoft.Azure.Monitor.PromQLCriteria'
    }
    customProperties: {
      key11: 'value11'
      key12: 'value12'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    resolveConfiguration: {
      autoResolved: true
      timeToResolve: 'PT10M'
    }
    scopes: [
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourceGroups/gigtest/providers/microsoft.compute/virtualMachines/myVmName'
    ]
    severity: 3
  }
  tags: {
  }
}
```

Create or update a resource centric query based alert rule for Multiple Resources
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/2f1a501a-6e1d-4f37-a445-462d7f8a563d/resourceGroups/AdisTest/providers/Microsoft.ManagedIdentity/userAssignedIdentities/msi-test-euap': {
      }
    }
  }
  location: 'eastus'
  properties: {
    description: 'This is the description of the rule1'
    actionProperties: {
      'Email.Sujbect': 'my custom email subject'
    }
    actions: [
      {
        actionGroupId: '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7/resourcegroups/gigtest/providers/microsoft.insights/actiongroups/group2'
      }
    ]
    criteria: {
      allOf: [
        {
          name: 'Metric1'
          criterionType: 'StaticThresholdCriterion'
          query: 'avg({"system.cpu.utilization"}) by ("microsoft.resourceid") > 90'
        }
      ]
      failingPeriods: {
        for: 'PT5M'
      }
      'odata.type': 'Microsoft.Azure.Monitor.PromQLCriteria'
    }
    customProperties: {
      key11: 'value11'
      key12: 'value12'
    }
    enabled: true
    evaluationFrequency: 'PT1M'
    resolveConfiguration: {
      autoResolved: true
      timeToResolve: 'PT10M'
    }
    scopes: [
      '/subscriptions/14ddf0c5-77c5-4b53-84f6-e1fa43ad68f7'
    ]
    severity: 3
  }
  tags: {
  }
}
```

Create or update a web test alert rule
```bicep
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
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
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
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
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
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
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
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
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
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
resource exampleResource 'Microsoft.Insights/metricAlerts@2024-03-01-preview' = {
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
