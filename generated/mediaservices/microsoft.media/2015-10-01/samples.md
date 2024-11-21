# Microsoft.Media
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
