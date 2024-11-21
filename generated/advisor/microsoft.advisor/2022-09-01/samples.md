# Microsoft.Advisor

## microsoft.advisor/configurations

PutConfigurations
```bicep
resource exampleResource 'Microsoft.Advisor/configurations@2022-09-01' = {
  name: 'example'
  properties: {
    digests: [
      {
        name: 'digestConfigName'
        actionGroupResourceId: '/subscriptions/subscriptionId/resourceGroups/resourceGroup/providers/microsoft.insights/actionGroups/actionGroupName'
        categories: [
          'HighAvailability'
          'Security'
          'Performance'
          'Cost'
          'OperationalExcellence'
        ]
        frequency: 30
        state: 'Active'
        language: 'en'
      }
    ]
    duration: '7'
    exclude: true
    lowCpuThreshold: '5'
  }
}
```

## microsoft.advisor/recommendations/suppressions

CreateSuppression
```bicep
resource exampleResource 'Microsoft.Advisor/recommendations/suppressions@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ttl: '07:00:00:00'
  }
}
```
