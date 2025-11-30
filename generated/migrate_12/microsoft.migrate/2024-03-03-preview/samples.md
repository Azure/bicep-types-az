# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects/webappcompoundassessments

CompoundAssessmentOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/webAppCompoundAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    fallbackMachineAssessmentArmId: '/subscriptions/6898488D-BBF0-40FC-A5E3-3DF2C00C5F21/resourceGroups/rgwebAppCompoundAssessments/providers/Microsoft.Migrate/assessmentprojects/contosoProject/assessments/nameOfAssessment'
    targetAssessmentArmIds: {
      aks: '/subscriptions/6898488D-BBF0-40FC-A5E3-3DF2C00C5F21/resourceGroups/rgwebAppCompoundAssessments/providers/Microsoft.Migrate/assessmentprojects/contosoProject/aksAssessments/nameOfAssessment'
      azureAppService: '/subscriptions/6898488D-BBF0-40FC-A5E3-3DF2C00C5F21/resourceGroups/rgwebAppCompoundAssessments/providers/Microsoft.Migrate/assessmentprojects/contosoProject/webAppAssessments/nameOfAssessment'
      azureAppServiceContainer: '/subscriptions/6898488D-BBF0-40FC-A5E3-3DF2C00C5F21/resourceGroups/rgwebAppCompoundAssessments/providers/Microsoft.Migrate/assessmentprojects/contosoProject/webAppAssessments/nameOfAssessment'
    }
    details: {
      createdTimestamp: '2024-11-14T12:23:57.664Z'
      status: 'Created'
      updatedTimestamp: '2024-11-14T12:23:57.664Z'
    }
  }
}
```
