# Microsoft.Relationships
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.relationships/dependencyof

DependencyOfRelationships_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Relationships/dependencyOf@2023-09-01-preview' = {
  name: 'example'
  properties: {
    targetId: '/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/resourceGroups/testrg123/providers/Microsoft.Web/staticSites/test-site'
    targetTenant: '72f988bf-86f1-41af-91ab-2d7cd011db47'
  }
}
```

## microsoft.relationships/servicegroupmember

ServiceGroupMemberRelationships_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Relationships/serviceGroupMember@2023-09-01-preview' = {
  name: 'example'
  properties: {
    targetId: '/providers/Microsoft.Management/serviceGroups/sg1'
    targetTenant: '72f988bf-86f1-41af-91ab-2d7cd011db47'
  }
}
```
