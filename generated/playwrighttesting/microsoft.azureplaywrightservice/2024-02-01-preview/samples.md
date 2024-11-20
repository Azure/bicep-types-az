# Microsoft.AzurePlaywrightService

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
