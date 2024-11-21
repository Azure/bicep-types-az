# Microsoft.ServiceLinker

## microsoft.servicelinker/linkers

PutLink
```bicep
resource exampleResource 'Microsoft.ServiceLinker/linkers@2021-11-01-preview' = {
  name: 'example'
  properties: {
    authInfo: {
      name: 'name'
      authType: 'secret'
      secret: 'secret'
    }
    targetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.DocumentDb/databaseAccounts/test-acc/mongodbDatabases/test-db'
  }
}
```

PutLinkWithServiceEndpoint
```bicep
resource exampleResource 'Microsoft.ServiceLinker/linkers@2021-11-01-preview' = {
  name: 'example'
  properties: {
    authInfo: {
      name: 'name'
      authType: 'secret'
      secret: 'secret'
    }
    secretStore: {
      keyVaultId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.KeyVault/vaults/test-kv'
    }
    targetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.DocumentDb/databaseAccounts/test-acc/mongodbDatabases/test-db'
    vNetSolution: {
      type: 'serviceEndpoint'
    }
  }
}
```
