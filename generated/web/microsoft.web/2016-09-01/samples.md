# Microsoft.Web
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.web/serverfarms

Create or Update App Service plan
```bicep
resource exampleResource 'Microsoft.Web/serverfarms@2016-09-01' = {
  name: 'example'
  name: 'testsf6141'
  type: 'Microsoft.Web/serverfarms'
  id: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.Web/serverfarms/testsf6141'
  kind: 'app'
  location: 'East US'
  properties: {
    name: 'testsf6141'
  }
  sku: {
    name: 'P1'
    capacity: 1
    family: 'P'
    size: 'P1'
    tier: 'Premium'
  }
}
```
