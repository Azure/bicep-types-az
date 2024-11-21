# Microsoft.ServiceLinker
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.servicelinker/dryruns

PutDryrun
```bicep
resource exampleResource 'Microsoft.ServiceLinker/dryruns@2024-04-01' = {
  name: 'example'
  properties: {
    parameters: {
      actionName: 'createOrUpdate'
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
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.DocumentDb/databaseAccounts/test-acc/mongodbDatabases/test-db'
      }
    }
  }
}
```

## microsoft.servicelinker/linkers

PutLinker
```bicep
resource exampleResource 'Microsoft.ServiceLinker/linkers@2024-04-01' = {
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
    vNetSolution: {
      type: 'serviceEndpoint'
    }
  }
}
```

## microsoft.servicelinker/locations/connectors

PutConnector
```bicep
resource exampleResource 'Microsoft.ServiceLinker/locations/connectors@2024-04-01' = {
  parent: parentResource 
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

## microsoft.servicelinker/locations/dryruns

ConnectorDryrunCreate
```bicep
resource exampleResource 'Microsoft.ServiceLinker/locations/dryruns@2024-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    parameters: {
      actionName: 'createOrUpdate'
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
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.DocumentDb/databaseAccounts/test-acc/mongodbDatabases/test-db'
      }
    }
  }
}
```
