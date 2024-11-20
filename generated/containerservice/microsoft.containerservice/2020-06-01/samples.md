# Microsoft.ContainerService

## microsoft.containerservice/managedclusters

Create Managed Cluster with PPG
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2020-06-01' = {
  name: 'example'
  location: 'location1'
  properties: {
    addonProfiles: {
    }
    agentPoolProfiles: [
      {
        name: 'nodepool1'
        type: 'VirtualMachineScaleSets'
        count: 3
        enableNodePublicIP: true
        mode: 'System'
        nodeImageVersion: 'AKSUbuntu:1604:2020.03.11'
        osType: 'Linux'
        proximityPlacementGroupID: '/subscriptions/subid1/resourcegroups/rg1/providers//Microsoft.Compute/proximityPlacementGroups/ppg1'
        vmSize: 'Standard_DS2_v2'
      }
    ]
    autoScalerProfile: {
      scale-down-delay-after-add: '15m'
      scan-interval: '20s'
    }
    diskEncryptionSetID: '/subscriptions/subid1/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
    enablePodSecurityPolicy: true
    enableRBAC: true
    kubernetesVersion: ''
    linuxProfile: {
      adminUsername: 'azureuser'
      ssh: {
        publicKeys: [
          {
            keyData: 'keydata'
          }
        ]
      }
    }
    networkProfile: {
      loadBalancerProfile: {
        managedOutboundIPs: {
          count: 2
        }
      }
      loadBalancerSku: 'standard'
      outboundType: 'loadBalancer'
    }
    servicePrincipalProfile: {
      clientId: 'clientid'
      secret: 'secret'
    }
    windowsProfile: {
      adminPassword: 'replacePassword1234$'
      adminUsername: 'azureuser'
    }
  }
  sku: {
    name: 'Basic'
    tier: 'Free'
  }
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```

Create/Update AAD Managed Cluster with EnableAzureRBAC
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2020-06-01' = {
  name: 'example'
  location: 'location1'
  properties: {
    aadProfile: {
      enableAzureRBAC: true
      managed: true
    }
    addonProfiles: {
    }
    agentPoolProfiles: [
      {
        name: 'nodepool1'
        type: 'VirtualMachineScaleSets'
        availabilityZones: [
          '1'
          '2'
          '3'
        ]
        count: 3
        enableNodePublicIP: true
        mode: 'System'
        nodeImageVersion: 'AKSUbuntu:1604:2020.03.11'
        osType: 'Linux'
        vmSize: 'Standard_DS1_v2'
      }
    ]
    autoScalerProfile: {
      scale-down-delay-after-add: '15m'
      scan-interval: '20s'
    }
    diskEncryptionSetID: '/subscriptions/subid1/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
    enablePodSecurityPolicy: true
    enableRBAC: true
    kubernetesVersion: ''
    linuxProfile: {
      adminUsername: 'azureuser'
      ssh: {
        publicKeys: [
          {
            keyData: 'keydata'
          }
        ]
      }
    }
    networkProfile: {
      loadBalancerProfile: {
        managedOutboundIPs: {
          count: 2
        }
      }
      loadBalancerSku: 'standard'
      outboundType: 'loadBalancer'
    }
    servicePrincipalProfile: {
      clientId: 'clientid'
      secret: 'secret'
    }
    windowsProfile: {
      adminPassword: 'replacePassword1234$'
      adminUsername: 'azureuser'
    }
  }
  sku: {
    name: 'Basic'
    tier: 'Free'
  }
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```

Create/Update Managed Cluster
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2020-06-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/subid1/resourceGroups/rgName1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1: {
      }
    }
  }
  location: 'location1'
  properties: {
    addonProfiles: {
    }
    agentPoolProfiles: [
      {
        name: 'nodepool1'
        type: 'VirtualMachineScaleSets'
        availabilityZones: [
          '1'
          '2'
          '3'
        ]
        count: 3
        enableNodePublicIP: true
        mode: 'System'
        nodeImageVersion: 'AKSUbuntu:1604:2020.03.11'
        osType: 'Linux'
        vmSize: 'Standard_DS1_v2'
      }
    ]
    autoScalerProfile: {
      scale-down-delay-after-add: '15m'
      scan-interval: '20s'
    }
    diskEncryptionSetID: '/subscriptions/subid1/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
    enablePodSecurityPolicy: true
    enableRBAC: true
    kubernetesVersion: ''
    linuxProfile: {
      adminUsername: 'azureuser'
      ssh: {
        publicKeys: [
          {
            keyData: 'keydata'
          }
        ]
      }
    }
    networkProfile: {
      loadBalancerProfile: {
        managedOutboundIPs: {
          count: 2
        }
      }
      loadBalancerSku: 'standard'
      outboundType: 'loadBalancer'
    }
    servicePrincipalProfile: {
      clientId: 'clientid'
      secret: 'secret'
    }
    windowsProfile: {
      adminPassword: 'replacePassword1234$'
      adminUsername: 'azureuser'
    }
  }
  sku: {
    name: 'Basic'
    tier: 'Free'
  }
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```

## microsoft.containerservice/managedclusters/agentpools

Create Agent Pool with PPG
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    orchestratorVersion: ''
    osType: 'Linux'
    proximityPlacementGroupID: '/subscriptions/subid1/resourcegroups/rg1/providers//Microsoft.Compute/proximityPlacementGroups/ppg1'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Spot Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    nodeLabels: {
      key1: 'val1'
    }
    nodeTaints: [
      'Key1=Value1:NoSchedule'
    ]
    orchestratorVersion: ''
    osType: 'Linux'
    scaleSetEvictionPolicy: 'Delete'
    scaleSetPriority: 'Spot'
    tags: {
      name1: 'val1'
    }
    vmSize: 'Standard_DS1_v2'
  }
}
```

Create/Update Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    mode: 'User'
    nodeLabels: {
      key1: 'val1'
    }
    nodeTaints: [
      'Key1=Value1:NoSchedule'
    ]
    orchestratorVersion: ''
    osType: 'Linux'
    scaleSetEvictionPolicy: 'Delete'
    scaleSetPriority: 'Spot'
    tags: {
      name1: 'val1'
    }
    vmSize: 'Standard_DS1_v2'
  }
}
```

Update Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    enableAutoScaling: true
    maxCount: 2
    minCount: 2
    nodeTaints: [
      'Key1=Value1:NoSchedule'
    ]
    orchestratorVersion: ''
    osType: 'Linux'
    scaleSetEvictionPolicy: 'Delete'
    scaleSetPriority: 'Spot'
    vmSize: 'Standard_DS1_v2'
  }
}
```

## microsoft.containerservice/managedclusters/privateendpointconnections

Update Private Endpoint Connection
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/privateEndpointConnections@2020-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      status: 'Approved'
    }
  }
}
```
