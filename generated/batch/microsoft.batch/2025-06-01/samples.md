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
      storageAccountId: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
    }
    keyVaultReference: {
      id: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.KeyVault/vaults/sample'
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
      storageAccountId: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
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
      storageAccountId: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
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
      '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
    }
  }
  location: 'japaneast'
  properties: {
    autoStorage: {
      storageAccountId: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
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
      storageAccountId: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Storage/storageAccounts/samplestorage'
    }
    keyVaultReference: {
      id: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.KeyVault/vaults/sample'
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
          sku: '2025-datacenter-smalldisk'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.windows amd64'
      }
    }
    networkConfiguration: {
      enableAcceleratedNetworking: true
      subnetId: '/subscriptions/subid/resourceGroups/rg1234/providers/Microsoft.Network/virtualNetworks/network1234/subnets/subnet123'
    }
    scaleSettings: {
      fixedScale: {
        targetDedicatedNodes: 1
        targetLowPriorityNodes: 0
      }
    }
    vmSize: 'Standard_D4d_v5'
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
          id: '/subscriptions/subid/resourceGroups/networking-group/providers/Microsoft.Compute/galleries/testgallery/images/testimagedef/versions/0.0.1'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 24.04'
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
            storageAccountType: 'Premium_LRS'
          }
          {
            caching: 'None'
            diskSizeGB: 200
            lun: 1
            storageAccountType: 'Standard_LRS'
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
          sku: '2025-datacenter-smalldisk'
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
    vmSize: 'Standard_D4d_v5'
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
          offer: 'ubuntu-24_04-lts'
          publisher: 'canonical'
          sku: 'server'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 24.04'
      }
    }
    scaleSettings: {
      autoScale: {
        evaluationInterval: 'PT5M'
        formula: '$TargetDedicatedNodes=1'
      }
    }
    vmSize: 'Standard_D4ds_v5'
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
          id: '/subscriptions/subid/resourceGroups/networking-group/providers/Microsoft.Compute/galleries/testgallery/images/testimagedef/versions/0.0.1'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 24.04'
      }
    }
    networkConfiguration: {
      publicIPAddressConfiguration: {
        provision: 'NoPublicIPAddresses'
      }
      subnetId: '/subscriptions/subid/resourceGroups/rg1234/providers/Microsoft.Network/virtualNetworks/network1234/subnets/subnet123'
    }
    vmSize: 'Standard_D4ds_v5'
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
          id: '/subscriptions/subid/resourceGroups/networking-group/providers/Microsoft.Compute/galleries/testgallery/images/testimagedef/versions/0.0.1'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 24.04'
      }
    }
    networkConfiguration: {
      publicIPAddressConfiguration: {
        ipAddressIds: [
          '/subscriptions/subid1/resourceGroups/rg13/providers/Microsoft.Network/publicIPAddresses/ip135'
        ]
        provision: 'UserManaged'
      }
      subnetId: '/subscriptions/subid/resourceGroups/rg1234/providers/Microsoft.Network/virtualNetworks/network1234/subnets/subnet123'
    }
    vmSize: 'Standard_D4ds_v5'
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
          offer: 'ubuntu-24_04-lts'
          publisher: 'canonical'
          sku: 'server'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 24.04'
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
    vmSize: 'Standard_D4ds_v5'
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
          offer: 'ubuntu-24_04-lts'
          publisher: 'Canonical'
          sku: 'server'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 24.04'
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
  tags: {
    TagName1: 'TagValue1'
    TagName2: 'TagValue2'
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
    vmSize: 'Standard_D4ds_v5'
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
      '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
      '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2': {
      }
    }
  }
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          offer: 'ubuntu-24_04-lts'
          publisher: 'canonical'
          sku: 'server'
          version: 'latest'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 24.04'
      }
    }
    scaleSettings: {
      autoScale: {
        evaluationInterval: 'PT5M'
        formula: '$TargetDedicatedNodes=1'
      }
    }
    vmSize: 'Standard_D4ds_v5'
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
          offer: 'ubuntu-24_04-lts'
          publisher: 'Canonical'
          sku: 'server'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 24.04'
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
    vmSize: 'Standard_D4d_v5'
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
    vmSize: 'Standard_D4ds_v5'
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
          id: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Compute/galleries/myGallery/serviceArtifacts/myServiceArtifact/vmArtifactsProfiles/vmArtifactsProfile'
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
    vmSize: 'Standard_D4ds_v5'
  }
}
```
