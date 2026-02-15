# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/managedclusters

Associate Managed Cluster with Capacity Reservation Group
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    addonProfiles: {
    }
    agentPoolProfiles: [
      {
        name: 'nodepool1'
        type: 'VirtualMachineScaleSets'
        capacityReservationGroupID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.Compute/capacityReservationGroups/crg1'
        count: 3
        enableNodePublicIP: true
        mode: 'System'
        osType: 'Linux'
        vmSize: 'Standard_DS2_v2'
      }
    ]
    autoScalerProfile: {
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster using a managed cluster snapshot
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
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
    creationData: {
      sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ContainerService/managedclustersnapshots/snapshot1'
    }
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
    servicePrincipalProfile: {
      clientId: 'clientid'
      secret: 'secret'
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

Create Managed Cluster using an agent pool snapshot
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
          sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ContainerService/snapshots/snapshot1'
        }
        enableFIPS: true
        enableNodePublicIP: true
        mode: 'System'
        osType: 'Linux'
        vmSize: 'Standard_DS2_v2'
      }
    ]
    autoScalerProfile: {
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with Advanced Networking Transit Encryption
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
    dnsPrefix: 'dnsprefix1'
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
      advancedNetworking: {
        enabled: true
        observability: {
          enabled: false
        }
        security: {
          advancedNetworkPolicies: 'FQDN'
          enabled: true
          transitEncryption: {
            type: 'WireGuard'
          }
        }
      }
      loadBalancerProfile: {
        managedOutboundIPs: {
          count: 2
        }
      }
      loadBalancerSku: 'standard'
      networkDataplane: 'cilium'
      networkPlugin: 'azure'
      networkPluginMode: 'overlay'
      outboundType: 'loadBalancer'
    }
    servicePrincipalProfile: {
      clientId: 'clientid'
      secret: 'secret'
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

Create Managed Cluster with AI Toolchain Operator enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
    aiToolchainOperatorProfile: {
      enabled: true
    }
    dnsPrefix: 'dnsprefix1'
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
      networkDataplane: 'cilium'
      networkPlugin: 'azure'
      networkPluginMode: 'overlay'
      outboundType: 'loadBalancer'
    }
    servicePrincipalProfile: {
      clientId: 'clientid'
      secret: 'secret'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with Application Load Balancer Profile configured
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
    ingressProfile: {
      applicationLoadBalancer: {
        enabled: true
      }
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

Create Managed Cluster with Azure Key Vault Secrets Provider Addon
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    addonProfiles: {
      azureKeyvaultSecretsProvider: {
        config: {
          enableSecretRotation: 'true'
          rotationPollInterval: '2m'
        }
        enabled: true
      }
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with CustomCATrustCertificates populated
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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
    securityProfile: {
      customCATrustCertificates: [
        'ZHVtbXlFeGFtcGxlVGVzdFZhbHVlRm9yQ2VydGlmaWNhdGVUb0JlQWRkZWQ='
      ]
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

Create Managed Cluster with Dedicated Host Group
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
        hostGroupID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg/providers/Microsoft.Compute/hostGroups/hostgroup1'
        osType: 'Linux'
        vmSize: 'Standard_DS2_v2'
      }
    ]
    autoScalerProfile: {
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with EncryptionAtHost enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with LongTermSupport
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    dnsPrefix: 'dnsprefix1'
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
    supportPlan: 'AKSLongTermSupport'
    windowsProfile: {
      adminPassword: 'replacePassword1234$'
      adminUsername: 'azureuser'
    }
  }
  sku: {
    name: 'Base'
    tier: 'Premium'
  }
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```

Create Managed Cluster with Node Auto Provisioning
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
    dnsPrefix: 'dnsprefix1'
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
      networkDataplane: 'cilium'
      networkPlugin: 'azure'
      networkPluginMode: 'overlay'
      outboundType: 'loadBalancer'
    }
    servicePrincipalProfile: {
      clientId: 'clientid'
      secret: 'secret'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
        nodePublicIPPrefixID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.Network/publicIPPrefixes/public-ip-prefix'
        osType: 'Linux'
        vmSize: 'Standard_DS2_v2'
      }
    ]
    autoScalerProfile: {
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
        osSKU: 'AzureLinux'
        osType: 'Linux'
        vmSize: 'Standard_DS2_v2'
      }
    ]
    autoScalerProfile: {
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with PodIdentity enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with PPG
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
        proximityPlacementGroupID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.Compute/proximityPlacementGroups/ppg1'
        vmSize: 'Standard_DS2_v2'
      }
    ]
    autoScalerProfile: {
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with RunCommand disabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    dnsPrefix: 'dnsprefix1'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      defender: {
        logAnalyticsWorkspaceResourceId: '/subscriptions/SUB_ID/resourcegroups/RG_NAME/providers/microsoft.operationalinsights/workspaces/WORKSPACE_NAME'
        securityGating: {
          allowSecretAccess: true
          enabled: true
          identities: [
            {
              azureContainerRegistry: 'registry1'
              identity: {
                clientId: 'client1'
                resourceId: '/subscriptions/SUB_ID/resourceGroups/RG_NAME/providers/Microsoft.ManagedIdentity/userAssignedIdentities/IDENTITY_NAME'
              }
            }
          ]
        }
        securityMonitoring: {
          enabled: true
        }
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with VirtualMachines pool type
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    addonProfiles: {
    }
    agentPoolProfiles: [
      {
        name: 'nodepool1'
        type: 'VirtualMachines'
        count: 3
        enableFIPS: true
        mode: 'System'
        osType: 'Linux'
        vmSize: 'Standard_DS2_v2'
      }
    ]
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create Managed Cluster with Web App Routing Ingress Profile configured
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
    ingressProfile: {
      webAppRouting: {
        dnsZoneResourceIds: [
          '/subscriptions/SUB_ID/resourceGroups/RG_NAME/providers/Microsoft.Network/dnszones/DNS_ZONE_NAME'
        ]
        enabled: true
      }
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      privateDNSZone: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.Network/privateDnsZones/privatelink.location1.azmk8s.io'
    }
    autoScalerProfile: {
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
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

Create Managed Private Cluster with Public FQDN specified
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    dnsPrefix: 'dnsprefix1'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgName1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
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
      'balance-similar-node-groups': 'true'
      expander: 'priority'
      'max-node-provision-time': '15m'
      'new-pod-scale-up-delay': '1m'
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
      'skip-nodes-with-system-pods': 'false'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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
    upgradeSettings: {
      overrideSettings: {
        forceUpgrade: true
        until: '2022-11-01T13:00:00Z'
      }
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

Create/Update Managed Cluster with Azure Service Mesh
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
  location: 'location1'
  properties: {
    addonProfiles: {
      azureKeyvaultSecretsProvider: {
        config: {
          enableSecretRotation: 'true'
          rotationPollInterval: '2m'
        }
        enabled: true
      }
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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
    serviceMeshProfile: {
      istio: {
        certificateAuthority: {
          plugin: {
            certChainObjectName: 'cert-chain'
            certObjectName: 'ca-cert'
            keyObjectName: 'ca-key'
            keyVaultId: '/subscriptions/854c9ddb-fe9e-4aea-8d58-99ed88282881/resourceGroups/ddama-test/providers/Microsoft.KeyVault/vaults/my-akv'
            rootCertObjectName: 'root-cert'
          }
        }
        components: {
          egressGateways: [
            {
              name: 'istioegress1'
              enabled: true
            }
          ]
          ingressGateways: [
            {
              enabled: true
              mode: 'Internal'
            }
          ]
        }
      }
      mode: 'Istio'
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

Create/Update Managed Cluster with dual-stack networking
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgName1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
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
      'balance-similar-node-groups': 'true'
      expander: 'priority'
      'max-node-provision-time': '15m'
      'new-pod-scale-up-delay': '1m'
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
      'skip-nodes-with-system-pods': 'false'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create/Update Managed Cluster with EnableAHUB
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgName1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

Create/Update Managed Cluster with EnableNamespaceResources
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
    enableNamespaceResources: true
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

Create/Update Managed Cluster with Windows gMSA enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2025-10-02-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgName1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
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
      'scale-down-delay-after-add': '15m'
      'scan-interval': '20s'
    }
    diskEncryptionSetID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/diskEncryptionSets/des'
    dnsPrefix: 'dnsprefix1'
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

## microsoft.containerservice/managedclusters/agentpools

Associate Agent Pool with Capacity Reservation Group
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    capacityReservationGroupID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.Compute/CapacityReservationGroups/crg1'
    count: 3
    orchestratorVersion: ''
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool using an agent pool snapshot
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    creationData: {
      sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ContainerService/snapshots/snapshot1'
    }
    enableFIPS: true
    orchestratorVersion: ''
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with Dedicated Host Group
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    hostGroupID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg/providers/Microsoft.Compute/hostGroups/hostgroup1'
    orchestratorVersion: ''
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with EncryptionAtHost enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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

Create Agent Pool with Message of the Day
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    messageOfTheDay: 'Zm9vCg=='
    mode: 'User'
    orchestratorVersion: ''
    osDiskSizeGB: 64
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with OSSKU
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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
    osSKU: 'AzureLinux'
    osType: 'Linux'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with PPG
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    orchestratorVersion: ''
    osType: 'Linux'
    proximityPlacementGroupID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.Compute/proximityPlacementGroups/ppg1'
    vmSize: 'Standard_DS2_v2'
  }
}
```

Create Agent Pool with UltraSSD enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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

Create Agent Pool with VirtualMachines pool type
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'VirtualMachines'
    nodeLabels: {
      key1: 'val1'
    }
    nodeTaints: [
      'Key1=Value1:NoSchedule'
    ]
    orchestratorVersion: '1.9.6'
    osType: 'Linux'
    tags: {
      name1: 'val1'
    }
    virtualMachinesProfile: {
      scale: {
        manual: [
          {
            count: 3
            size: 'Standard_D2_v2'
          }
          {
            count: 2
            size: 'Standard_D2_v3'
          }
        ]
      }
    }
  }
}
```

Create Agent Pool with VirtualMachines pool type with autoscaling enabled
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'VirtualMachines'
    nodeLabels: {
      key1: 'val1'
    }
    nodeTaints: [
      'Key1=Value1:NoSchedule'
    ]
    orchestratorVersion: '1.29.0'
    osType: 'Linux'
    tags: {
      name1: 'val1'
    }
    virtualMachinesProfile: {
      scale: {
        autoscale: {
          maxCount: 5
          minCount: 1
          size: 'Standard_D2_v2'
        }
      }
    }
  }
}
```

