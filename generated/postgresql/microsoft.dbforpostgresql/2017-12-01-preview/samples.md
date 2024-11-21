# Microsoft.DBforPostgreSQL
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbforpostgresql/servers

Create a database as a point in time restore
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers@2017-12-01-preview' = {
  name: 'example'
  location: 'brazilsouth'
  properties: {
    createMode: 'PointInTimeRestore'
    restorePointInTime: '2017-12-14T00:00:37.467Z'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/SourceResourceGroup/providers/Microsoft.DBforPostgreSQL/servers/sourceserver'
  }
  sku: {
    name: 'B_Gen4_2'
    capacity: 2
    family: 'Gen4'
    tier: 'Basic'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

Create a new server
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers@2017-12-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: 'password'
    createMode: 'Default'
    sslEnforcement: 'Enabled'
    storageProfile: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Enabled'
      storageMB: 128000
    }
  }
  sku: {
    name: 'B_Gen5_2'
    capacity: 2
    family: 'Gen5'
    tier: 'Basic'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

Create a replica server
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers@2017-12-01-preview' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    createMode: 'Replica'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/TestGroup_WestCentralUS/providers/Microsoft.DBforPostgreSQL/servers/testserver-master'
  }
  sku: {
    name: 'GP_Gen5_2'
    capacity: 2
    family: 'Gen5'
    tier: 'GeneralPurpose'
  }
}
```

Create a server as a geo restore 
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers@2017-12-01-preview' = {
  name: 'example'
  location: 'Japan West'
  properties: {
    createMode: 'GeoRestore'
    sourceServerId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/SourceResourceGroup/providers/Microsoft.DBforPostgreSQL/servers/sourceserver'
  }
  sku: {
    name: 'GP_Gen4_2'
    capacity: 2
    family: 'Gen4'
    tier: 'GeneralPurpose'
  }
  tags: {
    ElasticServer: '1'
  }
}
```

## microsoft.dbforpostgresql/servers/administrators

ServerAdministratorCreate
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers/administrators@2017-12-01-preview' = {
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

## microsoft.dbforpostgresql/servers/configurations

ConfigurationCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers/configurations@2017-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    source: 'user-override'
    value: 'off'
  }
}
```

## microsoft.dbforpostgresql/servers/databases

DatabaseCreate
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers/databases@2017-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    charset: 'UTF8'
    collation: 'English_United States.1252'
  }
}
```

## microsoft.dbforpostgresql/servers/firewallrules

FirewallRuleCreate
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers/firewallRules@2017-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```

## microsoft.dbforpostgresql/servers/securityalertpolicies

Update a server's threat detection policy with all parameters
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers/securityAlertPolicies@2017-12-01-preview' = {
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
resource exampleResource 'Microsoft.DBforPostgreSQL/servers/securityAlertPolicies@2017-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    emailAccountAdmins: true
    state: 'Disabled'
  }
}
```

## microsoft.dbforpostgresql/servers/virtualnetworkrules

Create or update a virtual network rule
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/servers/virtualNetworkRules@2017-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ignoreMissingVnetServiceEndpoint: false
    virtualNetworkSubnetId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/TestGroup/providers/Microsoft.Network/virtualNetworks/testvnet/subnets/testsubnet'
  }
}
```
