# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects/assessments

MachineAssessmentsV2Operations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/assessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    scope: {
      azureResourceGraphQuery: 'hfhwuqalmenpcttboxvo'
      scopeType: 'ServerGroupId'
      serverGroupId: 'f'
    }
    settings: {
      azureDiskTypes: [
        'Unknown'
      ]
      azureHybridUseBenefit: 'Unknown'
      azureLocation: 'rsequlcso'
      azurePricingTier: 'Standard'
      azureSecurityOfferingType: 'NO'
      azureStorageRedundancy: 'Unknown'
      azureVmFamilies: [
        'Unknown'
      ]
      azureVmSecurityOptions: [
        'TVM'
      ]
      billingSettings: {
        licensingProgram: 'Retail'
        subscriptionId: 'lee'
      }
      currency: 'Unknown'
      discountPercentage: 5
      environmentType: 'Production'
      linuxAzureHybridUseBenefit: 'Unknown'
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-21T05:47:51.336Z'
        perfDataStartTime: '2025-02-21T05:47:51.336Z'
        timeRange: 'Day'
      }
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 9
      sizingCriterion: 'PerformanceBased'
      vmUptime: {
        daysPerMonth: 9
        hoursPerDay: 10
      }
    }
    details: {
      status: 'Created'
    }
  }
}
```
