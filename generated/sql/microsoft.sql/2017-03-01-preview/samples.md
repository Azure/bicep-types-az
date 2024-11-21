# Microsoft.Sql
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.sql/managedinstances/administrators

Create administrator of managed instance
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/administrators@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    administratorType: 'ActiveDirectory'
    login: 'bob@contoso.com'
    sid: '44444444-3333-2222-1111-000000000000'
    tenantId: '55555555-4444-3333-2222-111111111111'
  }
}
```

Update administrator of managed instance
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/administrators@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    administratorType: 'ActiveDirectory'
    login: 'bob@contoso.com'
    sid: '44444444-3333-2222-1111-000000000000'
    tenantId: '55555555-4444-3333-2222-111111111111'
  }
}
```

## microsoft.sql/managedinstances/databases

Creates a new managed database by restoring from an external backup
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'RestoreLongTermRetentionBackup'
    longTermRetentionBackupResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/providers/Microsoft.Sql/locations/southeastasia/longTermRetentionManagedInstances/testInstance/databases/testDatabase/longTermRetentionManagedInstanceBackups/00000000-1111-2222-3333-444444444444;131637960820000000'
  }
}
```

Creates a new managed database using point in time restore
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
}
```

## microsoft.sql/managedinstances/databases/backupshorttermretentionpolicies

Update the short term retention policy for the database.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  retentionDays: 14
}
```

## microsoft.sql/managedinstances/restorabledroppeddatabases/backupshorttermretentionpolicies

Update the short term retention policy for the restorable dropped database.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  retentionDays: 14
}
```

## microsoft.sql/managedinstances/securityalertpolicies

Update a server's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/securityAlertPolicies@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    disabledAlerts: [
      'Access_Anomaly'
      'Usage_Anomaly'
    ]
    emailAccountAdmins: true
    emailAddresses: [
      'testSecurityAlert@microsoft.com'
    ]
    retentionDays: 5
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Update a server's threat detection policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/securityAlertPolicies@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/auditingsettings

Update a server's blob auditing policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/auditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    auditActionsAndGroups: [
      'SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP'
      'FAILED_DATABASE_AUTHENTICATION_GROUP'
      'BATCH_COMPLETED_GROUP'
    ]
    isAzureMonitorTargetEnabled: true
    isStorageSecondaryKeyInUse: false
    queueDelayMs: 4000
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageAccountSubscriptionId: '00000000-1234-0000-5678-000000000000'
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Update a server's blob auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/auditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/databases

Creates a database as a copy.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-03-01-preview' = {
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

Creates a database from recoverable DatabaseId.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-03-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
}
```

## microsoft.sql/servers/databases/auditingsettings

Create or update a database's azure monitor auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/auditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    isAzureMonitorTargetEnabled: true
    state: 'Enabled'
  }
}
```

Create or update a database's blob auditing policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/auditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    auditActionsAndGroups: [
      'DATABASE_LOGOUT_GROUP'
      'DATABASE_ROLE_MEMBER_CHANGE_GROUP'
      'UPDATE on database::TestDatabaseName by public'
    ]
    isAzureMonitorTargetEnabled: true
    isStorageSecondaryKeyInUse: false
    queueDelayMs: 4000
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageAccountSubscriptionId: '00000000-1234-0000-5678-000000000000'
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Create or update a database's blob auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/auditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/databases/backuplongtermretentionpolicies

Create or update the long term retention policy for the database.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    monthlyRetention: 'P1Y'
    weekOfYear: 5
    weeklyRetention: 'P1M'
    yearlyRetention: 'P5Y'
  }
}
```

## microsoft.sql/servers/databases/extendedauditingsettings

Create or update an extended database's azure monitor auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extendedAuditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    isAzureMonitorTargetEnabled: true
    state: 'Enabled'
  }
}
```

Create or update an extended database's blob auditing policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extendedAuditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    auditActionsAndGroups: [
      'DATABASE_LOGOUT_GROUP'
      'DATABASE_ROLE_MEMBER_CHANGE_GROUP'
      'UPDATE on database::TestDatabaseName by public'
    ]
    isAzureMonitorTargetEnabled: true
    isStorageSecondaryKeyInUse: false
    predicateExpression: 'statement = \'select 1\''
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageAccountSubscriptionId: '00000000-1234-0000-5678-000000000000'
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Create or update an extended database's blob auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extendedAuditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/databases/schemas/tables/columns/sensitivitylabels

Updates the sensitivity label of a given column with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    informationType: 'PhoneNumber'
    informationTypeId: 'd22fa6e9-5ee4-3bde-4c2b-a409604c4646'
    labelId: 'bf91e08c-f4f0-478a-b016-25164b2a65ff'
    labelName: 'PII'
  }
}
```

## microsoft.sql/servers/databases/vulnerabilityassessments

Create a database's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/vulnerabilityAssessments@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    recurringScans: {
      emailSubscriptionAdmins: true
      emails: [
        'email1@mail.com'
        'email2@mail.com'
      ]
      isEnabled: true
    }
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```

