# Microsoft.AzureStackHCI
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurestackhci/galleryimages

PutGalleryImage
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/galleryImages@2022-12-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    containerName: 'Default_Container'
    imagePath: 'C:\\test.vhdx'
  }
}
```

## microsoft.azurestackhci/marketplacegalleryimages

PutMarketplaceGalleryImage
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/marketplaceGalleryImages@2022-12-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    cloudInitDataSource: 'Azure'
    containerName: 'Default_Container'
    hyperVGeneration: 'V1'
    identifier: {
      offer: 'myOfferName'
      publisher: 'myPublisherName'
      sku: 'mySkuName'
    }
    osType: 'Windows'
    version: {
      name: '1.0.0'
    }
  }
}
```

## microsoft.azurestackhci/networkinterfaces

PutNetworkInterface
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/networkInterfaces@2022-12-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    ipConfigurations: [
      {
        name: 'ipconfig-sample'
        properties: {
          subnet: {
            id: 'test-vnet'
          }
        }
      }
    ]
  }
}
```

## microsoft.azurestackhci/storagecontainers

PutStorageContainer
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/storageContainers@2022-12-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    path: 'C:\\container_storage'
  }
}
```

## microsoft.azurestackhci/virtualharddisks

PutVirtualHardDisk
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualHardDisks@2022-12-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    diskSizeGB: 32
  }
}
```

## microsoft.azurestackhci/virtualmachines

PutVirtualMachineWithGalleryImage
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachines@2022-12-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    hardwareProfile: {
      vmSize: 'Default'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: 'test-nic'
        }
      ]
    }
    osProfile: {
      adminPassword: 'password'
      adminUsername: 'localadmin'
      computerName: 'luamaster'
    }
    securityProfile: {
      enableTPM: true
      uefiSettings: {
        secureBootEnabled: true
      }
    }
    storageProfile: {
      imageReference: {
        id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/galleryImages/test-gallery-image'
      }
      vmConfigStoragePathId: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/storageContainers/test-container'
    }
  }
}
```

PutVirtualMachineWithMarketplaceGalleryImage
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachines@2022-12-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    hardwareProfile: {
      vmSize: 'Default'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: 'test-nic'
        }
      ]
    }
    osProfile: {
      adminPassword: 'password'
      adminUsername: 'localadmin'
      computerName: 'luamaster'
    }
    securityProfile: {
      enableTPM: true
      uefiSettings: {
        secureBootEnabled: true
      }
    }
    storageProfile: {
      imageReference: {
        id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/marketplaceGalleryImages/test-marketplace-gallery-image'
      }
      vmConfigStoragePathId: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/storageContainers/test-container'
    }
  }
}
```

PutVirtualMachineWithOsDisk
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachines@2022-12-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    hardwareProfile: {
      vmSize: 'Default'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: 'test-nic'
        }
      ]
    }
    securityProfile: {
      enableTPM: true
      uefiSettings: {
        secureBootEnabled: true
      }
    }
    storageProfile: {
      osDisk: {
        id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/virtualHardDisks/test-vhd'
      }
      vmConfigStoragePathId: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/storageContainers/test-container'
    }
  }
}
```

## microsoft.azurestackhci/virtualmachines/extensions

Create or Update a Machine Extension (PUT)
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachines/extensions@2022-12-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus2euap'
  properties: {
    type: 'CustomScriptExtension'
    publisher: 'Microsoft.Compute'
    settings: {
      commandToExecute: 'powershell.exe -c "Get-Process | Where-Object { $_.CPU -gt 10000 }"'
    }
    typeHandlerVersion: '1.10'
  }
}
```

## microsoft.azurestackhci/virtualmachines/guestagents

CreateGuestAgent
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachines/guestAgents@2022-12-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    credentials: {
      password: '<password>'
      username: 'tempuser'
    }
    provisioningAction: 'install'
  }
}
```

## microsoft.azurestackhci/virtualmachines/hybrididentitymetadata

CreateHybridIdentityMetadata
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachines/hybridIdentityMetadata@2022-12-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    publicKey: '8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2'
  }
}
```

## microsoft.azurestackhci/virtualnetworks

PutVirtualNetwork
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualNetworks@2022-12-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    networkType: 'Transparent'
  }
}
```
