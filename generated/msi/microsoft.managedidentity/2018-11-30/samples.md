# Microsoft.ManagedIdentity
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.managedidentity/userassignedidentities

IdentityCreate
```bicep
resource exampleResource 'Microsoft.ManagedIdentity/userAssignedIdentities@2018-11-30' = {
  name: 'example'
  location: 'eastus'
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```
