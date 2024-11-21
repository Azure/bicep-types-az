# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/alertrules

Create or update an alert rule
```bicep
resource exampleResource 'Microsoft.Insights/alertrules@2016-03-01' = {
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

## microsoft.insights/logprofiles

Create or update a log profile
```bicep
resource exampleResource 'Microsoft.Insights/logprofiles@2016-03-01' = {
  name: 'example'
  location: ''
  properties: {
    categories: [
      'Write'
      'Delete'
      'Action'
    ]
    locations: [
      'global'
    ]
    retentionPolicy: {
      days: 3
      enabled: true
    }
    serviceBusRuleId: ''
    storageAccountId: '/subscriptions/df602c9c-7aa0-407d-a6fb-eb20c8bd1192/resourceGroups/JohnKemTest/providers/Microsoft.Storage/storageAccounts/johnkemtest8162'
  }
  tags: {
  }
}
```
