# Microsoft.Sql
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.sql/instancepools

Create an instance pool with all properties.
```bicep
resource exampleResource 'Microsoft.Sql/instancePools@2021-08-01-preview' = {
  name: 'example'
  location: 'japaneast'
  properties: {
    licenseType: 'LicenseIncluded'
    subnetId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Network/virtualNetworks/myvnet/subnets/mysubnet1'
    vCores: 8
  }
  sku: {
    name: 'GP_Gen5'
    family: 'Gen5'
    tier: 'GeneralPurpose'
  }
  tags: {
    a: 'b'
  }
}
```

Create an instance pool with min properties.
```bicep
resource exampleResource 'Microsoft.Sql/instancePools@2021-08-01-preview' = {
  name: 'example'
  location: 'japaneast'
  properties: {
    licenseType: 'LicenseIncluded'
    subnetId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/group1/providers/Microsoft.Network/virtualNetworks/myvnet/subnets/mysubnet1'
    vCores: 8
  }
  sku: {
    name: 'GP_Gen5'
    family: 'Gen5'
    tier: 'GeneralPurpose'
  }
}
```

## microsoft.sql/locations/instancefailovergroups

Create failover group
```bicep
resource exampleResource 'Microsoft.Sql/locations/instanceFailoverGroups@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    managedInstancePairs: [
      {
        partnerManagedInstanceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/failover-group-secondary-mngdInstance'
        primaryManagedInstanceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/failover-group-primary-mngdInstance'
      }
    ]
    partnerRegions: [
      {
        location: 'Japan West'
      }
    ]
    readOnlyEndpoint: {
      failoverPolicy: 'Disabled'
    }
    readWriteEndpoint: {
      failoverPolicy: 'Automatic'
      failoverWithDataLossGracePeriodMinutes: 480
    }
  }
}
```

## microsoft.sql/locations/servertrustgroups

Create server trust group
```bicep
resource exampleResource 'Microsoft.Sql/locations/serverTrustGroups@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupMembers: [
      {
        serverId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/managedInstance-1'
      }
      {
        serverId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/managedInstances/managedInstance-2'
      }
    ]
    trustScopes: [
      'GlobalTransactions'
      'ServiceBroker'
    ]
  }
}
```

## microsoft.sql/managedinstances

Create managed instance with all properties
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances@2021-08-01-preview' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: 'PLACEHOLDER'
    administrators: {
      azureADOnlyAuthentication: true
      login: 'bob@contoso.com'
      principalType: 'User'
      sid: '00000011-1111-2222-2222-123456789111'
      tenantId: '00000011-1111-2222-2222-123456789111'
    }
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    dnsZonePartner: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Sql/managedInstances/testinstance'
    instancePoolId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Sql/instancePools/pool1'
    licenseType: 'LicenseIncluded'
    maintenanceConfigurationId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/providers/Microsoft.Maintenance/publicMaintenanceConfigurations/SQL_JapanEast_MI_1'
    minimalTlsVersion: '1.2'
    proxyOverride: 'Redirect'
    publicDataEndpointEnabled: false
    requestedBackupStorageRedundancy: 'Geo'
    servicePrincipal: {
      type: 'SystemAssigned'
    }
    storageSizeInGB: 1024
    subnetId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    timezoneId: 'UTC'
    vCores: 8
  }
  sku: {
    name: 'GP_Gen5'
    tier: 'GeneralPurpose'
  }
  tags: {
    tagKey1: 'TagValue1'
  }
}
```

Create managed instance with minimal properties
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances@2021-08-01-preview' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: 'PLACEHOLDER'
    licenseType: 'LicenseIncluded'
    storageSizeInGB: 1024
    subnetId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    vCores: 8
  }
  sku: {
    name: 'GP_Gen4'
    tier: 'GeneralPurpose'
  }
}
```

## microsoft.sql/managedinstances/administrators

Create administrator of managed instance
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/administrators@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/administrators@2021-08-01-preview' = {
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

## microsoft.sql/managedinstances/azureadonlyauthentications

Creates or updates Azure Active Directory only authentication object.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    azureADOnlyAuthentication: false
  }
}
```

## microsoft.sql/managedinstances/databases

Creates a new managed database by restoring from an external backup
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    autoCompleteRestore: true
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    createMode: 'RestoreExternalBackup'
    lastBackupName: 'last_backup_name'
    storageContainerSasToken: 'sv=2015-12-11&sr=c&sp=rl&sig=1234'
    storageContainerUri: 'https://myaccountname.blob.core.windows.net/backups'
  }
}
```

