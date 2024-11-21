# Microsoft.Security
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.security/settings

Update a setting for subscription
```bicep
resource exampleResource 'Microsoft.Security/settings@2022-05-01' = {
  name: 'example'
  kind: 'DataExportSettings'
  properties: {
    enabled: true
  }
}
```
