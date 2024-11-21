# Microsoft.HybridContainerService

## microsoft.hybridcontainerservice/provisionedclusterinstances

PutProvisionedClusterInstance
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances@2023-11-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
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
          '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourceGroups/test-arcappliance-resgrp/providers/Microsoft.AzureStackHCI/logicalNetworks/test-vnet-static'
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
    licenseProfile: {
      azureHybridBenefit: 'NotApplicable'
    }
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
      networkPolicy: 'calico'
      podCidr: '10.244.0.0/16'
    }
  }
}
```

## microsoft.hybridcontainerservice/provisionedclusterinstances/hybrididentitymetadata

CreateHybridIdentityMetadata
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances/hybridIdentityMetadata@2023-11-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    publicKey: '8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2'
    resourceUid: 'f8b82dff-38ef-4220-99ef-d3a3f86ddc6c'
  }
}
```

## microsoft.hybridcontainerservice/provisionedclusterinstances/agentpools

PutAgentPool
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances/agentPools@2023-11-15-preview' = {
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

## microsoft.hybridcontainerservice/kubernetesversions

PutKubernetesVersions
```bicep
resource exampleResource 'Microsoft.HybridContainerService/kubernetesVersions@2023-11-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
}
```

## microsoft.hybridcontainerservice/skus

PutVMSkus
```bicep
resource exampleResource 'Microsoft.HybridContainerService/skus@2023-11-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
}
```

## microsoft.hybridcontainerservice/virtualnetworks

PutVirtualNetwork
```bicep
resource exampleResource 'Microsoft.HybridContainerService/virtualNetworks@2023-11-15-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
  location: 'westus'
  properties: {
    dnsServers: [
      '192.168.0.1'
    ]
    gateway: '192.168.0.1'
    infraVnetProfile: {
      vmware: {
        segmentName: 'test-network'
      }
    }
    ipAddressPrefix: '192.168.0.0/16'
    vipPool: [
      {
        endIP: '192.168.0.50'
        startIP: '192.168.0.10'
      }
    ]
    vlanID: 10
    vmipPool: [
      {
        endIP: '192.168.0.130'
        startIP: '192.168.0.110'
      }
    ]
  }
}
```
