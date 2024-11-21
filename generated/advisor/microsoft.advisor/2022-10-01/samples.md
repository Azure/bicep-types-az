# Microsoft.Advisor
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.advisor/configurations

PutConfigurations
```bicep
resource exampleResource 'Microsoft.Advisor/configurations@2022-10-01' = {
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
resource exampleResource 'Microsoft.Advisor/recommendations/suppressions@2022-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ttl: '07:00:00:00'
  }
}
```
