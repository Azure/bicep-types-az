# Microsoft.ContainerService

## microsoft.containerservice/managedclusters

Create Managed Cluster with EncryptionAtHost enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2020-12-01' = {
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
        enableEncryptionAtHost: true
        enableNodePublicIP: true
        mode: 'System'
        osType: 'Linux'
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

Create Managed Cluster with PPG
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2020-12-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2020-12-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2020-12-01' = {
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
        osType: 'Linux'
        vmSize: 'Standard_DS1_v2'
      }
    ]
    autoScalerProfile: {
      balance-similar-node-groups: 'true'
      expander: 'priority'
      max-node-provision-time: '15m'
      new-pod-scale-up-delay: '1m'
      scale-down-delay-after-add: '15m'
      scan-interval: '20s'
      skip-nodes-with-system-pods: 'false'
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

Create/Update Managed Cluster with EnableAHUB
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2020-12-01' = {
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
      licenseType: 'Windows_Server'
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

## microsoft.containerservice/managedclusters/maintenanceconfigurations

Create/Update Maintenance Configuration
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2020-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    notAllowedTime: [
      {
        end: '2020-11-30T12:00:00Z'
        start: '2020-11-26T03:00:00Z'
      }
    ]
    timeInWeek: [
      {
        day: 'Monday'
        hourSlots: [
          1
          2
        ]
      }
    ]
  }
}
```

## microsoft.containerservice/managedclusters/agentpools

Create Agent Pool with EncryptionAtHost enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    enableEncryptionAtHost: true
    orchestratorVersion: ''
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with Ephemeral OS Disk
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    orchestratorVersion: ''
    osDiskSizeGB: 64
    osDiskType: 'Ephemeral'
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with KubeletConfig and LinuxOSConfig
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    kubeletConfig: {
      allowedUnsafeSysctls: [
        'kernel.msg*'
        'net.core.somaxconn'
      ]
      cpuCfsQuota: true
      cpuCfsQuotaPeriod: '200ms'
      cpuManagerPolicy: 'static'
      failSwapOn: false
      imageGcHighThreshold: 90
      imageGcLowThreshold: 70
      topologyManagerPolicy: 'best-effort'
    }
    linuxOSConfig: {
      swapFileSizeMB: 1500
      sysctls: {
        kernelThreadsMax: 99999
        netCoreWmemDefault: 12345
        netIpv4IpLocalPortRange: '20000 60000'
        netIpv4TcpTwReuse: true
      }
      transparentHugePageDefrag: 'madvise'
      transparentHugePageEnabled: 'always'
    }
    orchestratorVersion: ''
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with PPG
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-12-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-12-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-12-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-12-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/privateEndpointConnections@2020-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      status: 'Approved'
    }
  }
}
```
