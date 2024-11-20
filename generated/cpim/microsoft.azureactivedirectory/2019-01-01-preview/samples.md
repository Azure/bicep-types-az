# Microsoft.AzureActiveDirectory

## microsoft.azureactivedirectory/b2cdirectories

Create tenant
```bicep
resource exampleResource 'Microsoft.AzureActiveDirectory/b2cDirectories@2019-01-01-preview' = {
  name: 'example'
  location: 'United States'
  properties: {
    createTenantProperties: {
      countryCode: 'US'
      displayName: 'Contoso'
    }
  }
  sku: {
    name: 'Standard'
    tier: 'A0'
  }
}
```