Creates a new managed database from restoring a geo-replicated backup
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
}
```

## microsoft.sql/managedinstances/databases/backuplongtermretentionpolicies

Create or update the LTR policy for the managed database.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/backupLongTermRetentionPolicies@2021-08-01-preview' = {
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

## microsoft.sql/managedinstances/databases/backupshorttermretentionpolicies

Update the short term retention policy for the database.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/backupShortTermRetentionPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    retentionDays: 14
  }
}
```

## microsoft.sql/managedinstances/databases/schemas/tables/columns/sensitivitylabels

Updates or creates a sensitivity label of a given column with all parameters in a managed database
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/schemas/tables/columns/sensitivityLabels@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    informationType: 'PhoneNumber'
    informationTypeId: 'd22fa6e9-5ee4-3bde-4c2b-a409604c4646'
    labelId: 'bf91e08c-f4f0-478a-b016-25164b2a65ff'
    labelName: 'PII'
    rank: 'High'
  }
}
```

## microsoft.sql/managedinstances/databases/securityalertpolicies

Update a database's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    disabledAlerts: [
      'Sql_Injection'
      'Usage_Anomaly'
    ]
    emailAccountAdmins: true
    emailAddresses: [
      'test@contoso.com'
      'user@contoso.com'
    ]
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Update a database's threat detection policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/securityAlertPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.sql/managedinstances/databases/transparentdataencryption

Update a database's Transparent Data Encryption state with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/transparentDataEncryption@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.sql/managedinstances/databases/vulnerabilityassessments

Create a database's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2021-08-01-preview' = {
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
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```

Create a database's vulnerability assessment with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```

## microsoft.sql/managedinstances/databases/vulnerabilityassessments/rules/baselines

Creates or updates a database's vulnerability assessment rule baseline.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2021-08-01-preview' = {
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

## microsoft.sql/managedinstances/distributedavailabilitygroups

Create a distributed availability group.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/distributedAvailabilityGroups@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    primaryAvailabilityGroupName: 'BoxLocalAg1'
    secondaryAvailabilityGroupName: 'testcl'
    sourceEndpoint: 'TCP://SERVER:7022'
    targetDatabase: 'testdb'
  }
}
```

## microsoft.sql/managedinstances/encryptionprotector

Update the encryption protector to key vault
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/encryptionProtector@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyName: 'someVault_someKey_01234567890123456789012345678901'
    serverKeyType: 'AzureKeyVault'
  }
}
```

Update the encryption protector to service managed
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/encryptionProtector@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyName: 'ServiceManaged'
    serverKeyType: 'ServiceManaged'
  }
}
```

## microsoft.sql/managedinstances/keys

Creates or updates a managed instance key
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/keys@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyType: 'AzureKeyVault'
    uri: 'https://someVault.vault.azure.net/keys/someKey/01234567890123456789012345678901'
  }
}
```

## microsoft.sql/managedinstances/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/privateEndpointConnections@2021-08-01-preview' = {
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

## microsoft.sql/managedinstances/restorabledroppeddatabases/backupshorttermretentionpolicies

Update the short term retention policy for the restorable dropped database.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/restorableDroppedDatabases/backupShortTermRetentionPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    retentionDays: 14
  }
}
```

## microsoft.sql/managedinstances/securityalertpolicies

Update a managed server's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/securityAlertPolicies@2021-08-01-preview' = {
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

Update a managed server's threat detection policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/securityAlertPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.sql/managedinstances/servertrustcertificates

Create server trust certificate.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/serverTrustCertificates@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    publicBlob: '308203AE30820296A0030201020210'
  }
}
```

## microsoft.sql/managedinstances/sqlagent

Puts new sql agent configuration to instance.
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/sqlAgent@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.sql/managedinstances/vulnerabilityassessments

Create a managed instance's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/vulnerabilityAssessments@2021-08-01-preview' = {
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

Create a managed instance's vulnerability assessment with minimal parameters, when storageAccountAccessKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/vulnerabilityAssessments@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
  }
}
```

Create a managed instance's vulnerability assessment with minimal parameters, when storageContainerSasKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/vulnerabilityAssessments@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```

## microsoft.sql/servers

