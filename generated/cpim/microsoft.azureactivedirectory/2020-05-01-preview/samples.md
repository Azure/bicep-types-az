# Microsoft.AzureActiveDirectory

## microsoft.azureactivedirectory/guestusages

GuestUsages_Create
```bicep
resource exampleResource 'Microsoft.AzureActiveDirectory/guestUsages@2020-05-01-preview' = {
  name: 'example'
  name: 'contoso.onmicrosoft.com'
  location: 'United States'
  properties: {
    tenantId: 'c963dd1a-9174-4c23-8bae-733d7f955492'
  }
}
```
