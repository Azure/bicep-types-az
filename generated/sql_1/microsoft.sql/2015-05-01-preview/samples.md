# Microsoft.Sql
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.sql/managedinstances

Create managed instance with all properties
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances@2015-05-01-preview' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: '<administratorLoginPassword>'
    collation: 'SQL_Latin1_General_CP1_CI_AS'
    dnsZonePartner: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Sql/managedInstances/testinstance'
    instancePoolId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/resourceGroups/testrg/providers/Microsoft.Sql/instancePools/pool1'
    licenseType: 'LicenseIncluded'
    maintenanceConfigurationId: '/subscriptions/20D7082A-0FC7-4468-82BD-542694D5042B/providers/Microsoft.Maintenance/publicMaintenanceConfigurations/SQL_JapanEast_MI_1'
    proxyOverride: 'Redirect'
    publicDataEndpointEnabled: false
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
resource exampleResource 'Microsoft.Sql/managedInstances@2015-05-01-preview' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: '<administratorLoginPassword>'
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

## microsoft.sql/servers

Create server with all properties
```bicep
resource exampleResource 'Microsoft.Sql/servers@2015-05-01-preview' = {
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

Create server with minimal properties
```bicep
resource exampleResource 'Microsoft.Sql/servers@2015-05-01-preview' = {
  name: 'example'
  location: 'Japan East'
  properties: {
    administratorLogin: 'dummylogin'
    administratorLoginPassword: '<administratorLoginPassword>'
  }
}
```

## microsoft.sql/servers/databases/auditingsettings

Create or update a database's blob auditing policy with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/auditingSettings@2015-05-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases/auditingSettings@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
    storageAccountAccessKey: 'sdlfkjabc+sdlfkjsdlkfsjdfLDKFTERLKFDFKLjsdfksjdflsdkfD2342309432849328476458/3RSD=='
    storageEndpoint: 'https://mystorage.blob.core.windows.net'
  }
}
```

## microsoft.sql/servers/databases/syncgroups

Create a sync group
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    conflictResolutionPolicy: 'HubWin'
    hubDatabaseUserName: 'hubUser'
    interval: -1
    lastSyncTime: '0001-01-01T08:00:00Z'
    syncDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/syncgroupcrud-3521/providers/Microsoft.Sql/servers/syncgroupcrud-8475/databases/syncgroupcrud-4328'
  }
}
```

Update a sync group
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    conflictResolutionPolicy: 'HubWin'
    hubDatabaseUserName: 'hubUser'
    interval: -1
    lastSyncTime: '0001-01-01T08:00:00Z'
    syncDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/syncgroupcrud-3521/providers/Microsoft.Sql/servers/syncgroupcrud-8475/databases/syncgroupcrud-4328'
  }
}
```

## microsoft.sql/servers/databases/syncgroups/syncmembers

Create a new sync member
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups/syncMembers@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    databaseName: 'syncgroupcrud-7421'
    databaseType: 'AzureSqlDatabase'
    serverName: 'syncgroupcrud-3379.database.windows.net'
    syncDirection: 'Bidirectional'
    syncState: 'UnProvisioned'
    userName: 'myUser'
  }
}
```

Update a sync member
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/syncGroups/syncMembers@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    databaseName: 'syncgroupcrud-7421'
    databaseType: 'AzureSqlDatabase'
    serverName: 'syncgroupcrud-3379.database.windows.net'
    syncDirection: 'Bidirectional'
    syncState: 'UnProvisioned'
    userName: 'myUser'
  }
}
```

## microsoft.sql/servers/encryptionprotector

Update the encryption protector to key vault
```bicep
resource exampleResource 'Microsoft.Sql/servers/encryptionProtector@2015-05-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/encryptionProtector@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyName: 'ServiceManaged'
    serverKeyType: 'ServiceManaged'
  }
}
```

## microsoft.sql/servers/failovergroups

Create failover group
```bicep
resource exampleResource 'Microsoft.Sql/servers/failoverGroups@2015-05-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/firewallRules@2015-05-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/firewallRules@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '0.0.0.1'
    startIpAddress: '0.0.0.1'
  }
}
```

## microsoft.sql/servers/keys

Creates or updates a server key
```bicep
resource exampleResource 'Microsoft.Sql/servers/keys@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyType: 'AzureKeyVault'
    uri: 'https://someVault.vault.azure.net/keys/someKey/01234567890123456789012345678901'
  }
}
```

## microsoft.sql/servers/syncagents

Create a new sync agent
```bicep
resource exampleResource 'Microsoft.Sql/servers/syncAgents@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    syncDatabaseId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default-SQL-Onebox/providers/Microsoft.Sql/servers/syncagentcrud-8475/databases/sync'
  }
}
```

Update a sync agent
```bicep
resource exampleResource 'Microsoft.Sql/servers/syncAgents@2015-05-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/virtualNetworkRules@2015-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ignoreMissingVnetServiceEndpoint: false
    virtualNetworkSubnetId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/Default/providers/Microsoft.Network/virtualNetworks/testvnet/subnets/testsubnet'
  }
}
```
