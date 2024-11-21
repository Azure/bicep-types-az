# Microsoft.DataShare
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.datashare/accounts

Accounts_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts@2021-08-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US 2'
  tags: {
    tag1: 'Red'
    tag2: 'White'
  }
}
```

## microsoft.datashare/accounts/shares

Shares_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'share description'
    shareKind: 'CopyBased'
    terms: 'Confidential'
  }
}
```

## microsoft.datashare/accounts/shares/datasets

DataSets_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares/dataSets@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'Blob'
  properties: {
    containerName: 'C1'
    filePath: 'file21'
    resourceGroup: 'SampleResourceGroup'
    storageAccountName: 'storage2'
    subscriptionId: '433a8dfd-e5d5-4e77-ad86-90acdc75eb1a'
  }
}
```

DataSets_KustoCluster_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares/dataSets@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'KustoCluster'
  properties: {
    kustoClusterResourceId: '/subscriptions/433a8dfd-e5d5-4e77-ad86-90acdc75eb1a/resourceGroups/SampleResourceGroup/providers/Microsoft.Kusto/clusters/Cluster1'
  }
}
```

DataSets_KustoDatabase_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares/dataSets@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'KustoDatabase'
  properties: {
    kustoDatabaseResourceId: '/subscriptions/433a8dfd-e5d5-4e77-ad86-90acdc75eb1a/resourceGroups/SampleResourceGroup/providers/Microsoft.Kusto/clusters/Cluster1/databases/Database1'
  }
}
```

DataSets_KustoTable_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares/dataSets@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'KustoTable'
  properties: {
    kustoDatabaseResourceId: '/subscriptions/433a8dfd-e5d5-4e77-ad86-90acdc75eb1a/resourceGroups/SampleResourceGroup/providers/Microsoft.Kusto/clusters/Cluster1/databases/Database1'
    tableLevelSharingProperties: {
      externalTablesToExclude: [
        'test11'
        'test12'
      ]
      externalTablesToInclude: [
        'test9'
        'test10'
      ]
      materializedViewsToExclude: [
        'test7'
        'test8'
      ]
      materializedViewsToInclude: [
        'test5'
        'test6'
      ]
      tablesToExclude: [
        'test3'
        'test4'
      ]
      tablesToInclude: [
        'test1'
        'test2'
      ]
    }
  }
}
```

DataSets_SqlDBTable_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares/dataSets@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'SqlDBTable'
  properties: {
    databaseName: 'SqlDB1'
    schemaName: 'dbo'
    sqlServerResourceId: '/subscriptions/433a8dfd-e5d5-4e77-ad86-90acdc75eb1a/resourceGroups/SampleResourceGroup/providers/Microsoft.Sql/servers/Server1'
    tableName: 'Table1'
  }
}
```

DataSets_SqlDWTable_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares/dataSets@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'SqlDWTable'
  properties: {
    dataWarehouseName: 'DataWarehouse1'
    schemaName: 'dbo'
    sqlServerResourceId: '/subscriptions/433a8dfd-e5d5-4e77-ad86-90acdc75eb1a/resourceGroups/SampleResourceGroup/providers/Microsoft.Sql/servers/Server1'
    tableName: 'Table1'
  }
}
```

DataSets_SynapseWorkspaceSqlPoolTable_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares/dataSets@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'SynapseWorkspaceSqlPoolTable'
  properties: {
    synapseWorkspaceSqlPoolTableResourceId: '/subscriptions/0f3dcfc3-18f8-4099-b381-8353e19d43a7/resourceGroups/SampleResourceGroup/providers/Microsoft.Synapse/workspaces/ExampleWorkspace/sqlPools/ExampleSqlPool/schemas/dbo/tables/table1'
  }
}
```

## microsoft.datashare/accounts/shares/invitations

Invitations_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares/invitations@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    expirationDate: '2020-08-26T22:33:24.5785265Z'
    targetEmail: 'receiver@microsoft.com'
  }
}
```

## microsoft.datashare/accounts/shares/synchronizationsettings

SynchronizationSettings_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shares/synchronizationSettings@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'ScheduleBased'
  properties: {
    recurrenceInterval: 'Day'
    synchronizationTime: '2018-11-14T04:47:52.9614956Z'
  }
}
```

## microsoft.datashare/accounts/sharesubscriptions

ShareSubscriptions_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shareSubscriptions@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    expirationDate: '2020-08-26T22:33:24.5785265Z'
    invitationId: '12345678-1234-1234-12345678abd'
    sourceShareLocation: 'eastus2'
  }
}
```

## microsoft.datashare/accounts/sharesubscriptions/datasetmappings

DataSetMappings_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'Blob'
  properties: {
    containerName: 'C1'
    dataSetId: 'a08f184b-0567-4b11-ba22-a1199336d226'
    filePath: 'file21'
    resourceGroup: 'SampleResourceGroup'
    storageAccountName: 'storage2'
    subscriptionId: '433a8dfd-e5d5-4e77-ad86-90acdc75eb1a'
  }
}
```

DataSetMappings_SqlDB_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'SqlDBTable'
  properties: {
    dataSetId: 'a08f184b-0567-4b11-ba22-a1199336d226'
    databaseName: 'Database1'
    schemaName: 'dbo'
    sqlServerResourceId: '/subscriptions/433a8dfd-e5d5-4e77-ad86-90acdc75eb1a/resourceGroups/SampleResourceGroup/providers/Microsoft.Sql/servers/Server1'
    tableName: 'Table1'
  }
}
```

DataSetMappings_SqlDW_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'SqlDWTable'
  properties: {
    dataSetId: 'a08f184b-0567-4b11-ba22-a1199336d226'
    dataWarehouseName: 'DataWarehouse1'
    schemaName: 'dbo'
    sqlServerResourceId: '/subscriptions/433a8dfd-e5d5-4e77-ad86-90acdc75eb1a/resourceGroups/SampleResourceGroup/providers/Microsoft.Sql/servers/Server1'
    tableName: 'Table1'
  }
}
```

DataSetMappings_SqlDWDataSetToAdlsGen2File_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'AdlsGen2File'
  properties: {
    dataSetId: 'a08f184b-0567-4b11-ba22-a1199336d226'
    filePath: 'file21'
    fileSystem: 'fileSystem'
    outputType: 'Csv'
    resourceGroup: 'SampleResourceGroup'
    storageAccountName: 'storage2'
    subscriptionId: '433a8dfd-e5d5-4e77-ad86-90acdc75eb1a'
  }
}
```

DataSetMappings_SynapseWorkspaceSqlPoolTable_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shareSubscriptions/dataSetMappings@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'SynapseWorkspaceSqlPoolTable'
  properties: {
    dataSetId: '3dc64e49-1fc3-4186-b3dc-d388c4d3076a'
    synapseWorkspaceSqlPoolTableResourceId: '/subscriptions/0f3dcfc3-18f8-4099-b381-8353e19d43a7/resourceGroups/SampleResourceGroup/providers/Microsoft.Synapse/workspaces/ExampleWorkspace/sqlPools/ExampleSqlPool/schemas/dbo/tables/table1'
  }
}
```

## microsoft.datashare/accounts/sharesubscriptions/triggers

Triggers_Create
```bicep
resource exampleResource 'Microsoft.DataShare/accounts/shareSubscriptions/triggers@2021-08-01' = {
  parent: parentResource 
  name: 'example'
  kind: 'ScheduleBased'
  properties: {
    recurrenceInterval: 'Day'
    synchronizationMode: 'Incremental'
    synchronizationTime: '2018-11-14T04:47:52.9614956Z'
  }
}
```
