# Microsoft.DBforMySQL
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbformysql/flexibleservers

Create a new server
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers@2021-05-01-preview' = {
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

## microsoft.dbformysql/flexibleservers/databases

Create a database
```bicep
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers/databases@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.DBforMySQL/flexibleServers/firewallRules@2021-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```