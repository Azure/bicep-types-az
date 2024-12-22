# Microsoft.Compute
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.compute/availabilitysets

Create an availability set.
```bicep
resource exampleResource 'Microsoft.Compute/availabilitySets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    platformFaultDomainCount: 2
    platformUpdateDomainCount: 20
  }
}
```

## microsoft.compute/capacityreservationgroups

Create or update a capacity reservation group.
```bicep
resource exampleResource 'Microsoft.Compute/capacityReservationGroups@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    sharingProfile: {
      subscriptionIds: [
        {
          id: '/subscriptions/{subscription-id1}'
        }
        {
          id: '/subscriptions/{subscription-id2}'
        }
      ]
    }
  }
  tags: {
    department: 'finance'
  }
  zones: [
    '1'
    '2'
  ]
}
```

## microsoft.compute/capacityreservationgroups/capacityreservations

Create or update a capacity reservation .
```bicep
resource exampleResource 'Microsoft.Compute/capacityReservationGroups/capacityReservations@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  sku: {
    name: 'Standard_DS1_v2'
    capacity: 4
  }
  tags: {
    department: 'HR'
  }
  zones: [
    '1'
  ]
}
```

## microsoft.compute/hostgroups

Create or update a dedicated host group with Ultra SSD support.
```bicep
resource exampleResource 'Microsoft.Compute/hostGroups@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    additionalCapabilities: {
      ultraSSDEnabled: true
    }
    platformFaultDomainCount: 3
    supportAutomaticPlacement: true
  }
  tags: {
    department: 'finance'
  }
  zones: [
    '1'
  ]
}
```

Create or update a dedicated host group.
```bicep
resource exampleResource 'Microsoft.Compute/hostGroups@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    platformFaultDomainCount: 3
    supportAutomaticPlacement: true
  }
  tags: {
    department: 'finance'
  }
  zones: [
    '1'
  ]
}
```

## microsoft.compute/hostgroups/hosts

Create or update a dedicated host .
```bicep
resource exampleResource 'Microsoft.Compute/hostGroups/hosts@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    platformFaultDomain: 1
  }
  sku: {
    name: 'DSv3-Type1'
  }
  tags: {
    department: 'HR'
  }
}
```

## microsoft.compute/images

Create a virtual machine image from a blob with DiskEncryptionSet resource.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageProfile: {
      osDisk: {
        blobUri: 'https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd'
        diskEncryptionSet: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
        }
        osState: 'Generalized'
        osType: 'Linux'
      }
    }
  }
}
```

Create a virtual machine image from a blob.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageProfile: {
      osDisk: {
        blobUri: 'https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd'
        osState: 'Generalized'
        osType: 'Linux'
      }
      zoneResilient: true
    }
  }
}
```

Create a virtual machine image from a managed disk with DiskEncryptionSet resource.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageProfile: {
      osDisk: {
        diskEncryptionSet: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
        }
        osState: 'Generalized'
        osType: 'Linux'
        snapshot: {
          id: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot'
        }
      }
    }
  }
}
```

Create a virtual machine image from a managed disk.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageProfile: {
      osDisk: {
        managedDisk: {
          id: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myManagedDisk'
        }
        osState: 'Generalized'
        osType: 'Linux'
      }
      zoneResilient: true
    }
  }
}
```

Create a virtual machine image from a snapshot with DiskEncryptionSet resource.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageProfile: {
      osDisk: {
        diskEncryptionSet: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
        }
        managedDisk: {
          id: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myManagedDisk'
        }
        osState: 'Generalized'
        osType: 'Linux'
      }
    }
  }
}
```

Create a virtual machine image from a snapshot.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageProfile: {
      osDisk: {
        osState: 'Generalized'
        osType: 'Linux'
        snapshot: {
          id: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot'
        }
      }
      zoneResilient: false
    }
  }
}
```

Create a virtual machine image from an existing virtual machine.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    sourceVirtualMachine: {
      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM'
    }
  }
}
```

Create a virtual machine image that includes a data disk from a blob.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageProfile: {
      dataDisks: [
        {
          blobUri: 'https://mystorageaccount.blob.core.windows.net/dataimages/dataimage.vhd'
          lun: 1
        }
      ]
      osDisk: {
        blobUri: 'https://mystorageaccount.blob.core.windows.net/osimages/osimage.vhd'
        osState: 'Generalized'
        osType: 'Linux'
      }
      zoneResilient: false
    }
  }
}
```

Create a virtual machine image that includes a data disk from a managed disk.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageProfile: {
      dataDisks: [
        {
          lun: 1
          managedDisk: {
            id: 'subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myManagedDisk2'
          }
        }
      ]
      osDisk: {
        managedDisk: {
          id: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/myManagedDisk'
        }
        osState: 'Generalized'
        osType: 'Linux'
      }
      zoneResilient: false
    }
  }
}
```

Create a virtual machine image that includes a data disk from a snapshot.
```bicep
resource exampleResource 'Microsoft.Compute/images@2023-09-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    storageProfile: {
      dataDisks: [
        {
          lun: 1
          snapshot: {
            id: 'subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot2'
          }
        }
      ]
      osDisk: {
        osState: 'Generalized'
        osType: 'Linux'
        snapshot: {
          id: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/snapshots/mySnapshot'
        }
      }
      zoneResilient: true
    }
  }
}
```

## microsoft.compute/proximityplacementgroups

Create or Update a proximity placement group.
```bicep
resource exampleResource 'Microsoft.Compute/proximityPlacementGroups@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    intent: {
      vmSizes: [
        'Basic_A0'
        'Basic_A2'
      ]
    }
    proximityPlacementGroupType: 'Standard'
  }
  zones: [
    '1'
  ]
}
```

## microsoft.compute/restorepointcollections

Create or update a restore point collection for cross region copy.
```bicep
resource exampleResource 'Microsoft.Compute/restorePointCollections@2023-09-01' = {
  name: 'example'
  location: 'norwayeast'
  properties: {
    source: {
      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/restorePointCollections/sourceRpcName'
    }
  }
  tags: {
    myTag1: 'tagValue1'
  }
}
```

Create or update a restore point collection.
```bicep
resource exampleResource 'Microsoft.Compute/restorePointCollections@2023-09-01' = {
  name: 'example'
  location: 'norwayeast'
  properties: {
    source: {
      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachines/myVM'
    }
  }
  tags: {
    myTag1: 'tagValue1'
  }
}
```

## microsoft.compute/restorepointcollections/restorepoints

Copy a restore point to a different region
```bicep
resource exampleResource 'Microsoft.Compute/restorePointCollections/restorePoints@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    sourceRestorePoint: {
      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/restorePointCollections/sourceRpcName/restorePoints/sourceRpName'
    }
  }
}
```

Create a restore point
```bicep
resource exampleResource 'Microsoft.Compute/restorePointCollections/restorePoints@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    excludeDisks: [
      {
        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/disk123'
      }
    ]
  }
}
```

## microsoft.compute/sshpublickeys

Create a new SSH public key resource.
```bicep
resource exampleResource 'Microsoft.Compute/sshPublicKeys@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    publicKey: '{ssh-rsa public key}'
  }
}
```

## microsoft.compute/virtualmachines

Create a custom-image vm from an unmanaged generalized os image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        image: {
          uri: 'http://{existing-storage-account-name}.blob.core.windows.net/{existing-container-name}/{existing-generalized-os-image-blob-name}.vhd'
        }
        osType: 'Windows'
        vhd: {
          uri: 'http://{existing-storage-account-name}.blob.core.windows.net/{existing-container-name}/myDisk.vhd'
        }
      }
    }
  }
}
```

