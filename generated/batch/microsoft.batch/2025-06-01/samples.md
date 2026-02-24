# Microsoft.Batch
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.batch/batchaccounts

BatchAccountCreate_BYOS
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts@2025-06-01' = {
  name: 'example'
  location: 'japaneast'
  properties: {
    autoStorage: {
      storageAccountId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
    }
    keyVaultReference: {
      id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.KeyVault/vaults/sample'
      url: 'http://sample.vault.azure.net/'
    }
    poolAllocationMode: 'UserSubscription'
  }
}
```

BatchAccountCreate_Default
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts@2025-06-01' = {
  name: 'example'
  location: 'japaneast'
  properties: {
    autoStorage: {
      storageAccountId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
    }
  }
}
```

BatchAccountCreate_SystemAssignedIdentity
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts@2025-06-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'japaneast'
  properties: {
    autoStorage: {
      storageAccountId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
    }
  }
}
```

BatchAccountCreate_UserAssignedIdentity
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts@2025-06-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
    }
  }
  location: 'japaneast'
  properties: {
    autoStorage: {
      storageAccountId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
    }
  }
}
```

PrivateBatchAccountCreate
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts@2025-06-01' = {
  name: 'example'
  location: 'japaneast'
  properties: {
    autoStorage: {
      storageAccountId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
    }
    keyVaultReference: {
      id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.KeyVault/vaults/sample'
      url: 'http://sample.vault.azure.net/'
    }
    publicNetworkAccess: 'Disabled'
  }
}
```

## microsoft.batch/batchaccounts/applications

ApplicationCreate
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/applications@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allowUpdates: false
    displayName: 'myAppName'
  }
}
```

## microsoft.batch/batchaccounts/pools

CreatePool - accelerated networking
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-datacenter-smalldisk'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.windows amd64'
      }
    }
    networkConfiguration: {
      enableAcceleratedNetworking: true
      subnetId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/rg1234/providers/Microsoft.Network/virtualNetworks/network1234/subnets/subnet123'
    }
    scaleSettings: {
      fixedScale: {
        targetDedicatedNodes: 1
        targetLowPriorityNodes: 0
      }
    }
    vmSize: 'STANDARD_D1_V2'
  }
}
```

CreatePool - confidential disk encryption set for user subscription accounts
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        dataDisks: [
          {
            diskSizeGB: 1024
            lun: 0
            managedDisk: {
              diskEncryptionSet: {
                id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Compute/diskEncryptionSets/DiskEncryptionSetId'
              }
              storageAccountType: 'Standard_LRS'
            }
          }
        ]
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2019-datacenter-core-g2'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.windows amd64'
        osDisk: {
          managedDisk: {
            diskEncryptionSet: {
              id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Compute/diskEncryptionSets/DiskEncryptionSetId'
            }
            securityProfile: {
              diskEncryptionSet: {
                id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Compute/diskEncryptionSets/ConfidentialDiskEncryptionSetId'
              }
              securityEncryptionType: 'DiskWithVMGuestState'
            }
            storageAccountType: 'Standard_LRS'
          }
        }
        securityProfile: {
          encryptionAtHost: false
          securityType: 'confidentialVM'
          uefiSettings: {
            secureBootEnabled: true
            vTpmEnabled: true
          }
        }
      }
    }
    scaleSettings: {
      fixedScale: {
        resizeTimeout: 'PT15M'
        targetDedicatedNodes: 1
      }
    }
    taskSchedulingPolicy: {
      nodeFillType: 'Pack'
    }
    vmSize: 'Standard_DC2as_v5'
  }
}
```

CreatePool - Custom Image
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/networking-group/providers/Microsoft.Compute/galleries/testgallery/images/testimagedef/versions/0.0.1'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
      }
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - customer managed key for Batch managed accounts
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
    }
  }
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        diskEncryptionConfiguration: {
          customerManagedKey: {
            identityReference: {
              resourceId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1'
            }
            keyUrl: 'http://sample.vault.azure.net//keys/cmk/bb60031a6d4545d3a60d3f94588538c9'
          }
          targets: [
            'OsDisk'
          ]
        }
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2022-Datacenter'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.windows amd64'
      }
    }
    scaleSettings: {
      fixedScale: {
        resizeTimeout: 'PT15M'
        targetDedicatedNodes: 1
      }
    }
    vmSize: 'Standard_D4ds_v5'
  }
}
```

CreatePool - disk encryption set for user subscription accounts
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2022-Datacenter'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.windows amd64'
        osDisk: {
          managedDisk: {
            diskEncryptionSet: {
              id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Compute/diskEncryptionSets/DiskEncryptionSetId'
            }
            storageAccountType: 'Standard_LRS'
          }
        }
        securityProfile: {
          encryptionAtHost: false
        }
      }
    }
    scaleSettings: {
      fixedScale: {
        resizeTimeout: 'PT15M'
        targetDedicatedNodes: 1
      }
    }
    taskSchedulingPolicy: {
      nodeFillType: 'Pack'
    }
    vmSize: 'Standard_D4ds_v5'
  }
}
```

