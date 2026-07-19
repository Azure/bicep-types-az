# Oracle.Database
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## oracle.database/autonomousdatabases

AutonomousDatabases_CreateOrUpdate
```bicep
resource exampleResource 'Oracle.Database/autonomousDatabases@2025-03-01' = {
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
resource exampleResource 'Oracle.Database/autonomousDatabases@2025-03-01' = {
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

AutonomousDatabases_CreateOrUpdate_CrossRegionPeer
```bicep
resource exampleResource 'Oracle.Database/autonomousDatabases@2025-03-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    dataBaseType: 'CrossRegionDisasterRecovery'
    isReplicateAutomaticBackups: false
    remoteDisasterRecoveryType: 'Adg'
    source: 'CrossRegionDisasterRecovery'
    sourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Oracle.Database/autonomousDatabases/databasedb1'
    sourceLocation: 'germanywestcentral'
    sourceOcid: 'ocid1..aaaaa'
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
resource exampleResource 'Oracle.Database/autonomousDatabases@2025-03-01' = {
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
resource exampleResource 'Oracle.Database/autonomousDatabases@2025-03-01' = {
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

## oracle.database/autonomousdatabases/autonomousdatabasebackups

AutonomousDatabaseBackups_CreateOrUpdate
```bicep
resource exampleResource 'Oracle.Database/autonomousDatabases/autonomousDatabaseBackups@2025-03-01' = {
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
resource exampleResource 'Oracle.Database/autonomousDatabases/autonomousDatabaseBackups@2025-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autonomousDatabaseOcid: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
    displayName: 'Nightly Backup'
    retentionPeriodInDays: 365
  }
}
```

## oracle.database/cloudexadatainfrastructures

Create Exadata Infrastructure
```bicep
resource exampleResource 'Oracle.Database/cloudExadataInfrastructures@2025-03-01' = {
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
resource exampleResource 'Oracle.Database/cloudVmClusters@2025-03-01' = {
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

## oracle.database/cloudvmclusters/virtualnetworkaddresses

Create Virtual Network Address
```bicep
resource exampleResource 'Oracle.Database/cloudVmClusters/virtualNetworkAddresses@2025-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ipAddress: '192.168.0.1'
    vmOcid: 'ocid1..aaaa'
  }
}
```

## oracle.database/exadbvmclusters

ExadbVmClusters_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Oracle.Database/exadbVmClusters@2025-03-01' = {
  name: 'example'
  location: 'xojp'
  properties: {
    backupSubnetCidr: 'fr'
    backupSubnetOcid: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
    clusterName: 'hssswln'
    dataCollectionOptions: {
      isDiagnosticsEventsEnabled: true
      isHealthMonitoringEnabled: true
      isIncidentLogsEnabled: true
    }
    displayName: 'dyhkncxzzgcwlfkfygvqlvqbxekvkbhjprmuxtaukewjnfrrnfqgrqsjfgsayrezkspqplrduuomuvtpkqurcoqjdnadlvedgfngglcgafbxtcewxlgckvehhqgfwkokbjoqftunjsgfjwbdaftxoytsphydwogtlnfxxuzzjvqcrin'
    domain: 'vzfak'
    enabledEcpuCount: 0
    exascaleDbStorageVaultId: '/subscriptions/00000000-0000-0000-0000-000000000000/providers/Oracle.Database/exascaleDbStorageVaults/storageVaultName'
    gridImageOcid: 'ocid1.dbpatch.oc1..aaaaa3klq'
    gridImageType: 'ReleaseUpdate'
    hostname: 'tdn'
    iormConfigCache: {
      dbPlans: [
        {
          dbName: 'db1'
          flashCacheLimit: 'none'
          share: 32
        }
      ]
      lifecycleDetails: 'Disabled'
      lifecycleState: 'Disabled'
      objective: 'LowLatency'
    }
    licenseModel: 'LicenseIncluded'
    lifecycleState: 'Provisioning'
    nodeCount: 8
    nsgCidrs: [
      {
        destinationPortRange: {
          max: 1522
          min: 1520
        }
        source: '10.0.0.0/16'
      }
    ]
    ocid: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
    privateZoneOcid: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
    scanDnsRecordId: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
    scanListenerPortTcp: 9
    scanListenerPortTcpSsl: 18
    shape: 'evenjblxxfsztdxlcr'
    snapshotFileSystemStorage: {
      totalSizeInGbs: 10
    }
    sshPublicKeys: [
      'wiseakllkohemfmnoyteg'
    ]
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    subnetOcid: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
    systemVersion: 'udwsykstqawwjrvzebfyyccnjzhxtijvywlgnrkqxnboibyppistnbvqqsnsxmjnzeumgnatmarzfnjhglmtrknszthrxtwewwqjbkwytbhtjbgondtktkpvjmxdcuyjupr'
    timeZone: 'ayuqnpfkasdzmxlfnkjzrenyogbvcysdbkstjhyjdgxygitlykihtwdiktilukyplgxovaonrqcqaviyaqgyrqfrklqvqyobnxgmzpqbgjhdtjdquhyqnvhavnqpfupaqhdedgdvfomeueeuwjjfiqiyxspybpyj'
    totalEcpuCount: 56
    totalFileSystemStorage: {
      totalSizeInGbs: 10
    }
    vmFileSystemStorage: {
      totalSizeInGbs: 10
    }
    vnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg000/providers/Microsoft.Network/virtualNetworks/vnet1'
    zoneOcid: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
  }
  tags: {
    key9683: 'umnfswbmhxzsomcluslxhnxxika'
  }
  zones: [
    'iupjvcfsbvfhrebwf'
  ]
}
```

## oracle.database/exascaledbstoragevaults

ExascaleDbStorageVaults_Create_MaximumSet
```bicep
resource exampleResource 'Oracle.Database/exascaleDbStorageVaults@2025-03-01' = {
  name: 'example'
  location: 'ltguhzffucaytqg'
  properties: {
    description: 'dmnvnnduldfmrmkkvvsdtuvmsmruxzzpsfdydgytlckutfozephjygjetrauvbdfcwmti'
    additionalFlashCacheInPercent: 0
    displayName: 'hbsybtelyvhpalemszcvartlhwvskrnpiveqfblvkdihoytqaotdgsgauvgivzaftfgeiwlyeqzssicwrrnlxtsmeakbcsxabjlt'
    highCapacityDatabaseStorage: {
      availableSizeInGbs: 28
      totalSizeInGbs: 16
    }
    highCapacityDatabaseStorageInput: {
      totalSizeInGbs: 21
    }
    lifecycleState: 'Provisioning'
    ocid: 'ocid1.autonomousdatabase.oc1..aaaaa3klq'
    timeZone: 'ltrbozwxjunncicrtzjrpqnqrcjgghohztrdlbfjrbkpenopyldwolslwgrgumjfkyovvkzcuxjujuxtjjzubvqvnhrswnbdgcbslopeofmtepbrrlymqwwszvsglmyuvlcuejshtpokirwklnwpcykhyinjmlqvxtyixlthtdishhmtipbygsayvgqzfrprgppylydlcskbmvwctxifdltippfvsxiughqbojqpqrekxsotnqsk'
  }
  tags: {
    key7827: 'xqi'
  }
  zones: [
    'qk'
  ]
}
```

## oracle.database/oraclesubscriptions

Create or Update Oracle Subscription
```bicep
resource exampleResource 'Oracle.Database/oracleSubscriptions@2025-03-01' = {
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