Create a Linux vm with a patch setting assessmentMode of ImageDefault.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D2s_v3'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      linuxConfiguration: {
        patchSettings: {
          assessmentMode: 'ImageDefault'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'UbuntuServer'
        publisher: 'Canonical'
        sku: '16.04-LTS'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a Linux vm with a patch setting patchMode of AutomaticByPlatform and AutomaticByPlatformSettings.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D2s_v3'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      linuxConfiguration: {
        patchSettings: {
          assessmentMode: 'AutomaticByPlatform'
          automaticByPlatformSettings: {
            bypassPlatformSafetyChecksOnUserSchedule: true
            rebootSetting: 'Never'
          }
          patchMode: 'AutomaticByPlatform'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'UbuntuServer'
        publisher: 'Canonical'
        sku: '16.04-LTS'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a Linux vm with a patch setting patchMode of ImageDefault.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D2s_v3'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      linuxConfiguration: {
        patchSettings: {
          patchMode: 'ImageDefault'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'UbuntuServer'
        publisher: 'Canonical'
        sku: '16.04-LTS'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a Linux vm with a patch settings patchMode and assessmentMode set to AutomaticByPlatform.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D2s_v3'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      linuxConfiguration: {
        patchSettings: {
          assessmentMode: 'AutomaticByPlatform'
          patchMode: 'AutomaticByPlatform'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'UbuntuServer'
        publisher: 'Canonical'
        sku: '16.04-LTS'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a platform-image vm with unmanaged os and data disks.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D2_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      dataDisks: [
        {
          createOption: 'Empty'
          diskSizeGB: 1023
          lun: 0
          vhd: {
            uri: 'http://{existing-storage-account-name}.blob.core.windows.net/{existing-container-name}/myDisk0.vhd'
          }
        }
        {
          createOption: 'Empty'
          diskSizeGB: 1023
          lun: 1
          vhd: {
            uri: 'http://{existing-storage-account-name}.blob.core.windows.net/{existing-container-name}/myDisk1.vhd'
          }
        }
      ]
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        vhd: {
          uri: 'http://{existing-storage-account-name}.blob.core.windows.net/{existing-container-name}/myDisk.vhd'
        }
      }
    }
  }
}
```

Create a VM from a community gallery image
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        communityGalleryImageId: '/CommunityGalleries/galleryPublicName/Images/communityGalleryImageName/Versions/communityGalleryImageVersionName'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm from a custom image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/images/{existing-custom-image-name}'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm from a generalized shared image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/galleries/mySharedGallery/images/mySharedImage'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a VM from a shared gallery image
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        sharedGalleryImageId: '/SharedGalleries/sharedGalleryName/Images/sharedGalleryImageName/Versions/sharedGalleryImageVersionName'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm from a specialized shared image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    storageProfile: {
      imageReference: {
        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/galleries/mySharedGallery/images/mySharedImage'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm in a Virtual Machine Scale Set with customer assigned platformFaultDomain.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    platformFaultDomain: 1
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
    virtualMachineScaleSet: {
      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachineScaleSets/{existing-flex-vmss-name-with-platformFaultDomainCount-greater-than-1}'
    }
  }
}
```

Create a vm in an availability set.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    availabilitySet: {
      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/availabilitySets/{existing-availability-set-name}'
    }
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with a marketplace image plan.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'windows-data-science-vm'
        publisher: 'microsoft-ads'
        sku: 'windows2016'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with an extensions time budget.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    diagnosticsProfile: {
      bootDiagnostics: {
        enabled: true
        storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
      }
    }
    extensionsTimeBudget: 'PT30M'
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with Application Profile.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    applicationProfile: {
      galleryApplications: [
        {
          configurationReference: 'https://mystorageaccount.blob.core.windows.net/configurations/settings.config'
          enableAutomaticUpgrade: false
          order: 1
          packageReferenceId: '/subscriptions/32c17a9e-aa7b-4ba5-a45b-e324116b6fdb/resourceGroups/myresourceGroupName2/providers/Microsoft.Compute/galleries/myGallery1/applications/MyApplication1/versions/1.0'
          tags: 'myTag1'
          treatFailureAsDeploymentFailure: false
        }
        {
          packageReferenceId: '/subscriptions/32c17a9e-aa7b-4ba5-a45b-e324116b6fdg/resourceGroups/myresourceGroupName3/providers/Microsoft.Compute/galleries/myGallery2/applications/MyApplication2/versions/1.1'
        }
      ]
    }
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: '{image_offer}'
        publisher: '{image_publisher}'
        sku: '{image_sku}'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with boot diagnostics.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    diagnosticsProfile: {
      bootDiagnostics: {
        enabled: true
        storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
      }
    }
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a VM with Disk Controller Type
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    diagnosticsProfile: {
      bootDiagnostics: {
        enabled: true
        storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
      }
    }
    hardwareProfile: {
      vmSize: 'Standard_D4_v3'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      diskControllerType: 'NVMe'
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
    userData: 'U29tZSBDdXN0b20gRGF0YQ=='
  }
}
```

Create a vm with DiskEncryptionSet resource id in the os disk and data disk.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      dataDisks: [
        {
          caching: 'ReadWrite'
          createOption: 'Empty'
          diskSizeGB: 1023
          lun: 0
          managedDisk: {
            diskEncryptionSet: {
              id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
            }
            storageAccountType: 'Standard_LRS'
          }
        }
        {
          caching: 'ReadWrite'
          createOption: 'Attach'
          diskSizeGB: 1023
          lun: 1
          managedDisk: {
            diskEncryptionSet: {
              id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
            }
            id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/{existing-managed-disk-name}'
            storageAccountType: 'Standard_LRS'
          }
        }
      ]
      imageReference: {
        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/images/{existing-custom-image-name}'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          diskEncryptionSet: {
            id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
          }
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with empty data disks.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D2_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      dataDisks: [
        {
          createOption: 'Empty'
          diskSizeGB: 1023
          lun: 0
        }
        {
          createOption: 'Empty'
          diskSizeGB: 1023
          lun: 1
        }
      ]
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a VM with encryption identity
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity': {
      }
    }
  }
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D2s_v3'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    securityProfile: {
      encryptionIdentity: {
        userAssignedIdentityResourceId: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity'
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2019-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'StandardSSD_LRS'
        }
      }
    }
  }
}
```

