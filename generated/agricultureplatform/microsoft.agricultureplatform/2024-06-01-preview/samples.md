# Microsoft.AgriculturePlatform
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.agricultureplatform/agriservices

AgriService_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AgriculturePlatform/agriServices@2024-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key4955: {
      }
    }
  }
  location: 'pkneuknooprpqirnugzwbkiie'
  properties: {
    config: {
    }
    dataConnectorCredentials: [
      {
        key: 'BackendAADApplicationCredentials'
        value: {
          clientId: 'dce298a8-1eec-481a-a8f9-a3cd5a8257b2'
        }
      }
    ]
    installedSolutions: [
      {
        key: 'bayerAgPowered.cwum'
        value: {
          applicationName: 'bayerAgPowered.cwum'
        }
      }
    ]
    managedOnBehalfOfConfiguration: {
    }
  }
  sku: {
    name: 'kfl'
    capacity: 20
    family: 'xerdhxyjwrypvxphavgrtjphtohf'
    size: 'r'
    tier: 'Free'
  }
  tags: {
    key137: 'oxwansfetzzgdwl'
  }
}
```
