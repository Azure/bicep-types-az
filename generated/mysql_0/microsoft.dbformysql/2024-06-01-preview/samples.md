# Microsoft.DBforMySQL
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbformysql/flexibleservers

Create a new server
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2024-06-01-preview' = {
  name: 'example'
  location: 'southeastasia'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: 'your_password'
    availabilityZone: '1'
    backup: {
      backupIntervalHours: 24
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
      storageRedundancy: 'LocalRedundancy'
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
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2024-06-01-preview' = {
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
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2024-06-01-preview' = {
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
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2024-06-01-preview' = {
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
      backupIntervalHours: 24
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
      storageRedundancy: 'LocalRedundancy'
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

Create a server with non-default database port
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2024-06-01-preview' = {
  name: 'example'
  location: 'southeastasia'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: 'your_password'
    availabilityZone: '1'
    backup: {
      backupIntervalHours: 24
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
    }
    createMode: 'Default'
    databasePort: 8888
    highAvailability: {
      mode: 'ZoneRedundant'
      standbyAvailabilityZone: '3'
    }
    storage: {
      autoGrow: 'Disabled'
      iops: 600
      storageRedundancy: 'LocalRedundancy'
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

## microsoft.dbformysql/flexibleservers/advancedthreatprotectionsettings

Disable a server's Advanced Threat Protection settings with all parameters using PUT
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers/advancedThreatProtectionSettings@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Disabled'
  }
}
```

Enable a server's Advanced Threat Protection settings using PUT
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers/advancedThreatProtectionSettings@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    state: 'Enabled'
  }
}
```
