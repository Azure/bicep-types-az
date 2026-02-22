# Microsoft.Sql
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.sql/servers

Create server max
```bicep
resource exampleResource 'Microsoft.Sql/servers@2014-04-01' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: '<administratorLoginPassword>'
    fullyQualifiedDomainName: 'sqlcrudtest-4645.database.windows.net'
    state: 'Ready'
    version: '12.0'
  }
  tags: {
    tagKey1: 'TagValue1'
  }
}
```

Create server min
```bicep
resource exampleResource 'Microsoft.Sql/servers@2014-04-01' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: '<administratorLoginPassword>'
  }
}
```

## microsoft.sql/servers/administrators

Create/Update a server administrator
```bicep
resource exampleResource 'Microsoft.Sql/servers/administrators@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  name: 'activeDirectory'
  properties: {
    administratorType: 'ActiveDirectory'
    login: 'bob@contoso.com'
    sid: 'c6b82b90-a647-49cb-8a62-0d2d3cb7ac7c'
    tenantId: 'c6b82b90-a647-49cb-8a62-0d2d3cb7ac7c'
  }
}
```

## microsoft.sql/servers/advisors

Update server advisor
```bicep
resource exampleResource 'Microsoft.Sql/servers/advisors@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autoExecuteValue: 'Disabled'
  }
}
```

## microsoft.sql/servers/communicationlinks

Create a server communication link
```bicep
resource exampleResource 'Microsoft.Sql/servers/communicationLinks@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    partnerServer: 'sqldcrudtest-test'
  }
}
```

## microsoft.sql/servers/connectionpolicies

Create or update a server's secure connection policy
```bicep
resource exampleResource 'Microsoft.Sql/servers/connectionPolicies@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectionType: 'Proxy'
  }
}
```

## microsoft.sql/servers/databases

Create a database as a copy
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    createMode: 'Copy'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/sqlcrudtest-4799/providers/Microsoft.Sql/servers/sqlcrudtest-3782/databases/testdb'
  }
}
```

Create a database as a dropped database restore to a specific point in time
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    createMode: 'Restore'
    restorePointInTime: '2017-05-20T21:24:37.467Z'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444 /resourceGroups/sqlcrudtest-8412/providers/Microsoft.Sql/servers/sqlcrudtest-3782/restorableDroppedDatabases/sourcedb,131403269876900000'
  }
}
```

Create a database as a dropped database restore to deletion time
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    createMode: 'Restore'
    sourceDatabaseDeletionDate: '2017-05-27T02:49:47.69Z'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444 /resourceGroups/sqlcrudtest-8412/providers/Microsoft.Sql/servers/sqlcrudtest-3782/databases/sourcedb'
  }
}
```

Create a database as a geo restore
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    createMode: 'Recovery'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444 /resourceGroups/sqlcrudtest-8412/providers/Microsoft.Sql/servers/sqlcrudtest-3782/recoverableDatabases/sourcedb'
  }
}
```

Create a database as a non-readable secondary
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    createMode: 'NonReadableSecondary'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/sqlcrudtest-4799/providers/Microsoft.Sql/servers/sqlcrudtest-3782/databases/testdb'
  }
}
```

Create a database as a point in time restore
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2017-02-16T21:24:37.467Z'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444 /resourceGroups/sqlcrudtest-8412/providers/Microsoft.Sql/servers/sqlcrudtest-3782/databases/testdb'
  }
}
```

Create a database as an online secondary
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    createMode: 'OnlineSecondary'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/sqlcrudtest-4799/providers/Microsoft.Sql/servers/sqlcrudtest-3782/databases/testdb'
  }
}
```

Create a database from a long term retention backup
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    createMode: 'RestoreLongTermRetentionBackup'
    recoveryServicesRecoveryPointResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444 /resourceGroups/sqlcrudtest-8412/providers/Microsoft.RecoveryServices/vaults/testVault/backupFabrics/Azure/protectionContainers/AzureSqlContainer;Sql;sqlcrudtest-8412;testsvr/protectedItems/AzureSqlDb;dsName;testdb;9dafcc99-7c84-4727-88ee-1a4fdb89afd7/RecoveryPoints/16043455089734'
  }
}
```

