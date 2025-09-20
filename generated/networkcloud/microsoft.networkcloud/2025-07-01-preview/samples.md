# Microsoft.NetworkCloud
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.networkcloud/baremetalmachines

Create or update bare metal machine
```bicep
resource exampleResource 'Microsoft.NetworkCloud/bareMetalMachines@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    bmcConnectionString: 'bmcconnectionstring'
    bmcCredentials: {
      password: '{password}'
      username: 'bmcuser'
    }
    bmcMacAddress: '00:00:4f:00:57:00'
    bootMacAddress: '00:00:4e:00:58:af'
    machineDetails: 'User-provided machine details.'
    machineName: 'r01c001'
    machineSkuId: '684E-3B16-399E'
    rackId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/racks/rackName'
    rackSlot: 1
    serialNumber: 'BM1219XXX'
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/cloudservicesnetworks

Create or update cloud services network
```bicep
resource exampleResource 'Microsoft.NetworkCloud/cloudServicesNetworks@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    additionalEgressEndpoints: [
      {
        category: 'azure-resource-management'
        endpoints: [
          {
            domainName: 'storageaccountex.blob.core.windows.net'
            port: 443
          }
        ]
      }
    ]
    enableDefaultEgressEndpoints: 'False'
    storageOptions: {
      mode: 'Standard'
      sizeMiB: 1048576
      storageApplianceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/StorageAppliances/storageApplianceName'
    }
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/clustermanagers

