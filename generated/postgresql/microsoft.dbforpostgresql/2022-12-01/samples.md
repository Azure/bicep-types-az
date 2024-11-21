# Microsoft.DBforPostgreSQL
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbforpostgresql/flexibleservers

Create a database as a geo-restore in geo-paired location
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2022-12-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    createMode: 'GeoRestore'
    pointInTimeUTC: '2021-06-27T00:04:59.4078005+00:00'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.DBforPostgreSQL/flexibleServers/sourcepgservername'
  }
}
```

Create a database as a point in time restore
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2022-12-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'PointInTimeRestore'
    pointInTimeUTC: '2021-06-27T00:04:59.4078005+00:00'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.DBforPostgreSQL/flexibleServers/sourcepgservername'
  }
}
```

Create a new server
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2022-12-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: 'password'
    availabilityZone: '1'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    createMode: 'Create'
    highAvailability: {
      mode: 'ZoneRedundant'
    }
    network: {
      delegatedSubnetResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-vnet-subnet'
      privateDnsZoneArmResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/testrg/providers/Microsoft.Network/privateDnsZones/test-private-dns-zone.postgres.database.azure.com'
    }
    storage: {
      storageSizeGB: 512
    }
    version: '12'
  }
  sku: {
    name: 'Standard_D4s_v3'
    tier: 'GeneralPurpose'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

Create a new server with active directory authentication enabled
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2022-12-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: 'password'
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
      mode: 'ZoneRedundant'
    }
    network: {
      delegatedSubnetResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-vnet-subnet'
      privateDnsZoneArmResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/testrg/providers/Microsoft.Network/privateDnsZones/test-private-dns-zone.postgres.database.azure.com'
    }
    storage: {
      storageSizeGB: 512
    }
    version: '12'
  }
  sku: {
    name: 'Standard_D4s_v3'
    tier: 'GeneralPurpose'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

ServerCreateReplica
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2022-12-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'Replica'
    pointInTimeUTC: '2021-06-27T00:04:59.4078005+00:00'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.DBforPostgreSQL/flexibleServers/sourcepgservername'
  }
}
```

ServerCreateWithDataEncryptionEnabled
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers@2022-12-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-usermanagedidentity: {
      }
    }
  }
  location: 'westus'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: 'password'
    availabilityZone: '1'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    createMode: 'Create'
    dataEncryption: {
      type: 'AzureKeyVault'
      primaryKeyURI: 'https://test-kv.vault.azure.net/keys/test-key1/77f57315bab34b0189daa113fbc78787'
      primaryUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testresourcegroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-usermanagedidentity'
    }
    highAvailability: {
      mode: 'ZoneRedundant'
    }
    network: {
      delegatedSubnetResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-vnet-subnet'
      privateDnsZoneArmResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourcegroups/testrg/providers/Microsoft.Network/privateDnsZones/test-private-dns-zone.postgres.database.azure.com'
    }
    storage: {
      storageSizeGB: 512
    }
    version: '12'
  }
  sku: {
    name: 'Standard_D4s_v3'
    tier: 'GeneralPurpose'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/administrators

Adds an Active DIrectory Administrator for the server
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/administrators@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    principalName: 'testuser1@microsoft.com'
    principalType: 'User'
    tenantId: 'tttttttt-tttt-tttt-tttt-tttttttttttt'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/configurations

Update a user configuration
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/configurations@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    source: 'user-override'
    value: 'on'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/databases

Create a database
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/databases@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    charset: 'utf8'
    collation: 'en_US.utf8'
  }
}
```

## microsoft.dbforpostgresql/flexibleservers/firewallrules

FirewallRuleCreate
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/flexibleServers/firewallRules@2022-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```
