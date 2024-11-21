# Microsoft.NetApp
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.netapp/netappaccounts

Accounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts@2022-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

Accounts_CreateOrUpdateWithActiveDirectory
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts@2022-09-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    activeDirectories: [
      {
        aesEncryption: true
        dns: '10.10.10.3'
        domain: '10.10.10.3'
        ldapOverTLS: false
        ldapSigning: false
        organizationalUnit: 'OU=Engineering'
        password: 'ad_password'
        site: 'SiteName'
        smbServerName: 'SMBServer'
        username: 'ad_user_name'
      }
    ]
  }
}
```

## microsoft.netapp/netappaccounts/backuppolicies

BackupPolicies_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/backupPolicies@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    dailyBackupsToKeep: 10
    enabled: true
    monthlyBackupsToKeep: 10
    weeklyBackupsToKeep: 10
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools

Pools_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    qosType: 'Auto'
    serviceLevel: 'Premium'
    size: 4398046511104
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes

Volumes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    creationToken: 'my-unique-file-path'
    serviceLevel: 'Premium'
    subnetId: '/subscriptions/9760acf5-4638-11e7-9bdb-020073ca7778/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
    usageThreshold: 107374182400
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/backups

Backups_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    label: 'myLabel'
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/snapshots

Snapshots_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/subvolumes

Subvolumes_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/subvolumes@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    path: '/subvolumePath'
  }
}
```

## microsoft.netapp/netappaccounts/capacitypools/volumes/volumequotarules

VolumeQuotaRules_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/volumeQuotaRules@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    quotaSizeInKiBs: 100005
    quotaTarget: '1821'
    quotaType: 'IndividualUserQuota'
  }
}
```

## microsoft.netapp/netappaccounts/snapshotpolicies

SnapshotPolicies_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/snapshotPolicies@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dailySchedule: {
      hour: 14
      minute: 30
      snapshotsToKeep: 4
    }
    enabled: true
    hourlySchedule: {
      minute: 50
      snapshotsToKeep: 2
    }
    monthlySchedule: {
      daysOfMonth: '10,11,12'
      hour: 14
      minute: 15
      snapshotsToKeep: 5
    }
    weeklySchedule: {
      day: 'Wednesday'
      hour: 14
      minute: 45
      snapshotsToKeep: 3
    }
  }
}
```

## microsoft.netapp/netappaccounts/volumegroups

VolumeGroups_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/volumeGroups@2022-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    groupMetaData: {
      applicationIdentifier: 'DEV'
      applicationType: 'SAP-HANA'
      deploymentSpecId: '20542149-bfca-5618-1879-9863dc6767f1'
      groupDescription: 'Volume group'
    }
    volumes: [
      {
        name: 'test-data-mnt00001'
        properties: {
          capacityPoolResourceId: '/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-data-mnt00001'
          proximityPlacementGroup: '/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg'
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'data'
        }
      }
      {
        name: 'test-log-mnt00001'
        properties: {
          capacityPoolResourceId: '/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-log-mnt00001'
          proximityPlacementGroup: '/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg'
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'log'
        }
      }
      {
        name: 'test-shared'
        properties: {
          capacityPoolResourceId: '/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRG/providers/Microsoft.NetApp/netAppAccounts/account1/capacityPools/pool1'
          creationToken: 'test-shared'
          proximityPlacementGroup: '/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/cys_sjain_fcp_rg/providers/Microsoft.Compute/proximityPlacementGroups/svlqa_sjain_multivolume_ppg'
          serviceLevel: 'Premium'
          subnetId: '/subscriptions/d633cc2e-722b-4ae1-b636-bbd9e4c60ed9/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
          throughputMibps: 10
          usageThreshold: 107374182400
          volumeSpecName: 'shared'
        }
      }
    ]
  }
}
```
