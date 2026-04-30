# Microsoft.HybridContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.hybridcontainerservice/kubernetesversions

KubernetesVersionProfiles_CreateKubernetesVersions_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/kubernetesVersions@2026-04-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
}
```

KubernetesVersionProfiles_CreateKubernetesVersions_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/kubernetesVersions@2026-04-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
}
```

## microsoft.hybridcontainerservice/provisionedclusterinstances

ProvisionedClusters_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances@2026-04-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
  properties: {
    agentPoolProfiles: [
      {
        name: 'testnodepool'
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
        osSKU: 'CBLMariner'
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
      count: 2
      vmSize: 'Standard_A4_v2'
    }
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
      loadBalancerProfile: {
        count: 1
      }
      networkPolicy: 'cilium'
      podCidr: '10.244.0.0/16'
    }
    securityProfile: {
      customCATrustCertificates: [
        'Y3VzdG9tQ0FUcnVzdENlcnRpZmljYXRlcydzIGl0ZW0x'
        'Y3VzdG9tQ0FUcnVzdENlcnRpZmljYXRlcydzIGl0ZW0x'
        'Y3VzdG9tQ0FUcnVzdENlcnRpZmljYXRlcydzIGl0ZW0x'
        'Y3VzdG9tQ0FUcnVzdENlcnRpZmljYXRlcydzIGl0ZW0x'
      ]
      fipsImage: {
        enabled: true
      }
    }
    storageProfile: {
      smbCsiDriver: {
        enabled: true
      }
    }
  }
}
```

ProvisionedClusters_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances@2026-04-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
  properties: {
    networkProfile: {
      networkPolicy: 'calico'
    }
  }
}
```

## microsoft.hybridcontainerservice/provisionedclusterinstances/agentpools

AgentPools_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances/agentPools@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 5
    gpuCountPerNode: 1
    nodeLabels: {
      env: 'dev'
      goal: 'test'
    }
    nodeTaints: [
      'env=prod:NoSchedule'
      'sku=gpu:NoSchedule'
    ]
    osSKU: 'CBLMariner'
    osType: 'Linux'
    vmSize: 'Standard_A4_v2'
  }
}
```

AgentPools_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances/agentPools@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.hybridcontainerservice/provisionedclusterinstances/hybrididentitymetadata

HybridIdentityMetadataOperationGroup_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances/hybridIdentityMetadata@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    publicKey: '8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2'
    resourceUid: 'f8b82dff-38ef-4220-99ef-d3a3f86ddc6c'
  }
}
```

HybridIdentityMetadataOperationGroup_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/provisionedClusterInstances/hybridIdentityMetadata@2026-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    publicKey: '8ec7d60c-9700-40b1-8e6e-e5b2f6f477f2'
    resourceUid: 'f8b82dff-38ef-4220-99ef-d3a3f86ddc6c'
  }
}
```

## microsoft.hybridcontainerservice/skus

VmSkuProfiles_CreateVmSkus_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/skus@2026-04-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
  properties: {
    values: [
      {
      }
    ]
  }
}
```

VmSkuProfiles_CreateVmSkus_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/skus@2026-04-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/a3e42606-29b1-4d7d-b1d9-9ff6b9d3c71b/resourcegroups/test-arcappliance-resgrp/providers/microsoft.extendedlocation/customlocations/testcustomlocation'
    type: 'CustomLocation'
  }
  properties: {
    values: [
      {
      }
    ]
  }
}
```

## microsoft.hybridcontainerservice/virtualnetworks

VirtualNetworks_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/virtualNetworks@2026-04-01-preview' = {
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

VirtualNetworks_CreateOrUpdate_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.HybridContainerService/virtualNetworks@2026-04-01-preview' = {
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
