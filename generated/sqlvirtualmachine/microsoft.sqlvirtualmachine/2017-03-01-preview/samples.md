# Microsoft.SqlVirtualMachine

## microsoft.sqlvirtualmachine/sqlvirtualmachinegroups/availabilitygrouplisteners

Creates or updates an availability group listener.
```bicep
resource exampleResource 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/availabilityGroupListeners@2017-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    availabilityGroupName: 'ag-test'
    loadBalancerConfigurations: [
      {
        loadBalancerResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Network/loadBalancers/lb-test'
        privateIpAddress: {
          ipAddress: '10.1.0.112'
          subnetResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworks/test-vnet/subnets/default'
        }
        probePort: 59983
        sqlVirtualMachineInstances: [
          '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/testvm2'
          '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachines/testvm3'
        ]
      }
    ]
    port: 1433
  }
}
```

## microsoft.sqlvirtualmachine/sqlvirtualmachinegroups

Creates or updates a SQL virtual machine group.
```bicep
resource exampleResource 'Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups@2017-03-01-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    sqlImageOffer: 'SQL2016-WS2016'
    sqlImageSku: 'Enterprise'
    wsfcDomainProfile: {
      clusterBootstrapAccount: 'testrpadmin'
      clusterOperatorAccount: 'testrp@testdomain.com'
      domainFqdn: 'testdomain.com'
      ouPath: 'OU=WSCluster,DC=testdomain,DC=com'
      sqlServiceAccount: 'sqlservice@testdomain.com'
      storageAccountPrimaryKey: '<primary storage access key>'
      storageAccountUrl: 'https://storgact.blob.core.windows.net/'
    }
  }
  tags: {
    mytag: 'myval'
  }
}
```

## microsoft.sqlvirtualmachine/sqlvirtualmachines

Creates or updates a SQL virtual machine and joins it to a SQL virtual machine group.
```bicep
resource exampleResource 'Microsoft.SqlVirtualMachine/sqlVirtualMachines@2017-03-01-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    sqlVirtualMachineGroupResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.SqlVirtualMachine/sqlVirtualMachineGroups/testvmgroup'
    virtualMachineResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Compute/virtualMachines/testvm2'
    wsfcDomainCredentials: {
      clusterBootstrapAccountPassword: '<Password>'
      clusterOperatorAccountPassword: '<Password>'
      sqlServiceAccountPassword: '<Password>'
    }
  }
}
```

Creates or updates a SQL virtual machine for Storage Configuration Settings to EXTEND Data, Log or TempDB storage pool.
```bicep
resource exampleResource 'Microsoft.SqlVirtualMachine/sqlVirtualMachines@2017-03-01-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    storageConfigurationSettings: {
      diskConfigurationType: 'EXTEND'
      sqlDataSettings: {
        luns: [
          2
        ]
      }
    }
    virtualMachineResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Compute/virtualMachines/testvm'
  }
}
```

Creates or updates a SQL virtual machine for Storage Configuration Settings to NEW Data, Log and TempDB storage pool.
```bicep
resource exampleResource 'Microsoft.SqlVirtualMachine/sqlVirtualMachines@2017-03-01-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    storageConfigurationSettings: {
      diskConfigurationType: 'NEW'
      sqlDataSettings: {
        defaultFilePath: 'F:\\folderpath\\'
        luns: [
          0
        ]
      }
      sqlLogSettings: {
        defaultFilePath: 'G:\\folderpath\\'
        luns: [
          1
        ]
      }
      sqlTempDbSettings: {
        defaultFilePath: 'D:\\TEMP'
      }
      storageWorkloadType: 'OLTP'
    }
    virtualMachineResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Compute/virtualMachines/testvm'
  }
}
```

Creates or updates a SQL virtual machine with max parameters.
```bicep
resource exampleResource 'Microsoft.SqlVirtualMachine/sqlVirtualMachines@2017-03-01-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    autoBackupSettings: {
      backupScheduleType: 'Manual'
      backupSystemDbs: true
      enable: true
      enableEncryption: true
      fullBackupFrequency: 'Daily'
      fullBackupStartTime: 6
      fullBackupWindowHours: 11
      logBackupFrequency: 10
      password: '<Password>'
      retentionPeriod: 17
      storageAccessKey: '<primary storage access key>'
      storageAccountUrl: 'https://teststorage.blob.core.windows.net/'
    }
    autoPatchingSettings: {
      dayOfWeek: 'Sunday'
      enable: true
      maintenanceWindowDuration: 60
      maintenanceWindowStartingHour: 2
    }
    keyVaultCredentialSettings: {
      enable: false
    }
    serverConfigurationsManagementSettings: {
      additionalFeaturesServerConfigurations: {
        isRServicesEnabled: false
      }
      sqlConnectivityUpdateSettings: {
        connectivityType: 'PRIVATE'
        port: 1433
        sqlAuthUpdatePassword: '<password>'
        sqlAuthUpdateUserName: 'sqllogin'
      }
      sqlStorageUpdateSettings: {
        diskConfigurationType: 'NEW'
        diskCount: 1
        startingDeviceId: 2
      }
      sqlWorkloadTypeUpdateSettings: {
        sqlWorkloadType: 'OLTP'
      }
    }
    sqlImageSku: 'Enterprise'
    sqlManagement: 'Full'
    sqlServerLicenseType: 'PAYG'
    virtualMachineResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Compute/virtualMachines/testvm'
  }
}
```

Creates or updates a SQL virtual machine with min parameters.
```bicep
resource exampleResource 'Microsoft.SqlVirtualMachine/sqlVirtualMachines@2017-03-01-preview' = {
  name: 'example'
  location: 'northeurope'
  properties: {
    virtualMachineResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/testrg/providers/Microsoft.Compute/virtualMachines/testvm'
  }
}
```
