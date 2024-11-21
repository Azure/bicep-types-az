# Microsoft.HybridContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hybridcontainerservice/provisionedclusters

PutProvisionedCluster
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusters@2022-05-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
  location: 'westus'
  properties: {
    agentPoolProfiles: [
      {
        name: 'default-nodepool-1'
        count: 1
        osType: 'Linux'
        vmSize: 'Standard_A4_v2'
      }
    ]
    cloudProviderProfile: {
      infraNetworkProfile: {
        vnetSubnetIds: [
          '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourceGroups/test-arcappliance-resgrp/providers/Microsoft.HybridContainerService/virtualNetworks/test-vnet-static'
        ]
      }
      infraStorageProfile: {
        storageSpaceIds: [
          '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourceGroups/test-arcappliance-resgrp/providers/Microsoft.HybridContainerService/storageSpaces/test-storage'
        ]
      }
    }
    controlPlane: {
      count: 1
      linuxProfile: {
        ssh: {
          publicKeys: [
            {
              keyData: 'ssh-rsa AAAAB1NzaC1yc2EAAAADAQABAAACAQCY......'
            }
          ]
        }
      }
      osType: 'Linux'
      vmSize: 'Standard_A4_v2'
    }
    kubernetesVersion: 'v1.20.5'
    linuxProfile: {
      ssh: {
        publicKeys: [
          {
            keyData: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCY.......'
          }
        ]
      }
    }
    networkProfile: {
      loadBalancerProfile: {
        count: 1
        linuxProfile: {
          ssh: {
            publicKeys: [
              {
                keyData: 'ssh-rsa AAAAB2NzaC1yc2EAAAADAQABAAACAQCY......'
              }
            ]
          }
        }
        osType: 'Linux'
        vmSize: 'Standard_K8S3_v1'
      }
      loadBalancerSku: 'unstacked-haproxy'
      networkPolicy: 'calico'
      podCidr: '10.244.0.0/16'
    }
  }
}
```

## microsoft.hybridcontainerservice/provisionedclusters/agentpools

PutAgentPool
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusters/agentPools@2022-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    count: 1
    osType: 'Linux'
    vmSize: 'Standard_A4_v2'
  }
}
```

## microsoft.hybridcontainerservice/provisionedclusters/hybrididentitymetadata

CreateHybridIdentityMetadata
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusters/hybridIdentityMetadata@2022-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    publicKey: '8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2'
    resourceUid: 'f8b82dff-38ef-4220-99ef-d3a3f86ddc6c'
  }
}
```

## microsoft.hybridcontainerservice/storagespaces

PutStorageSpace
```bicep
resource exampleResource 'Microsoft.HybridContainerService/storageSpaces@2022-05-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
  location: 'westus'
  properties: {
    hciStorageProfile: {
      mocGroup: 'target-group'
      mocLocation: 'MocLocation'
      mocStorageContainer: 'WssdStorageContainer'
    }
  }
}
```

## microsoft.hybridcontainerservice/virtualnetworks

PutVirtualNetwork
```bicep
resource exampleResource 'Microsoft.HybridContainerService/virtualNetworks@2022-05-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
  location: 'westus'
  properties: {
    infraVnetProfile: {
      hci: {
        mocGroup: 'target-group'
        mocLocation: 'MocLocation'
        mocVnetName: 'test-vnet'
      }
    }
    vipPool: [
      {
        endIP: '192.168.0.50'
        startIP: '192.168.0.10'
      }
    ]
    vmipPool: [
      {
        endIP: '192.168.0.130'
        startIP: '192.168.0.110'
      }
    ]
  }
}
```
