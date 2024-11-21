# Microsoft.AzureActiveDirectory

## microsoft.azureactivedirectory/b2cdirectories

Create tenant
```bicep
resource exampleResource 'Microsoft.AzureActiveDirectory/b2cDirectories@2023-01-18-preview' = {
  name: 'example'
  location: 'United States'
  properties: {
    createTenantProperties: {
      countryCode: 'US'
      displayName: 'Contoso'
      isGoLocalTenant: true
    }
  }
  sku: {
    name: 'Standard'
    tier: 'A0'
  }
}
```

## microsoft.azureactivedirectory/guestusages

GuestUsages_Create
```bicep
resource exampleResource 'Microsoft.AzureActiveDirectory/guestUsages@2023-01-18-preview' = {
  name: 'example'
  name: 'contoso.onmicrosoft.com'
  location: 'United States'
  properties: {
    tenantId: 'c963dd1a-9174-4c23-8bae-733d7f955492'
  }
}
```