Create a vm with ephemeral os disk provisioning in Cache disk using placement property.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_DS1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'windows-data-science-vm'
        publisher: 'microsoft-ads'
        sku: 'windows2016'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        diffDiskSettings: {
          option: 'Local'
          placement: 'CacheDisk'
        }
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with ephemeral os disk provisioning in Resource disk using placement property.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_DS1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'windows-data-science-vm'
        publisher: 'microsoft-ads'
        sku: 'windows2016'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        diffDiskSettings: {
          option: 'Local'
          placement: 'ResourceDisk'
        }
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with ephemeral os disk.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_DS1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'windows-data-science-vm'
        publisher: 'microsoft-ads'
        sku: 'windows2016'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        diffDiskSettings: {
          option: 'Local'
        }
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a VM with HibernationEnabled
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'eastus2euap'
  properties: {
    additionalCapabilities: {
      hibernationEnabled: true
    }
    diagnosticsProfile: {
      bootDiagnostics: {
        enabled: true
        storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
      }
    }
    hardwareProfile: {
      vmSize: 'Standard_D2s_v3'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: '{vm-name}'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2019-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'vmOSdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with Host Encryption using encryptionAtHost property.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_DS1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    securityProfile: {
      encryptionAtHost: true
    }
    storageProfile: {
      imageReference: {
        offer: 'windows-data-science-vm'
        publisher: 'microsoft-ads'
        sku: 'windows2016'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with managed boot diagnostics.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    diagnosticsProfile: {
      bootDiagnostics: {
        enabled: true
      }
    }
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a VM with network interface configuration
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkApiVersion: '2020-11-01'
      networkInterfaceConfigurations: [
        {
          name: '{nic-config-name}'
          properties: {
            deleteOption: 'Delete'
            ipConfigurations: [
              {
                name: '{ip-config-name}'
                properties: {
                  primary: true
                  publicIPAddressConfiguration: {
                    name: '{publicIP-config-name}'
                    properties: {
                      deleteOption: 'Detach'
                      publicIPAllocationMethod: 'Static'
                    }
                    sku: {
                      name: 'Basic'
                      tier: 'Global'
                    }
                  }
                }
              }
            ]
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a VM with network interface configuration with public ip address dns settings
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkApiVersion: '2020-11-01'
      networkInterfaceConfigurations: [
        {
          name: '{nic-config-name}'
          properties: {
            deleteOption: 'Delete'
            ipConfigurations: [
              {
                name: '{ip-config-name}'
                properties: {
                  primary: true
                  publicIPAddressConfiguration: {
                    name: '{publicIP-config-name}'
                    properties: {
                      deleteOption: 'Detach'
                      dnsSettings: {
                        domainNameLabel: 'aaaaa'
                        domainNameLabelScope: 'TenantReuse'
                      }
                      publicIPAllocationMethod: 'Static'
                    }
                    sku: {
                      name: 'Basic'
                      tier: 'Global'
                    }
                  }
                }
              }
            ]
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with password authentication.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a vm with premium storage.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a VM with ProxyAgent Settings of enabled and mode.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D2s_v3'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    securityProfile: {
      proxyAgentSettings: {
        enabled: true
        mode: 'Enforce'
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2019-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'StandardSSD_LRS'
        }
      }
    }
  }
}
```

Create a vm with Scheduled Events Profile
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    diagnosticsProfile: {
      bootDiagnostics: {
        enabled: true
        storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
      }
    }
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    scheduledEventsProfile: {
      osImageNotificationProfile: {
        enable: true
        notBeforeTimeout: 'PT15M'
      }
      terminateNotificationProfile: {
        enable: true
        notBeforeTimeout: 'PT10M'
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a VM with securityType ConfidentialVM with Customer Managed Keys
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_DC2as_v5'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    securityProfile: {
      securityType: 'ConfidentialVM'
      uefiSettings: {
        secureBootEnabled: true
        vTpmEnabled: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: '2019-datacenter-cvm'
        publisher: 'MicrosoftWindowsServer'
        sku: 'windows-cvm'
        version: '17763.2183.2109130127'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        managedDisk: {
          securityProfile: {
            diskEncryptionSet: {
              id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
            }
            securityEncryptionType: 'DiskWithVMGuestState'
          }
          storageAccountType: 'StandardSSD_LRS'
        }
      }
    }
  }
}
```

Create a VM with securityType ConfidentialVM with NonPersistedTPM securityEncryptionType
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_DC2es_v5'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    securityProfile: {
      securityType: 'ConfidentialVM'
      uefiSettings: {
        secureBootEnabled: false
        vTpmEnabled: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: '2022-datacenter-cvm'
        publisher: 'UbuntuServer'
        sku: 'linux-cvm'
        version: '17763.2183.2109130127'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        managedDisk: {
          securityProfile: {
            securityEncryptionType: 'NonPersistedTPM'
          }
          storageAccountType: 'StandardSSD_LRS'
        }
      }
    }
  }
}
```

Create a VM with securityType ConfidentialVM with Platform Managed Keys
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_DC2as_v5'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    securityProfile: {
      securityType: 'ConfidentialVM'
      uefiSettings: {
        secureBootEnabled: true
        vTpmEnabled: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: '2019-datacenter-cvm'
        publisher: 'MicrosoftWindowsServer'
        sku: 'windows-cvm'
        version: '17763.2183.2109130127'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        managedDisk: {
          securityProfile: {
            securityEncryptionType: 'DiskWithVMGuestState'
          }
          storageAccountType: 'StandardSSD_LRS'
        }
      }
    }
  }
}
```

Create a vm with ssh authentication.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminUsername: '{your-username}'
      computerName: 'myVM'
      linuxConfiguration: {
        disablePasswordAuthentication: true
        ssh: {
          publicKeys: [
            {
              path: '/home/{your-username}/.ssh/authorized_keys'
              keyData: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCeClRAk2ipUs/l5voIsDC5q9RI+YSRd1Bvd/O+axgY4WiBzG+4FwJWZm/mLLe5DoOdHQwmU2FrKXZSW4w2sYE70KeWnrFViCOX5MTVvJgPE8ClugNl8RWth/tU849DvM9sT7vFgfVSHcAS2yDRyDlueii+8nF2ym8XWAPltFVCyLHRsyBp5YPqK8JFYIa1eybKsY3hEAxRCA+/7bq8et+Gj3coOsuRmrehav7rE6N12Pb80I6ofa6SM5XNYq4Xk0iYNx7R3kdz0Jj9XgZYWjAHjJmT0gTRoOnt6upOuxK7xI/ykWrllgpXrCPu3Ymz+c+ujaqcxDopnAl2lmf69/J1'
            }
          ]
        }
      }
    }
    storageProfile: {
      imageReference: {
        offer: '{image_offer}'
        publisher: '{image_publisher}'
        sku: '{image_sku}'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

Create a VM with Uefi Settings of secureBoot and vTPM.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D2s_v3'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    securityProfile: {
      securityType: 'TrustedLaunch'
      uefiSettings: {
        secureBootEnabled: true
        vTpmEnabled: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'windowsserver-gen2preview-preview'
        publisher: 'MicrosoftWindowsServer'
        sku: 'windows10-tvm'
        version: '18363.592.2001092016'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'StandardSSD_LRS'
        }
      }
    }
  }
}
```

Create a VM with UserData
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    diagnosticsProfile: {
      bootDiagnostics: {
        enabled: true
        storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
      }
    }
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: '{vm-name}'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'vmOSdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
    userData: 'RXhhbXBsZSBVc2VyRGF0YQ=='
  }
}
```

