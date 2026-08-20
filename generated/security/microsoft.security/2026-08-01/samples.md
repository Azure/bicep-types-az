# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/datascanners

Creates or updates a data scanner resource at resource group scope.
```bicep
resource exampleResource 'Microsoft.Security/dataScanners@2026-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
}
```

Creates or updates a data scanner resource at subscription scope.
```bicep
resource exampleResource 'Microsoft.Security/dataScanners@2026-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
}
```
