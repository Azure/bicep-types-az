# Microsoft.Sql
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.sql/managedinstances/databases

Creates a new managed database by restoring from an external backup
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    createMode: 'RestoreExternalBackup'
    storageContainerSasToken: 'sv=2015-12-11&sr=c&sp=rl&sig=1234'
    storageContainerUri: 'https://myaccountname.blob.core.windows.net/backups'
  }
}
```

Creates a new managed database from restoring a geo-replicated backup
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Recovery'
    recoverableDatabaseId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/Default-SQL-WestEurope/providers/Microsoft.Sql/managedInstances/testsvr/recoverableDatabases/testdb'
  }
}
```

Creates a new managed database from restoring a long term retention backup
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    createMode: 'RestoreExternalBackup'
    storageContainerSasToken: 'sv=2015-12-11&sr=c&sp=rl&sig=1234'
    storageContainerUri: 'https://myaccountname.blob.core.windows.net/backups'
  }
}
```

Creates a new managed database using point in time restore
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2017-07-14T05:35:31.503Z'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/managedInstances/testsvr/databases/testdb'
  }
}
```

Creates a new managed database with maximal properties
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  tags: {
    tagKey1: 'TagValue1'
  }
}
```

Creates a new managed database with minimal properties
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
}
```

## microsoft.sql/servers

Create server
```bicep
resource exampleResource 'Microsoft.Sql/servers@2019-06-01-preview' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: '<administratorLoginPassword>'
  }
}
```

## microsoft.sql/servers/administrators

Creates or updates an existing Azure Active Directory administrator.
```bicep
resource exampleResource 'Microsoft.Sql/servers/administrators@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    administratorType: 'ActiveDirectory'
    login: 'bob@contoso.com'
    sid: 'c6b82b90-a647-49cb-8a62-0d2d3cb7ac7c'
    tenantId: 'c6b82b90-a647-49cb-8a62-0d2d3cb7ac7c'
  }
}
```

## microsoft.sql/servers/databases

Creates a data warehouse by specifying service objective name.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  sku: {
    name: 'DW1000c'
  }
}
```

Creates a data warehouse database as a cross-subscription restore from a backup of a dropped database.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Restore'
    sourceResourceId: '/subscriptions/55555555-6666-7777-8888-999999999999/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/servers/srcsvr/restorableDroppedDatabases/srcdw,131403269876900000'
  }
}
```

Creates a data warehouse database as a cross-subscription restore from a geo-backup.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'Recovery'
    sourceResourceId: '/subscriptions/55555555-6666-7777-8888-999999999999/resourceGroups/Default-SQL-EastUS/providers/Microsoft.Sql/servers/srcsvr/recoverabledatabases/srcdw'
  }
}
```

Creates a data warehouse database as a cross-subscription restore from a restore point of an existing database.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2022-01-22T05:35:31.503Z'
    sourceResourceId: '/subscriptions/55555555-6666-7777-8888-999999999999/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/servers/srcsvr/databases/srcdw'
  }
}
```

Creates a database as a copy.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Copy'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/servers/testsvr/databases/testdb'
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
}
```

Creates a database as an on-line secondary.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Secondary'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-NorthEurope/providers/Microsoft.Sql/servers/testsvr1/databases/testdb'
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
}
```

Creates a database from PointInTimeRestore.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2017-07-14T05:35:31.503Z'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/servers/testsvr/databases/testdb'
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
}
```

Creates a database from recoverableDatabaseId.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Restore'
    restorableDroppedDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/servers/testsvr/restorableDroppedDatabases/testdb2,131444841315030000'
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
}
```

Creates a database from restore with database deletion time.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Restore'
    sourceDatabaseDeletionDate: '2017-07-14T06:41:06.613Z'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/servers/testsvr/databases/testdb'
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
}
```

Creates a database from restore with restorableDroppedDatabaseId.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Copy'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SouthEastAsia/providers/Microsoft.Sql/servers/testsvr/databases/testdb'
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
}
```

Creates a database with default mode.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    createMode: 'Default'
    maxSizeBytes: 1073741824
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
}
```

Creates a database with minimum number of parameters.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
}
```

Creates a VCore database by specifying service objective name.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  sku: {
    name: 'BC'
    capacity: 2
    family: 'Gen4'
  }
}
```

Creates a VCore database by specifying sku name and capacity.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  sku: {
    name: 'BC_Gen4'
    capacity: 2
  }
}
```

## microsoft.sql/servers/databases/syncgroups

Create a sync group
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    conflictResolutionPolicy: 'HubWin'
    hubDatabaseUserName: 'hubUser'
    interval: -1
    syncDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/syncgroupcrud-3521/providers/Microsoft.Sql/servers/syncgroupcrud-8475/databases/syncgroupcrud-4328'
    usePrivateLinkConnection: true
  }
}
```

Update a sync group
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    conflictResolutionPolicy: 'HubWin'
    hubDatabaseUserName: 'hubUser'
    interval: -1
    syncDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/syncgroupcrud-3521/providers/Microsoft.Sql/servers/syncgroupcrud-8475/databases/syncgroupcrud-4328'
    usePrivateLinkConnection: true
  }
}
```

## microsoft.sql/servers/databases/syncgroups/syncmembers

Create a new sync member
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups/syncMembers@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    databaseName: 'syncgroupcrud-7421'
    databaseType: 'AzureSqlDatabase'
    serverName: 'syncgroupcrud-3379.database.windows.net'
    syncDirection: 'Bidirectional'
    syncMemberAzureDatabaseResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/syncgroupcrud-65440/providers/Microsoft.Sql/servers/syncgroupcrud-8475/databases/syncgroupcrud-4328'
    usePrivateLinkConnection: true
    userName: 'myUser'
  }
}
```

Update a sync member
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups/syncMembers@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    databaseName: 'syncgroupcrud-7421'
    databaseType: 'AzureSqlDatabase'
    serverName: 'syncgroupcrud-3379.database.windows.net'
    syncDirection: 'Bidirectional'
    syncMemberAzureDatabaseResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/syncgroupcrud-65440/providers/Microsoft.Sql/servers/syncgroupcrud-8475/databases/syncgroupcrud-4328'
    usePrivateLinkConnection: true
    userName: 'myUser'
  }
}
```

## microsoft.sql/servers/databases/workloadgroups

Create a workload group with all properties specified.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/workloadGroups@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    importance: 'normal'
    maxResourcePercent: 100
    maxResourcePercentPerRequest: 3
    minResourcePercent: 0
    minResourcePercentPerRequest: 3
    queryExecutionTimeout: 0
  }
}
```

Create a workload group with the required properties specified.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/workloadGroups@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    maxResourcePercent: 100
    minResourcePercent: 0
    minResourcePercentPerRequest: 3
  }
}
```

## microsoft.sql/servers/databases/workloadgroups/workloadclassifiers

Create a workload group with all properties specified.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    context: 'test_context'
    endTime: '14:00'
    importance: 'high'
    label: 'test_label'
    memberName: 'dbo'
    startTime: '12:00'
  }
}
```

Create a workload group with the required properties specified.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    memberName: 'dbo'
  }
}
```
