# Microsoft.ContainerService

## microsoft.containerservice/managedclusters

Create/Update Managed Cluster
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2020-03-01' = {
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
      balance-similar-node-groups: 'true'
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

Create Spot Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-03-01' = {
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
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-03-01' = {
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
    scaleSetPriority: 'Low'
    tags: {
      name1: 'val1'
    }
    vmSize: 'Standard_DS1_v2'
  }
}
```

Update Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2020-03-01' = {
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
    scaleSetPriority: 'Low'
    vmSize: 'Standard_DS1_v2'
  }
}
```
