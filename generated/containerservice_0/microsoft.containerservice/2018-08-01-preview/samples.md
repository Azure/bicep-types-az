# Microsoft.ContainerService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerservice/managedclusters

Create/Update Managed Cluster
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2018-08-01-preview' = {
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