Create or update cluster manager
```bicep
resource exampleResource 'Microsoft.NetworkCloud/clusterManagers@2025-07-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'location'
  properties: {
    analyticsWorkspaceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/microsoft.operationalInsights/workspaces/logAnalyticsWorkspaceName'
    fabricControllerId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/fabricControllerName'
    managedResourceGroupConfiguration: {
      name: 'my-managed-rg'
      location: 'East US'
    }
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

Create or update cluster manager with user assigned identity
```bicep
resource exampleResource 'Microsoft.NetworkCloud/clusterManagers@2025-07-01-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userIdentity1': {
      }
    }
  }
  location: 'location'
  properties: {
    analyticsWorkspaceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/microsoft.operationalInsights/workspaces/logAnalyticsWorkspaceName'
    fabricControllerId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/fabricControllerName'
    managedResourceGroupConfiguration: {
      name: 'my-managed-rg'
      location: 'East US'
    }
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/clusters

Create or update cluster
```bicep
resource exampleResource 'Microsoft.NetworkCloud/clusters@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterManagerExtendedLocationName'
    type: 'CustomLocation'
  }
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userIdentity1': {
      }
    }
  }
  location: 'location'
  properties: {
    aggregatorOrSingleRackDefinition: {
      bareMetalMachineConfigurationData: [
        {
          bmcCredentials: {
            password: 'https://keyvaultname.vault.azure.net/secrets/secretName'
            username: 'username'
          }
          bmcMacAddress: 'AA:BB:CC:DD:EE:FF'
          bootMacAddress: '00:BB:CC:DD:EE:FF'
          machineDetails: 'extraDetails'
          machineName: 'bmmName1'
          rackSlot: 1
          serialNumber: 'BM1219XXX'
        }
        {
          bmcCredentials: {
            password: 'https://keyvaultname.vault.azure.net/secrets/secretName'
            username: 'username'
          }
          bmcMacAddress: 'AA:BB:CC:DD:EE:00'
          bootMacAddress: '00:BB:CC:DD:EE:00'
          machineDetails: 'extraDetails'
          machineName: 'bmmName2'
          rackSlot: 2
          serialNumber: 'BM1219YYY'
        }
      ]
      networkRackId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkRacks/networkRackName'
      rackLocation: 'Foo Datacenter, Floor 3, Aisle 9, Rack 2'
      rackSerialNumber: 'AA1234'
      rackSkuId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/providers/Microsoft.NetworkCloud/rackSkus/rackSkuName'
      storageApplianceConfigurationData: [
        {
          adminCredentials: {
            password: 'https://keyvaultname.vault.azure.net/secrets/secretName'
            username: 'username'
          }
          rackSlot: 1
          serialNumber: 'BM1219XXX'
          storageApplianceName: 'vmName'
        }
      ]
    }
    analyticsOutputSettings: {
      analyticsWorkspaceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/microsoft.operationalInsights/workspaces/logAnalyticsWorkspaceName'
      associatedIdentity: {
        identityType: 'UserAssignedIdentity'
        userAssignedIdentityResourceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userIdentity1'
      }
    }
    clusterLocation: 'Foo Street, 3rd Floor, row 9'
    clusterType: 'SingleRack'
    clusterVersion: '1.0.0'
    commandOutputSettings: {
      associatedIdentity: {
        identityType: 'UserAssignedIdentity'
        userAssignedIdentityResourceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userIdentity1'
      }
      containerUrl: 'https://myaccount.blob.core.windows.net/mycontainer?restype=container'
      overrides: [
        {
          associatedIdentity: {
            identityType: 'UserAssignedIdentity'
            userAssignedIdentityResourceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userIdentity2'
          }
          commandOutputType: 'StorageRunReadCommands'
          containerUrl: 'https://myaccount.blob.core.windows.net/myContainer2?restype=container'
        }
      ]
    }
    computeDeploymentThreshold: {
      type: 'PercentSuccess'
      grouping: 'PerCluster'
      value: 90
    }
    computeRackDefinitions: [
      {
        bareMetalMachineConfigurationData: [
          {
            bmcCredentials: {
              password: 'https://keyvaultname.vault.azure.net/secrets/secretName'
              username: 'username'
            }
            bmcMacAddress: 'AA:BB:CC:DD:EE:FF'
            bootMacAddress: '00:BB:CC:DD:EE:FF'
            machineDetails: 'extraDetails'
            machineName: 'bmmName1'
            rackSlot: 1
            serialNumber: 'BM1219XXX'
          }
          {
            bmcCredentials: {
              password: 'https://keyvaultname.vault.azure.net/secrets/secretName'
              username: 'username'
            }
            bmcMacAddress: 'AA:BB:CC:DD:EE:00'
            bootMacAddress: '00:BB:CC:DD:EE:00'
            machineDetails: 'extraDetails'
            machineName: 'bmmName2'
            rackSlot: 2
            serialNumber: 'BM1219YYY'
          }
        ]
        networkRackId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkRacks/networkRackName'
        rackLocation: 'Foo Datacenter, Floor 3, Aisle 9, Rack 2'
        rackSerialNumber: 'AA1234'
        rackSkuId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/providers/Microsoft.NetworkCloud/rackSkus/rackSkuName'
        storageApplianceConfigurationData: [
          {
            adminCredentials: {
              password: 'https://keyvaultname.vault.azure.net/secrets/secretName'
              username: 'username'
            }
            rackSlot: 1
            serialNumber: 'BM1219XXX'
            storageApplianceName: 'vmName'
          }
        ]
      }
    ]
    managedResourceGroupConfiguration: {
      name: 'my-managed-rg'
      location: 'East US'
    }
    networkFabricId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkFabrics/fabricName'
    runtimeProtectionConfiguration: {
      enforcementLevel: 'OnDemand'
    }
    secretArchiveSettings: {
      associatedIdentity: {
        identityType: 'UserAssignedIdentity'
        userAssignedIdentityResourceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userIdentity1'
      }
      vaultUri: 'https://keyvaultname.vault.azure.net/'
    }
    updateStrategy: {
      maxUnavailable: 4
      strategyType: 'Rack'
      thresholdType: 'CountSuccess'
      thresholdValue: 4
      waitTimeMinutes: 10
    }
    vulnerabilityScanningSettings: {
      containerScan: 'Enabled'
    }
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/clusters/baremetalmachinekeysets

Create or update bare metal machine key set of cluster
```bicep
resource exampleResource 'Microsoft.NetworkCloud/clusters/bareMetalMachineKeySets@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    azureGroupId: 'f110271b-XXXX-4163-9b99-214d91660f0e'
    expiration: '2022-12-31T23:59:59.008Z'
    jumpHostsAllowed: [
      '192.0.2.1'
      '192.0.2.5'
    ]
    osGroupName: 'standardAccessGroup'
    privilegeLevel: 'Other'
    privilegeLevelName: 'SecurityScanner'
    userList: [
      {
        description: 'Needs access for troubleshooting as a part of the support team'
        azureUserName: 'userABC'
        sshPublicKey: {
          keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
        }
        userPrincipalName: 'userABC@contoso.com'
      }
      {
        description: 'Needs access for troubleshooting as a part of the support team'
        azureUserName: 'userXYZ'
        sshPublicKey: {
          keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
        }
        userPrincipalName: 'userABC@contoso.com'
      }
    ]
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/clusters/bmckeysets

Create or update baseboard management controller key set of cluster
```bicep
resource exampleResource 'Microsoft.NetworkCloud/clusters/bmcKeySets@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    azureGroupId: 'f110271b-XXXX-4163-9b99-214d91660f0e'
    expiration: '2022-12-31T23:59:59.008Z'
    privilegeLevel: 'Administrator'
    userList: [
      {
        description: 'Needs access for troubleshooting as a part of the support team'
        azureUserName: 'userABC'
        sshPublicKey: {
          keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
        }
        userPrincipalName: 'userABC@contoso.com'
      }
      {
        description: 'Needs access for troubleshooting as a part of the support team'
        azureUserName: 'userXYZ'
        sshPublicKey: {
          keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
        }
        userPrincipalName: 'userABC@contoso.com'
      }
    ]
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/clusters/metricsconfigurations

Create or update metrics configuration of cluster
```bicep
resource exampleResource 'Microsoft.NetworkCloud/clusters/metricsConfigurations@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    collectionInterval: 15
    enabledMetrics: [
      'metric1'
      'metric2'
    ]
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/kubernetesclusters

Create or update Kubernetes cluster
```bicep
resource exampleResource 'Microsoft.NetworkCloud/kubernetesClusters@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    aadConfiguration: {
      adminGroupObjectIds: [
        'ffffffff-ffff-ffff-ffff-ffffffffffff'
      ]
    }
    administratorConfiguration: {
      adminUsername: 'azure'
      sshPublicKeys: [
        {
          keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
        }
      ]
    }
    controlPlaneNodeConfiguration: {
      administratorConfiguration: {
        adminUsername: 'azure'
        sshPublicKeys: [
          {
            keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
          }
        ]
      }
      availabilityZones: [
        '1'
        '2'
        '3'
      ]
      count: 3
      vmSkuName: 'NC_G6_28_v1'
    }
    initialAgentPoolConfigurations: [
      {
        name: 'SystemPool-1'
        administratorConfiguration: {
          adminUsername: 'azure'
          sshPublicKeys: [
            {
              keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
            }
          ]
        }
        agentOptions: {
          hugepagesCount: 96
          hugepagesSize: '1G'
        }
        attachedNetworkConfiguration: {
          l2Networks: [
            {
              networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l2Networks/l2NetworkName'
              pluginType: 'DPDK'
            }
          ]
          l3Networks: [
            {
              ipamEnabled: 'False'
              networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName'
              pluginType: 'SRIOV'
            }
          ]
          trunkedNetworks: [
            {
              networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/trunkedNetworks/trunkedNetworkName'
              pluginType: 'MACVLAN'
            }
          ]
        }
        availabilityZones: [
          '1'
          '2'
          '3'
        ]
        count: 3
        labels: [
          {
            key: 'kubernetes.label'
            value: 'true'
          }
        ]
        mode: 'System'
        taints: [
          {
            key: 'kubernetes.taint'
            value: 'true:NoSchedule'
          }
        ]
        upgradeSettings: {
          maxSurge: '1'
        }
        vmSkuName: 'NC_P46_224_v1'
      }
    ]
    kubernetesVersion: '1.XX.Y'
    managedResourceGroupConfiguration: {
      name: 'my-managed-rg'
      location: 'East US'
    }
    networkConfiguration: {
      attachedNetworkConfiguration: {
        l2Networks: [
          {
            networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l2Networks/l2NetworkName'
            pluginType: 'DPDK'
          }
        ]
        l3Networks: [
          {
            ipamEnabled: 'False'
            networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName'
            pluginType: 'SRIOV'
          }
        ]
        trunkedNetworks: [
          {
            networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/trunkedNetworks/trunkedNetworkName'
            pluginType: 'MACVLAN'
          }
        ]
      }
      bgpServiceLoadBalancerConfiguration: {
        bgpAdvertisements: [
          {
            advertiseToFabric: 'True'
            communities: [
              '64512:100'
            ]
            ipAddressPools: [
              'pool1'
            ]
            peers: [
              'peer1'
            ]
          }
        ]
        bgpPeers: [
          {
            name: 'peer1'
            bfdEnabled: 'False'
            bgpMultiHop: 'False'
            holdTime: 'P300s'
            keepAliveTime: 'P300s'
            myAsn: 64512
            peerAddress: '203.0.113.254'
            peerAsn: 64497
            peerPort: 179
          }
        ]
        fabricPeeringEnabled: 'True'
        ipAddressPools: [
          {
            name: 'pool1'
            addresses: [
              '198.51.102.0/24'
            ]
            autoAssign: 'True'
            onlyUseHostIps: 'True'
          }
        ]
      }
      cloudServicesNetworkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/cloudServicesNetworks/cloudServicesNetworkName'
      cniNetworkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName'
      dnsServiceIp: '198.51.101.2'
      podCidrs: [
        '198.51.100.0/24'
      ]
      serviceCidrs: [
        '198.51.101.0/24'
      ]
    }
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

Create or update Kubernetes cluster with a layer 2 load balancer
```bicep
resource exampleResource 'Microsoft.NetworkCloud/kubernetesClusters@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    aadConfiguration: {
      adminGroupObjectIds: [
        'ffffffff-ffff-ffff-ffff-ffffffffffff'
      ]
    }
    administratorConfiguration: {
      adminUsername: 'azure'
      sshPublicKeys: [
        {
          keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
        }
      ]
    }
    controlPlaneNodeConfiguration: {
      administratorConfiguration: {
        adminUsername: 'azure'
        sshPublicKeys: [
          {
            keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
          }
        ]
      }
      availabilityZones: [
        '1'
        '2'
        '3'
      ]
      count: 3
      vmSkuName: 'NC_G6_28_v1'
    }
    initialAgentPoolConfigurations: [
      {
        name: 'SystemPool-1'
        administratorConfiguration: {
          adminUsername: 'azure'
          sshPublicKeys: [
            {
              keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
            }
          ]
        }
        agentOptions: {
          hugepagesCount: 96
          hugepagesSize: '1G'
        }
        attachedNetworkConfiguration: {
          l2Networks: [
            {
              networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l2Networks/l2NetworkName'
              pluginType: 'DPDK'
            }
          ]
          l3Networks: [
            {
              ipamEnabled: 'False'
              networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName'
              pluginType: 'SRIOV'
            }
          ]
          trunkedNetworks: [
            {
              networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/trunkedNetworks/trunkedNetworkName'
              pluginType: 'MACVLAN'
            }
          ]
        }
        availabilityZones: [
          '1'
          '2'
          '3'
        ]
        count: 3
        labels: [
          {
            key: 'kubernetes.label'
            value: 'true'
          }
        ]
        mode: 'System'
        taints: [
          {
            key: 'kubernetes.taint'
            value: 'true:NoSchedule'
          }
        ]
        upgradeSettings: {
          maxSurge: '1'
        }
        vmSkuName: 'NC_P46_224_v1'
      }
    ]
    kubernetesVersion: '1.XX.Y'
    managedResourceGroupConfiguration: {
      name: 'my-managed-rg'
      location: 'East US'
    }
    networkConfiguration: {
      attachedNetworkConfiguration: {
        l2Networks: [
          {
            networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l2Networks/l2NetworkName'
            pluginType: 'DPDK'
          }
        ]
        l3Networks: [
          {
            ipamEnabled: 'False'
            networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName'
            pluginType: 'SRIOV'
          }
        ]
        trunkedNetworks: [
          {
            networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/trunkedNetworks/trunkedNetworkName'
            pluginType: 'MACVLAN'
          }
        ]
      }
      cloudServicesNetworkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/cloudServicesNetworks/cloudServicesNetworkName'
      cniNetworkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName'
      dnsServiceIp: '198.51.101.2'
      l2ServiceLoadBalancerConfiguration: {
        ipAddressPools: [
          {
            name: 'pool1'
            addresses: [
              '198.51.102.2-198.51.102.254'
            ]
            autoAssign: 'True'
          }
        ]
      }
      podCidrs: [
        '198.51.100.0/24'
      ]
      serviceCidrs: [
        '198.51.101.0/24'
      ]
    }
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/kubernetesclusters/agentpools

