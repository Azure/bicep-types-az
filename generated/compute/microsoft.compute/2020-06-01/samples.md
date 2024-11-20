# Microsoft.Compute

## microsoft.compute/availabilitysets

Create an availability set.
```bicep
resource exampleResource 'Microsoft.Compute/availabilitySets@2020-06-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    platformFaultDomainCount: 2
    platformUpdateDomainCount: 20
  }
}
```

## microsoft.compute/proximityplacementgroups

Create or Update a proximity placement group.
```bicep
resource exampleResource 'Microsoft.Compute/proximityPlacementGroups@2020-06-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    proximityPlacementGroupType: 'Standard'
  }
}
```

## microsoft.compute/hostgroups

Create or update a dedicated host group.
```bicep
resource exampleResource 'Microsoft.Compute/hostGroups@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/hostGroups/hosts@2020-06-01' = {
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

## microsoft.compute/sshpublickeys

Create a new SSH public key resource.
```bicep
resource exampleResource 'Microsoft.Compute/sshPublicKeys@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a platform-image vm with unmanaged os and data disks.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm from a custom image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm in an availability set.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with DiskEncryptionSet resource id in the os disk and data disk.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with Host Encryption using encryptionAtHost property.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with a marketplace image plan.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with a patch setting patchMode of AutomaticByOS.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with a patch setting patchMode of AutomaticByPlatform.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with a patch setting patchMode of Manual.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with an extensions time budget.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with boot diagnostics.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with empty data disks.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with ephemeral os disk provisioning in Cache disk using placement property.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with managed boot diagnostics.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with password authentication.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

Create a vm with ssh authentication.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines@2020-06-01' = {
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

## microsoft.compute/images

Create a virtual machine image from a blob with DiskEncryptionSet resource.
```bicep
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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

Create a virtual machine image from a managed disk.
```bicep
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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

Create a virtual machine image from a snapshot.
```bicep
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/images@2020-06-01' = {
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

## microsoft.compute/virtualmachinescalesets

Create a custom-image scale set from an unmanaged generalized os image.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

Create a scale set with DiskEncryptionSet resource in os disk and data disk.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

Create a scale set with Fpga Network Interfaces.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

Create a scale set with a marketplace image plan.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

Create a scale set with automatic repairs enabled
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    automaticRepairsPolicy: {
      enabled: true
      gracePeriod: 'PT30M'
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

Create a scale set with empty data disks on each vm.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

Create a scale set with managed boot diagnostics.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

Create a scale set with password authentication.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

Create a scale set with ssh authentication.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

Create a scale set with virtual machines in different zones.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets@2020-06-01' = {
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

## microsoft.compute/virtualmachinescalesets/virtualmachines/extensions

Create VirtualMachineScaleSet VM extension.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/extensions@2020-06-01' = {
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

## microsoft.compute/virtualmachines/runcommands

Create or update a run command.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachines/runCommands@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    asyncExecution: false
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
      script: 'Write-Host Hello World!'
    }
    timeoutInSeconds: 3600
  }
}
```

## microsoft.compute/virtualmachinescalesets/virtualmachines/runcommands

Create VirtualMachineScaleSet VM run command.
```bicep
resource exampleResource 'Microsoft.Compute/virtualMachineScaleSets/virtualMachines/runCommands@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    asyncExecution: false
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
      script: 'Write-Host Hello World!'
    }
    timeoutInSeconds: 3600
  }
}
```