Create a database's vulnerability assessment with minimal parameters, when storageAccountAccessKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/vulnerabilityAssessments@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
  }
}
```

Create a database's vulnerability assessment with minimal parameters, when storageContainerSasKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/vulnerabilityAssessments@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```

## microsoft.sql/servers/databases/vulnerabilityassessments/rules/baselines

Creates or updates a database's vulnerability assessment rule baseline.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    baselineResults: [
      {
        result: [
          'userA'
          'SELECT'
        ]
      }
      {
        result: [
          'userB'
          'SELECT'
        ]
      }
      {
        result: [
          'userC'
          'SELECT'
          'tableId_4'
        ]
      }
    ]
  }
}
```

## microsoft.sql/servers/extendedauditingsettings

Update a server's extended blob auditing policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/extendedAuditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    auditActionsAndGroups: [
      'SUCCESSFUL_DATABASE_AUTHENTICATION_GROUP'
      'FAILED_DATABASE_AUTHENTICATION_GROUP'
      'BATCH_COMPLETED_GROUP'
    ]
    isAzureMonitorTargetEnabled: true
    isStorageSecondaryKeyInUse: false
    predicateExpression: 'object_name = \'SensitiveData\''
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageAccountSubscriptionId: '00000000-1234-0000-5678-000000000000'
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Update a server's extended blob auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/extendedAuditingSettings@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/jobagents

Create or update a job agent with all properties
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    databaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/databases/db1'
  }
  sku: {
    name: 'Agent'
    capacity: 100
  }
  tags: {
    octopus: 'agent'
  }
}
```

Create or update a job agent with minimum properties
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    databaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/databases/db1'
  }
}
```

## microsoft.sql/servers/jobagents/credentials

Create or update a credential
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents/credentials@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    password: '<password>'
    username: 'myuser'
  }
}
```

## microsoft.sql/servers/jobagents/jobs

Create a job with all properties specified
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents/jobs@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'my favourite job'
    schedule: {
      type: 'Recurring'
      enabled: true
      endTime: '2015-09-24T23:59:59Z'
      interval: 'PT5M'
      startTime: '2015-09-24T18:30:01Z'
    }
  }
}
```

Create a job with default properties
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents/jobs@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.sql/servers/jobagents/jobs/steps

Create or update a job step with all properties specified.
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents/jobs/steps@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    action: {
      type: 'TSql'
      source: 'Inline'
      value: 'select 2'
    }
    credential: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/cred1'
    executionOptions: {
      initialRetryIntervalSeconds: 11
      maximumRetryIntervalSeconds: 222
      retryAttempts: 42
      retryIntervalBackoffMultiplier: 3
      timeoutSeconds: 1234
    }
    output: {
      type: 'SqlDatabase'
      credential: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/cred0'
      databaseName: 'database3'
      resourceGroupName: 'group3'
      schemaName: 'myschema1234'
      serverName: 'server3'
      subscriptionId: '3501b905-a848-4b5d-96e8-b253f62d735a'
      tableName: 'mytable5678'
    }
    stepId: 1
    targetGroup: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/targetGroups/targetGroup1'
  }
}
```

Create or update a job step with minimal properties specified.
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents/jobs/steps@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    action: {
      value: 'select 1'
    }
    credential: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/cred0'
    targetGroup: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/targetGroups/targetGroup0'
  }
}
```

## microsoft.sql/servers/jobagents/targetgroups

Create or update a target group with all properties.
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents/targetGroups@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    members: [
      {
        type: 'SqlDatabase'
        databaseName: 'database1'
        membershipType: 'Exclude'
        serverName: 'server1'
      }
      {
        type: 'SqlServer'
        membershipType: 'Include'
        refreshCredential: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/testCredential'
        serverName: 'server1'
      }
      {
        type: 'SqlElasticPool'
        elasticPoolName: 'pool1'
        membershipType: 'Include'
        refreshCredential: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/testCredential'
        serverName: 'server2'
      }
      {
        type: 'SqlShardMap'
        databaseName: 'database1'
        membershipType: 'Include'
        refreshCredential: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Sql/servers/server1/jobAgents/agent1/credentials/testCredential'
        serverName: 'server3'
        shardMapName: 'shardMap1'
      }
    ]
  }
}
```

Create or update a target group with minimal properties.
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents/targetGroups@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    members: [
    ]
  }
}
```

## microsoft.sql/servers/securityalertpolicies

Update a server's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/securityAlertPolicies@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    disabledAlerts: [
      'Access_Anomaly'
      'Usage_Anomaly'
    ]
    emailAccountAdmins: true
    emailAddresses: [
      'testSecurityAlert@microsoft.com'
    ]
    retentionDays: 5
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Update a server's threat detection policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/securityAlertPolicies@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    emailAccountAdmins: true
    state: 'Disabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```
