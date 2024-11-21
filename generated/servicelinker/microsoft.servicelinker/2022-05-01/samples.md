# Microsoft.ServiceLinker
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.servicelinker/linkers

PutLink
```bicep
resource exampleResource 'Microsoft.ServiceLinker/linkers@2022-05-01' = {
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
resource exampleResource 'Microsoft.ServiceLinker/linkers@2022-05-01' = {
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
resource exampleResource 'Microsoft.ServiceLinker/linkers@2022-05-01' = {
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