Create Agent Pool with Windows OSSKU
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    orchestratorVersion: '1.23.3'
    osSKU: 'Windows2022'
    osType: 'Windows'
    vmSize: 'Standard_D4s_v3'
  }
}
```

Create Spot Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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

Create Windows Agent Pool with disabling OutboundNAT
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
    orchestratorVersion: '1.23.8'
    osSKU: 'Windows2022'
    osType: 'Windows'
    vmSize: 'Standard_D4s_v3'
    windowsProfile: {
      disableOutboundNat: true
    }
  }
}
```

Create/Update Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2025-10-02-preview' = {
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

## microsoft.containerservice/managedclusters/agentpools/machines

Create/Update Machine
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools/machines@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    hardware: {
      vmSize: 'Standard_DS1_v2'
    }
    kubernetes: {
      kubeletDiskType: 'OS'
      maxPods: 110
      nodeLabels: {
        key1: 'val1'
      }
      nodeTaints: [
        'Key1=Value1:NoSchedule'
      ]
      orchestratorVersion: '1.30'
    }
    mode: 'User'
    operatingSystem: {
      enableFIPS: false
      osSKU: 'Ubuntu'
      osType: 'Linux'
    }
    priority: 'Spot'
    tags: {
      name1: 'val1'
    }
  }
}
```

## microsoft.containerservice/managedclusters/identitybindings

Create or update Identity Binding
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/identityBindings@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    managedIdentity: {
      resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1'
    }
  }
}
```