Create server
```bicep
resource exampleResource 'Microsoft.Sql/servers@2021-08-01-preview' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: 'PLACEHOLDER'
    administrators: {
      azureADOnlyAuthentication: true
      login: 'bob@contoso.com'
      principalType: 'User'
      sid: '00000011-1111-2222-2222-123456789111'
      tenantId: '00000011-1111-2222-2222-123456789111'
    }
    publicNetworkAccess: 'Enabled'
    restrictOutboundNetworkAccess: 'Enabled'
  }
}
```

## microsoft.sql/servers/administrators

Creates or updates an existing Azure Active Directory administrator.
```bicep
resource exampleResource 'Microsoft.Sql/servers/administrators@2021-08-01-preview' = {
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

## microsoft.sql/servers/auditingsettings

Update a server's blob auditing policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/auditingSettings@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/auditingSettings@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/azureadonlyauthentications

Creates or updates Azure Active Directory only authentication object.
```bicep
resource exampleResource 'Microsoft.Sql/servers/azureADOnlyAuthentications@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    azureADOnlyAuthentication: false
  }
}
```

## microsoft.sql/servers/connectionpolicies

Updates a server connection policy
```bicep
resource exampleResource 'Microsoft.Sql/servers/connectionPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectionType: 'Redirect'
  }
}
```

## microsoft.sql/servers/databases

Creates a data warehouse database as a cross-subscription restore from a backup of a dropped database.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Secondary'
    secondaryType: 'Geo'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-NorthEurope/providers/Microsoft.Sql/servers/testsvr1/databases/testdb'
  }
  sku: {
    name: 'S0'
    tier: 'Standard'
  }
}
```

Creates a database as named replica secondary.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'Secondary'
    secondaryType: 'Named'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-NorthEurope/providers/Microsoft.Sql/servers/testsvr1/databases/primarydb'
  }
  sku: {
    name: 'HS_Gen4'
    capacity: 2
    tier: 'Hyperscale'
  }
}
```

Creates a database from PointInTimeRestore.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2020-10-22T05:35:31.503Z'
    sourceDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-SoutheastAsia/providers/Microsoft.Sql/servers/testsvr/databases/testdb'
  }
}
```

Creates a database with default mode.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
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

Creates a database with ledger on.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    isLedgerOn: true
  }
}
```

Creates a database with minimum number of parameters.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
}
```

Creates a database with preferred maintenance window.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    createMode: 'Default'
    maintenanceConfigurationId: '/subscriptions/00000000-1111-2222-3333-444444444444/providers/Microsoft.Maintenance/publicMaintenanceConfigurations/SQL_SouthEastAsia_1'
    maxSizeBytes: 1073741824
  }
  sku: {
    name: 'S2'
    tier: 'Standard'
  }
}
```

Creates a database with specified backup storage redundancy.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    requestedBackupStorageRedundancy: 'Zone'
  }
}
```

Creates a VCore database by specifying service objective name.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  sku: {
    name: 'BC_Gen4'
    capacity: 2
  }
}
```

## microsoft.sql/servers/databases/auditingsettings

Create or update a database's azure monitor auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/auditingSettings@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/auditingSettings@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/auditingSettings@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/backupLongTermRetentionPolicies@2021-08-01-preview' = {
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

## microsoft.sql/servers/databases/backupshorttermretentionpolicies

Update the short term retention policy for the database.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    diffBackupIntervalInHours: 24
    retentionDays: 7
  }
}
```

## microsoft.sql/servers/databases/extendedauditingsettings

Create or update an extended database's azure monitor auditing policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extendedAuditingSettings@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/extendedAuditingSettings@2021-08-01-preview' = {
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
    queueDelayMs: 4000
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
resource exampleResource 'Microsoft.Sql/servers/databases/extendedAuditingSettings@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/databases/extensions

Create or Update database extensions.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extensions@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    operationMode: 'PolybaseImport'
    storageKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    storageKeyType: 'StorageAccessKey'
    storageUri: 'https://teststorage.blob.core.windows.net/testcontainer/Manifest.xml'
  }
}
```

Export database using database extension.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extensions@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    administratorLogin: 'login'
    administratorLoginPassword: 'password'
    authenticationType: 'Sql'
    operationMode: 'Export'
    storageKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    storageKeyType: 'StorageAccessKey'
    storageUri: 'https://teststorage.blob.core.windows.net/testcontainer/Manifest.xml'
  }
}
```

