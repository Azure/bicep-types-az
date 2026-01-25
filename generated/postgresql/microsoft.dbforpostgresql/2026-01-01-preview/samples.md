# Microsoft.DBforPostgreSQL
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbforpostgresql/flexibleservers

Create a new elastic cluster.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administratorLogin: 'examplelogin'
    administratorLoginPassword: 'examplepassword'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    cluster: {
      clusterSize: 2
      defaultDatabaseName: 'clusterdb'
    }
    createMode: 'Create'
    highAvailability: {
      mode: 'Disabled'
    }
    network: {
      publicNetworkAccess: 'Disabled'
    }
    storage: {
      autoGrow: 'Disabled'
      storageSizeGB: 256
      tier: 'P15'
    }
    version: '16'
  }
  sku: {
    name: 'Standard_D4ds_v5'
    tier: 'GeneralPurpose'
  }
}
```

Create a new server in Microsoft owned virtual network with zone redundant high availability.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administratorLogin: 'exampleadministratorlogin'
    administratorLoginPassword: 'examplepassword'
    availabilityZone: '1'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Enabled'
    }
    createMode: 'Create'
    highAvailability: {
      mode: 'ZoneRedundant'
    }
    network: {
      publicNetworkAccess: 'Enabled'
    }
    storage: {
      autoGrow: 'Disabled'
      storageSizeGB: 512
      tier: 'P20'
    }
    version: '17'
  }
  sku: {
    name: 'Standard_D4ds_v5'
    tier: 'GeneralPurpose'
  }
  tags: {
    InCustomerVnet: 'false'
    InMicrosoftVnet: 'true'
  }
}
```

Create a new server in your own virtual network with same zone high availability.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administratorLogin: 'exampleadministratorlogin'
    administratorLoginPassword: 'examplepassword'
    availabilityZone: '1'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Enabled'
    }
    createMode: 'Create'
    highAvailability: {
      mode: 'SameZone'
    }
    network: {
      delegatedSubnetResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.Network/virtualNetworks/examplevirtualnetwork/subnets/examplesubnet'
      privateDnsZoneArmResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.Network/privateDnsZones/exampleprivatednszone.private.postgres.database'
    }
    storage: {
      autoGrow: 'Disabled'
      storageSizeGB: 512
      tier: 'P20'
    }
    version: '17'
  }
  sku: {
    name: 'Standard_D4ds_v5'
    tier: 'GeneralPurpose'
  }
  tags: {
    InCustomerVnet: 'true'
    InMicrosoftVnet: 'false'
  }
}
```

Create a new server using a backup of a server that was deleted or dropped recently.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    createMode: 'ReviveDropped'
    pointInTimeUTC: '2025-06-01T18:30:22.123456Z'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBforPostgreSQL/flexibleServers/exampledeletedserver'
  }
}
```

Create a new server using a point in time restore of a backup of an existing server.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    createMode: 'PointInTimeRestore'
    pointInTimeUTC: '2025-06-01T18:35:22.123456Z'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBforPostgreSQL/flexibleServers/examplesourceserver'
  }
}
```

Create a new server using a restore of a geographically redundant backup of an existing server, with data encryption based on customer managed key with automatic key version update.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplegeoredundantidentity': {
      }
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    createMode: 'GeoRestore'
    dataEncryption: {
      type: 'AzureKeyVault'
      geoBackupKeyURI: 'https://examplegeoredundantkeyvault.vault.azure.net/keys/examplekey'
      geoBackupUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplegeoredundantidentity'
      primaryKeyURI: 'https://exampleprimarykeyvault.vault.azure.net/keys/examplekey'
      primaryUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity'
    }
    pointInTimeUTC: '2025-06-01T18:35:22.123456Z'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBforPostgreSQL/flexibleServers/examplesourceserver'
  }
}
```

