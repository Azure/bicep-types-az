# Microsoft.ContainerService

## microsoft.containerservice/managedclusters

Create Managed Cluster using an agent pool snapshot
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        creationData: {
          sourceResourceId: '/subscriptions/subid1/resourceGroups/rg1/providers/Microsoft.ContainerService/snapshots/snapshot1'
        }
        enableFIPS: true
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
    enablePodSecurityPolicy: false
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

Create Managed Cluster with AKS-managed NAT gateway as outbound type
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        enableNodePublicIP: false
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
      loadBalancerSku: 'standard'
      natGatewayProfile: {
        managedOutboundIPProfile: {
          count: 2
        }
      }
      outboundType: 'managedNATGateway'
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

Create Managed Cluster with EncryptionAtHost enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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

Create Managed Cluster with FIPS enabled OS
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        enableFIPS: true
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
    enablePodSecurityPolicy: false
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

Create Managed Cluster with GPUMIG
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        gpuInstanceProfile: 'MIG3g'
        mode: 'System'
        osType: 'Linux'
        vmSize: 'Standard_ND96asr_v4'
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
    httpProxyConfig: {
      httpProxy: 'http://myproxy.server.com:8080'
      httpsProxy: 'https://myproxy.server.com:8080'
      noProxy: [
        'localhost'
        '127.0.0.1'
      ]
      trustedCa: 'Q29uZ3JhdHMhIFlvdSBoYXZlIGZvdW5kIGEgaGlkZGVuIG1lc3NhZ2U='
    }
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

Create Managed Cluster with HTTP proxy configured
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
    httpProxyConfig: {
      httpProxy: 'http://myproxy.server.com:8080'
      httpsProxy: 'https://myproxy.server.com:8080'
      noProxy: [
        'localhost'
        '127.0.0.1'
      ]
      trustedCa: 'Q29uZ3JhdHMhIFlvdSBoYXZlIGZvdW5kIGEgaGlkZGVuIG1lc3NhZ2U='
    }
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

Create Managed Cluster with Node Public IP Prefix
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        nodePublicIPPrefixID: '/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.Network/publicIPPrefixes/public-ip-prefix'
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

Create Managed Cluster with OSSKU
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        osSKU: 'CBLMariner'
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
    httpProxyConfig: {
      httpProxy: 'http://myproxy.server.com:8080'
      httpsProxy: 'https://myproxy.server.com:8080'
      noProxy: [
        'localhost'
        '127.0.0.1'
      ]
      trustedCa: 'Q29uZ3JhdHMhIFlvdSBoYXZlIGZvdW5kIGEgaGlkZGVuIG1lc3NhZ2U='
    }
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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

Create Managed Cluster with PodIdentity enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
    podIdentityProfile: {
      allowNetworkPluginKubenet: true
      enabled: true
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

Create Managed Cluster with RunCommand disabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
    apiServerAccessProfile: {
      disableRunCommand: true
    }
    autoScalerProfile: {
      scale-down-delay-after-add: '15m'
      scan-interval: '20s'
    }
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

Create Managed Cluster with Security Profile configured
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
  name: 'example'
  location: 'location1'
  properties: {
    agentPoolProfiles: [
      {
        name: 'nodepool1'
        type: 'VirtualMachineScaleSets'
        count: 3
        enableNodePublicIP: true
        mode: 'System'
        osType: 'Linux'
        vmSize: 'Standard_DS2_v2'
      }
    ]
    dnsPrefix: 'dnsprefix1'
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
    securityProfile: {
      azureDefender: {
        enabled: true
        logAnalyticsWorkspaceResourceId: '/subscriptions/SUB_ID/resourcegroups/RG_NAME/providers/microsoft.operationalinsights/workspaces/WORKSPACE_NAME'
      }
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

Create Managed Cluster with UltraSSD enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        enableUltraSSD: true
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

Create Managed Cluster with user-assigned NAT gateway as outbound type
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        enableNodePublicIP: false
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
      loadBalancerSku: 'standard'
      outboundType: 'userAssignedNATGateway'
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

Create Managed Private Cluster with Public FQDN specified
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
    apiServerAccessProfile: {
      enablePrivateCluster: true
      enablePrivateClusterPublicFQDN: true
    }
    autoScalerProfile: {
      scale-down-delay-after-add: '15m'
      scan-interval: '20s'
    }
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

Create Managed Private Cluster with fqdn subdomain specified
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
    apiServerAccessProfile: {
      enablePrivateCluster: true
      privateDNSZone: '/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.Network/privateDnsZones/privatelink.location1.azmk8s.io'
    }
    autoScalerProfile: {
      scale-down-delay-after-add: '15m'
      scan-interval: '20s'
    }
    enablePodSecurityPolicy: true
    enableRBAC: true
    fqdnSubdomain: 'domain1'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        scaleDownMode: 'Deallocate'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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

Create/Update Managed Cluster with Windows gMSA enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
      gmsaProfile: {
        enabled: true
      }
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

Create/Update Managed Cluster with dual-stack networking
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2022-03-01' = {
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
        scaleDownMode: 'Deallocate'
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
      ipFamilies: [
        'IPv4'
        'IPv6'
      ]
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

## microsoft.containerservice/managedclusters/maintenanceconfigurations

Create/Update Maintenance Configuration
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2022-03-01' = {
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

Create Agent Pool using an agent pool snapshot
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    creationData: {
      sourceResourceId: '/subscriptions/subid1/resourceGroups/rg1/providers/Microsoft.ContainerService/snapshots/snapshot1'
    }
    enableFIPS: true
    orchestratorVersion: ''
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with EncryptionAtHost enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
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

Create Agent Pool with FIPS enabled OS
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    enableFIPS: true
    orchestratorVersion: ''
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with GPUMIG
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    gpuInstanceProfile: 'MIG2g'
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
    vmSize: 'Standard_ND96asr_v4'
  }
}
```

Create Agent Pool with Krustlet and the WASI runtime
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    mode: 'User'
    orchestratorVersion: ''
    osDiskSizeGB: 64
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
    workloadRuntime: 'WasmWasi'
  }
}
```

Create Agent Pool with KubeletConfig and LinuxOSConfig
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
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

Create Agent Pool with OSSKU
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
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
    osSKU: 'CBLMariner'
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with PPG
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
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

Create Agent Pool with UltraSSD enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    enableUltraSSD: true
    orchestratorVersion: ''
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Spot Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
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

Start Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    powerState: {
      code: 'Running'
    }
  }
}
```

Stop Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    powerState: {
      code: 'Stopped'
    }
  }
}
```

Update Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2022-03-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/privateEndpointConnections@2022-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      status: 'Approved'
    }
  }
}
```

## microsoft.containerservice/snapshots

Create/Update Snapshot
```bicep
resource exampleResource 'Microsoft.ContainerService/snapshots@2022-03-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    creationData: {
      sourceResourceId: '/subscriptions/subid1/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster1/agentPools/pool0'
    }
  }
  tags: {
    key1: 'val1'
    key2: 'val2'
  }
}
```
