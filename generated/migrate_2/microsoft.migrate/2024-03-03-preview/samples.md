# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects/avsassessments

AvsAssessmentsV2Operations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/avsAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fallbackMachineAssessmentArmId: 'tpjvxfcyxsgngqdxyrrfh'
    scope: {
      azureResourceGraphQuery: 'ylnfwgptlyzwzkotmunbx'
      scopeType: 'ServerGroupId'
      serverGroupId: 'fxonspfmzfuiaepr'
    }
    settings: {
      avsAssessmentScenario: 'Unknown'
      azureLocation: 'actuloeieva'
      billingSettings: {
        licensingProgram: 'Retail'
        subscriptionId: 'xvtuenxmmjuqlhgmvev'
      }
      cpuHeadroom: 27
      currency: 'Unknown'
      dedupeCompression: 26
      discountPercentage: 27
      environmentType: 'Production'
      externalStorageTypes: [
        'Unknown'
      ]
      failuresToTolerateAndRaidLevelList: [
        'Unknown'
      ]
      isStretchClusterEnabled: true
      isVcfByolEnabled: true
      memOvercommit: 11
      nodeTypes: [
        'Unknown'
      ]
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-21T05:36:34.751Z'
        perfDataStartTime: '2025-02-21T05:36:34.751Z'
        timeRange: 'Day'
      }
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 28
      sizingCriterion: 'PerformanceBased'
      vcpuOversubscription: 25
    }
    details: {
      status: 'Created'
    }
  }
}
```
