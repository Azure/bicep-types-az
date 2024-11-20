# Microsoft.ContainerService

## microsoft.containerservice/managedclusters

Create/Update Managed Cluster
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2019-10-01' = {
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
        osType: 'Linux'
        vmSize: 'Standard_DS1_v2'
      }
    ]
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
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```

## microsoft.containerservice/managedclusters/agentpools

Create/Update Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2019-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    count: 3
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

Update Agent Pool
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters/agentPools@2019-10-01' = {
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
