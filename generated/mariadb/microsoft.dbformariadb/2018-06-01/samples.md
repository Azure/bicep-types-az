# Microsoft.DBforMariaDB

## microsoft.dbformariadb/servers

Create a database as a point in time restore
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers@2018-06-01' = {
  name: 'example'
  location: 'brazilsouth'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2017-12-14T00:00:37.467Z'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/SourceResourceGroup/providers/Microsoft.DBforMariaDB/servers/sourceserver'
  }
  sku: {
    name: 'GP_Gen5_2'
    capacity: 2
    family: 'Gen5'
    tier: 'GeneralPurpose'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

Create a new server
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers@2018-06-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: '<administratorLoginPassword>'
    createMode: 'Default'
    minimalTlsVersion: 'TLS1_2'
    sslEnforcement: 'Enabled'
    storageProfile: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Enabled'
      storageMB: 128000
    }
  }
  sku: {
    name: 'GP_Gen5_2'
    capacity: 2
    family: 'Gen5'
    tier: 'GeneralPurpose'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

Create a replica server
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers@2018-06-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'Replica'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/MasterResourceGroup/providers/Microsoft.DBforMariaDB/servers/masterserver'
  }
}
```

Create a server as a geo restore 
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers@2018-06-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'GeoRestore'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/SourceResourceGroup/providers/Microsoft.DBforMariaDB/servers/sourceserver'
  }
  sku: {
    name: 'GP_Gen5_2'
    capacity: 2
    family: 'Gen5'
    tier: 'GeneralPurpose'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

## microsoft.dbformariadb/servers/firewallrules

FirewallRuleCreate
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers/firewallRules@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```

## microsoft.dbformariadb/servers/virtualnetworkrules

Create or update a virtual network rule
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers/virtualNetworkRules@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ignoreMissingVnetServiceEndpoint: false
    virtualNetworkSubnetId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/TestGroup/providers/Microsoft.Network/virtualNetworks/testvnet/subnets/testsubnet'
  }
}
```

## microsoft.dbformariadb/servers/databases

DatabaseCreate
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers/databases@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    charset: 'utf8'
    collation: 'utf8_general_ci'
  }
}
```

## microsoft.dbformariadb/servers/configurations

ConfigurationCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers/configurations@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    source: 'user-override'
    value: 'off'
  }
}
```

## microsoft.dbformariadb/servers/privateendpointconnections

Approve or reject a private endpoint connection with a given name.
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers/privateEndpointConnections@2018-06-01' = {
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

## microsoft.dbformariadb/servers/securityalertpolicies

Update a server's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.DBforMariaDB/servers/securityAlertPolicies@2018-06-01' = {
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
resource exampleResource 'Microsoft.DBforMariaDB/servers/securityAlertPolicies@2018-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    emailAccountAdmins: true
    state: 'Disabled'
  }
}
```
