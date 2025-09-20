# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects/sqlassessments

SqlAssessmentV3Operations_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/sqlAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fallbackMachineAssessmentArmId: 'jfwkifsuigza'
    scope: {
      azureResourceGraphQuery: 'ddqs'
      scopeType: 'ServerGroupId'
      serverGroupId: 'ppxcjyrxfmpm'
    }
    settings: {
      asyncCommitModeIntent: 'None'
      azureLocation: 'vtpazagckatiezkiwol'
      azureSecurityOfferingType: 'NO'
      azureSqlDatabaseSettings: {
        azureSqlComputeTier: 'Unknown'
        azureSqlDataBaseType: 'Unknown'
        azureSqlPurchaseModel: 'Unknown'
        azureSqlServiceTier: 'SqlService_Unknown'
      }
      azureSqlManagedInstanceSettings: {
        azureSqlInstanceType: 'Unknown'
        azureSqlServiceTier: 'SqlService_Unknown'
      }
      azureSqlVmSettings: {
        instanceSeries: [
          'Unknown'
        ]
      }
      billingSettings: {
        licensingProgram: 'Retail'
        subscriptionId: 'sp'
      }
      currency: 'Unknown'
      disasterRecoveryLocation: 'Unknown'
      discountPercentage: 8
      enableHadrAssessment: true
      entityUptime: {
        daysPerMonth: 2
        hoursPerDay: 28
      }
      environmentType: 'Production'
      isInternetAccessAvailable: true
      multiSubnetIntent: 'None'
      osLicense: 'Unknown'
      performanceData: {
        percentile: 'Unknown'
        perfDataEndTime: '2025-02-21T05:15:28.133Z'
        perfDataStartTime: '2025-02-21T05:15:28.133Z'
        timeRange: 'Day'
      }
      preferredTargets: [
        'Unknown'
      ]
      savingsSettings: {
        azureOfferCode: 'Unknown'
        savingsOptions: 'None'
      }
      scalingFactor: 27
      sizingCriterion: 'PerformanceBased'
      sqlServerLicense: 'Unknown'
    }
    details: {
      status: 'Created'
    }
  }
}
```
