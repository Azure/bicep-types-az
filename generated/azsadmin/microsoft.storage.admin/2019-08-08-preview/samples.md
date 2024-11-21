# Microsoft.Storage.Admin

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