Create or update Kubernetes cluster agent pool
```bicep
resource exampleResource 'Microsoft.NetworkCloud/kubernetesClusters/agentPools@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    administratorConfiguration: {
      adminUsername: 'azure'
      sshPublicKeys: [
        {
          keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
        }
      ]
    }
    agentOptions: {
      hugepagesCount: 96
      hugepagesSize: '1G'
    }
    attachedNetworkConfiguration: {
      l2Networks: [
        {
          networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l2Networks/l2NetworkName'
          pluginType: 'DPDK'
        }
      ]
      l3Networks: [
        {
          ipamEnabled: 'False'
          networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName'
          pluginType: 'SRIOV'
        }
      ]
      trunkedNetworks: [
        {
          networkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/trunkedNetworks/trunkedNetworkName'
          pluginType: 'MACVLAN'
        }
      ]
    }
    availabilityZones: [
      '1'
      '2'
      '3'
    ]
    count: 3
    labels: [
      {
        key: 'kubernetes.label'
        value: 'true'
      }
    ]
    mode: 'System'
    taints: [
      {
        key: 'kubernetes.taint'
        value: 'true:NoSchedule'
      }
    ]
    upgradeSettings: {
      maxSurge: '1'
    }
    vmSkuName: 'NC_P46_224_v1'
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/kubernetesclusters/features

Create or update Kubernetes cluster feature
```bicep
resource exampleResource 'Microsoft.NetworkCloud/kubernetesClusters/features@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'location'
  properties: {
    options: [
      {
        key: 'featureOptionName'
        value: 'featureOptionValue'
      }
    ]
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/l2networks

Create or update L2 network
```bicep
resource exampleResource 'Microsoft.NetworkCloud/l2Networks@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    hybridAksPluginType: 'DPDK'
    interfaceName: 'eth0'
    l2IsolationDomainId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/l2IsolationDomainName'
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/l3networks

Create or update L3 network
```bicep
resource exampleResource 'Microsoft.NetworkCloud/l3Networks@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    interfaceName: 'eth0'
    ipAllocationType: 'DualStack'
    ipv4ConnectedPrefix: '198.51.100.0/24'
    ipv6ConnectedPrefix: '2001:db8::/64'
    l3IsolationDomainId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/l3IsolationDomainName'
    vlan: 12
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/racks

Create or update rack
```bicep
resource exampleResource 'Microsoft.NetworkCloud/racks@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    availabilityZone: '1'
    rackLocation: 'Rack 28'
    rackSerialNumber: 'RACK_SERIAL_NUMBER'
    rackSkuId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/rackSkus/rackSkuName'
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/storageappliances

Create or update storage appliance
```bicep
resource exampleResource 'Microsoft.NetworkCloud/storageAppliances@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    administratorCredentials: {
      password: '{password}'
      username: 'adminUser'
    }
    rackId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/racks/rackName'
    rackSlot: 1
    serialNumber: 'BM1219XXX'
    storageApplianceSkuId: '684E-3B16-399E'
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/trunkednetworks

