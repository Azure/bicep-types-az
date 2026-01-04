# Microsoft.Management
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.management/servicegroups

PutServiceGroup
```bicep
resource exampleResource 'Microsoft.Management/serviceGroups@2024-02-01-preview' = {
  name: 'example'
  properties: {
    displayName: 'ServiceGroup 1 Name'
    parent: {
      resourceId: '/providers/Microsoft.Management/serviceGroups/RootGroup'
    }
  }
}
```
