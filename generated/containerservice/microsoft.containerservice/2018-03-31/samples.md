# Microsoft.ContainerService

## microsoft.containerservice/managedclusters

Create/Update Managed Cluster
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2018-03-31' = {
  name: 'example'
  location: 'location1'
  properties: {
    addonProfiles: {
    }
    agentPoolProfiles: [
      {
        name: 'nodepool1'
        count: 3
        osType: 'Linux'
        vmSize: 'Standard_DS1_v2'
      }
    ]
    dnsPrefix: 'dnsprefix1'
    enableRBAC: false
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
  tags: {
    archv2: ''
    tier: 'production'
  }
}
```
