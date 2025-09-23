# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/assessmentprojects/heterogeneousassessments

HeterogeneousAssessmentOperations_Create
```bicep
resource exampleResource 'Microsoft.Migrate/assessmentProjects/heterogeneousAssessments@2024-03-03-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    assessmentArmIds: [
      'gartykxgfvqccfs'
    ]
    sizingCriterion: 'PerformanceBased'
    status: 'Created'
  }
}
```
