# Microsoft.ScVmm
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.scvmm/availabilitysets

AvailabilitySets_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/availabilitySets@2025-03-13' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName'
    type: 'customLocation'
  }
  location: 'jelevilan'
  properties: {
    availabilitySetName: 'njrpftunzo'
    vmmServerId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName'
  }
  tags: {
    key5701: 'cldtxloqh'
  }
}
```

AvailabilitySets_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/availabilitySets@2025-03-13' = {
  name: 'example'
  extendedLocation: {
  }
  location: 'jelevilan'
}
```

## microsoft.scvmm/clouds

Clouds_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/clouds@2025-03-13' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName'
    type: 'customLocation'
  }
  location: 'khwsdmaxfhmbu'
  properties: {
    cloudCapacity: {
    }
    inventoryItemId: 'qjd'
    uuid: '12345678-1234-1234-1234-12345678abcd'
    vmmServerId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName'
  }
  tags: {
    key4295: 'wngosgcbdifaxdobufuuqxtho'
  }
}
```

Clouds_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/clouds@2025-03-13' = {
  name: 'example'
  extendedLocation: {
  }
  location: 'khwsdmaxfhmbu'
}
```

## microsoft.scvmm/virtualmachineinstances

VirtualMachineInstances_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachineInstances@2025-03-13' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName'
    type: 'customLocation'
  }
  properties: {
    availabilitySets: [
      {
        name: 'lwbhaseo'
        id: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/availabilitySets/availabilitySetResourceName'
      }
    ]
    hardwareProfile: {
      cpuCount: 22
      dynamicMemoryEnabled: 'true'
      dynamicMemoryMaxMB: 2
      dynamicMemoryMinMB: 30
      isHighlyAvailable: 'true'
      limitCpuForMigration: 'true'
      memoryMB: 5
    }
    infrastructureProfile: {
      biosGuid: 'xixivxifyql'
      checkpointType: 'jkbpzjxpeegackhsvikrnlnwqz'
      cloudId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/clouds/cloudResourceName'
      generation: 28
      inventoryItemId: 'ihkkqmg'
      lastRestoredVMCheckpoint: {
        name: 'keqn'
        description: 'qurzfrgyflrh'
        checkpointID: 'wsqmrje'
        parentCheckpointID: 'hqhhzikoxunuqguouw'
      }
      templateId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/virtualMachineTemplates/virtualMachineTemplateName'
      uuid: 'hrpw'
      vmName: 'qovpayfydhcvfrhe'
      vmmServerId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName'
    }
    networkProfile: {
      networkInterfaces: [
        {
          name: 'kvofzqulbjlbtt'
          ipv4AddressType: 'Dynamic'
          ipv6AddressType: 'Dynamic'
          macAddress: 'oaeqqegt'
          macAddressType: 'Dynamic'
          nicId: 'roxpsvlo'
          virtualNetworkId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/virtualNetworks/virtualNetworkName'
        }
      ]
    }
    osProfile: {
      adminPassword: 'vavtppmmhlspydtkzxda'
      adminUsername: 'asasas'
      computerName: 'uuxpcxuxcufllc'
      domainName: 'vblzsoqxzlrygdulnefexjdezo'
      domainPassword: 'ixbwja'
      domainUsername: 'sn'
      osType: 'Windows'
      productKey: '12345-12345-12345-12345-12345'
      runOnceCommands: 'byxpnluptiwxycbbybsf;qwerty'
      timezone: 4
      workgroup: 'bsqftibgcnnjpvmuxligk'
    }
    storageProfile: {
      disks: [
        {
          name: 'fgnckfymwdsqnfxkdvexuaobe'
          bus: 8
          busType: 'zu'
          createDiffDisk: 'true'
          diskId: 'ltdrwcfjklpsimhzqyh'
          diskSizeGB: 30
          lun: 10
          storageQoSPolicy: {
            name: 'ceiyfrflu'
            id: 'o'
          }
          templateDiskId: 'lcdwrokpyvekqccclf'
          vhdType: 'cnbeeeylrvopigdynvgpkfp'
        }
      ]
    }
  }
}
```

VirtualMachineInstances_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachineInstances@2025-03-13' = {
  name: 'example'
  extendedLocation: {
  }
}
```

## microsoft.scvmm/virtualmachineinstances/guestagents

GuestAgents_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachineInstances/guestAgents@2025-03-13' = {
  parent: parentResource 
  name: 'example'
  properties: {
    credentials: {
      password: 'gkvbnmuahumuoibvscoxzfdqwvfuf'
      username: 'jqxuwirrcpfv'
    }
    httpProxyConfig: {
      httpsProxy: 'uoyzyticmohohomlkwct'
    }
    provisioningAction: 'install'
  }
}
```

GuestAgents_Create_MinimumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachineInstances/guestAgents@2025-03-13' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.scvmm/virtualmachinetemplates

VirtualMachineTemplates_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachineTemplates@2025-03-13' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName'
    type: 'customLocation'
  }
  location: 'ayxsyduviotylbojh'
  properties: {
    dynamicMemoryEnabled: 'true'
    inventoryItemId: 'qjrykoogccwlgkd'
    isCustomizable: 'true'
    isHighlyAvailable: 'true'
    limitCpuForMigration: 'true'
    osType: 'Windows'
    uuid: '12345678-1234-1234-1234-12345678abcd'
    vmmServerId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName'
  }
  tags: {
    key9494: 'kkbmfpwhmvlobm'
  }
}
```

VirtualMachineTemplates_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualMachineTemplates@2025-03-13' = {
  name: 'example'
  extendedLocation: {
  }
  location: 'ayxsyduviotylbojh'
}
```

## microsoft.scvmm/virtualnetworks

VirtualNetworks_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualNetworks@2025-03-13' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName'
    type: 'customLocation'
  }
  location: 'fky'
  properties: {
    inventoryItemId: 'bxn'
    uuid: '12345678-1234-1234-1234-12345678abcd'
    vmmServerId: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName'
  }
  tags: {
    key705: 'apgplvjdyocx'
  }
}
```

VirtualNetworks_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/virtualNetworks@2025-03-13' = {
  name: 'example'
  extendedLocation: {
  }
  location: 'fky'
}
```

## microsoft.scvmm/vmmservers

VmmServers_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/vmmServers@2025-03-13' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName'
    type: 'customLocation'
  }
  location: 'hslxkyzktvwpqbypvs'
  properties: {
    credentials: {
      password: 'gaecsnkjr'
      username: 'jbuoltypmrgqfi'
    }
    fqdn: 'pvzcjaqrswbvptgx'
    port: 4
  }
  tags: {
    key4834: 'vycgfkzjcyyuotwwq'
  }
}
```

VmmServers_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/vmmServers@2025-03-13' = {
  name: 'example'
  extendedLocation: {
  }
  location: 'hslxkyzktvwpqbypvs'
}
```

## microsoft.scvmm/vmmservers/inventoryitems

InventoryItems_Create_MaximumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/vmmServers/inventoryItems@2025-03-13' = {
  parent: parentResource 
  name: 'example'
  kind: 'M\\d_,V.'
  properties: {
    inventoryType: 'InventoryItemProperties'
  }
}
```

InventoryItems_Create_MinimumSet
```bicep
resource exampleResource 'Microsoft.ScVmm/vmmServers/inventoryItems@2025-03-13' = {
  parent: parentResource 
  name: 'example'
}
```
