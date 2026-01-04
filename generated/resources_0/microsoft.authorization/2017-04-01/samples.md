# Microsoft.Authorization
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.authorization/locks

Create management lock at resource group level
```bicep
resource exampleResource 'Microsoft.Authorization/locks@2017-04-01' = {
  name: 'example'
  properties: {
    level: 'ReadOnly'
  }
}
```
