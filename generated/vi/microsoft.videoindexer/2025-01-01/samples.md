# Microsoft.VideoIndexer
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.videoindexer/accounts

Connect classic account to arm account using system assigned Mi
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2025-01-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'NorthEurope'
  properties: {
    accountId: '462af7c5-d1f6-4b91-86e3-8bc5e8a61574'
    storageServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Storage/storageAccounts/contoso-videoanalyzer-ms'
    }
  }
}
```

Connect classic account to arm account using user assigned Mi
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2025-01-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi': {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    accountId: '462af7c5-d1f6-4b91-86e3-8bc5e8a61574'
    storageServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Storage/storageAccounts/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```

Create or update account with system assigned Mi
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2025-01-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'NorthEurope'
  properties: {
    openAiServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.CognitiveServices/accounts/contoso-viopenai-ms'
    }
    storageServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Storage/storageAccounts/contoso-videoanalyzer-ms'
    }
  }
}
```

Create or update account with user assigned Mi
```bicep
resource exampleResource 'Microsoft.VideoIndexer/accounts@2025-01-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi': {
      }
      '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi2': {
      }
    }
  }
  location: 'NorthEurope'
  properties: {
    openAiServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.CognitiveServices/accounts/contoso-viopenai-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi2'
    }
    storageServices: {
      resourceId: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.Storage/storageAccounts/contoso-videoanalyzer-ms'
      userAssignedIdentity: '/subscriptions/xxx/resourceGroups/contoso-videoanalyzer-rg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/contoso-videoanalyzer-mi'
    }
  }
}
```