Create a VM with VM Size Properties
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    diagnosticsProfile: {
      bootDiagnostics: {
        enabled: true
        storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
      }
    }
    hardwareProfile: {
      vmSize: 'Standard_D4_v3'
      vmSizeProperties: {
        vCPUsAvailable: 1
        vCPUsPerCore: 1
      }
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
    userData: 'U29tZSBDdXN0b20gRGF0YQ=='
  }
}
```

Create a Windows vm with a patch setting assessmentMode of ImageDefault.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      windowsConfiguration: {
        enableAutomaticUpdates: true
        patchSettings: {
          assessmentMode: 'ImageDefault'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a Windows vm with a patch setting patchMode of AutomaticByOS.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/nsgExistingNic'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      windowsConfiguration: {
        enableAutomaticUpdates: true
        patchSettings: {
          patchMode: 'AutomaticByOS'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a Windows vm with a patch setting patchMode of AutomaticByPlatform and AutomaticByPlatformSettings.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      windowsConfiguration: {
        enableAutomaticUpdates: true
        patchSettings: {
          assessmentMode: 'AutomaticByPlatform'
          automaticByPlatformSettings: {
            bypassPlatformSafetyChecksOnUserSchedule: false
            rebootSetting: 'Never'
          }
          patchMode: 'AutomaticByPlatform'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a Windows vm with a patch setting patchMode of AutomaticByPlatform and enableHotpatching set to true.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      windowsConfiguration: {
        enableAutomaticUpdates: true
        patchSettings: {
          enableHotpatching: true
          patchMode: 'AutomaticByPlatform'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a Windows vm with a patch setting patchMode of Manual.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      windowsConfiguration: {
        enableAutomaticUpdates: true
        patchSettings: {
          patchMode: 'Manual'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create a Windows vm with patch settings patchMode and assessmentMode set to AutomaticByPlatform.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    hardwareProfile: {
      vmSize: 'Standard_D1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
      windowsConfiguration: {
        enableAutomaticUpdates: true
        patchSettings: {
          assessmentMode: 'AutomaticByPlatform'
          patchMode: 'AutomaticByPlatform'
        }
        provisionVMAgent: true
      }
    }
    storageProfile: {
      imageReference: {
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sku: '2016-Datacenter'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadWrite'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Premium_LRS'
        }
      }
    }
  }
}
```

Create or update a VM with capacity reservation
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    capacityReservation: {
      capacityReservationGroup: {
        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/CapacityReservationGroups/{crgName}'
      }
    }
    hardwareProfile: {
      vmSize: 'Standard_DS1_v2'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkInterfaces/{existing-nic-name}'
          properties: {
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: '{your-password}'
      adminUsername: '{your-username}'
      computerName: 'myVM'
    }
    storageProfile: {
      imageReference: {
        offer: 'windows-data-science-vm'
        publisher: 'microsoft-ads'
        sku: 'windows2016'
        version: 'latest'
      }
      osDisk: {
        name: 'myVMosdisk'
        caching: 'ReadOnly'
        createOption: 'FromImage'
        managedDisk: {
          storageAccountType: 'Standard_LRS'
        }
      }
    }
  }
}
```

## microsoft.compute/virtualmachines/extensions

VirtualMachineExtension_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines/extensions@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    type: 'extType'
    autoUpgradeMinorVersion: true
    enableAutomaticUpgrade: true
    forceUpdateTag: 'a'
    instanceView: {
      name: 'aaaaaaaaaaaaaaaaa'
      type: 'aaaaaaaaa'
      statuses: [
        {
          code: 'aaaaaaaaaaaaaaaaaaaaaaa'
          displayStatus: 'aaaaaa'
          level: 'Info'
          message: 'a'
          time: '2021-11-30T12:58:26.522Z'
        }
      ]
      substatuses: [
        {
          code: 'aaaaaaaaaaaaaaaaaaaaaaa'
          displayStatus: 'aaaaaa'
          level: 'Info'
          message: 'a'
          time: '2021-11-30T12:58:26.522Z'
        }
      ]
      typeHandlerVersion: 'aaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
    protectedSettings: {
    }
    publisher: 'extPublisher'
    settings: {
    }
    suppressFailures: true
    typeHandlerVersion: '1.2'
  }
  tags: {
    key9183: 'aa'
  }
}
```

VirtualMachineExtension_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines/extensions@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
}
```

## microsoft.compute/virtualmachines/runcommands

Create or update a run command.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines/runCommands@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    asyncExecution: false
    errorBlobUri: 'https://mystorageaccount.blob.core.windows.net/scriptcontainer/scriptURI'
    outputBlobManagedIdentity: {
      clientId: '22d35efb-0c99-4041-8c5b-6d24db33a69a'
    }
    outputBlobUri: 'https://mystorageaccount.blob.core.windows.net/myscriptoutputcontainer/MyScriptoutput.txt'
    parameters: [
      {
        name: 'param1'
        value: 'value1'
      }
      {
        name: 'param2'
        value: 'value2'
      }
    ]
    runAsPassword: '<runAsPassword>'
    runAsUser: 'user1'
    source: {
      scriptUri: 'https://mystorageaccount.blob.core.windows.net/scriptcontainer/scriptURI'
    }
    timeoutInSeconds: 3600
    treatFailureAsDeploymentFailure: false
  }
}
```

## microsoft.compute/virtualmachinescalesets