CreatePool - dual stack networking
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'ubuntu-24_04-lts'
          publisher: 'Canonical'
          sku: 'server'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 24.04'
      }
    }
    networkConfiguration: {
      endpointConfiguration: {
        inboundNatPools: [
          {
            name: 'sshpool'
            backendPort: 22
            frontendPortRangeEnd: 40500
            frontendPortRangeStart: 40000
            networkSecurityGroupRules: [
              {
                access: 'Allow'
                priority: 1000
                sourceAddressPrefix: '*'
                sourcePortRanges: [
                  '*'
                ]
              }
            ]
            protocol: 'TCP'
          }
        ]
      }
      publicIPAddressConfiguration: {
        ipFamilies: [
          'IPv4'
          'IPv6'
        ]
      }
    }
    scaleSettings: {
      fixedScale: {
        targetDedicatedNodes: 1
        targetLowPriorityNodes: 0
      }
    }
    vmSize: 'Standard_D4ds_v5'
  }
}
```

CreatePool - Full VirtualMachineConfiguration
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        dataDisks: [
          {
            caching: 'ReadWrite'
            diskSizeGB: 30
            lun: 0
            managedDisk: {
              storageAccountType: 'StandardSSD_LRS'
            }
          }
          {
            caching: 'None'
            diskSizeGB: 200
            lun: 1
            managedDisk: {
              storageAccountType: 'Premium_LRS'
            }
          }
        ]
        diskEncryptionConfiguration: {
          targets: [
            'OsDisk'
            'TemporaryDisk'
          ]
        }
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2016-Datacenter-SmallDisk'
          version: 'latest'
        }
        licenseType: 'Windows_Server'
        nodeAgentSkuId: 'batch.node.windows amd64'
        nodePlacementConfiguration: {
          policy: 'Zonal'
        }
        osDisk: {
          ephemeralOSDiskSettings: {
            placement: 'CacheDisk'
          }
        }
        windowsConfiguration: {
          enableAutomaticUpdates: false
        }
      }
    }
    networkConfiguration: {
      endpointConfiguration: {
        inboundNatPools: [
          {
            name: 'testnat'
            backendPort: 12001
            frontendPortRangeEnd: 15100
            frontendPortRangeStart: 15000
            networkSecurityGroupRules: [
              {
                access: 'Allow'
                priority: 150
                sourceAddressPrefix: '192.100.12.45'
                sourcePortRanges: [
                  '1'
                  '2'
                ]
              }
              {
                access: 'Deny'
                priority: 3500
                sourceAddressPrefix: '*'
                sourcePortRanges: [
                  '*'
                ]
              }
            ]
            protocol: 'TCP'
          }
        ]
      }
    }
    scaleSettings: {
      autoScale: {
        evaluationInterval: 'PT5M'
        formula: '$TargetDedicatedNodes=1'
      }
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - Minimal VirtualMachineConfiguration
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'UbuntuServer'
          publisher: 'Canonical'
          sku: '18.04-LTS'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
      }
    }
    scaleSettings: {
      autoScale: {
        evaluationInterval: 'PT5M'
        formula: '$TargetDedicatedNodes=1'
      }
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - No public IP
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/networking-group/providers/Microsoft.Compute/galleries/testgallery/images/testimagedef/versions/0.0.1'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
      }
    }
    networkConfiguration: {
      publicIPAddressConfiguration: {
        provision: 'NoPublicIPAddresses'
      }
      subnetId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/rg1234/providers/Microsoft.Network/virtualNetworks/network1234/subnets/subnet123'
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - Public IPs
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/networking-group/providers/Microsoft.Compute/galleries/testgallery/images/testimagedef/versions/0.0.1'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
      }
    }
    networkConfiguration: {
      publicIPAddressConfiguration: {
        ipAddressIds: [
          '/subscriptions/12345678-1234-1234-1234-1234567890121/resourceGroups/rg13/providers/Microsoft.Network/publicIPAddresses/ip135'
        ]
        provision: 'UserManaged'
      }
      subnetId: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/rg1234/providers/Microsoft.Network/virtualNetworks/network1234/subnets/subnet123'
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - SecurityProfile
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'UbuntuServer'
          publisher: 'Canonical'
          sku: '18_04-lts-gen2'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
        securityProfile: {
          encryptionAtHost: true
          securityType: 'trustedLaunch'
          uefiSettings: {
            secureBootEnabled: {
            }
            vTpmEnabled: false
          }
        }
      }
    }
    scaleSettings: {
      fixedScale: {
        targetDedicatedNodes: 1
        targetLowPriorityNodes: 0
      }
    }
    vmSize: 'Standard_d4s_v3'
  }
}
```

