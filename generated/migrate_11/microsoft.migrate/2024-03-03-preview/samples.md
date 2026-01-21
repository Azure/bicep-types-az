# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects/webappassessments

WebAppAssessmentV3Operations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/webAppAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fallbackMachineAssessmentArmId: 'gfjcubgnh'
    scope: {
      azureResourceGraphQuery: 'mjonozzzflcglhdb'
      scopeType: 'ServerGroupId'
      serverGroupId: 'sxwigkygd'
    }
    settings: {
      appSvcContainerSettings: {
        isolationRequired: true
      }
      appSvcNativeSettings: {
        isolationRequired: true
      }
      azureLocation: 'khzvggbrcnpkzrqdtvvyytc'
      azureSecurityOfferingType: 'NO'
      billingSettings: {
        licensingProgram: 'Retail'
        subscriptionId: 'lakvxkjeqpajer'
      }
      currency: 'Unknown'
      discountPercentage: 12
      environmentType: 'Production'
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-21T06:18:34.789Z'
        perfDataStartTime: '2025-02-21T06:18:34.789Z'
        timeRange: 'Day'
      }
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 6
      sizingCriterion: 'PerformanceBased'
    }
    details: {
      status: 'Created'
    }
  }
}
```