Create a new server using a restore of a geographically redundant backup of an existing server, with data encryption based on customer managed key.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplegeoredundantidentity': {
      }
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    createMode: 'GeoRestore'
    dataEncryption: {
      type: 'AzureKeyVault'
      geoBackupKeyURI: 'https://examplegeoredundantkeyvault.vault.azure.net/keys/examplekey/yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
      geoBackupUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/examplegeoredundantidentity'
      primaryKeyURI: 'https://exampleprimarykeyvault.vault.azure.net/keys/examplekey/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      primaryUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity'
    }
    pointInTimeUTC: '2025-06-01T18:35:22.123456Z'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBforPostgreSQL/flexibleServers/examplesourceserver'
  }
}
```

Create a new server with data encryption based on customer managed key with automatic key version update.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    administratorLogin: 'exampleadministratorlogin'
    administratorLoginPassword: 'examplepassword'
    availabilityZone: '1'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    createMode: 'Create'
    dataEncryption: {
      type: 'AzureKeyVault'
      geoBackupKeyURI: ''
      geoBackupUserAssignedIdentityId: ''
      primaryKeyURI: 'https://exampleprimarykeyvault.vault.azure.net/keys/examplekey'
      primaryUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity'
    }
    highAvailability: {
      mode: 'ZoneRedundant'
    }
    network: {
      delegatedSubnetResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.Network/virtualNetworks/examplevirtualnetwork/subnets/examplesubnet'
      privateDnsZoneArmResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/exampleresourcegroup/providers/Microsoft.Network/privateDnsZones/exampleprivatednszone.postgres.database.azure.com'
    }
    storage: {
      autoGrow: 'Disabled'
      storageSizeGB: 512
      tier: 'P20'
    }
    version: '17'
  }
  sku: {
    name: 'Standard_D4ds_v5'
    tier: 'GeneralPurpose'
  }
}
```

Create a new server with data encryption based on customer managed key.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    administratorLogin: 'exampleadministratorlogin'
    administratorLoginPassword: 'examplepassword'
    availabilityZone: '1'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    createMode: 'Create'
    dataEncryption: {
      type: 'AzureKeyVault'
      geoBackupKeyURI: ''
      geoBackupUserAssignedIdentityId: ''
      primaryKeyURI: 'https://exampleprimarykeyvault.vault.azure.net/keys/examplekey/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      primaryUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity'
    }
    highAvailability: {
      mode: 'ZoneRedundant'
    }
    network: {
      delegatedSubnetResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.Network/virtualNetworks/examplevirtualnetwork/subnets/examplesubnet'
      privateDnsZoneArmResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/exampleresourcegroup/providers/Microsoft.Network/privateDnsZones/exampleprivatednszone.postgres.database.azure.com'
    }
    storage: {
      autoGrow: 'Disabled'
      storageSizeGB: 512
      tier: 'P20'
    }
    version: '17'
  }
  sku: {
    name: 'Standard_D4ds_v5'
    tier: 'GeneralPurpose'
  }
}
```

Create a new server with Microsoft Entra authentication enabled in your own virtual network and without high availability.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administratorLogin: 'exampleadministratorlogin'
    administratorLoginPassword: 'examplepassword'
    authConfig: {
      activeDirectoryAuth: 'Enabled'
      passwordAuth: 'Enabled'
      tenantId: 'tttttt-tttt-tttt-tttt-tttttttttttt'
    }
    availabilityZone: '1'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    createMode: 'Create'
    dataEncryption: {
      type: 'SystemManaged'
    }
    highAvailability: {
      mode: 'Disabled'
    }
    network: {
      delegatedSubnetResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.Network/virtualNetworks/examplevirtualnetwork/subnets/examplesubnet'
      privateDnsZoneArmResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/exampleresourcegroup/providers/Microsoft.Network/privateDnsZones/exampleprivatednszone.postgres.database.azure.com'
    }
    storage: {
      autoGrow: 'Disabled'
      storageSizeGB: 512
      tier: 'P20'
    }
    version: '17'
  }
  sku: {
    name: 'Standard_D4ds_v5'
    tier: 'GeneralPurpose'
  }
}
```

Create a read replica of an existing server.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2026-01-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity': {
      }
    }
  }
  location: 'eastus'
  properties: {
    createMode: 'Replica'
    dataEncryption: {
      type: 'AzureKeyVault'
      geoBackupKeyURI: ''
      geoBackupUserAssignedIdentityId: ''
      primaryKeyURI: 'https://exampleprimarykeyvault.vault.azure.net/keys/examplekey/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
      primaryUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/exampleprimaryidentity'
    }
    pointInTimeUTC: '2025-06-01T18:35:22.123456Z'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBforPostgreSQL/flexibleServers/examplesourceserver'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/administrators

Add a server administrator associated to a Microsoft Entra principal.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/administrators@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalName: 'exampleuser@contoso.com'
    principalType: 'User'
    tenantId: 'tttttttt-tttt-tttt-tttt-tttttttttttt'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/advancedthreatprotectionsettings

Update the advanced threat protection settings of a server.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/advancedThreatProtectionSettings@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/configurations

Update, using Put verb, the value assigned to a specific modifiable configuration (also known as server parameter) of a server.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/configurations@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    source: 'user-override'
    value: 'on'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/databases

Create a database.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/databases@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    charset: 'utf8'
    collation: 'en_US.utf8'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/firewallrules

Create a new firewall rule or update an existing firewall rule.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/migrations

Create a migration for validating only.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/migrations@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dbsToMigrate: [
      'exampledatabase1'
      'exampledatabase2'
      'exampledatabase3'
      'exampledatabase4'
    ]
    migrationMode: 'Offline'
    migrationOption: 'Validate'
    overwriteDbsInTarget: 'True'
    secretParameters: {
      adminCredentials: {
        sourceServerPassword: 'examplesourcepassword'
        targetServerPassword: 'exampletargetpassword'
      }
    }
    sourceDbServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBForPostgreSql/servers/examplesource'
  }
}
```

Create a migration specifying user names.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/migrations@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dbsToMigrate: [
      'exampledatabase1'
      'exampledatabase2'
      'exampledatabase3'
      'exampledatabase4'
    ]
    migrationMode: 'Offline'
    secretParameters: {
      adminCredentials: {
        sourceServerPassword: 'examplesourcepassword'
        targetServerPassword: 'exampletargetpassword'
      }
      sourceServerUsername: 'newadmin@examplesource'
      targetServerUsername: 'targetadmin'
    }
    sourceDbServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBForPostgreSql/servers/examplesource'
  }
}
```

