# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/accessreviewhistorydefinitions

PutAccessReviewHistoryDefinition
```bicep
resource exampleResource 'Microsoft.Authorization/accessReviewHistoryDefinitions@2021-11-16-preview' = {
  name: 'example'
}
```

## microsoft.authorization/accessreviewscheduledefinitions

PutAccessReview
```bicep
resource exampleResource 'Microsoft.Authorization/accessReviewScheduleDefinitions@2021-11-16-preview' = {
  name: 'example'
}
```

## microsoft.authorization/accessreviewscheduledefinitions/instances

PutAccessReviewInstance
```bicep
resource exampleResource 'Microsoft.Authorization/accessReviewScheduleDefinitions/instances@2021-11-16-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.authorization/accessreviewschedulesettings

PutAccessReviewDefaultSettings
```bicep
resource exampleResource 'Microsoft.Authorization/accessReviewScheduleSettings@2021-11-16-preview' = {
  name: 'example'
}
```
