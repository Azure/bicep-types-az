# Microsoft.Quantum
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.quantum/workspaces

Workspaces_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Quantum/workspaces@2025-01-01-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    providers: [
      {
        providerId: 'Honeywell'
        providerSku: 'Basic'
      }
      {
        providerId: 'IonQ'
        providerSku: 'Basic'
      }
      {
        providerId: 'OneQBit'
        providerSku: 'Basic'
      }
    ]
    storageAccount: '/subscriptions/1C4B2828-7D49-494F-933D-061373BE28C2/resourceGroups/quantumResourcegroup/providers/Microsoft.Storage/storageAccounts/testStorageAccount'
  }
}
```
