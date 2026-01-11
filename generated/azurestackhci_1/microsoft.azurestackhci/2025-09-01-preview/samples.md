# Microsoft.AzureStackHCI
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azurestackhci/galleryimages

PutGalleryImage
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/galleryImages@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    containerId: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/storageContainers/test-storage-container'
    imagePath: 'C:\\test.vhdx'
    osType: 'Linux'
  }
}
```

## microsoft.azurestackhci/loadbalancers

PutLoadBalancer
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/loadBalancers@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    backendAddressPools: [
      {
        name: 'web-backend'
        properties: {
          loadBalancerBackendAddresses: [
            {
              name: 'web-server-1'
              properties: {
                adminState: 'Up'
                networkInterfaceIPConfiguration: {
                  resourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/azure-local-rg/providers/Microsoft.AzureStackHCI/networkInterfaces/web-server-1-nic/ipConfigurations/primary'
                }
              }
            }
            {
              name: 'web-server-2'
              properties: {
                adminState: 'Up'
                networkInterfaceIPConfiguration: {
                  resourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/azure-local-rg/providers/Microsoft.AzureStackHCI/networkInterfaces/web-server-2-nic/ipConfigurations/primary'
                }
              }
            }
          ]
          virtualNetwork: {
            resourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/azure-local-rg/providers/Microsoft.AzureStackHCI/virtualNetworks/webVNet'
          }
        }
      }
    ]
    frontendIPConfigurations: [
      {
        name: 'web-frontend'
        properties: {
          publicIPAddress: {
            resourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/azure-local-rg/providers/Microsoft.AzureStackHCI/publicIPs/webPublicIP'
          }
        }
      }
    ]
    loadBalancingRules: [
      {
        name: 'http-rule'
        properties: {
          backendAddressPool: {
            name: 'web-backend'
          }
          backendPort: 80
          frontendIPConfiguration: {
            name: 'web-frontend'
          }
          frontendPort: 80
          idleTimeoutInMinutes: 4
          loadDistribution: 'Default'
          probe: {
            name: 'http-probe'
          }
          protocol: 'Tcp'
        }
      }
      {
        name: 'https-rule'
        properties: {
          backendAddressPool: {
            name: 'web-backend'
          }
          backendPort: 443
          frontendIPConfiguration: {
            name: 'web-frontend'
          }
          frontendPort: 443
          idleTimeoutInMinutes: 4
          loadDistribution: 'Default'
          protocol: 'Tcp'
        }
      }
    ]
    probes: [
      {
        name: 'http-probe'
        properties: {
          intervalInSeconds: 15
          numberOfProbes: 2
          port: 80
          requestPath: '/health'
          protocol: 'Http'
        }
      }
    ]
  }
}
```

## microsoft.azurestackhci/logicalnetworks

PutLogicalNetwork
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/logicalNetworks@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
}
```

## microsoft.azurestackhci/marketplacegalleryimages

PutMarketplaceGalleryImage
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/marketplaceGalleryImages@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    cloudInitDataSource: 'Azure'
    containerId: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/storageContainers/test-storage-container'
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

## microsoft.azurestackhci/natgateways

PutNatGateway
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/natGateways@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    publicIPAddresses: [
      {
        resourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/azure-local-rg/providers/Microsoft.AzureStackHCI/publicIPAddresses/outbound-pip'
      }
    ]
  }
}
```

## microsoft.azurestackhci/networkinterfaces

CreateNetworkInterfaceFromLocal
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/networkInterfaces@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'eastus'
  properties: {
    createFromLocal: true
    ipConfigurations: [
      {
        name: 'ipconfig-sample'
        properties: {
          subnet: {
            id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/logicalNetworks/test-lnet'
          }
        }
      }
    ]
  }
}
```

PutNetworkInterface
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/networkInterfaces@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'eastus'
  properties: {
    ipConfigurations: [
      {
        name: 'ipconfig-sample'
        properties: {
          subnet: {
            id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/logicalNetworks/test-lnet'
          }
        }
      }
    ]
  }
}
```

## microsoft.azurestackhci/networksecuritygroups