Import database using database extension.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/extensions@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    administratorLogin: 'login'
    administratorLoginPassword: 'password'
    authenticationType: 'Sql'
    operationMode: 'Import'
    storageKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    storageKeyType: 'StorageAccessKey'
    storageUri: 'https://teststorage.blob.core.windows.net/testcontainer/Manifest.xml'
  }
}
```

## microsoft.sql/servers/databases/ledgerdigestuploads

Enables ledger digest upload configuration for a database
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/ledgerDigestUploads@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    digestStorageEndpoint: 'https://MyAccount.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/databases/schemas/tables/columns/sensitivitylabels

Updates the sensitivity label of a given column with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/schemas/tables/columns/sensitivityLabels@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    informationType: 'PhoneNumber'
    informationTypeId: 'd22fa6e9-5ee4-3bde-4c2b-a409604c4646'
    labelId: 'bf91e08c-f4f0-478a-b016-25164b2a65ff'
    labelName: 'PII'
    rank: 'Low'
  }
}
```

## microsoft.sql/servers/databases/securityalertpolicies

Update a database's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/securityAlertPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    disabledAlerts: [
      'Sql_Injection'
      'Usage_Anomaly'
    ]
    emailAccountAdmins: true
    emailAddresses: [
      'test@microsoft.com'
      'user@microsoft.com'
    ]
    retentionDays: 6
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Update a database's threat detection policy with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/securityAlertPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.sql/servers/databases/syncgroups

Create a sync group
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups/syncMembers@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups/syncMembers@2021-08-01-preview' = {
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

## microsoft.sql/servers/databases/transparentdataencryption

Update a database's Transparent Data Encryption state with minimal parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/transparentDataEncryption@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.sql/servers/databases/vulnerabilityassessments

Create a database's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/vulnerabilityAssessments@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/vulnerabilityAssessments@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/vulnerabilityAssessments@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/vulnerabilityAssessments/rules/baselines@2021-08-01-preview' = {
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

## microsoft.sql/servers/databases/workloadgroups

Create a workload group with all properties specified.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/workloadGroups@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/workloadGroups@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/workloadGroups/workloadClassifiers@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    memberName: 'dbo'
  }
}
```

## microsoft.sql/servers/devopsauditingsettings

Update a server's DevOps audit settings with all params
```bicep
resource exampleResource 'Microsoft.Sql/servers/devOpsAuditingSettings@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    isAzureMonitorTargetEnabled: true
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageAccountSubscriptionId: '00000000-1234-0000-5678-000000000000'
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

Update a server's DevOps audit settings with minimal input
```bicep
resource exampleResource 'Microsoft.Sql/servers/devOpsAuditingSettings@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/elasticpools

Create or update elastic pool with all parameter
```bicep
resource exampleResource 'Microsoft.Sql/servers/elasticPools@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    perDatabaseSettings: {
      maxCapacity: 2
      minCapacity: 0.25
    }
  }
  sku: {
    name: 'GP_Gen4_2'
    capacity: 2
    tier: 'GeneralPurpose'
  }
}
```

Create or update elastic pool with maintenance configuration parameter
```bicep
resource exampleResource 'Microsoft.Sql/servers/elasticPools@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    maintenanceConfigurationId: '/subscriptions/00000000-1111-2222-3333-444444444444/providers/Microsoft.Maintenance/publicMaintenanceConfigurations/SQL_JapanEast_1'
  }
}
```

Create or update elastic pool with minimum parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/elasticPools@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
}
```

Create or update Hyperscale elastic pool with high availability replica count parameter
```bicep
resource exampleResource 'Microsoft.Sql/servers/elasticPools@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
  properties: {
    highAvailabilityReplicaCount: 2
  }
  sku: {
    name: 'HS_Gen5_4'
  }
}
```

## microsoft.sql/servers/encryptionprotector

Update the encryption protector to key vault
```bicep
resource exampleResource 'Microsoft.Sql/servers/encryptionProtector@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autoRotationEnabled: false
    serverKeyName: 'someVault_someKey_01234567890123456789012345678901'
    serverKeyType: 'AzureKeyVault'
  }
}
```

Update the encryption protector to service managed
```bicep
resource exampleResource 'Microsoft.Sql/servers/encryptionProtector@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyName: 'ServiceManaged'
    serverKeyType: 'ServiceManaged'
  }
}
```

## microsoft.sql/servers/extendedauditingsettings