Create a custom-image scale set from an unmanaged generalized os image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        osDisk: {
          name: 'osDisk'
          caching: 'ReadWrite'
          createOption: 'FromImage'
          image: {
            uri: 'http://{existing-storage-account-name}.blob.core.windows.net/{existing-container-name}/{existing-generalized-os-image-blob-name}.vhd'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a platform-image scale set with unmanaged os disks.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          name: 'osDisk'
          caching: 'ReadWrite'
          createOption: 'FromImage'
          vhdContainers: [
            'http://{existing-storage-account-name-0}.blob.core.windows.net/vhdContainer'
            'http://{existing-storage-account-name-1}.blob.core.windows.net/vhdContainer'
            'http://{existing-storage-account-name-2}.blob.core.windows.net/vhdContainer'
            'http://{existing-storage-account-name-3}.blob.core.windows.net/vhdContainer'
            'http://{existing-storage-account-name-4}.blob.core.windows.net/vhdContainer'
          ]
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set from a custom image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/images/{existing-custom-image-name}'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set from a generalized shared image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/galleries/mySharedGallery/images/mySharedImage'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set from a specialized shared image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      storageProfile: {
        imageReference: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/galleries/mySharedGallery/images/mySharedImage'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set where nic config has DisableTcpStateTracking property
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{nicConfig1-name}'
            properties: {
              disableTcpStateTracking: true
              enableAcceleratedNetworking: true
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
          {
            name: '{nicConfig2-name}'
            properties: {
              disableTcpStateTracking: false
              enableAcceleratedNetworking: false
              enableIPForwarding: false
              ipConfigurations: [
                {
                  name: '{nicConfig2-name}'
                  properties: {
                    primary: true
                    privateIPAddressVersion: 'IPv4'
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-fpga-subnet-name2}'
                    }
                  }
                }
              ]
              primary: false
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/images/{existing-custom-image-name}'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with a marketplace image plan.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'windows-data-science-vm'
          publisher: 'microsoft-ads'
          sku: 'windows2016'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with an azure application gateway.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    applicationGatewayBackendAddressPools: [
                      {
                        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/applicationGateways/{existing-application-gateway-name}/backendAddressPools/{existing-backend-address-pool-name}'
                      }
                    ]
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with an azure load balancer.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    loadBalancerBackendAddressPools: [
                      {
                        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/loadBalancers/{existing-load-balancer-name}/backendAddressPools/{existing-backend-address-pool-name}'
                      }
                    ]
                    loadBalancerInboundNatPools: [
                      {
                        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/loadBalancers/{existing-load-balancer-name}/inboundNatPools/{existing-nat-pool-name}'
                      }
                    ]
                    publicIPAddressConfiguration: {
                      name: '{vmss-name}'
                      properties: {
                        publicIPAddressVersion: 'IPv4'
                      }
                    }
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Application Profile
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      applicationProfile: {
        galleryApplications: [
          {
            configurationReference: 'https://mystorageaccount.blob.core.windows.net/configurations/settings.config'
            enableAutomaticUpgrade: false
            order: 1
            packageReferenceId: '/subscriptions/32c17a9e-aa7b-4ba5-a45b-e324116b6fdb/resourceGroups/myresourceGroupName2/providers/Microsoft.Compute/galleries/myGallery1/applications/MyApplication1/versions/1.0'
            tags: 'myTag1'
            treatFailureAsDeploymentFailure: true
          }
          {
            packageReferenceId: '/subscriptions/32c17a9e-aa7b-4ba5-a45b-e324116b6fdg/resourceGroups/myresourceGroupName3/providers/Microsoft.Compute/galleries/myGallery2/applications/MyApplication2/versions/1.1'
          }
        ]
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with automatic repairs enabled
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    automaticRepairsPolicy: {
      enabled: true
      gracePeriod: 'PT10M'
    }
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with boot diagnostics.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      diagnosticsProfile: {
        bootDiagnostics: {
          enabled: true
          storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
        }
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Disk Controller Type
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      hardwareProfile: {
        vmSizeProperties: {
          vCPUsAvailable: 1
          vCPUsPerCore: 1
        }
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        diskControllerType: 'NVMe'
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
      userData: 'RXhhbXBsZSBVc2VyRGF0YQ=='
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with DiskEncryptionSet resource in os disk and data disk.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        dataDisks: [
          {
            caching: 'ReadWrite'
            createOption: 'Empty'
            diskSizeGB: 1023
            lun: 0
            managedDisk: {
              diskEncryptionSet: {
                id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
              }
              storageAccountType: 'Standard_LRS'
            }
          }
        ]
        imageReference: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/images/{existing-custom-image-name}'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            diskEncryptionSet: {
              id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSets/{existing-diskEncryptionSet-name}'
            }
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_DS1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with empty data disks on each vm.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        dataDisks: [
          {
            createOption: 'Empty'
            diskSizeGB: 1023
            lun: 0
          }
          {
            createOption: 'Empty'
            diskSizeGB: 1023
            lun: 1
          }
        ]
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          diskSizeGB: 512
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D2_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with ephemeral os disks using placement property.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'windows-data-science-vm'
          publisher: 'microsoft-ads'
          sku: 'windows2016'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadOnly'
          createOption: 'FromImage'
          diffDiskSettings: {
            option: 'Local'
            placement: 'ResourceDisk'
          }
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_DS1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with ephemeral os disks.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'windows-data-science-vm'
          publisher: 'microsoft-ads'
          sku: 'windows2016'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadOnly'
          createOption: 'FromImage'
          diffDiskSettings: {
            option: 'Local'
          }
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_DS1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with extension time budget.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      diagnosticsProfile: {
        bootDiagnostics: {
          enabled: true
          storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
        }
      }
      extensionProfile: {
        extensionsTimeBudget: 'PT1H20M'
        extensions: [
          {
            name: '{extension-name}'
            properties: {
              type: '{extension-Type}'
              autoUpgradeMinorVersion: false
              publisher: '{extension-Publisher}'
              settings: {
              }
              typeHandlerVersion: '{handler-version}'
            }
          }
        ]
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Fpga Network Interfaces.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
          {
            name: '{fpgaNic-Name}'
            properties: {
              enableAcceleratedNetworking: false
              enableFpga: true
              enableIPForwarding: false
              ipConfigurations: [
                {
                  name: '{fpgaNic-Name}'
                  properties: {
                    primary: true
                    privateIPAddressVersion: 'IPv4'
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-fpga-subnet-name}'
                    }
                  }
                }
              ]
              primary: false
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/images/{existing-custom-image-name}'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Host Encryption using encryptionAtHost property.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  plan: {
    name: 'windows2016'
    product: 'windows-data-science-vm'
    publisher: 'microsoft-ads'
  }
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      securityProfile: {
        encryptionAtHost: true
      }
      storageProfile: {
        imageReference: {
          offer: 'windows-data-science-vm'
          publisher: 'microsoft-ads'
          sku: 'windows2016'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadOnly'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_DS1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with managed boot diagnostics.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      diagnosticsProfile: {
        bootDiagnostics: {
          enabled: true
        }
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Network Interfaces with public ip address dns settings.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{nicConfig1-name}'
            properties: {
              auxiliaryMode: 'AcceleratedConnections'
              auxiliarySku: 'A1'
              disableTcpStateTracking: true
              enableAcceleratedNetworking: true
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
          {
            name: '{nicConfig2-name}'
            properties: {
              disableTcpStateTracking: false
              enableAcceleratedNetworking: false
              enableIPForwarding: false
              ipConfigurations: [
                {
                  name: '{nicConfig2-name}'
                  properties: {
                    primary: true
                    privateIPAddressVersion: 'IPv4'
                    publicIPAddressConfiguration: {
                      name: 'publicip'
                      properties: {
                        dnsSettings: {
                          domainNameLabel: 'vmsstestlabel01'
                          domainNameLabelScope: 'NoReuse'
                        }
                        idleTimeoutInMinutes: 10
                      }
                    }
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-fpga-subnet-name2}'
                    }
                  }
                }
              ]
              primary: false
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/images/{existing-custom-image-name}'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with OS image scheduled events enabled.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      scheduledEventsProfile: {
        osImageNotificationProfile: {
          enable: true
          notBeforeTimeout: 'PT15M'
        }
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with password authentication.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with premium storage.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Premium_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with priority mix policy
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    orchestrationMode: 'Flexible'
    platformFaultDomainCount: 1
    priorityMixPolicy: {
      baseRegularPriorityCount: 10
      regularPriorityPercentageAboveBase: 50
    }
    virtualMachineProfile: {
      networkProfile: {
        networkApiVersion: '2020-11-01'
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableAcceleratedNetworking: false
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    applicationGatewayBackendAddressPools: [
                    ]
                    loadBalancerBackendAddressPools: [
                    ]
                    primary: true
                    publicIPAddressConfiguration: {
                      name: '{vmss-name}'
                      properties: {
                        idleTimeoutInMinutes: 15
                      }
                    }
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      priority: 'spot'
      storageProfile: {
        imageReference: {
          offer: '0001-com-ubuntu-server-focal'
          publisher: 'Canonical'
          sku: '20_04-lts-gen2'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'fromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_A8m_v2'
    capacity: 2
    tier: 'Standard'
  }
}
```

Create a scale set with ProxyAgent Settings of enabled and mode.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      securityProfile: {
        proxyAgentSettings: {
          enabled: true
          mode: 'Enforce'
        }
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2019-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadOnly'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'StandardSSD_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D2s_v3'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Resilient VM Creation enabled
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: false
    resiliencyPolicy: {
      resilientVMCreationPolicy: {
        enabled: true
      }
    }
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Resilient VM Deletion enabled
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: false
    resiliencyPolicy: {
      resilientVMDeletionPolicy: {
        enabled: true
      }
    }
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with scaleInPolicy.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    scaleInPolicy: {
      forceDeletion: true
      rules: [
        'OldestVM'
      ]
    }
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Security Posture Reference
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'eastus2euap'
  properties: {
    overprovision: true
    upgradePolicy: {
      automaticOSUpgradePolicy: {
        enableAutomaticOSUpgrade: true
      }
      mode: 'Automatic'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      securityPostureReference: {
        id: '/CommunityGalleries/{communityGalleryName}/securityPostures/{securityPostureName}/versions/{major.minor.patch}|{major.*}|latest'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2022-Datacenter'
          version: 'latest'
        }
        osDisk: {
          name: 'osDisk'
          caching: 'ReadWrite'
          createOption: 'FromImage'
        }
      }
    }
  }
  sku: {
    name: 'Standard_A1'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with SecurityType as ConfidentialVM
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      securityProfile: {
        securityType: 'ConfidentialVM'
        uefiSettings: {
          secureBootEnabled: true
          vTpmEnabled: true
        }
      }
      storageProfile: {
        imageReference: {
          offer: '2019-datacenter-cvm'
          publisher: 'MicrosoftWindowsServer'
          sku: 'windows-cvm'
          version: '17763.2183.2109130127'
        }
        osDisk: {
          caching: 'ReadOnly'
          createOption: 'FromImage'
          managedDisk: {
            securityProfile: {
              securityEncryptionType: 'VMGuestStateOnly'
            }
            storageAccountType: 'StandardSSD_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_DC2as_v5'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with SecurityType as ConfidentialVM and NonPersistedTPM securityEncryptionType
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      securityProfile: {
        securityType: 'ConfidentialVM'
        uefiSettings: {
          secureBootEnabled: false
          vTpmEnabled: true
        }
      }
      storageProfile: {
        imageReference: {
          offer: '2022-datacenter-cvm'
          publisher: 'UbuntuServer'
          sku: 'linux-cvm'
          version: '17763.2183.2109130127'
        }
        osDisk: {
          caching: 'ReadOnly'
          createOption: 'FromImage'
          managedDisk: {
            securityProfile: {
              securityEncryptionType: 'NonPersistedTPM'
            }
            storageAccountType: 'StandardSSD_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_DC2es_v5'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Service Artifact Reference
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'eastus2euap'
  properties: {
    overprovision: true
    upgradePolicy: {
      automaticOSUpgradePolicy: {
        enableAutomaticOSUpgrade: true
      }
      mode: 'Automatic'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      serviceArtifactReference: {
        id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/galleries/myGalleryName/serviceArtifacts/serviceArtifactName/vmArtifactsProfiles/vmArtifactsProfilesName'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2022-Datacenter'
          version: 'latest'
        }
        osDisk: {
          name: 'osDisk'
          caching: 'ReadWrite'
          createOption: 'FromImage'
        }
      }
    }
  }
  sku: {
    name: 'Standard_A1'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with spot restore policy
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    spotRestorePolicy: {
      enabled: true
      restoreTimeout: 'PT1H'
    }
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      billingProfile: {
        maxPrice: -1
      }
      evictionPolicy: 'Deallocate'
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      priority: 'Spot'
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_A8m_v2'
    capacity: 2
    tier: 'Standard'
  }
}
```

Create a scale set with ssh authentication.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
        linuxConfiguration: {
          disablePasswordAuthentication: true
          ssh: {
            publicKeys: [
              {
                path: '/home/{your-username}/.ssh/authorized_keys'
                keyData: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCeClRAk2ipUs/l5voIsDC5q9RI+YSRd1Bvd/O+axgY4WiBzG+4FwJWZm/mLLe5DoOdHQwmU2FrKXZSW4w2sYE70KeWnrFViCOX5MTVvJgPE8ClugNl8RWth/tU849DvM9sT7vFgfVSHcAS2yDRyDlueii+8nF2ym8XWAPltFVCyLHRsyBp5YPqK8JFYIa1eybKsY3hEAxRCA+/7bq8et+Gj3coOsuRmrehav7rE6N12Pb80I6ofa6SM5XNYq4Xk0iYNx7R3kdz0Jj9XgZYWjAHjJmT0gTRoOnt6upOuxK7xI/ykWrllgpXrCPu3Ymz+c+ujaqcxDopnAl2lmf69/J1'
              }
            ]
          }
        }
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with terminate scheduled events enabled.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      scheduledEventsProfile: {
        terminateNotificationProfile: {
          enable: true
          notBeforeTimeout: 'PT5M'
        }
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with Uefi Settings of secureBoot and vTPM.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      securityProfile: {
        securityType: 'TrustedLaunch'
        uefiSettings: {
          secureBootEnabled: true
          vTpmEnabled: true
        }
      }
      storageProfile: {
        imageReference: {
          offer: 'windowsserver-gen2preview-preview'
          publisher: 'MicrosoftWindowsServer'
          sku: 'windows10-tvm'
          version: '18363.592.2001092016'
        }
        osDisk: {
          caching: 'ReadOnly'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'StandardSSD_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D2s_v3'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with userData.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
      userData: 'RXhhbXBsZSBVc2VyRGF0YQ=='
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a scale set with virtual machines in different zones.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'centralus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Automatic'
    }
    virtualMachineProfile: {
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        dataDisks: [
          {
            createOption: 'Empty'
            diskSizeGB: 1023
            lun: 0
          }
          {
            createOption: 'Empty'
            diskSizeGB: 1023
            lun: 1
          }
        ]
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          diskSizeGB: 512
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_A1_v2'
    capacity: 2
    tier: 'Standard'
  }
  zones: [
    '1'
    '3'
  ]
}
```

Create a scale set with vm size properties
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      hardwareProfile: {
        vmSizeProperties: {
          vCPUsAvailable: 1
          vCPUsPerCore: 1
        }
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
      userData: 'RXhhbXBsZSBVc2VyRGF0YQ=='
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a VMSS with an extension that has suppressFailures enabled
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      diagnosticsProfile: {
        bootDiagnostics: {
          enabled: true
          storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
        }
      }
      extensionProfile: {
        extensions: [
          {
            name: '{extension-name}'
            properties: {
              type: '{extension-Type}'
              autoUpgradeMinorVersion: false
              publisher: '{extension-Publisher}'
              settings: {
              }
              suppressFailures: true
              typeHandlerVersion: '{handler-version}'
            }
          }
        ]
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create a VMSS with an extension with protectedSettingsFromKeyVault
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      diagnosticsProfile: {
        bootDiagnostics: {
          enabled: true
          storageUri: 'http://{existing-storage-account-name}.blob.core.windows.net'
        }
      }
      extensionProfile: {
        extensions: [
          {
            name: '{extension-name}'
            properties: {
              type: '{extension-Type}'
              autoUpgradeMinorVersion: false
              protectedSettingsFromKeyVault: {
                secretUrl: 'https://kvName.vault.azure.net/secrets/secretName/79b88b3a6f5440ffb2e73e44a0db712e'
                sourceVault: {
                  id: '/subscriptions/a53f7094-a16c-47af-abe4-b05c05d0d79a/resourceGroups/myResourceGroup/providers/Microsoft.KeyVault/vaults/kvName'
                }
              }
              publisher: '{extension-Publisher}'
              settings: {
              }
              typeHandlerVersion: '{handler-version}'
            }
          }
        ]
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_D1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

Create or update a scale set with capacity reservation.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2023-09-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    overprovision: true
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      capacityReservation: {
        capacityReservationGroup: {
          id: 'subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/CapacityReservationGroups/{crgName}'
        }
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '{vmss-name}'
            properties: {
              enableIPForwarding: true
              ipConfigurations: [
                {
                  name: '{vmss-name}'
                  properties: {
                    subnet: {
                      id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/{existing-virtual-network-name}/subnets/{existing-subnet-name}'
                    }
                  }
                }
              ]
              primary: true
            }
          }
        ]
      }
      osProfile: {
        adminPassword: '{your-password}'
        adminUsername: '{your-username}'
        computerNamePrefix: '{vmss-name}'
      }
      storageProfile: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter'
          version: 'latest'
        }
        osDisk: {
          caching: 'ReadWrite'
          createOption: 'FromImage'
          managedDisk: {
            storageAccountType: 'Standard_LRS'
          }
        }
      }
    }
  }
  sku: {
    name: 'Standard_DS1_v2'
    capacity: 3
    tier: 'Standard'
  }
}
```

## microsoft.compute/virtualmachinescalesets/extensions

VirtualMachineScaleSetExtension_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets/extensions@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  name: '{extension-name}'
  properties: {
    type: '{extension-Type}'
    autoUpgradeMinorVersion: true
    enableAutomaticUpgrade: true
    forceUpdateTag: 'aaaaaaaaa'
    protectedSettings: {
    }
    provisionAfterExtensions: [
      'aa'
    ]
    publisher: '{extension-Publisher}'
    settings: {
    }
    suppressFailures: true
    typeHandlerVersion: '{handler-version}'
  }
}
```

VirtualMachineScaleSetExtension_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets/extensions@2023-09-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.compute/virtualmachinescalesets/virtualmachines

VirtualMachineScaleSetVM_Update_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  plan: {
    name: 'aaaaaaaaaa'
    product: 'aaaaaaaaaaaaaaaaaaaa'
    promotionCode: 'aaaaaaaaaaaaaaaaaaaa'
    publisher: 'aaaaaaaaaaaaaaaaaaaaaa'
  }
  properties: {
    additionalCapabilities: {
      hibernationEnabled: true
      ultraSSDEnabled: true
    }
    availabilitySet: {
      id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
    }
    diagnosticsProfile: {
      bootDiagnostics: {
        enabled: true
        storageUri: 'aaaaaaaaaaaaa'
      }
    }
    hardwareProfile: {
      vmSize: 'Basic_A0'
      vmSizeProperties: {
        vCPUsAvailable: 9
        vCPUsPerCore: 12
      }
    }
    instanceView: {
      bootDiagnostics: {
        status: {
          code: 'aaaaaaaaaaaaaaaaaaaaaaa'
          displayStatus: 'aaaaaa'
          level: 'Info'
          message: 'a'
          time: '2021-11-30T12:58:26.522Z'
        }
      }
      disks: [
        {
          name: 'aaaaaaaaaaa'
          encryptionSettings: [
            {
              diskEncryptionKey: {
                secretUrl: 'aaaaaaaa'
                sourceVault: {
                  id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                }
              }
              enabled: true
              keyEncryptionKey: {
                keyUrl: 'aaaaaaaaaaaaaa'
                sourceVault: {
                  id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                }
              }
            }
          ]
          statuses: [
            {
              code: 'aaaaaaaaaaaaaaaaaaaaaaa'
              displayStatus: 'aaaaaa'
              level: 'Info'
              message: 'a'
              time: '2021-11-30T12:58:26.522Z'
            }
          ]
        }
      ]
      maintenanceRedeployStatus: {
        isCustomerInitiatedMaintenanceAllowed: true
        lastOperationMessage: 'aaaaaa'
        lastOperationResultCode: 'None'
        maintenanceWindowEndTime: '2021-11-30T12:58:26.531Z'
        maintenanceWindowStartTime: '2021-11-30T12:58:26.531Z'
        preMaintenanceWindowEndTime: '2021-11-30T12:58:26.531Z'
        preMaintenanceWindowStartTime: '2021-11-30T12:58:26.531Z'
      }
      placementGroupId: 'aaa'
      platformFaultDomain: 14
      platformUpdateDomain: 23
      rdpThumbPrint: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
      statuses: [
        {
          code: 'aaaaaaaaaaaaaaaaaaaaaaa'
          displayStatus: 'aaaaaa'
          level: 'Info'
          message: 'a'
          time: '2021-11-30T12:58:26.522Z'
        }
      ]
      vmAgent: {
        extensionHandlers: [
          {
            type: 'aaaaaaaaaaaaa'
            status: {
              code: 'aaaaaaaaaaaaaaaaaaaaaaa'
              displayStatus: 'aaaaaa'
              level: 'Info'
              message: 'a'
              time: '2021-11-30T12:58:26.522Z'
            }
            typeHandlerVersion: 'aaaaa'
          }
        ]
        statuses: [
          {
            code: 'aaaaaaaaaaaaaaaaaaaaaaa'
            displayStatus: 'aaaaaa'
            level: 'Info'
            message: 'a'
            time: '2021-11-30T12:58:26.522Z'
          }
        ]
        vmAgentVersion: 'aaaaaaaaaaaaaaaaaaaaaaa'
      }
      vmHealth: {
        status: {
          code: 'aaaaaaaaaaaaaaaaaaaaaaa'
          displayStatus: 'aaaaaa'
          level: 'Info'
          message: 'a'
          time: '2021-11-30T12:58:26.522Z'
        }
      }
      extensions: [
        {
          name: 'aaaaaaaaaaaaaaaaa'
          type: 'aaaaaaaaa'
          statuses: [
            {
              code: 'aaaaaaaaaaaaaaaaaaaaaaa'
              displayStatus: 'aaaaaa'
              level: 'Info'
              message: 'a'
              time: '2021-11-30T12:58:26.522Z'
            }
          ]
          substatuses: [
            {
              code: 'aaaaaaaaaaaaaaaaaaaaaaa'
              displayStatus: 'aaaaaa'
              level: 'Info'
              message: 'a'
              time: '2021-11-30T12:58:26.522Z'
            }
          ]
          typeHandlerVersion: 'aaaaaaaaaaaaaaaaaaaaaaaaaa'
        }
      ]
    }
    licenseType: 'aaaaaaaaaa'
    networkProfile: {
      networkApiVersion: '2020-11-01'
      networkInterfaceConfigurations: [
        {
          name: 'aaaaaaaaaaa'
          properties: {
            deleteOption: 'Delete'
            dnsSettings: {
              dnsServers: [
                'aaaaaa'
              ]
            }
            dscpConfiguration: {
              id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
            }
            enableAcceleratedNetworking: true
            enableFpga: true
            enableIPForwarding: true
            ipConfigurations: [
              {
                name: 'aa'
                properties: {
                  applicationGatewayBackendAddressPools: [
                    {
                      id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                    }
                  ]
                  applicationSecurityGroups: [
                    {
                      id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                    }
                  ]
                  loadBalancerBackendAddressPools: [
                    {
                      id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                    }
                  ]
                  primary: true
                  privateIPAddressVersion: 'IPv4'
                  publicIPAddressConfiguration: {
                    name: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
                    properties: {
                      deleteOption: 'Delete'
                      dnsSettings: {
                        domainNameLabel: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
                      }
                      idleTimeoutInMinutes: 2
                      ipTags: [
                        {
                          ipTagType: 'aaaaaaaaaaaaaaaaaaaaaaaaa'
                          tag: 'aaaaaaaaaaaaaaaaaaaa'
                        }
                      ]
                      publicIPAddressVersion: 'IPv4'
                      publicIPAllocationMethod: 'Dynamic'
                      publicIPPrefix: {
                        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                      }
                    }
                    sku: {
                      name: 'Basic'
                      tier: 'Regional'
                    }
                  }
                  subnet: {
                    id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                  }
                }
              }
            ]
            networkSecurityGroup: {
              id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
            }
            primary: true
          }
        }
      ]
      networkInterfaces: [
        {
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/virtualMachineScaleSets/{vmss-name}/virtualMachines/0/networkInterfaces/vmsstestnetconfig5415'
          properties: {
            deleteOption: 'Delete'
            primary: true
          }
        }
      ]
    }
    networkProfileConfiguration: {
      networkInterfaceConfigurations: [
        {
          name: 'vmsstestnetconfig5415'
          properties: {
            deleteOption: 'Delete'
            dnsSettings: {
              dnsServers: [
              ]
            }
            enableAcceleratedNetworking: true
            enableFpga: true
            enableIPForwarding: true
            ipConfigurations: [
              {
                name: 'vmsstestnetconfig9693'
                properties: {
                  applicationGatewayBackendAddressPools: [
                    {
                      id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                    }
                  ]
                  applicationSecurityGroups: [
                    {
                      id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                    }
                  ]
                  loadBalancerBackendAddressPools: [
                    {
                      id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                    }
                  ]
                  loadBalancerInboundNatPools: [
                    {
                      id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                    }
                  ]
                  primary: true
                  privateIPAddressVersion: 'IPv4'
                  publicIPAddressConfiguration: {
                    name: 'aaaaaaaaaaaaaaaaaa'
                    properties: {
                      deleteOption: 'Delete'
                      dnsSettings: {
                        domainNameLabel: 'aaaaaaaaaaaaaaaaaa'
                      }
                      idleTimeoutInMinutes: 18
                      ipTags: [
                        {
                          ipTagType: 'aaaaaaa'
                          tag: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
                        }
                      ]
                      publicIPAddressVersion: 'IPv4'
                      publicIPPrefix: {
                        id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
                      }
                    }
                    sku: {
                      name: 'Basic'
                      tier: 'Regional'
                    }
                  }
                  subnet: {
                    id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/vn4071/subnets/sn5503'
                  }
                }
              }
            ]
            networkSecurityGroup: {
              id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
            }
            primary: true
          }
        }
      ]
    }
    osProfile: {
      adminPassword: 'aaaaaaaaaaaaaaaa'
      adminUsername: 'Foo12'
      allowExtensionOperations: true
      computerName: 'test000000'
      customData: 'aaaa'
      linuxConfiguration: {
        disablePasswordAuthentication: true
        patchSettings: {
          assessmentMode: 'ImageDefault'
          patchMode: 'ImageDefault'
        }
        provisionVMAgent: true
        ssh: {
          publicKeys: [
            {
              path: 'aaa'
              keyData: 'aaaaaa'
            }
          ]
        }
      }
      requireGuestProvisionSignal: true
      secrets: [
      ]
      windowsConfiguration: {
        additionalUnattendContent: [
          {
            componentName: 'Microsoft-Windows-Shell-Setup'
            content: 'aaaaaaaaaaaaaaaaaaaa'
            passName: 'OobeSystem'
            settingName: 'AutoLogon'
          }
        ]
        enableAutomaticUpdates: true
        patchSettings: {
          assessmentMode: 'ImageDefault'
          enableHotpatching: true
          patchMode: 'Manual'
        }
        provisionVMAgent: true
        timeZone: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
        winRM: {
          listeners: [
            {
              certificateUrl: 'aaaaaaaaaaaaaaaaaaaaaa'
              protocol: 'Http'
            }
          ]
        }
      }
    }
    protectionPolicy: {
      protectFromScaleIn: true
      protectFromScaleSetActions: true
    }
    securityProfile: {
      encryptionAtHost: true
      securityType: 'TrustedLaunch'
      uefiSettings: {
        secureBootEnabled: true
        vTpmEnabled: true
      }
    }
    storageProfile: {
      dataDisks: [
        {
          name: 'vmss3176_vmss3176_0_disk2_6c4f554bdafa49baa780eb2d128ff39d'
          caching: 'None'
          createOption: 'Empty'
          deleteOption: 'Delete'
          detachOption: 'ForceDetach'
          diskSizeGB: 128
          image: {
            uri: 'https://{storageAccountName}.blob.core.windows.net/{containerName}/{vhdName}.vhd'
          }
          lun: 1
          managedDisk: {
            diskEncryptionSet: {
              id: 'aaaaaaaaaaaa'
            }
            id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/vmss3176_vmss3176_0_disk2_6c4f554bdafa49baa780eb2d128ff39d'
            storageAccountType: 'Standard_LRS'
          }
          toBeDetached: true
          vhd: {
            uri: 'https://{storageAccountName}.blob.core.windows.net/{containerName}/{vhdName}.vhd'
          }
          writeAcceleratorEnabled: true
        }
      ]
      imageReference: {
        id: 'a'
        offer: 'WindowsServer'
        publisher: 'MicrosoftWindowsServer'
        sharedGalleryImageId: 'aaaaaaaaaaaaaaaaaaaa'
        sku: '2012-R2-Datacenter'
        version: '4.127.20180315'
      }
      osDisk: {
        name: 'vmss3176_vmss3176_0_OsDisk_1_6d72b805e50e4de6830303c5055077fc'
        caching: 'None'
        createOption: 'FromImage'
        deleteOption: 'Delete'
        diffDiskSettings: {
          option: 'Local'
          placement: 'CacheDisk'
        }
        diskSizeGB: 127
        encryptionSettings: {
          diskEncryptionKey: {
            secretUrl: 'aaaaaaaa'
            sourceVault: {
              id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
            }
          }
          enabled: true
          keyEncryptionKey: {
            keyUrl: 'aaaaaaaaaaaaaa'
            sourceVault: {
              id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/availabilitySets/{availabilitySetName}'
            }
          }
        }
        image: {
          uri: 'https://{storageAccountName}.blob.core.windows.net/{containerName}/{vhdName}.vhd'
        }
        managedDisk: {
          diskEncryptionSet: {
            id: 'aaaaaaaaaaaa'
          }
          id: '/subscriptions/{subscription-id}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/disks/vmss3176_vmss3176_0_OsDisk_1_6d72b805e50e4de6830303c5055077fc'
          storageAccountType: 'Standard_LRS'
        }
        osType: 'Windows'
        vhd: {
          uri: 'https://{storageAccountName}.blob.core.windows.net/{containerName}/{vhdName}.vhd'
        }
        writeAcceleratorEnabled: true
      }
    }
    userData: 'RXhhbXBsZSBVc2VyRGF0YQ=='
  }
  sku: {
    name: 'Classic'
    capacity: 29
    tier: 'aaaaaaaaaaaaaa'
  }
  tags: {
  }
}
```

VirtualMachineScaleSetVM_Update_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
}
```

## microsoft.compute/virtualmachinescalesets/virtualmachines/extensions

Create VirtualMachineScaleSet VM extension.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'extType'
    autoUpgradeMinorVersion: true
    publisher: 'extPublisher'
    settings: {
      UserName: 'xyz@microsoft.com'
    }
    typeHandlerVersion: '1.2'
  }
}
```

## microsoft.compute/virtualmachinescalesets/virtualmachines/runcommands

Create VirtualMachineScaleSet VM run command.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2023-09-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    asyncExecution: false
    errorBlobManagedIdentity: {
    }
    errorBlobUri: 'https://mystorageaccount.blob.core.windows.net/mycontainer/MyScriptError.txt'
    outputBlobManagedIdentity: {
      clientId: '22d35efb-0c99-4041-8c5b-6d24db33a69a'
    }
    outputBlobUri: 'https://mystorageaccount.blob.core.windows.net/myscriptoutputcontainer/MyScriptoutput.txt'
    parameters: [
      {
        name: 'param1'
        value: 'value1'
      }
      {
        name: 'param2'
        value: 'value2'
      }
    ]
    runAsPassword: '<runAsPassword>'
    runAsUser: 'user1'
    source: {
      scriptUri: 'https://mystorageaccount.blob.core.windows.net/scriptcontainer/MyScript.ps1'
      scriptUriManagedIdentity: {
        objectId: '4231e4d2-33e4-4e23-96b2-17888afa6072'
      }
    }
    timeoutInSeconds: 3600
    treatFailureAsDeploymentFailure: true
  }
}
```