CreateNetworkSecurityGroup
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/networkSecurityGroups@2025-09-01-preview' = {
  name: 'example'
  location: 'eastus'
}
```

## microsoft.azurestackhci/networksecuritygroups/securityrules

SecurityRulesCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/networkSecurityGroups/securityRules@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  properties: {
    access: 'Allow'
    destinationAddressPrefixes: [
      '*'
    ]
    destinationPortRanges: [
      '80'
    ]
    direction: 'Inbound'
    priority: 130
    sourceAddressPrefixes: [
      '*'
    ]
    sourcePortRanges: [
      '*'
    ]
    protocol: '*'
  }
}
```

## microsoft.azurestackhci/publicipaddresses

CreatePublicIPAddress
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/publicIPAddresses@2025-09-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    ipAddress: '10.100.100.4'
    ipAllocationScope: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.AzureStackHCI/logicalNetworks/lnet1'
    publicIPAddressVersion: 'IPv4'
  }
}
```

## microsoft.azurestackhci/storagecontainers

PutStorageContainer
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/storageContainers@2025-09-01-preview' = {
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

CreateVirtualHardDiskFromLocal
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualHardDisks@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    createFromLocal: true
    localVhdPath: 'C:\\ClusterStorage\\UserStorage_2\\e35803d0bd82d61\\rehome555-dd1-a95612cb-f1fa-4daa-a4fd-272844fa512c-dogfoodarc.vhdx'
  }
}
```

PutVirtualHardDisk
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualHardDisks@2025-09-01-preview' = {
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

## microsoft.azurestackhci/virtualmachineinstances

CreateVirtualMachineInstanceFromLocal
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachineInstances@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  properties: {
    createFromLocal: true
    localVmName: 'DemoVM_restored'
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/networkInterfaces/test-nic'
        }
      ]
    }
    storageProfile: {
      dataDisks: [
        {
          id: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/testrg/providers/Microsoft.AzureStackHCI/virtualHardDisks/test-vhd'
        }
      ]
    }
  }
}
```

PutVirtualMachineInstanceWithGalleryImage
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachineInstances@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  properties: {
    hardwareProfile: {
      vmSize: 'Default'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/networkInterfaces/test-nic'
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

PutVirtualMachineInstanceWithGpu
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachineInstances@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  properties: {
    hardwareProfile: {
      virtualMachineGPUs: [
        {
          assignmentType: 'GpuDDA'
          partitionSizeMB: 0
        }
      ]
      vmSize: 'Default'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/networkInterfaces/test-nic'
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

PutVirtualMachineInstanceWithMarketplaceGalleryImage
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachineInstances@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  properties: {
    hardwareProfile: {
      vmSize: 'Default'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/networkInterfaces/test-nic'
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

PutVirtualMachineInstanceWithOsDisk
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachineInstances@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  properties: {
    hardwareProfile: {
      vmSize: 'Default'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/networkInterfaces/test-nic'
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

PutVirtualMachineInstanceWithVMConfigAgent
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachineInstances@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  properties: {
    hardwareProfile: {
      vmSize: 'Default'
    }
    networkProfile: {
      networkInterfaces: [
        {
          id: '/subscriptions/a95612cb-f1fa-4daa-a4fd-272844fa512c/resourceGroups/dogfoodarc/providers/Microsoft.AzureStackHCI/networkInterfaces/test-nic'
        }
      ]
    }
    osProfile: {
      adminPassword: 'password'
      adminUsername: 'localadmin'
      computerName: 'luamaster'
      windowsConfiguration: {
        provisionVMConfigAgent: true
      }
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

## microsoft.azurestackhci/virtualmachineinstances/guestagents

CreateGuestAgent
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualMachineInstances/guestAgents@2025-09-01-preview' = {
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

## microsoft.azurestackhci/virtualnetworks

PutVirtualNetwork
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualNetworks@2025-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/fd3c3665-1729-4b7b-9a38-238e83b0f98b/resourceGroups/dogfoodarc/providers/Microsoft.ExtendedLocation/customLocations/dogfood-location'
    type: 'CustomLocation'
  }
  location: 'West US2'
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/24'
      ]
    }
    dhcpOptions: {
      dnsServers: [
      ]
    }
  }
}
```

## microsoft.azurestackhci/virtualnetworks/subnets

PutVirtualNetworkSubnet
```bicep
resource exampleResource 'Microsoft.AzureStackHCI/virtualNetworks/subnets@2025-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/28'
  }
}
```
