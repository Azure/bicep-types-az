# Microsoft.DBforMySQL
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbformysql/flexibleservers

Create a new server
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2023-06-30' = {
  name: 'example'
  location: 'southeastasia'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: 'your_password'
    availabilityZone: '1'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    createMode: 'Default'
    highAvailability: {
      mode: 'ZoneRedundant'
      standbyAvailabilityZone: '3'
    }
    storage: {
      autoGrow: 'Disabled'
      iops: 600
      storageSizeGB: 100
    }
    version: '5.7'
  }
  sku: {
    name: 'Standard_D2ds_v4'
    tier: 'GeneralPurpose'
  }
  tags: {
    num: '1'
  }
}
```

Create a replica server
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2023-06-30' = {
  name: 'example'
  location: 'SoutheastAsia'
  properties: {
    createMode: 'Replica'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testgr/providers/Microsoft.DBforMySQL/flexibleServers/source-server'
  }
}
```

Create a server as a point in time restore
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2023-06-30' = {
  name: 'example'
  location: 'SoutheastAsia'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2021-06-24T00:00:37.467Z'
    sourceServerResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/SourceResourceGroup/providers/Microsoft.DBforMySQL/flexibleServers/sourceserver'
  }
  sku: {
    name: 'Standard_D14_v2'
    tier: 'GeneralPurpose'
  }
  tags: {
    num: '1'
  }
}
```

Create a server with byok
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2023-06-30' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-identity': {
      }
    }
  }
  location: 'southeastasia'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: 'your_password'
    availabilityZone: '1'
    backup: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    createMode: 'Default'
    dataEncryption: {
      type: 'AzureKeyVault'
      geoBackupKeyURI: 'https://test-geo.vault.azure.net/keys/key/c8a92236622244c0a4fdb892666f671a'
      geoBackupUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-geo-identity'
      primaryKeyURI: 'https://test.vault.azure.net/keys/key/c8a92236622244c0a4fdb892666f671a'
      primaryUserAssignedIdentityId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-identity'
    }
    highAvailability: {
      mode: 'ZoneRedundant'
      standbyAvailabilityZone: '3'
    }
    storage: {
      autoGrow: 'Disabled'
      iops: 600
      storageSizeGB: 100
    }
    version: '5.7'
  }
  sku: {
    name: 'Standard_D2ds_v4'
    tier: 'GeneralPurpose'
  }
  tags: {
    num: '1'
  }
}
```

## microsoft.dbformysql/flexibleservers/administrators

Create an azure ad administrator
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers/administrators@2023-06-30' = {
  parent: parentResource 
  name: 'example'
  properties: {
    administratorType: 'ActiveDirectory'
    identityResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/test-group/providers/Microsoft.ManagedIdentity/userAssignedIdentities/test-umi'
    login: 'bob@contoso.com'
    sid: 'c6b82b90-a647-49cb-8a62-0d2d3cb7ac7c'
    tenantId: 'c12b7025-bfe2-46c1-b463-993b5e4cd467'
  }
}
```

## microsoft.dbformysql/flexibleservers/configurations

ConfigurationCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers/configurations@2023-06-30' = {
  parent: parentResource 
  name: 'example'
  properties: {
    source: 'user-override'
    value: 'off'
  }
}
```

## microsoft.dbformysql/flexibleservers/databases

Create a database
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers/databases@2023-06-30' = {
  parent: parentResource 
  name: 'example'
  properties: {
    charset: 'utf8'
    collation: 'utf8_general_ci'
  }
}
```

## microsoft.dbformysql/flexibleservers/firewallrules

Create a firewall rule
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers/firewallRules@2023-06-30' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```

## microsoft.dbformysql/flexibleservers/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers/privateEndpointConnections@2023-06-30' = {
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
