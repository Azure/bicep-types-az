# Microsoft.AzureActiveDirectory
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
