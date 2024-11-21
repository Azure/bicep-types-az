# Microsoft.AzurePlaywrightService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azureplaywrightservice/accounts

Accounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzurePlaywrightService/accounts@2024-02-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    regionalAffinity: 'Enabled'
  }
  tags: {
    Team: 'Dev Exp'
  }
}
```
