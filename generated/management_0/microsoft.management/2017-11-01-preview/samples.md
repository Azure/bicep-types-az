# Microsoft.Management
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.management/managementgroups

PutManagementGroup
```bicep
resource exampleResource 'Microsoft.Management/managementGroups@2017-11-01-preview' = {
  name: 'example'
  properties : {
    displayName: 'Group Name 2'
    parentGroupId: '/providers/Microsoft.Management/managementGroups/00000000-0000-0000-0000-000000000001'
  }
}
```