Create a database max
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    containmentState: 2
    createMode: 'Default'
    creationDate: '2017-02-10T01:37:18.847Z'
    currentServiceObjectiveId: 'f1173c43-91bd-4aaa-973c-54e79e15235b'
    databaseId: '816c5f7e-0e36-4eec-9c51-eee7a276c14c'
    defaultSecondaryLocation: 'Japan West'
    earliestRestoreDate: '2017-02-10T01:48:08.237Z'
    edition: 'Standard'
    maxSizeBytes: '268435456000'
    readScale: 'Disabled'
    requestedServiceObjectiveId: 'f1173c43-91bd-4aaa-973c-54e79e15235b'
    requestedServiceObjectiveName: 'S0'
    sampleName: 'AdventureWorksLT'
    serviceLevelObjective: 'S0'
    status: 'Online'
  }
}
```

Create a database min
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
}
```

Update a database max
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    containmentState: 2
    createMode: 'Default'
    currentServiceObjectiveId: 'f1173c43-91bd-4aaa-973c-54e79e15235b'
    defaultSecondaryLocation: 'Japan West'
    earliestRestoreDate: '2017-02-10T01:52:52.923Z'
    edition: 'Standard'
    maxSizeBytes: '268435456000'
    readScale: 'Disabled'
    requestedServiceObjectiveId: 'f1173c43-91bd-4aaa-973c-54e79e15235b'
    requestedServiceObjectiveName: 'S0'
    serviceLevelObjective: 'S0'
    status: 'Online'
  }
}
```

Update a database's elastic pool'
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    elasticPoolName: '7537'
  }
}
```

## microsoft.sql/servers/databases/advisors

Update database advisor
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/advisors@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autoExecuteValue: 'Disabled'
  }
}
```

## microsoft.sql/servers/databases/auditingpolicies

Create or update database table auditing policy
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/auditingPolicies@2014-04-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.sql/servers/databases/connectionpolicies

Create or update database connection policy
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/connectionPolicies@2014-04-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.sql/servers/databases/datamaskingpolicies

Create or update data masking policy max
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/dataMaskingPolicies@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataMaskingState: 'Enabled'
    exemptPrincipals: 'testuser;'
  }
}
```

Create or update data masking policy min
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/dataMaskingPolicies@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataMaskingState: 'Enabled'
  }
}
```

## microsoft.sql/servers/databases/datamaskingpolicies/rules

Create/Update data masking rule for default max
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    aliasName: 'nickname'
    columnName: 'test1'
    maskingFunction: 'Default'
    ruleState: 'Enabled'
    schemaName: 'dbo'
    tableName: 'Table_1'
  }
}
```

Create/Update data masking rule for default min
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    columnName: 'test1'
    maskingFunction: 'Default'
    schemaName: 'dbo'
    tableName: 'Table_1'
  }
}
```

Create/Update data masking rule for numbers
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    columnName: 'test1'
    maskingFunction: 'Number'
    numberFrom: '0'
    numberTo: '2'
    schemaName: 'dbo'
    tableName: 'Table_1'
  }
}
```

Create/Update data masking rule for text
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/dataMaskingPolicies/rules@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    columnName: 'test1'
    maskingFunction: 'Text'
    prefixSize: '1'
    replacementString: 'asdf'
    schemaName: 'dbo'
    suffixSize: '0'
    tableName: 'Table_1'
  }
}
```

## microsoft.sql/servers/databases/extensions

Import bacpac into an existing database Max with SAS key
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extensions@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  name: 'Import'
  type: 'Microsoft.Sql/servers/databases/extensions'
  properties: {
    administratorLogin: 'dummyLogin'
    administratorLoginPassword: '<administratorLoginPassword>'
    authenticationType: 'SQL'
    operationMode: 'Import'
    storageKey: '?sr=b&sp=rw&se=2018-01-01T00%3A00%3A00Z&sig=sdfsdfklsdjflSLIFJLSIEJFLKSDJFDd/%2wdfskdjf3%3D&sv=2015-07-08'
    storageKeyType: 'SharedAccessKey'
    storageUri: 'https://test.blob.core.windows.net/bacpacs/testbacpac.bacpac'
  }
}
```

