# Microsoft.DocumentDB
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.documentdb/databaseaccounts

CosmosDBDatabaseAccountCreateMax
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts@2020-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    userAssignedIdentities: {
      /subscriptions/fa5fc227-a624-475e-b696-cdd604c735bc/resourceGroups/eu2cgroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
      }
    }
  }
  kind: 'MongoDB'
  location: 'westus'
  properties: {
    apiProperties: {
      serverVersion: '3.2'
    }
    backupPolicy: {
      type: 'Periodic'
      periodicModeProperties: {
        backupIntervalInMinutes: 240
        backupRetentionIntervalInHours: 720
        backupStorageRedundancy: 'Geo'
      }
    }
    consistencyPolicy: {
      defaultConsistencyLevel: 'BoundedStaleness'
      maxIntervalInSeconds: 10
      maxStalenessPrefix: 200
    }
    cors: [
      {
        allowedOrigins: 'https://test'
      }
    ]
    createMode: 'Default'
    databaseAccountOfferType: 'Standard'
    enableAnalyticalStorage: true
    enableFreeTier: false
    ipRules: [
      {
        ipAddressOrRange: '23.43.230.120'
      }
      {
        ipAddressOrRange: '110.12.240.0/12'
      }
    ]
    isVirtualNetworkFilterEnabled: true
    keyVaultKeyUri: 'https://myKeyVault.vault.azure.net'
    locations: [
      {
        failoverPriority: 0
        isZoneRedundant: false
        locationName: 'southcentralus'
      }
      {
        failoverPriority: 1
        isZoneRedundant: false
        locationName: 'eastus'
      }
    ]
    virtualNetworkRules: [
      {
        id: '/subscriptions/subId/resourceGroups/rg/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
        ignoreMissingVNetServiceEndpoint: false
      }
    ]
  }
  tags: {
  }
}
```

CosmosDBDatabaseAccountCreateMin
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts@2020-06-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'Default'
    databaseAccountOfferType: 'Standard'
    locations: [
      {
        failoverPriority: 0
        isZoneRedundant: false
        locationName: 'southcentralus'
      }
    ]
  }
}
```

