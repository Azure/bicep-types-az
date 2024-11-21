# Microsoft.DBForMySql
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbformysql/flexibleservers

Create a new server
```bicep
resource exampleResource 'Microsoft.DBForMySql/flexibleServers@2020-07-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: '<administratorLoginPassword>'
    createMode: 'Default'
    sslEnforcement: 'Enabled'
    storageProfile: {
      backupRetentionDays: 7
      storageIops: 200
      storageMB: 128000
    }
  }
  sku: {
    name: 'Standard_D14_v2'
    tier: 'GeneralPurpose'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

Create a replica server
```bicep
resource exampleResource 'Microsoft.DBForMySql/flexibleServers@2020-07-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'Replica'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/PrimaryResourceGroup/providers/Microsoft.DBforMySQL/flexibleServers/primaryserver'
  }
}
```

Create a server as a point in time restore
```bicep
resource exampleResource 'Microsoft.DBForMySql/flexibleServers@2020-07-01-preview' = {
  name: 'example'
  location: 'brazilsouth'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2017-12-14T00:00:37.467Z'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/SourceResourceGroup/providers/Microsoft.DBforMySQL/flexibleServers/sourceserver'
  }
  sku: {
    name: 'Standard_D14_v2'
    tier: 'GeneralPurpose'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

## microsoft.dbformysql/flexibleservers/databases

Create a database
```bicep
resource exampleResource 'Microsoft.DBForMySql/flexibleServers/databases@2020-07-01-preview' = {
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
resource exampleResource 'Microsoft.DBForMySql/flexibleServers/firewallRules@2020-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```

## microsoft.dbformysql/flexibleservers/keys

Creates or updates a MySQL Server key
```bicep
resource exampleResource 'Microsoft.DBForMySql/flexibleServers/keys@2020-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    serverKeyType: 'AzureKeyVault'
    uri: 'https://someVault.vault.azure.net/keys/someKey/01234567890123456789012345678901'
  }
}
```
