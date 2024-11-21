# Microsoft.ContainerService

## microsoft.containerservice/managedclusters

Create/Update Managed Cluster
```bicep
resource exampleResource 'Microsoft.ContainerService/managedClusters@2017-08-31' = {
  name: 'example'
  location: 'location1'
  properties: {
    agentPoolProfiles: [
      {
        name: 'agentpool1'
        count: 1
        vmSize: 'Standard_D2_v2'
      }
    ]
    dnsPrefix: 'dnsprefix1'
    kubernetesVersion: '1.7.7'
  }
}
```
