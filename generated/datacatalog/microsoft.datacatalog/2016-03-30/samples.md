# Microsoft.DataCatalog
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datacatalog/catalogs

Create Azure Data Catalog Service
```bicep
resource exampleResource 'Microsoft.DataCatalog/catalogs@2016-03-30' = {
  name: 'example'
  location: 'North US'
  properties: {
    admins: [
      {
        objectId: '99999999-9999-9999-999999999999'
        upn: 'myupn@microsoft.com'
      }
    ]
    enableAutomaticUnitAdjustment: false
    sku: 'Standard'
    units: 1
    users: [
      {
        objectId: '99999999-9999-9999-999999999999'
        upn: 'myupn@microsoft.com'
      }
    ]
  }
  tags: {
    mykey: 'myvalue'
    mykey2: 'myvalue2'
  }
}
```
