# Microsoft.Storage
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storage/storageaccounts

StorageAccountCreate
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2017-06-01' = {
  name: 'example'
  kind: 'Storage'
  location: 'eastus2euap'
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```
