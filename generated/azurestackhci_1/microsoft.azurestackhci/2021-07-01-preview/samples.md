# Microsoft.AzureStackHCI
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurestackhci/galleryimages

PutGalleryImage
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/galleryimages@2021-07-01-preview' = {
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

## microsoft.azurestackhci/networkinterfaces

PutNetworkInterface
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/networkinterfaces@2021-07-01-preview' = {
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

## microsoft.azurestackhci/virtualharddisks

PutVirtualHardDisk
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualharddisks@2021-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    diskSizeBytes: 32
  }
}
```

## microsoft.azurestackhci/virtualmachines

PutVirtualMachine
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualmachines@2021-07-01-preview' = {
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
    storageProfile: {
      imageReference: {
        name: 'test-gallery-image'
      }
    }
  }
}
```

## microsoft.azurestackhci/virtualnetworks

PutVirtualNetwork
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualnetworks@2021-07-01-preview' = {
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
