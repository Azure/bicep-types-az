# Microsoft.Migrate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.migrate/projects

Projects_Create
```bicep
resource exampleResource 'Microsoft.Migrate/projects@2018-02-02' = {
  name: 'example'
  name: 'project01'
  type: 'Microsoft.Migrate/projects'
  eTag: '"b701c73a-0000-0000-0000-59c12ff00000"'
  id: '/subscriptions/75dd7e42-4fd1-4512-af04-83ad9864335b/resourceGroups/myResourceGroup/providers/Microsoft.Migrate/projects/project01'
  location: 'West Us'
  properties: {
    customerWorkspaceId: 'url-to-customers-service-map'
    customerWorkspaceLocation: 'West Us'
  }
  tags: {
  }
}
```

## microsoft.migrate/projects/groups

Groups_Create
```bicep
resource exampleResource 'Microsoft.Migrate/projects/groups@2018-02-02' = {
  parent: parentResource 
  name: 'example'
  eTag: '"1100637e-0000-0000-0000-59f6ed1f0000"'
  properties: {
    machines: [
      '/subscriptions/75dd7e42-4fd1-4512-af04-83ad9864335b/resourceGroups/myResourceGroup/providers/Microsoft.Migrate/projects/project01/machines/amansing_vm1'
      '/subscriptions/75dd7e42-4fd1-4512-af04-83ad9864335b/resourceGroups/myResourceGroup/providers/Microsoft.Migrate/projects/project01/machines/amansing_vm2'
      '/subscriptions/75dd7e42-4fd1-4512-af04-83ad9864335b/resourceGroups/myResourceGroup/providers/Microsoft.Migrate/projects/project01/machines/amansing_vm3'
    ]
  }
}
```

## microsoft.migrate/projects/groups/assessments

Assessments_Create
```bicep
resource exampleResource 'Microsoft.Migrate/projects/groups/assessments@2018-02-02' = {
  parent: parentResource 
  name: 'example'
  eTag: '"1100637e-0000-0000-0000-59f6ed1f0000"'
  properties: {
    azureHybridUseBenefit: 'Yes'
    azureLocation: 'WestUs'
    azureOfferCode: 'MSAZR0003P'
    azurePricingTier: 'Standard'
    azureStorageRedundancy: 'LocallyRedundant'
    currency: 'USD'
    discountPercentage: 100
    percentile: 'Percentile50'
    scalingFactor: 1.2
    sizingCriterion: 'PerformanceBased'
    stage: 'InProgress'
    timeRange: 'Day'
  }
}
```
