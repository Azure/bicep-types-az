# Oracle.Database

## oracle.database/autonomousdatabases

AutonomousDatabases_CreateOrUpdate
```bicep
resource exampleResource 'Oracle.Database/autonomousDatabases@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    adminPassword: '********'
    characterSet: 'AL32UTF8'
    computeCount: 2
    computeModel: 'ECPU'
    dataBaseType: 'Regular'
    dataStorageSizeInTbs: 1
    dbVersion: '18.4.0.0'
    displayName: 'example_autonomous_databasedb1'
    ncharacterSet: 'AL16UTF16'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    vnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1'
  }
  tags: {
    tagK1: 'tagV1'
  }
}
```

AutonomousDatabases_CreateOrUpdate_clone
```bicep
resource exampleResource 'Oracle.Database/autonomousDatabases@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    adminPassword: '********'
    characterSet: 'AL32UTF8'
    cloneType: 'Full'
    computeCount: 2
    computeModel: 'ECPU'
    dataBaseType: 'Clone'
    dataStorageSizeInTbs: 1
    displayName: 'example_autonomous_databasedb1_clone'
    ncharacterSet: 'AL16UTF16'
    sourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Oracle.Database/autonomousDatabases/databasedb1'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    vnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1'
  }
  tags: {
    tagK1: 'tagV1'
  }
}
```

Create Autonomous Database
```bicep
resource exampleResource 'Oracle.Database/autonomousDatabases@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    adminPassword: '********'
    characterSet: 'AL32UTF8'
    computeCount: 2
    computeModel: 'ECPU'
    dataBaseType: 'Regular'
    dataStorageSizeInTbs: 1
    dbVersion: '18.4.0.0'
    displayName: 'example_autonomous_databasedb1'
    ncharacterSet: 'AL16UTF16'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    vnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1'
  }
  tags: {
    tagK1: 'tagV1'
  }
}
```

Create clone Autonomous Database
```bicep
resource exampleResource 'Oracle.Database/autonomousDatabases@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    adminPassword: '********'
    characterSet: 'AL32UTF8'
    cloneType: 'Full'
    computeCount: 2
    computeModel: 'ECPU'
    dataBaseType: 'Clone'
    dataStorageSizeInTbs: 1
    displayName: 'example_autonomous_databasedb1_clone'
    ncharacterSet: 'AL16UTF16'
    sourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Oracle.Database/autonomousDatabases/databasedb1'
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    vnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1'
  }
  tags: {
    tagK1: 'tagV1'
  }
}
```

## oracle.database/cloudexadatainfrastructures

Create Exadata Infrastructure
```bicep
resource exampleResource 'Oracle.Database/cloudExadataInfrastructures@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    computeCount: 100
    displayName: 'infra 1'
    shape: 'EXADATA.X9M'
    storageCount: 10
  }
  tags: {
    tagK1: 'tagV1'
  }
  zones: [
    '1'
  ]
}
```

## oracle.database/cloudvmclusters

Create VM Cluster
```bicep
resource exampleResource 'Oracle.Database/cloudVmClusters@2023-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    backupSubnetCidr: '172.17.5.0/24'
    cloudExadataInfrastructureId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Oracle.Database/cloudExadataInfrastructures/infra1'
    clusterName: 'cluster1'
    cpuCoreCount: 2
    dataCollectionOptions: {
      isDiagnosticsEventsEnabled: false
      isHealthMonitoringEnabled: false
      isIncidentLogsEnabled: false
    }
    dataStoragePercentage: 100
    dataStorageSizeInTbs: 1000
    dbNodeStorageSizeInGbs: 1000
    dbServers: [
      'ocid1..aaaa'
    ]
    displayName: 'cluster 1'
    domain: 'domain1'
    giVersion: '19.0.0.0'
    hostname: 'hostname1'
    isLocalBackupEnabled: false
    isSparseDiskgroupEnabled: false
    licenseModel: 'LicenseIncluded'
    memorySizeInGbs: 1000
    nsgCidrs: [
      {
        destinationPortRange: {
          max: 1522
          min: 1520
        }
        source: '10.0.0.0/16'
      }
      {
        source: '10.10.0.0/24'
      }
    ]
    ocpuCount: 3
    scanListenerPortTcp: 1050
    scanListenerPortTcpSsl: 1025
    sshPublicKeys: [
      'ssh-key 1'
    ]
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    timeZone: 'UTC'
    vnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1'
  }
  tags: {
    tagK1: 'tagV1'
  }
}
```

## oracle.database/oraclesubscriptions

Create or Update Oracle Subscription
```bicep
resource exampleResource 'Oracle.Database/oracleSubscriptions@2023-09-01' = {
  name: 'example'
  plan: {
    name: 'plan1'
    product: 'product1'
    promotionCode: 'none'
    publisher: 'publisher1'
    version: 'alpha'
  }
  properties: {
  }
}
```

## oracle.database/autonomousdatabases/autonomousdatabasebackups

AutonomousDatabaseBackups_CreateOrUpdate
```bicep
resource exampleResource 'Oracle.Database/autonomousDatabases/autonomousDatabaseBackups@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autonomousDatabaseOcid: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
    displayName: 'Nightly Backup'
    retentionPeriodInDays: 365
  }
}
```

Create Autonomous Database Backup.
```bicep
resource exampleResource 'Oracle.Database/autonomousDatabases/autonomousDatabaseBackups@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autonomousDatabaseOcid: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
    displayName: 'Nightly Backup'
    retentionPeriodInDays: 365
  }
}
```

## oracle.database/cloudvmclusters/virtualnetworkaddresses

Create Virtual Network Address
```bicep
resource exampleResource 'Oracle.Database/cloudVmClusters/virtualNetworkAddresses@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ipAddress: '192.168.0.1'
    vmOcid: 'ocid1..aaaa'
  }
}
```
