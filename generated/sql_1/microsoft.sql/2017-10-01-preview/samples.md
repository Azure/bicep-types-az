# Microsoft.Sql
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.sql/locations/instancefailovergroups

Create failover group
```bicep
resource exampleResource 'Microsoft.Sql/locations/instanceFailoverGroups@2017-10-01-preview' = {
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

## microsoft.sql/managedinstances/databases/vulnerabilityassessments

Create a database's vulnerability assessment with all parameters
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/databases/vulnerabilityAssessments/rules/baselines@2017-10-01-preview' = {
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

## microsoft.sql/managedinstances/encryptionprotector

Update the encryption protector to key vault
```bicep
resource exampleResource 'Microsoft.Sql/managedInstances/encryptionProtector@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/encryptionProtector@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/managedInstances/keys@2017-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyType: 'AzureKeyVault'
    uri: 'https://someVault.vault.azure.net/keys/someKey/01234567890123456789012345678901'
  }
}
```

## microsoft.sql/servers/databases

Creates a data warehouse by specifying service objective name.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  sku: {
    name: 'DW1000c'
  }
}
```

Creates a database as a copy.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
}
```

Creates a Hyperscale database and specifies the number of readonly replicas.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  properties: {
    readReplicaCount: 3
  }
  sku: {
    name: 'HS_Gen4'
    capacity: 1
    tier: 'Hyperscale'
  }
}
```

Creates a VCore database by specifying service objective name.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
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
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  sku: {
    name: 'BC_Gen4'
    capacity: 2
  }
}
```

Creates a VCore database by specifying sku name.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases@2017-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'southeastasia'
  sku: {
    name: 'BC_Gen4_2'
  }
}
```

## microsoft.sql/servers/databases/backupshorttermretentionpolicies

Update the short term retention policy for the database.
```bicep
resource exampleResource 'Microsoft.Sql/servers/databases/backupShortTermRetentionPolicies@2017-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    retentionDays: 14
  }
}
```

## microsoft.sql/servers/elasticpools

Create or update elastic pool with all parameter
```bicep
resource exampleResource 'Microsoft.Sql/servers/elasticPools@2017-10-01-preview' = {
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

Create or update elastic pool with minimum parameters
```bicep
resource exampleResource 'Microsoft.Sql/servers/elasticPools@2017-10-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'Japan East'
}
```
