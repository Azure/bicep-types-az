# Microsoft.Storage
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storage/storageaccounts

StorageAccountCreate
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts@2018-02-01' = {
  name: 'example'
  kind: 'Storage'
  location: 'eastus2euap'
  properties: {
    isHnsEnabled: true
  }
  sku: {
    name: 'Standard_GRS'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.storage/storageaccounts/blobservices/containers

PutContainers
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices/containers@2018-02-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.storage/storageaccounts/blobservices/containers/immutabilitypolicies

CreateOrUpdateImmutabilityPolicy
```bicep
resource exampleResource 'Microsoft.Storage/storageAccounts/blobServices/containers/immutabilityPolicies@2018-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    immutabilityPeriodSinceCreationInDays: 3
  }
}
```
