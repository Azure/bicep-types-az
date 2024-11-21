# Microsoft.StorageActions
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storageactions/storagetasks

PutStorageTask
```bicep
resource exampleResource 'Microsoft.StorageActions/storageTasks@2023-01-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'westus'
  properties: {
    description: 'My Storage task'
    action: {
      else: {
        operations: [
          {
            name: 'DeleteBlob'
            onFailure: 'break'
            onSuccess: 'continue'
          }
        ]
      }
      if: {
        condition: '[[equals(AccessTier, \'Cool\')]]'
        operations: [
          {
            name: 'SetBlobTier'
            onFailure: 'break'
            onSuccess: 'continue'
            parameters: {
              tier: 'Hot'
            }
          }
        ]
      }
    }
    enabled: true
  }
}
```
