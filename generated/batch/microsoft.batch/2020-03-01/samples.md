# Microsoft.Batch
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.batch/batchaccounts

BatchAccountCreate_BYOS
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts@2020-03-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts@2020-03-01' = {
  name: 'example'
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
resource exampleResource 'Microsoft.Batch/batchAccounts@2020-03-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/applications@2020-03-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/certificates@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'Pfx'
    data: 'MIIJsgIBAzCCCW4GCSqGSIb3DQE...'
    password: '<password>'
    thumbprint: '0a0e4f50d51beadeac1d35afc5116098e7902e6e'
    thumbprintAlgorithm: 'sha1'
  }
}
```

CreateCertificate - Minimal Cer
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/certificates@2020-03-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/certificates@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    data: 'MIIJsgIBAzCCCW4GCSqGSIb3DQE...'
    password: '<password>'
  }
}
```

## microsoft.batch/batchaccounts/pools

CreatePool - Custom Image
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          id: '/subscriptions/subid/resourceGroups/networking-group/providers/Microsoft.Compute/images/image-123'
        }
        nodeAgentSkuId: 'batch.node.ubuntu 18.04'
      }
    }
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - Full Example
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2020-03-01' = {
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
    maxTasksPerNode: 13
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
                  '*'
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
    userAccounts: [
      {
        name: 'username1'
        elevationLevel: 'Admin'
        linuxUserConfiguration: {
          gid: 4567
          sshPrivateKey: 'sshprivatekeyvalue'
          uid: 1234
        }
        password: 'examplepassword'
      }
    ]
    vmSize: 'STANDARD_D4'
  }
}
```

CreatePool - Full VirtualMachineConfiguration
```bicep
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2020-03-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2020-03-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2020-03-01' = {
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
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          id: '/subscriptions/subid/resourceGroups/networking-group/providers/Microsoft.Compute/images/image-123'
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
resource exampleResource 'Microsoft.Batch/batchAccounts/pools@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    deploymentConfiguration: {
      virtualMachineConfiguration: {
        imageReference: {
          id: '/subscriptions/subid/resourceGroups/networking-group/providers/Microsoft.Compute/images/image-123'
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