## microsoft.containerservice/managedclusters/jwtauthenticators

Create or update JWT Authenticator
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/jwtAuthenticators@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    claimMappings: {
      extra: [
        {
          key: 'example.com/extrakey'
          valueExpression: 'claims.customfield'
        }
      ]
      groups: {
        expression: 'claims.groups.split(\',\').map(group, \'aks:jwt:\' + group)'
      }
      username: {
        expression: '\'aks:jwt:\' + claims.sub'
      }
    }
    claimValidationRules: [
      {
        expression: 'has(claims.sub)'
        message: 'Sub is required'
      }
      {
        expression: 'claims.sub != \'\''
        message: 'Sub cannot be empty'
      }
    ]
    issuer: {
      audiences: [
        'https://example.com/audience1'
        'https://example.com/audience2'
      ]
      url: 'https://example.com'
    }
    userValidationRules: [
      {
        expression: 'user.groups.all(group, group.startsWith(\'aks:jwt:admin:\'))'
        message: 'Must be in admin user group'
      }
    ]
  }
}
```

## microsoft.containerservice/managedclusters/loadbalancers

Create or update a Load Balancer
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/loadBalancers@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    allowServicePlacement: true
    primaryAgentPoolName: 'agentpool1'
  }
}
```

## microsoft.containerservice/managedclusters/maintenanceconfigurations

