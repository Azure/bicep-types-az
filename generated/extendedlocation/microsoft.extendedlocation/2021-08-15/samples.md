# Microsoft.ExtendedLocation
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.extendedlocation/customlocations

Create/Update Custom Location
```bicep
resource exampleResource 'Microsoft.ExtendedLocation/customLocations@2021-08-15' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    authentication: {
      type: 'KubeConfig'
      value: '<base64 KubeConfig>'
    }
    clusterExtensionIds: [
      '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Kubernetes/connectedCluster/someCluster/Microsoft.KubernetesConfiguration/clusterExtensions/fooExtension'
    ]
    displayName: 'customLocationLocation01'
    hostResourceId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/testresourcegroup/providers/Microsoft.ContainerService/managedClusters/cluster01'
    namespace: 'namespace01'
  }
}
```
