# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects/aksassessments

AksAssessmentOperations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/aksAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    scope: {
      azureResourceGraphQuery: 'zyhczkubwaqjqrmyithugmedmtdjxb'
      scopeType: 'ServerGroupId'
      serverGroupId: 'this-will-be-a-valid-arm-id'
    }
    settings: {
      azureLocation: 'EastUS'
      billingSettings: {
        licensingProgram: 'EA'
        subscriptionId: '572C3D3F-425D-4AE8-A935-72631EADDE56'
      }
      category: 'All'
      consolidation: 'Full'
      currency: 'USD'
      discountPercentage: 14
      environmentType: 'Production'
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-14T07:09:09.242Z'
        perfDataStartTime: '2025-02-14T07:09:09.242Z'
        timeRange: 'Day'
      }
      pricingTier: 'Standard'
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 20
      sizingCriterion: 'PerformanceBased'
    }
  }
}
```
