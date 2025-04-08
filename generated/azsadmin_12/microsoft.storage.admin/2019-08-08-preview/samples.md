# Microsoft.Storage.Admin
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storage.admin/locations/quotas

Create or update an existing storage quota.
```bicep
resource exampleResource 'Microsoft.Storage.Admin/locations/quotas@2019-08-08-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    capacityInGb: 1000
    numberOfStorageAccounts: 10000
  }
}
```
