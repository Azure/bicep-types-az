# Microsoft.Batch
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.batch/batchaccounts

BatchAccountCreate_BYOS
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts@2024-02-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts@2024-02-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts@2024-02-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts@2024-02-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
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
resource exampleResource 'Microsoft.Batch/batchAccounts@2024-02-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/applications@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allowUpdates: false
    displayName: 'myAppName'
  }
}
```

## microsoft.batch/batchaccounts/certificates

CreateCertificate - Full
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/certificates@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'Pfx'
    data: 'MIIJsgIBAzCCCW4GCSqGSIb3DQE...'
    password: '<ExamplePassword>'
    thumbprint: '0a0e4f50d51beadeac1d35afc5116098e7902e6e'
    thumbprintAlgorithm: 'sha1'
  }
}
```

CreateCertificate - Minimal Cer
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/certificates@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'Cer'
    data: 'MIICrjCCAZagAwI...'
  }
}
```

CreateCertificate - Minimal Pfx
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/certificates@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    data: 'MIIJsgIBAzCCCW4GCSqGSIb3DQE...'
    password: '<ExamplePassword>'
  }
}
```

## microsoft.batch/batchaccounts/pools

CreatePool - accelerated networking
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
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
      subnetId: '/subscriptions/subid/resourceGroups/rg1234/providers/Microsoft.Network/virtualNetworks/network1234/subnets/subnet123'
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

CreatePool - Custom Image
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          id: '/subscriptions/subid/resourceGroups/networking-group/providers/Microsoft.Compute/galleries/testgallery/images/testimagedef/versions/0.0.1'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
      }
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - Full CloudServiceConfiguration
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    applicationLicenses: [
      'app-license0'
      'app-license1'
    ]
    applicationPackages: [
      {
        id: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/sampleacct/pools/testpool/applications/app_1234'
        version: 'asdf'
      }
    ]
    certificates: [
      {
        id: '/subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/sampleacct/pools/testpool/certificates/sha1-1234567'
        storeLocation: 'LocalMachine'
        storeName: 'MY'
        visibility: [
          'RemoteUser'
        ]
      }
    ]
    deploymentConfiguration: {
      cloudServiceConfiguration: {
        osFamily: '4'
        osVersion: 'WA-GUEST-OS-4.45_201708-01'
      }
    }
    displayName: 'my-pool-name'
    interNodeCommunication: 'Enabled'
    metadata: [
      {
        name: 'metadata-1'
        value: 'value-1'
      }
      {
        name: 'metadata-2'
        value: 'value-2'
      }
    ]
    networkConfiguration: {
      publicIPAddressConfiguration: {
        ipAddressIds: [
          '/subscriptions/subid1/resourceGroups/rg13/providers/Microsoft.Network/publicIPAddresses/ip135'
          '/subscriptions/subid2/resourceGroups/rg24/providers/Microsoft.Network/publicIPAddresses/ip268'
        ]
        provision: 'UserManaged'
      }
      subnetId: '/subscriptions/subid/resourceGroups/rg1234/providers/Microsoft.Network/virtualNetworks/network1234/subnets/subnet123'
    }
    scaleSettings: {
      fixedScale: {
        nodeDeallocationOption: 'TaskCompletion'
        resizeTimeout: 'PT8M'
        targetDedicatedNodes: 6
        targetLowPriorityNodes: 28
      }
    }
    startTask: {
      commandLine: 'cmd /c SET'
      environmentSettings: [
        {
          name: 'MYSET'
          value: '1234'
        }
      ]
      maxTaskRetryCount: 6
      resourceFiles: [
        {
          fileMode: '777'
          filePath: 'c:\\temp\\gohere'
          httpUrl: 'https://testaccount.blob.core.windows.net/example-blob-file'
        }
      ]
      userIdentity: {
        autoUser: {
          elevationLevel: 'Admin'
          scope: 'Pool'
        }
      }
      waitForSuccess: true
    }
    taskSchedulingPolicy: {
      nodeFillType: 'Pack'
    }
    taskSlotsPerNode: 13
    userAccounts: [
      {
        name: 'username1'
        elevationLevel: 'Admin'
        linuxUserConfiguration: {
          gid: 4567
          sshPrivateKey: 'sshprivatekeyvalue'
          uid: 1234
        }
        password: '<ExamplePassword>'
      }
    ]
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - Full VirtualMachineConfiguration
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
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

CreatePool - Minimal CloudServiceConfiguration
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      cloudServiceConfiguration: {
        osFamily: '5'
      }
    }
    scaleSettings: {
      fixedScale: {
        targetDedicatedNodes: 3
      }
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - Minimal VirtualMachineConfiguration
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          id: '/subscriptions/subid/resourceGroups/networking-group/providers/Microsoft.Compute/galleries/testgallery/images/testimagedef/versions/0.0.1'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
      }
    }
    networkConfiguration: {
      publicIPAddressConfiguration: {
        provision: 'NoPublicIPAddresses'
      }
      subnetId: '/subscriptions/subid/resourceGroups/rg1234/providers/Microsoft.Network/virtualNetworks/network1234/subnets/subnet123'
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - Public IPs
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          id: '/subscriptions/subid/resourceGroups/networking-group/providers/Microsoft.Compute/galleries/testgallery/images/testimagedef/versions/0.0.1'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
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
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - ResourceTags
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
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
      }
    }
    resourceTags: {
      TagName1: 'TagValue1'
      TagName2: 'TagValue2'
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

CreatePool - SecurityProfile
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
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

CreatePool - UpgradePolicy
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1: {
      }
      /subscriptions/subid/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id2: {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
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
    targetNodeCommunicationMode: 'Default'
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - VirtualMachineConfiguration OSDisk
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2024-02-01' = {
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
    vmSize: 'Standard_d4s_v3'
  }
}
```
