# Microsoft.StoragePool

## microsoft.storagepool/diskpools

Create or Update Disk pool
```bicep
resource exampleResource 'Microsoft.StoragePool/diskPools@2020-03-15-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    availabilityZones: [
      '1'
    ]
    disks: [
      {
        id: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/vm-name_DataDisk_0'
      }
      {
        id: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/vm-name_DataDisk_1'
      }
    ]
    subnetId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myvnet/subnets/mysubnet'
    tier: 'Basic'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.storagepool/diskpools/iscsitargets

Create or Update iSCSI target
```bicep
resource exampleResource 'Microsoft.StoragePool/diskPools/iscsiTargets@2020-03-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    targetIqn: 'iqn.2005-03.org.iscsi:server1'
    tpgs: [
      {
        acls: [
          {
            credentials: {
              password: 'some_password'
              username: 'some_username'
            }
            initiatorIqn: 'iqn.2005-03.org.iscsi:client'
            mappedLuns: [
              'lun0'
            ]
          }
        ]
        attributes: {
          authentication: true
          prodModeWriteProtect: false
        }
        luns: [
          {
            name: 'lun0'
            managedDiskAzureResourceId: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/vm-name_DataDisk_1'
          }
        ]
      }
    ]
  }
}
```