Import bacpac into an existing database Max with storage key
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extensions@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  name: 'Import'
  type: 'Microsoft.Sql/servers/databases/extensions'
  properties: {
    administratorLogin: 'dummyLogin'
    administratorLoginPassword: '<administratorLoginPassword>'
    authenticationType: 'SQL'
    operationMode: 'Import'
    storageKey: 'sdlfkjdsf+sdlfkjsdlkfsjdfLDKFJSDLKFDFKLjsdfksjdflsdkfD2342309432849328479324/3RSD=='
    storageKeyType: 'StorageAccessKey'
    storageUri: 'https://test.blob.core.windows.net/bacpacs/testbacpac.bacpac'
  }
}
```

Import bacpac into an existing database Min with SAS key
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extensions@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    administratorLogin: 'dummyLogin'
    administratorLoginPassword: '<administratorLoginPassword>'
    operationMode: 'Import'
    storageKey: '?sr=b&sp=rw&se=2018-01-01T00%3A00%3A00Z&sig=sdfsdfklsdjflSLIFJLSIEJFLKSDJFDd/%2wdfskdjf3%3D&sv=2015-07-08'
    storageKeyType: 'SharedAccessKey'
    storageUri: 'https://test.blob.core.windows.net/bacpacs/testbacpac.bacpac'
  }
}
```

Import bacpac into an existing database Min with storage key
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extensions@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    administratorLogin: 'dummyLogin'
    administratorLoginPassword: '<administratorLoginPassword>'
    operationMode: 'Import'
    storageKey: 'sdlfkjdsf+sdlfkjsdlkfsjdfLDKFJSDLKFDFKLjsdfksjdflsdkfD2342309432849328479324/3RSD=='
    storageKeyType: 'StorageAccessKey'
    storageUri: 'https://test.blob.core.windows.net/bacpacs/testbacpac.bacpac'
  }
}
```

## microsoft.sql/servers/databases/geobackuppolicies

Update geo backup policy
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/geoBackupPolicies@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.sql/servers/databases/securityalertpolicies

Create database security alert policy max
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/securityAlertPolicies@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    disabledAlerts: 'Sql_Injection;Usage_Anomaly;'
    emailAccountAdmins: 'Enabled'
    emailAddresses: 'test@microsoft.com;user@microsoft.com'
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
    useServerDefault: 'Enabled'
  }
}
```

Create database security alert policy min
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/securityAlertPolicies@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/databases/transparentdataencryption

Create or update a database's transparent data encryption configuration
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/transparentDataEncryption@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    status: 'Enabled'
  }
}
```

## microsoft.sql/servers/elasticpools

Create elastic pool max
```bicep
resource exampleResource 'Microsoft.Sql/servers/elasticPools@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    creationDate: '2017-02-10T01:25:25.033Z'
    databaseDtuMax: 5
    databaseDtuMin: 0
    dtu: 50
    edition: 'Basic'
    state: 'Ready'
    storageMB: 5000
  }
}
```

Create elastic pool min
```bicep
resource exampleResource 'Microsoft.Sql/servers/elasticPools@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
}
```

## microsoft.sql/servers/firewallrules

Create a firewall rule max/min
```bicep
resource exampleResource 'Microsoft.Sql/servers/firewallRules@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '0.0.0.3'
    startIpAddress: '0.0.0.3'
  }
}
```

Update a firewall rule max/min
```bicep
resource exampleResource 'Microsoft.Sql/servers/firewallRules@2014-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '0.0.0.1'
    startIpAddress: '0.0.0.1'
  }
}
```
