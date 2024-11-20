# Microsoft.DBforPostgreSQL

## microsoft.dbforpostgresql/servergroupsv2

Create a new cluster as a point in time restore
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08' = {
  name: 'example'
  location: 'westus'
  properties: {
    pointInTimeUTC: '2017-12-14T00:00:37.467Z'
    sourceLocation: 'westus'
    sourceResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/TestResourceGroup/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/source-cluster'
  }
}
```

Create a new cluster as a read replica
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08' = {
  name: 'example'
  location: 'westus'
  properties: {
    sourceLocation: 'westus'
    sourceResourceId: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/TestResourceGroup/providers/Microsoft.DBforPostgreSQL/serverGroupsv2/sourcecluster'
  }
}
```

Create a new multi-node cluster
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLoginPassword: 'password'
    citusVersion: '11.1'
    coordinatorEnablePublicIpAccess: true
    coordinatorServerEdition: 'GeneralPurpose'
    coordinatorStorageQuotaInMb: 524288
    coordinatorVCores: 4
    enableHa: true
    enableShardsOnCoordinator: false
    nodeCount: 3
    nodeEnablePublicIpAccess: false
    nodeServerEdition: 'MemoryOptimized'
    nodeStorageQuotaInMb: 524288
    nodeVCores: 8
    postgresqlVersion: '15'
    preferredPrimaryZone: '1'
  }
  tags: {
  }
}
```

Create a new single node Burstable 1 vCore cluster
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLoginPassword: 'password'
    citusVersion: '11.3'
    coordinatorEnablePublicIpAccess: true
    coordinatorServerEdition: 'BurstableMemoryOptimized'
    coordinatorStorageQuotaInMb: 131072
    coordinatorVCores: 1
    enableHa: false
    enableShardsOnCoordinator: true
    nodeCount: 0
    postgresqlVersion: '15'
    preferredPrimaryZone: '1'
  }
  tags: {
    owner: 'JohnDoe'
  }
}
```

Create a new single node Burstable 2 vCores cluster
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLoginPassword: 'password'
    citusVersion: '11.3'
    coordinatorEnablePublicIpAccess: true
    coordinatorServerEdition: 'BurstableGeneralPurpose'
    coordinatorStorageQuotaInMb: 131072
    coordinatorVCores: 2
    enableHa: false
    enableShardsOnCoordinator: true
    nodeCount: 0
    postgresqlVersion: '15'
    preferredPrimaryZone: '1'
  }
  tags: {
    owner: 'JohnDoe'
  }
}
```

Create a new single node cluster
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2@2022-11-08' = {
  name: 'example'
  location: 'westus'
  properties: {
    administratorLoginPassword: 'password'
    citusVersion: '11.3'
    coordinatorEnablePublicIpAccess: true
    coordinatorServerEdition: 'GeneralPurpose'
    coordinatorStorageQuotaInMb: 131072
    coordinatorVCores: 8
    enableHa: true
    enableShardsOnCoordinator: true
    nodeCount: 0
    postgresqlVersion: '15'
    preferredPrimaryZone: '1'
  }
  tags: {
    owner: 'JohnDoe'
  }
}
```

## microsoft.dbforpostgresql/servergroupsv2/coordinatorconfigurations

Update single configuration of coordinator
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2/coordinatorConfigurations@2022-11-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    value: 'on'
  }
}
```

## microsoft.dbforpostgresql/servergroupsv2/nodeconfigurations

Update single configuration of nodes
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2/nodeConfigurations@2022-11-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    value: 'off'
  }
}
```

## microsoft.dbforpostgresql/servergroupsv2/firewallrules

Create a firewall rule of the cluster
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2/firewallRules@2022-11-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endIpAddress: '255.255.255.255'
    startIpAddress: '0.0.0.0'
  }
}
```

## microsoft.dbforpostgresql/servergroupsv2/roles

RoleCreate
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2/roles@2022-11-08' = {
  parent: parentResource 
  name: 'example'
  properties: {
    password: 'password'
  }
}
```

## microsoft.dbforpostgresql/servergroupsv2/privateendpointconnections

Approves or Rejects a Private Endpoint Connection with a given name.
```bicep
resource exampleResource 'Microsoft.DBforPostgreSQL/serverGroupsv2/privateEndpointConnections@2022-11-08' = {
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
