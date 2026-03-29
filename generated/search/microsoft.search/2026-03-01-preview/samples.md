# Microsoft.Search
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.search/searchservices

SearchCreateOrUpdateService
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeType: 'Default'
    hostingMode: 'Default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceAuthOptions
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    authOptions: {
      aadOrApiKey: {
        aadAuthFailureMode: 'http401WithBearerChallenge'
      }
    }
    computeType: 'Default'
    hostingMode: 'Default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceDisableLocalAuth
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeType: 'Default'
    disableLocalAuth: true
    hostingMode: 'Default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceToAllowAccessFromPrivateEndpoints
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeType: 'Default'
    hostingMode: 'Default'
    partitionCount: 1
    publicNetworkAccess: 'Disabled'
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceToAllowAccessFromPublicCustomIPs
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeType: 'Default'
    hostingMode: 'Default'
    networkRuleSet: {
      ipRules: [
        {
          value: '123.4.5.6'
        }
        {
          value: '123.4.6.0/18'
        }
      ]
    }
    partitionCount: 1
    replicaCount: 1
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceToAllowAccessFromPublicCustomIPsAndBypass
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeType: 'Default'
    hostingMode: 'Default'
    networkRuleSet: {
      bypass: 'AzurePortal'
      ipRules: [
        {
          value: '123.4.5.6'
        }
        {
          value: '123.4.6.0/18'
        }
      ]
    }
    partitionCount: 1
    replicaCount: 1
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceWithCmkEnforcement
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeType: 'Default'
    encryptionWithCmk: {
      enforcement: 'Enabled'
    }
    hostingMode: 'Default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceWithDataExfiltration
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeType: 'Default'
    dataExfiltrationProtections: [
      'BlockAll'
    ]
    hostingMode: 'Default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceWithIdentity
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/user-mi': {
      }
    }
  }
  location: 'westus'
  properties: {
    computeType: 'Default'
    hostingMode: 'Default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceWithServerless
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    hostingMode: 'Default'
  }
  sku: {
    name: 'serverless'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateServiceWithServiceLevelCmkMultiTenantFederatedIdentity
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned, UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/user-mi': {
      }
    }
  }
  location: 'westus'
  properties: {
    computeType: 'Default'
    encryptionWithCmk: {
      encryptionComplianceStatus: 'Compliant'
      enforcement: 'Enabled'
      serviceLevelEncryptionKey: {
        identity: {
          '@odata.type': '#Microsoft.Azure.Search.DataUserAssignedIdentity'
          federatedIdentityClientId: 'f83c6b1b-4d34-47e4-bb34-9d83df58b540'
          userAssignedIdentity: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/user-mi'
        }
        keyVaultKeyName: 'myUserManagedEncryptionKey-createdinAzureKeyVault'
        keyVaultKeyVersion: 'myKeyVersion-32charAlphaNumericString'
        keyVaultUri: 'https://myKeyVault.vault.azure.net'
      }
    }
    hostingMode: 'Default'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateWithKnowledgeRetrieval
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeType: 'Default'
    hostingMode: 'Default'
    knowledgeRetrieval: 'free'
    partitionCount: 1
    replicaCount: 3
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

SearchCreateOrUpdateWithSemanticSearch
```bicep
resource exampleResource 'Microsoft.Search/searchServices@2026-03-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    computeType: 'Default'
    hostingMode: 'Default'
    partitionCount: 1
    replicaCount: 3
    semanticSearch: 'free'
  }
  sku: {
    name: 'standard'
  }
  tags: {
    'app-name': 'My e-commerce app'
  }
}
```

## microsoft.search/searchservices/privateendpointconnections

PrivateEndpointConnectionUpdate
```bicep
resource exampleResource 'Microsoft.Search/searchServices/privateEndpointConnections@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Connection is rejected due to lack of authorization or failure to meet security compliance requirements.'
      status: 'Rejected'
    }
  }
}
```

## microsoft.search/searchservices/sharedprivatelinkresources

SharedPrivateLinkResourceCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Search/searchServices/sharedPrivateLinkResources@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: 'blob'
    privateLinkResourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Storage/storageAccounts/storageAccountName'
    requestMessage: 'please approve'
    resourceRegion: {
    }
  }
}
```