CreatePool - Tags
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: '0001-com-ubuntu-server-jammy'
          publisher: 'Canonical'
          sku: '22_04-lts'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 22.04'
      }
    }
    scaleSettings: {
      fixedScale: {
        targetDedicatedNodes: 1
        targetLowPriorityNodes: 0
      }
    }
    vmSize: 'Standard_d4s_v3'
  }
}
```

CreatePool - UpgradePolicy
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2019-datacenter-smalldisk'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.windows amd64'
        nodePlacementConfiguration: {
          policy: 'Zonal'
        }
        windowsConfiguration: {
          enableAutomaticUpdates: false
        }
      }
    }
    scaleSettings: {
      fixedScale: {
        targetDedicatedNodes: 2
        targetLowPriorityNodes: 0
      }
    }
    upgradePolicy: {
      automaticOSUpgradePolicy: {
        disableAutomaticRollback: true
        enableAutomaticOSUpgrade: true
        osRollingUpgradeDeferral: true
        useRollingUpgradePolicy: true
      }
      mode: 'automatic'
      rollingUpgradePolicy: {
        enableCrossZoneUpgrade: true
        maxBatchInstancePercent: 20
        maxUnhealthyInstancePercent: 20
        maxUnhealthyUpgradedInstancePercent: 20
        pauseTimeBetweenBatches: 'PT0S'
        prioritizeUnhealthyInstances: false
        rollbackFailedInstancesOnPolicyBreach: false
      }
    }
    vmSize: 'Standard_d4s_v3'
  }
}
```

CreatePool - UserAssignedIdentities
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
      '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2': {
      }
    }
  }
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'UbuntuServer'
          publisher: 'Canonical'
          sku: '18.04-LTS'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
      }
    }
    scaleSettings: {
      autoScale: {
        evaluationInterval: 'PT5M'
        formula: '$TargetDedicatedNodes=1'
      }
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - VirtualMachineConfiguration Extensions
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: '0001-com-ubuntu-server-focal'
          publisher: 'Canonical'
          sku: '20_04-lts'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 20.04'
        extensions: [
          {
            name: 'batchextension1'
            type: 'KeyVaultForLinux'
            autoUpgradeMinorVersion: true
            enableAutomaticUpgrade: true
            publisher: 'Microsoft.Azure.KeyVault'
            settings: {
              authenticationSettingsKey: 'authenticationSettingsValue'
              secretsManagementSettingsKey: 'secretsManagementSettingsValue'
            }
            typeHandlerVersion: '2.0'
          }
        ]
      }
    }
    scaleSettings: {
      autoScale: {
        evaluationInterval: 'PT5M'
        formula: '$TargetDedicatedNodes=1'
      }
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - VirtualMachineConfiguration OSDisk
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'windowsserver'
          publisher: 'microsoftwindowsserver'
          sku: '2022-datacenter-smalldisk'
        }
        nodeAgentSkuId: 'batch.node.windows amd64'
        osDisk: {
          caching: 'ReadWrite'
          diskSizeGB: 100
          managedDisk: {
            storageAccountType: 'StandardSSD_LRS'
          }
          writeAcceleratorEnabled: false
        }
      }
    }
    scaleSettings: {
      fixedScale: {
        targetDedicatedNodes: 1
        targetLowPriorityNodes: 0
      }
    }
    vmSize: 'Standard_d2s_v3'
  }
}
```

CreatePool - VirtualMachineConfiguration ServiceArtifactReference
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2025-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'WindowsServer'
          publisher: 'MicrosoftWindowsServer'
          sku: '2019-datacenter-smalldisk'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.windows amd64'
        serviceArtifactReference: {
          id: '/subscriptions/12345678-1234-1234-1234-123456789012/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Compute/galleries/myGallery/serviceArtifacts/myServiceArtifact/vmArtifactsProfiles/vmArtifactsProfile'
        }
        windowsConfiguration: {
          enableAutomaticUpdates: false
        }
      }
    }
    scaleSettings: {
      fixedScale: {
        targetDedicatedNodes: 2
        targetLowPriorityNodes: 0
      }
    }
    upgradePolicy: {
      automaticOSUpgradePolicy: {
        enableAutomaticOSUpgrade: true
      }
      mode: 'automatic'
    }
    vmSize: 'Standard_d4s_v3'
  }
}
```
