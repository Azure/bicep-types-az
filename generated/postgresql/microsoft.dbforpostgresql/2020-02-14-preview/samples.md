# Microsoft.DBForPostgreSql
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.dbforpostgresql/flexibleservers

Create a database as a point in time restore
```bicep
resource exampleResource 'Microsoft.DBForPostgreSql/flexibleServers@2020-02-14-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    createMode: 'PointInTimeRestore'
    pointInTimeUTC: '2020-06-30T23:41:49.000Z'
    sourceResourceGroupName: 'RestoreFromResourceGroup'
    sourceServerName: 'sourcePgServerName'
    sourceSubscriptionId: 'ffffffff-ffff-ffff-ffff-ffffffffffff'
  }
}
```

Create a new server
```bicep
resource exampleResource 'Microsoft.DBForPostgreSql/flexibleServers@2020-02-14-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLogin: 'cloudsa'
    administratorLoginPassword: 'password'
    availabilityZone: '1'
    delegatedSubnetArguments: {
      subnetArmResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/test-vnet-subnet'
    }
    haEnabled: 'Enabled'
    privateDnsZoneArguments: {
      privateDnsZoneArmResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/testrg/providers/Microsoft.Network/privateDnsZones/test-private-dns-zone'
    }
    storageProfile: {
      backupRetentionDays: 7
      geoRedundantBackup: 'Disabled'
      storageMB: 524288
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

## microsoft.dbforpostgresql/flexibleservers/firewallrules

FirewallRuleCreate
```bicep
resource exampleResource 'Microsoft.DBForPostgreSql/flexibleServers/firewallRules@2020-02-14-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```
