# Microsoft.Management
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.management/managementgroups

PutManagementGroup
```bicep
resource exampleResource 'Microsoft.Management/managementGroups@2018-01-01-preview' = {
  name: 'example'
  properties: {
    displayName: 'ChildGroup'
    parent: {
      id: '/providers/Microsoft.Management/managementGroups/RootGroup'
    }
  }
}
```
