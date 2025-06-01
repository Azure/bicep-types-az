# Microsoft.LoadTestService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.loadtestservice/loadtestmappings

Create a Load Test Mapping Resource
```bicep
resource exampleResource 'Microsoft.LoadTestService/loadTestMappings@2024-12-01-preview' = {
  name: 'example'
  properties: {
    azureLoadTestingResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/dummyrg/providers/Microsoft.LoadTestService/loadTests/myLoadTest'
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/dummyrg/providers/Microsoft.Web/sites/sitename'
    testId: '123456'
  }
}
```

## microsoft.loadtestservice/loadtestprofilemappings

Create a Load Test Profile Mappings resource
```bicep
resource exampleResource 'Microsoft.LoadTestService/loadTestProfileMappings@2024-12-01-preview' = {
  name: 'example'
  properties: {
    azureLoadTestingResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/dummyrg/providers/Microsoft.LoadTestService/loadTests/myLoadTest'
    testProfileId: '123456'
  }
}
```
