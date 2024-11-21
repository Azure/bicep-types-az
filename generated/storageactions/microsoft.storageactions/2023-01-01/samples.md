# Microsoft.StorageActions

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
