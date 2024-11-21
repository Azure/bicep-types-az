# Microsoft.Media

## microsoft.media/mediaservices

MediaServiceCreate
```bicep
resource exampleResource 'Microsoft.Media/mediaservices@2015-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageAccounts: [
      {
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contosoresources/providers/Microsoft.Storage/storageAccounts/contosostore'
        isPrimary: true
      }
    ]
  }
}
```
