# Microsoft.Insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
