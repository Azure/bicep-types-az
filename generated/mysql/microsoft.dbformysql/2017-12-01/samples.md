# Microsoft.DBforMySQL
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbformysql/servers

Create a database as a point in time restore
```bicep
resource exampleResource 'Microsoft.DBforMySQL/servers@2017-12-01' = {
  name: 'example'
  location: 'brazilsouth'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2017-12-14T00:00:37.467Z'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/SourceResourceGroup/providers/Microsoft.DBforMySQL/servers/sourceserver'
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
resource exampleResource 'Microsoft.DBforMySQL/servers@2017-12-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: '<administratorLoginPassword>'
    createMode: 'Default'
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
resource exampleResource 'Microsoft.DBforMySQL/servers@2017-12-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'Replica'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/MasterResourceGroup/providers/Microsoft.DBforMySQL/servers/masterserver'
  }
}
```

Create a server as a geo restore 
```bicep
resource exampleResource 'Microsoft.DBforMySQL/servers@2017-12-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'GeoRestore'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/SourceResourceGroup/providers/Microsoft.DBforMySQL/servers/sourceserver'
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

## microsoft.dbformysql/servers/administrators

ServerAdministratorCreate
```bicep
resource exampleResource 'Microsoft.DBforMySQL/servers/administrators@2017-12-01' = {
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

## microsoft.dbformysql/servers/configurations

ConfigurationCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DBforMySQL/servers/configurations@2017-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    source: 'user-override'
    value: 'off'
  }
}
```

## microsoft.dbformysql/servers/databases

DatabaseCreate
```bicep
resource exampleResource 'Microsoft.DBforMySQL/servers/databases@2017-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    charset: 'utf8'
    collation: 'utf8_general_ci'
  }
}
```

## microsoft.dbformysql/servers/firewallrules

FirewallRuleCreate
```bicep
resource exampleResource 'Microsoft.DBforMySQL/servers/firewallRules@2017-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```

## microsoft.dbformysql/servers/securityalertpolicies

Update a server's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01' = {
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
resource exampleResource 'Microsoft.DBforMySQL/servers/securityAlertPolicies@2017-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    emailAccountAdmins: true
    state: 'Disabled'
  }
}
```

## microsoft.dbformysql/servers/virtualnetworkrules

Create or update a virtual network rule
```bicep
resource exampleResource 'Microsoft.DBforMySQL/servers/virtualNetworkRules@2017-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ignoreMissingVnetServiceEndpoint: false
    virtualNetworkSubnetId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/TestGroup/providers/Microsoft.Network/virtualNetworks/testvnet/subnets/testsubnet'
  }
}
```