CosmosDBRestoreDatabaseAccountCreateUpdate.json
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts@2020-06-01-preview' = {
  name: 'example'
  kind: 'GlobalDocumentDB'
  location: 'westus'
  properties: {
    apiProperties: {
      serverVersion: '3.2'
    }
    backupPolicy: {
      type: 'Continuous'
    }
    consistencyPolicy: {
      defaultConsistencyLevel: 'BoundedStaleness'
      maxIntervalInSeconds: 10
      maxStalenessPrefix: 200
    }
    createMode: 'Restore'
    databaseAccountOfferType: 'Standard'
    enableAnalyticalStorage: true
    enableFreeTier: false
    keyVaultKeyUri: 'https://myKeyVault.vault.azure.net'
    locations: [
      {
        failoverPriority: 0
        isZoneRedundant: false
        locationName: 'southcentralus'
      }
    ]
    restoreParameters: {
      databasesToRestore: [
        {
          collectionNames: [
            'collection1'
            'collection2'
          ]
          databaseName: 'db1'
        }
        {
          collectionNames: [
            'collection3'
            'collection4'
          ]
          databaseName: 'db2'
        }
      ]
      restoreMode: 'PointInTime'
      restoreSource: '/subscriptions/subid/providers/Microsoft.DocumentDB/locations/westus/restorableDatabaseAccounts/1a97b4bb-f6a0-430e-ade1-638d781830cc'
      restoreTimestampInUtc: '2020-06-11T22:05:09Z'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/cassandrakeyspaces

CosmosDBCassandraKeyspaceCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      id: 'keyspaceName'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/cassandrakeyspaces/tables

CosmosDBCassandraTableCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      schema: {
        clusterKeys: [
          {
            name: 'columnA'
            orderBy: 'Asc'
          }
        ]
        columns: [
          {
            name: 'columnA'
            type: 'Ascii'
          }
        ]
        partitionKeys: [
          {
            name: 'columnA'
          }
        ]
      }
      analyticalStorageTtl: 500
      defaultTtl: 100
      id: 'tableName'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/cassandrakeyspaces/tables/throughputsettings

CosmosDBCassandraTableThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    resource: {
      throughput: 400
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/cassandrakeyspaces/throughputsettings

CosmosDBCassandraKeyspaceThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    resource: {
      throughput: 400
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/gremlindatabases

CosmosDBGremlinDatabaseCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      id: 'databaseName'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/gremlindatabases/graphs

CosmosDBGremlinGraphCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      conflictResolutionPolicy: {
        conflictResolutionPath: '/path'
        mode: 'LastWriterWins'
      }
      defaultTtl: 100
      id: 'graphName'
      indexingPolicy: {
        automatic: true
        excludedPaths: [
        ]
        includedPaths: [
          {
            path: '/*'
            indexes: [
              {
                dataType: 'String'
                kind: 'Range'
                precision: -1
              }
              {
                dataType: 'Number'
                kind: 'Range'
                precision: -1
              }
            ]
          }
        ]
        indexingMode: 'Consistent'
      }
      partitionKey: {
        kind: 'Hash'
        paths: [
          '/AccountNumber'
        ]
      }
      uniqueKeyPolicy: {
        uniqueKeys: [
          {
            paths: [
              '/testPath'
            ]
          }
        ]
      }
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/gremlindatabases/graphs/throughputsettings

CosmosDBGremlinGraphThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    resource: {
      throughput: 400
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/gremlindatabases/throughputsettings

CosmosDBGremlinDatabaseThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    resource: {
      throughput: 400
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/mongodbdatabases

CosmosDBMongoDBDatabaseCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      id: 'databaseName'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/mongodbdatabases/collections

CosmosDBMongoDBCollectionCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      analyticalStorageTtl: 500
      id: 'collectionName'
      indexes: [
        {
          key: {
            keys: [
              'testKey'
            ]
          }
          options: {
            expireAfterSeconds: 100
            unique: true
          }
        }
      ]
      shardKey: {
        testKey: 'Hash'
      }
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/mongodbdatabases/collections/throughputsettings

CosmosDBMongoDBCollectionThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    resource: {
      throughput: 400
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/mongodbdatabases/throughputsettings

CosmosDBMongoDBDatabaseThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    resource: {
      throughput: 400
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/notebookworkspaces

CosmosDBNotebookWorkspaceCreate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.documentdb/databaseaccounts/sqldatabases

CosmosDBSqlDatabaseCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      id: 'databaseName'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/sqldatabases/containers

CosmosDBSqlContainerCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      conflictResolutionPolicy: {
        conflictResolutionPath: '/path'
        mode: 'LastWriterWins'
      }
      defaultTtl: 100
      id: 'containerName'
      indexingPolicy: {
        automatic: true
        excludedPaths: [
        ]
        includedPaths: [
          {
            path: '/*'
            indexes: [
              {
                dataType: 'String'
                kind: 'Range'
                precision: -1
              }
              {
                dataType: 'Number'
                kind: 'Range'
                precision: -1
              }
            ]
          }
        ]
        indexingMode: 'Consistent'
      }
      partitionKey: {
        kind: 'Hash'
        paths: [
          '/AccountNumber'
        ]
      }
      uniqueKeyPolicy: {
        uniqueKeys: [
          {
            paths: [
              '/testPath'
            ]
          }
        ]
      }
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/sqldatabases/containers/storedprocedures

CosmosDBSqlStoredProcedureCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    options: {
    }
    resource: {
      body: 'body'
      id: 'storedProcedureName'
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/sqldatabases/containers/throughputsettings

CosmosDBSqlContainerThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    resource: {
      throughput: 400
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/sqldatabases/containers/triggers

CosmosDBSqlTriggerCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    options: {
    }
    resource: {
      body: 'body'
      id: 'triggerName'
      triggerOperation: 'triggerOperation'
      triggerType: 'triggerType'
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/sqldatabases/containers/userdefinedfunctions

CosmosDBSqlUserDefinedFunctionCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    options: {
    }
    resource: {
      body: 'body'
      id: 'userDefinedFunctionName'
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/sqldatabases/throughputsettings

CosmosDBSqlDatabaseThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    resource: {
      throughput: 400
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/sqlroleassignments

CosmosDBSqlRoleAssignmentCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: 'myPrincipalId'
    roleDefinitionId: '/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/sqlRoleDefinitions/myRoleDefinitionId'
    scope: '/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/purchases/colls/redmond-purchases'
  }
}
```

## microsoft.documentdb/databaseaccounts/sqlroledefinitions

CosmosDBSqlRoleDefinitionCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'CustomRole'
    assignableScopes: [
      '/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/sales'
      '/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/purchases'
    ]
    permissions: [
      {
        dataActions: [
          'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/create'
          'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/items/read'
        ]
        notDataActions: [
        ]
      }
    ]
    roleName: 'myRoleName'
  }
}
```

## microsoft.documentdb/databaseaccounts/tables

CosmosDBTableReplace
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/tables@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      id: 'tableName'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/tables/throughputsettings

CosmosDBTableThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2020-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    resource: {
      throughput: 400
    }
  }
  tags: {
  }
}
```