Create/Update Maintenance Configuration with Maintenance Window
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/maintenanceConfigurations@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    maintenanceWindow: {
      durationHours: 10
      notAllowedDates: [
        {
          end: '2023-02-25'
          start: '2023-02-18'
        }
        {
          end: '2024-01-05'
          start: '2023-12-23'
        }
      ]
      schedule: {
        relativeMonthly: {
          dayOfWeek: 'Monday'
          intervalMonths: 3
          weekIndex: 'First'
        }
      }
      startDate: '2023-01-01'
      startTime: '08:30'
      utcOffset: '+05:30'
    }
  }
}
```

## microsoft.containerservice/managedclusters/managednamespaces

Create/Update Managed Namespace
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/managedNamespaces@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    adoptionPolicy: 'IfIdentical'
    annotations: {
      annatationKey: 'annatationValue'
    }
    defaultNetworkPolicy: {
      egress: 'AllowAll'
      ingress: 'AllowSameNamespace'
    }
    defaultResourceQuota: {
      cpuLimit: '3m'
      cpuRequest: '3m'
      memoryLimit: '5Gi'
      memoryRequest: '5Gi'
    }
    deletePolicy: 'Keep'
    labels: {
      'kubernetes.io/metadata.name': 'true'
    }
  }
  tags: {
    tagKey1: 'tagValue1'
  }
}
```

## microsoft.containerservice/managedclusters/meshmemberships

Create or update Mesh Membership
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/meshMemberships@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    managedMeshID: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.AppLink/applinks/applink1/appLinkMembers/member1'
  }
}
```

## microsoft.containerservice/managedclusters/privateendpointconnections

Update Private Endpoint Connection
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/privateEndpointConnections@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      status: 'Approved'
    }
  }
}
```

## microsoft.containerservice/managedclusters/trustedaccessrolebindings

Create or update a trusted access role binding
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/trustedAccessRoleBindings@2025-10-02-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    roles: [
      'Microsoft.MachineLearningServices/workspaces/reader'
      'Microsoft.MachineLearningServices/workspaces/writer'
    ]
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/b/providers/Microsoft.MachineLearningServices/workspaces/c'
  }
}
```

## microsoft.containerservice/managedclustersnapshots

Create/Update Managed Cluster Snapshot
```bicep
resource exampleResource 'Microsoft.ContainerService/managedclustersnapshots@2025-10-02-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    creationData: {
      sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster1'
    }
  }
  tags: {
    key1: 'val1'
    key2: 'val2'
  }
}
```

## microsoft.containerservice/snapshots

Create/Update Snapshot
```bicep
resource exampleResource 'Microsoft.ContainerService/snapshots@2025-10-02-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    creationData: {
      sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/rg1/providers/Microsoft.ContainerService/managedClusters/cluster1/agentPools/pool0'
    }
  }
  tags: {
    key1: 'val1'
    key2: 'val2'
  }
}
```
