# Microsoft.HybridContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hybridcontainerservice/kubernetesversions

PutKubernetesVersions
```bicep
resource exampleResource 'Microsoft.HybridContainerService/kubernetesVersions@2025-02-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
}
```

## microsoft.hybridcontainerservice/provisionedclusterinstances

PutProvisionedClusterInstance
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances@2025-02-01-preview' = {
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
        gpuCountPerNode: 1
        nodeLabels: {
          env: 'dev'
          goal: 'test'
        }
        nodeTaints: [
          'env=prod:NoSchedule'
          'sku=gpu:NoSchedule'
        ]
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
    clusterVMAccessProfile: {
      authorizedIPRanges: '127.0.0.1,127.0.0.2'
    }
    controlPlane: {
      count: 1
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

## microsoft.hybridcontainerservice/provisionedclusterinstances/agentpools

PutAgentPool
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances/agentPools@2025-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 1
    gpuCountPerNode: 1
    nodeLabels: {
      env: 'dev'
      goal: 'test'
    }
    nodeTaints: [
      'env=prod:NoSchedule'
      'sku=gpu:NoSchedule'
    ]
    osType: 'Linux'
    vmSize: 'Standard_A4_v2'
  }
}
```

## microsoft.hybridcontainerservice/provisionedclusterinstances/hybrididentitymetadata

CreateHybridIdentityMetadata
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances/hybridIdentityMetadata@2025-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    publicKey: '8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2'
    resourceUid: 'f8b82dff-38ef-4220-99ef-d3a3f86ddc6c'
  }
}
```

## microsoft.hybridcontainerservice/skus

PutVMSkus
```bicep
resource exampleResource 'Microsoft.HybridContainerService/skus@2025-02-01-preview' = {
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
resource exampleResource 'Microsoft.HybridContainerService/virtualNetworks@2025-02-01-preview' = {
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
      hci: {
        mocGroup: 'target-group'
        mocLocation: 'MocLocation'
        mocVnetName: 'vnet1'
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
