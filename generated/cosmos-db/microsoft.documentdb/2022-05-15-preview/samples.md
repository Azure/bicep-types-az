# Microsoft.DocumentDB

## microsoft.documentdb/databaseaccounts

CosmosDBDatabaseAccountCreateMax
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts@2022-05-15-preview' = {
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
    analyticalStorageConfiguration: {
      schemaType: 'WellDefined'
    }
    apiProperties: {
      serverVersion: '3.2'
    }
    backupPolicy: {
      type: 'Periodic'
      periodicModeProperties: {
        backupIntervalInMinutes: 240
        backupRetentionIntervalInHours: 8
        backupStorageRedundancy: 'Geo'
      }
    }
    capacity: {
      totalThroughputLimit: 2000
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
    defaultIdentity: 'FirstPartyIdentity'
    enableAnalyticalStorage: true
    enableFreeTier: false
    enableMaterializedViews: false
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
    networkAclBypass: 'AzureServices'
    networkAclBypassResourceIds: [
      '/subscriptions/subId/resourcegroups/rgName/providers/Microsoft.Synapse/workspaces/workspaceName'
    ]
    publicNetworkAccess: 'Enabled'
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
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts@2022-05-15-preview' = {
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
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts@2022-05-15-preview' = {
  name: 'example'
  kind: 'GlobalDocumentDB'
  location: 'westus'
  properties: {
    apiProperties: {
      serverVersion: '3.2'
    }
    backupPolicy: {
      type: 'Continuous'
      continuousModeProperties: {
        tier: 'Continuous30Days'
      }
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
    enableMaterializedViews: false
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
      restoreTimestampInUtc: '2021-03-11T22:05:09Z'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/graphs

CosmosDBGraphCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/graphs@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      id: 'graphName'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/sqldatabases

CosmosDBSqlDatabaseCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/sqldatabases/throughputsettings

CosmosDBSqlDatabaseThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/throughputSettings@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/sqldatabases/clientencryptionkeys

CosmosDBClientEncryptionKeyCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/clientEncryptionKeys@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resource: {
      encryptionAlgorithm: 'AEAD_AES_256_CBC_HMAC_SHA256'
      id: 'cekName'
      keyWrapMetadata: {
        name: 'customerManagedKey'
        type: 'AzureKeyVault'
        algorithm: 'RSA-OAEP'
        value: 'AzureKeyVault Key URL'
      }
      wrappedDataEncryptionKey: 'This is actually an array of bytes. This request/response is being presented as a string for readability in the example'
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/sqldatabases/containers

CosmosDBSqlContainerCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    options: {
    }
    resource: {
      clientEncryptionPolicy: {
        includedPaths: [
          {
            path: '/path'
            clientEncryptionKeyId: 'keyId'
            encryptionAlgorithm: 'AEAD_AES_256_CBC_HMAC_SHA256'
            encryptionType: 'Deterministic'
          }
        ]
      }
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
        indexingMode: 'consistent'
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

## microsoft.documentdb/databaseaccounts/sqldatabases/containers/throughputsettings

CosmosDBSqlContainerThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/throughputSettings@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/sqldatabases/containers/storedprocedures

CosmosDBSqlStoredProcedureCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/storedProcedures@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/sqldatabases/containers/userdefinedfunctions

CosmosDBSqlUserDefinedFunctionCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/userDefinedFunctions@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/sqldatabases/containers/triggers

CosmosDBSqlTriggerCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlDatabases/containers/triggers@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/sqlroledefinitions

CosmosDBSqlRoleDefinitionCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlRoleDefinitions@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/sqlroleassignments

CosmosDBSqlRoleAssignmentCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/sqlRoleAssignments@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalId: 'myPrincipalId'
    roleDefinitionId: '/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/sqlRoleDefinitions/myRoleDefinitionId'
    scope: '/subscriptions/mySubscriptionId/resourceGroups/myResourceGroupName/providers/Microsoft.DocumentDB/databaseAccounts/myAccountName/dbs/purchases/colls/redmond-purchases'
  }
}
```

## microsoft.documentdb/databaseaccounts/mongodbdatabases

CosmosDBMongoDBDatabaseCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/mongodbdatabases/throughputsettings

CosmosDBMongoDBDatabaseThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/throughputSettings@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/mongodbdatabases/collections

CosmosDBMongoDBCollectionCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2022-05-15-preview' = {
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
              '_ts'
            ]
          }
          options: {
            expireAfterSeconds: 100
            unique: true
          }
        }
        {
          key: {
            keys: [
              '_id'
            ]
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
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections/throughputSettings@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/mongodbroledefinitions

CosmosDBMongoDBRoleDefinitionCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbRoleDefinitions@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    databaseName: 'sales'
    privileges: [
      {
        actions: [
          'insert'
          'find'
        ]
        resource: {
          collection: 'sales'
          db: 'sales'
        }
      }
    ]
    roleName: 'myRoleName'
    roles: [
      {
        db: 'sales'
        role: 'myInheritedRole'
      }
    ]
  }
}
```

## microsoft.documentdb/databaseaccounts/mongodbuserdefinitions

CosmosDBMongoDBUserDefinitionCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/mongodbUserDefinitions@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customData: 'My custom data'
    databaseName: 'sales'
    mechanisms: 'SCRAM-SHA-256'
    password: 'myPassword'
    roles: [
      {
        db: 'sales'
        role: 'myReadRole'
      }
    ]
    userName: 'myUserName'
  }
}
```

## microsoft.documentdb/databaseaccounts/tables

CosmosDBTableReplace
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/tables@2022-05-15-preview' = {
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
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/tables/throughputSettings@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/cassandrakeyspaces

CosmosDBCassandraKeyspaceCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/cassandrakeyspaces/throughputsettings

CosmosDBCassandraKeyspaceThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/throughputSettings@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/cassandrakeyspaces/tables

CosmosDBCassandraTableCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables@2022-05-15-preview' = {
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
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/tables/throughputSettings@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/cassandrakeyspaces/views

CosmosDBCassandraViewCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    options: {
    }
    resource: {
      id: 'viewname'
      viewDefinition: 'SELECT columna, columnb, columnc FROM keyspacename.srctablename WHERE columna IS NOT NULL AND columnc IS NOT NULL PRIMARY (columnc, columna)'
    }
  }
  tags: {
  }
}
```

## microsoft.documentdb/databaseaccounts/cassandrakeyspaces/views/throughputsettings

CosmosDBCassandraViewThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/cassandraKeyspaces/views/throughputSettings@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
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
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/gremlindatabases/throughputsettings

CosmosDBGremlinDatabaseThroughputUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/throughputSettings@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/gremlindatabases/graphs

CosmosDBGremlinGraphCreateUpdate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs@2022-05-15-preview' = {
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
        indexingMode: 'consistent'
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
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/gremlinDatabases/graphs/throughputSettings@2022-05-15-preview' = {
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

## microsoft.documentdb/databaseaccounts/datatransferjobs

CosmosDBDataTransferJobCreate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/dataTransferJobs@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      component: 'AzureBlobStorage'
      containerName: 'blob_container'
      endpointUrl: 'https://blob.windows.net'
    }
    source: {
      component: 'CosmosDBCassandra'
      keyspaceName: 'keyspace'
      tableName: 'table'
    }
  }
}
```

## microsoft.documentdb/cassandraclusters

CosmosDBManagedCassandraClusterCreate
```bicep
resource exampleResource 'Microsoft.DocumentDB/cassandraClusters@2022-05-15-preview' = {
  name: 'example'
  location: 'West US'
  properties: {
    authenticationMethod: 'Cassandra'
    cassandraVersion: '3.11'
    clientCertificates: [
      {
        pem: '-----BEGIN CERTIFICATE-----\n...Base64 encoded certificate...\n-----END CERTIFICATE-----'
      }
    ]
    clusterNameOverride: 'ClusterNameIllegalForAzureResource'
    delegatedManagementSubnetId: '/subscriptions/536e130b-d7d6-4ac7-98a5-de20d69588d2/resourceGroups/customer-vnet-rg/providers/Microsoft.Network/virtualNetworks/customer-vnet/subnets/management'
    externalGossipCertificates: [
      {
        pem: '-----BEGIN CERTIFICATE-----\n...Base64 encoded certificate...\n-----END CERTIFICATE-----'
      }
    ]
    externalSeedNodes: [
      {
        ipAddress: '10.52.221.2'
      }
      {
        ipAddress: '10.52.221.3'
      }
      {
        ipAddress: '10.52.221.4'
      }
    ]
    hoursBetweenBackups: 24
    initialCassandraAdminPassword: 'mypassword'
  }
  tags: {
  }
}
```

## microsoft.documentdb/cassandraclusters/datacenters

CosmosDBManagedCassandraDataCenterCreate
```bicep
resource exampleResource 'Microsoft.DocumentDB/cassandraClusters/dataCenters@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    base64EncodedCassandraYamlFragment: 'Y29tcGFjdGlvbl90aHJvdWdocHV0X21iX3Blcl9zZWM6IDMyCmNvbXBhY3Rpb25fbGFyZ2VfcGFydGl0aW9uX3dhcm5pbmdfdGhyZXNob2xkX21iOiAxMDA='
    dataCenterLocation: 'West US 2'
    delegatedSubnetId: '/subscriptions/536e130b-d7d6-4ac7-98a5-de20d69588d2/resourceGroups/customer-vnet-rg/providers/Microsoft.Network/virtualNetworks/customer-vnet/subnets/dc1-subnet'
    nodeCount: 9
  }
}
```

## microsoft.documentdb/databaseaccounts/notebookworkspaces

CosmosDBNotebookWorkspaceCreate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/notebookWorkspaces@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.documentdb/databaseaccounts/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/privateEndpointConnections@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```

## microsoft.documentdb/databaseaccounts/services

DataTransferServiceCreate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/services@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    instanceCount: 1
    instanceSize: 'Cosmos.D4s'
    serviceType: 'DataTransfer'
  }
}
```

GraphAPIComputeServiceCreate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/services@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    instanceCount: 1
    instanceSize: 'Cosmos.D4s'
    serviceType: 'GraphAPICompute'
  }
}
```

MaterializedViewsBuilderServiceCreate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/services@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    instanceCount: 1
    instanceSize: 'Cosmos.D4s'
    serviceType: 'MaterializedViewsBuilder'
  }
}
```

SqlDedicatedGatewayServiceCreate
```bicep
resource exampleResource 'Microsoft.DocumentDB/databaseAccounts/services@2022-05-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    instanceCount: 1
    instanceSize: 'Cosmos.D4s'
    serviceType: 'SqlDedicatedGateway'
  }
}
```