Create a migration with fully qualified domain names for source and target servers.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/migrations@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dbsToMigrate: [
      'exampledatabase1'
      'exampledatabase2'
      'exampledatabase3'
      'exampledatabase4'
    ]
    migrationMode: 'Offline'
    overwriteDbsInTarget: 'True'
    secretParameters: {
      adminCredentials: {
        sourceServerPassword: 'xxxxxxxx'
        targetServerPassword: 'xxxxxxxx'
      }
    }
    sourceDbServerFullyQualifiedDomainName: 'examplesource.contoso.com'
    sourceDbServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBForPostgreSql/servers/examplesource'
    targetDbServerFullyQualifiedDomainName: 'exampletarget.contoso.com'
  }
}
```

Create a migration with other source type for validating and migrating.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/migrations@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dbsToMigrate: [
      'exampledatabase1'
      'exampledatabase2'
      'exampledatabase3'
      'exampledatabase4'
    ]
    migrationMode: 'Offline'
    migrationOption: 'ValidateAndMigrate'
    overwriteDbsInTarget: 'True'
    secretParameters: {
      adminCredentials: {
        sourceServerPassword: 'examplesourcepassword'
        targetServerPassword: 'exampletargetpassword'
      }
    }
    sourceDbServerResourceId: 'examplesource:5432@exampleuser'
    sourceType: 'OnPremises'
    sslMode: 'Prefer'
  }
}
```

Create a migration with private endpoint.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/migrations@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dbsToMigrate: [
      'exampledatabase1'
      'exampledatabase2'
      'exampledatabase3'
      'exampledatabase4'
    ]
    migrationInstanceResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBForPostgreSql/flexibleServers/examplesourcemigration'
    migrationMode: 'Offline'
    overwriteDbsInTarget: 'True'
    secretParameters: {
      adminCredentials: {
        sourceServerPassword: 'examplesourcepassword'
        targetServerPassword: 'exampletargetpassword'
      }
    }
    sourceDbServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBForPostgreSql/servers/examplesource'
  }
}
```

Create a migration with roles.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/migrations@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dbsToMigrate: [
      'exampledatabase1'
      'exampledatabase2'
      'exampledatabase3'
      'exampledatabase4'
    ]
    migrateRoles: 'True'
    migrationMode: 'Offline'
    overwriteDbsInTarget: 'True'
    secretParameters: {
      adminCredentials: {
        sourceServerPassword: 'examplesourcepassword'
        targetServerPassword: 'exampletargetpassword'
      }
    }
    sourceDbServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBForPostgreSql/servers/examplesource'
  }
}
```

Create a migration.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/migrations@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dbsToMigrate: [
      'exampledatabase1'
      'exampledatabase2'
      'exampledatabase3'
      'exampledatabase4'
    ]
    migrationMode: 'Offline'
    overwriteDbsInTarget: 'True'
    secretParameters: {
      adminCredentials: {
        sourceServerPassword: 'examplesourcepassword'
        targetServerPassword: 'exampletargetpassword'
      }
    }
    sourceDbServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/exampleresourcegroup/providers/Microsoft.DBForPostgreSql/servers/examplesource'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/privateendpointconnections

Approve or reject a private endpoint connection.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/privateEndpointConnections@2026-01-01-preview' = {
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

## microsoft.dbforpostgresql/flexibleservers/virtualendpoints

Create a pair of virtual endpoints for a server.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/virtualendpoints@2026-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endpointType: 'ReadWrite'
    members: [
      'exampleprimaryserver'
    ]
  }
}
```
