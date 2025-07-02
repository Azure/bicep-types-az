# Microsoft.Advisor
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.advisor/assessments

PutAssessment
```bicep
resource exampleResource 'Microsoft.Advisor/assessments@2025-05-01-preview' = {
  name: 'example'
  properties: {
    locale: 'en-us'
    typeId: '23513bdb-e8a2-4f0b-8b6b-191ee1f52d34'
    workloadId: 'f72b7134-800f-4f1b-a5bd-691e2140c7d5'
  }
}
```

## microsoft.advisor/configurations

PutConfigurations
```bicep
resource exampleResource 'Microsoft.Advisor/configurations@2025-05-01-preview' = {
  name: 'example'
  properties: {
    digests: [
      {
        name: 'digestConfigName'
        actionGroupResourceId: '/subscriptions/58c3f667-7a62-4bfd-a658-846493e9a493/resourceGroups/resourceGroup/providers/microsoft.insights/actionGroups/actionGroupName'
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
resource exampleResource 'Microsoft.Advisor/recommendations/suppressions@2025-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ttl: '07:00:00:00'
  }
}
```
