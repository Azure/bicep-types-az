# Microsoft.NetApp
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.netapp/netappaccounts

Accounts_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts@2020-06-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    activeDirectories: [
      {
        dns: '10.10.10.3'
        domain: '10.10.10.3'
        organizationalUnit: 'Engineering'
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/backupPolicies@2020-06-01' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools@2020-06-01' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes@2020-06-01' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/backups@2020-06-01' = {
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
resource exampleResource 'Microsoft.NetApp/netAppAccounts/capacityPools/volumes/snapshots@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.netapp/netappaccounts/snapshotpolicies

SnapshotPolicies_Create
```bicep
resource exampleResource 'Microsoft.NetApp/netAppAccounts/snapshotPolicies@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    dailySchedule: {
      hour: 14
      minute: 30
      snapshotsToKeep: 4
    }
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
