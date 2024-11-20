# Microsoft.ServiceLinker

## microsoft.servicelinker/linkers

PutLink
```bicep
resource exampleResource 'Microsoft.ServiceLinker/linkers@2022-01-01-preview' = {
  name: 'example'
  properties: {
    authInfo: {
      name: 'name'
      authType: 'secret'
      secretInfo: {
        secretType: 'rawValue'
        value: 'secret'
      }
    }
    targetService: {
      type: 'AzureResource'
      id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.DBforPostgreSQL/servers/test-pg/databases/test-db'
    }
  }
}
```

PutLinkWithSecretStore
```bicep
resource exampleResource 'Microsoft.ServiceLinker/linkers@2022-01-01-preview' = {
  name: 'example'
  properties: {
    authInfo: {
      authType: 'secret'
    }
    secretStore: {
      keyVaultId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.KeyVault/vaults/test-kv'
    }
    targetService: {
      type: 'AzureResource'
      id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.DocumentDb/databaseAccounts/test-acc/mongodbDatabases/test-db'
    }
  }
}
```

PutLinkWithServiceEndpoint
```bicep
resource exampleResource 'Microsoft.ServiceLinker/linkers@2022-01-01-preview' = {
  name: 'example'
  properties: {
    authInfo: {
      name: 'name'
      authType: 'secret'
      secretInfo: {
        secretType: 'keyVaultSecretUri'
        value: 'https://vault-name.vault.azure.net/secrets/secret-name/00000000000000000000000000000000'
      }
    }
    targetService: {
      type: 'AzureResource'
      id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.DBforPostgreSQL/servers/test-pg/databases/test-db'
    }
    vNetSolution: {
      type: 'serviceEndpoint'
    }
  }
}
```