Create or update trunked network
```bicep
resource exampleResource 'Microsoft.NetworkCloud/trunkedNetworks@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    interfaceName: 'eth0'
    isolationDomainIds: [
      '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/l2IsolationDomains/l2IsolationDomainName'
      '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/l3IsolationDomainName'
    ]
    vlans: [
      12
      14
    ]
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/virtualmachines

Create or update virtual machine
```bicep
resource exampleResource 'Microsoft.NetworkCloud/virtualMachines@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ManagedIdentity/userAssignedIdentities/userIdentity1': {
      }
    }
  }
  location: 'location'
  properties: {
    adminUsername: 'username'
    bootMethod: 'UEFI'
    cloudServicesNetworkAttachment: {
      attachedNetworkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/cloudServicesNetworks/cloudServicesNetworkName'
      ipAllocationMethod: 'Dynamic'
    }
    cpuCores: 2
    memorySizeGB: 8
    networkAttachments: [
      {
        attachedNetworkId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName'
        defaultGateway: 'True'
        ipAllocationMethod: 'Dynamic'
        ipv4Address: '198.51.100.1'
        ipv6Address: '2001:0db8:0000:0000:0000:0000:0000:0000'
        networkAttachmentName: 'netAttachName01'
      }
    ]
    networkDataContent: 'bmV0d29ya0RhdGVTYW1wbGU='
    placementHints: [
      {
        hintType: 'Affinity'
        resourceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/racks/rackName'
        schedulingExecution: 'Hard'
        scope: ''
      }
    ]
    sshPublicKeys: [
      {
        keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
      }
    ]
    storageProfile: {
      osDisk: {
        createOption: 'Ephemeral'
        deleteOption: 'Delete'
        diskSizeGB: 120
      }
      volumeAttachments: [
        '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/volumes/volumeName'
      ]
    }
    userDataContent: 'dXNlckRhdGVTYW1wbGU='
    vmDeviceModel: 'T2'
    vmImage: 'myacr.azurecr.io/foobar:latest'
    vmImageRepositoryCredentials: {
      password: '{password}'
      registryUrl: 'myacr.azurecr.io'
      username: 'myuser'
    }
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/virtualmachines/consoles

Create or update virtual machine console
```bicep
resource exampleResource 'Microsoft.NetworkCloud/virtualMachines/consoles@2025-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterManagerExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    enabled: 'True'
    expiration: '2022-06-01T01:27:03.008Z'
    sshPublicKey: {
      keyData: 'ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm'
    }
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```

## microsoft.networkcloud/volumes

Create or update volume
```bicep
resource exampleResource 'Microsoft.NetworkCloud/volumes@2025-07-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName'
    type: 'CustomLocation'
  }
  location: 'location'
  properties: {
    sizeMiB: 1048576
    storageApplianceId: '/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/StorageAppliances/storageApplianceName'
  }
  tags: {
    key1: 'myvalue1'
    key2: 'myvalue2'
  }
}
```