Update a server's extended blob auditing policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/extendedAuditingSettings@2021-08-01-preview' = {
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
    queueDelayMs: 4000
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
resource exampleResource 'Microsoft.Sql/servers/extendedAuditingSettings@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/failovergroups

Create failover group
```bicep
resource exampleResource 'Microsoft.Sql/servers/failoverGroups@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    databases: [
      '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/failover-group-primary-server/databases/testdb-1'
      '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/failover-group-primary-server/databases/testdb-2'
    ]
    partnerServers: [
      {
        id: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Sql/servers/failover-group-secondary-server'
      }
    ]
    readOnlyEndpoint: {
      failoverPolicy: 'Disabled'
    }
    readWriteEndpoint: {
      failoverPolicy: 'Automatic'
      failoverWithDataLossGracePeriodMinutes: 480
    }
  }
}
```

## microsoft.sql/servers/firewallrules

Create a firewall rule max/min
```bicep
resource exampleResource 'Microsoft.Sql/servers/firewallRules@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/firewallRules@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '0.0.0.1'
    startIpAddress: '0.0.0.1'
  }
}
```

## microsoft.sql/servers/ipv6firewallrules

Create an IPv6 firewall rule max/min
```bicep
resource exampleResource 'Microsoft.Sql/servers/ipv6FirewallRules@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIPv6Address: '0000:0000:0000:0000:0000:ffff:0000:0003'
    startIPv6Address: '0000:0000:0000:0000:0000:ffff:0000:0003'
  }
}
```

Update an IPv6 firewall rule max/min
```bicep
resource exampleResource 'Microsoft.Sql/servers/ipv6FirewallRules@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIPv6Address: '0000:0000:0000:0000:0000:ffff:0000:0001'
    startIPv6Address: '0000:0000:0000:0000:0000:ffff:0000:0001'
  }
}
```

## microsoft.sql/servers/jobagents

Create or update a job agent
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/jobAgents/credentials@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/jobAgents/jobs@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/jobAgents/jobs@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.sql/servers/jobagents/jobs/steps

Create or update a job step with all properties specified.
```bicep
resource exampleResource 'Microsoft.Sql/servers/jobAgents/jobs/steps@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/jobAgents/jobs/steps@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/jobAgents/targetGroups@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/jobAgents/targetGroups@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    members: [
    ]
  }
}
```

## microsoft.sql/servers/keys

Creates or updates a server key
```bicep
resource exampleResource 'Microsoft.Sql/servers/keys@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyType: 'AzureKeyVault'
    uri: 'https://someVault.vault.azure.net/keys/someKey/01234567890123456789012345678901'
  }
}
```

## microsoft.sql/servers/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.Sql/servers/privateEndpointConnections@2021-08-01-preview' = {
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

## microsoft.sql/servers/securityalertpolicies

Update a server's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/securityAlertPolicies@2021-08-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/securityAlertPolicies@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.sql/servers/syncagents

Create a new sync agent
```bicep
resource exampleResource 'Microsoft.Sql/servers/syncAgents@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    syncDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-Onebox/providers/Microsoft.Sql/servers/syncagentcrud-8475/databases/sync'
  }
}
```

Update a sync agent
```bicep
resource exampleResource 'Microsoft.Sql/servers/syncAgents@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    syncDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-Onebox/providers/Microsoft.Sql/servers/syncagentcrud-8475/databases/sync'
  }
}
```

## microsoft.sql/servers/virtualnetworkrules

Create or update a virtual network rule
```bicep
resource exampleResource 'Microsoft.Sql/servers/virtualNetworkRules@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ignoreMissingVnetServiceEndpoint: false
    virtualNetworkSubnetId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Network/virtualNetworks/testvnet/subnets/testsubnet'
  }
}
```

## microsoft.sql/servers/vulnerabilityassessments

Create a server's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/vulnerabilityAssessments@2021-08-01-preview' = {
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

Create a server's vulnerability assessment with minimal parameters, when storageAccountAccessKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/servers/vulnerabilityAssessments@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageAccountAccessKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
  }
}
```

Create a server's vulnerability assessment with minimal parameters, when storageContainerSasKey is specified
```bicep
resource exampleResource 'Microsoft.Sql/servers/vulnerabilityAssessments@2021-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    storageContainerPath: 'https://myStorage.blob.core.windows.net/vulnerability-assessment/'
    storageContainerSasKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
  }
}
```
