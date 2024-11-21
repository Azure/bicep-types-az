# Microsoft.ApiManagement
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.apimanagement/service

ApiManagementCreateService
```bicep
resource exampleResource 'Microsoft.ApiManagement/service@2016-10-10' = {
  name: 'example'
  location: 'West US'
  properties: {
    publisherEmail: 'admin@live.com'
    publisherName: 'contoso'
  }
  sku: {
    name: 'Premium'
    capacity: 1
  }
}
```
