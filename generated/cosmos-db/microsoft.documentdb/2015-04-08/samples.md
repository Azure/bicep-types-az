# Microsoft.DocumentDB

## microsoft.documentdb/databaseaccounts

CosmosDBDatabaseAccountCreateMax
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts@2015-04-08' = {
  name: 'example'
  kind: 'GlobalDocumentDB'
  location: 'westus'
  properties: {
    consistencyPolicy: {
      defaultConsistencyLevel: 'BoundedStaleness'
      maxIntervalInSeconds: 10
      maxStalenessPrefix: 200
    }
    databaseAccountOfferType: 'Standard'
    ipRangeFilter: '10.10.10.10'
    isVirtualNetworkFilterEnabled: true
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
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts@2015-04-08' = {
  name: 'example'
  location: 'westus'
  properties: {
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

## microsoft.documentdb/databaseaccounts/apis/databases

CosmosDBSqlDatabaseCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/databases@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    options: {
    }
    resource: {
      id: 'databaseName'
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/databases/settings

CosmosDBSqlDatabaseThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/databases/settings@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resource: {
      throughput: 400
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/databases/containers

CosmosDBSqlContainerCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers@2015-04-08' = {
  parent: parentResource 
  name: 'example'
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
}
```

## microsoft.documentdb/databaseaccounts/apis/databases/containers/settings

CosmosDBSqlContainerThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/databases/containers/settings@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resource: {
      throughput: 400
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/databases/collections

CosmosDBMongoDBCollectionCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    options: {
    }
    resource: {
      id: 'testcoll'
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
}
```

## microsoft.documentdb/databaseaccounts/apis/databases/collections/settings

CosmosDBMongoDBCollectionThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/databases/collections/settings@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resource: {
      throughput: 400
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/tables

CosmosDBTableReplace
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/tables@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    options: {
    }
    resource: {
      id: 'tableName'
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/tables/settings

CosmosDBTableThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/tables/settings@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resource: {
      throughput: 400
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/keyspaces

CosmosDBCassandraKeyspaceCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    options: {
    }
    resource: {
      id: 'keyspaceName'
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/keyspaces/settings

CosmosDBCassandraKeyspaceThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/settings@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resource: {
      throughput: 400
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/keyspaces/tables

CosmosDBCassandraTableCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables@2015-04-08' = {
  parent: parentResource 
  name: 'example'
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
      defaultTtl: 100
      id: 'tableName'
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/keyspaces/tables/settings

CosmosDBCassandraTableThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/keyspaces/tables/settings@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resource: {
      throughput: 400
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/apis/databases/graphs

CosmosDBGremlinGraphCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs@2015-04-08' = {
  parent: parentResource 
  name: 'example'
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
}
```

## microsoft.documentdb/databaseaccounts/apis/databases/graphs/settings

CosmosDBGremlinGraphThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/apis/databases/graphs/settings@2015-04-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resource: {
      throughput: 400
    }
  }
}
```
