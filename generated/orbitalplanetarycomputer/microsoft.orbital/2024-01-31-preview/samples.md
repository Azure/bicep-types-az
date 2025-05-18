# Microsoft.Orbital
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.orbital/geocatalogs

GeoCatalogs_Create
```bicep
resource exampleResource 'Microsoft.Orbital/geoCatalogs@2024-01-31-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/cd9b6cdf-dcf0-4dca-ab19-82be07b74704/resourceGroups/MyResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/MyManagedIdentity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    tier: 'Basic'
  }
  tags: {
    MyTag: 'MyValue'
  }
}
```
