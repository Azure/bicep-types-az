# Microsoft.ExtendedLocation
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.extendedlocation/customlocations

Create/Update Custom Location
```bicep
resource exampleResource 'Microsoft.ExtendedLocation/customLocations@2024-09-15-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'West US'
  properties: {
    clusterExtensionIds: [
      '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/testrg/providers/Microsoft.ContainerService/managedClusters/cluster01/Microsoft.KubernetesConfiguration/clusterExtensions/fooExtension'
    ]
    displayName: 'customLocationLocation01'
    hostResourceId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/testresourcegroup/providers/Microsoft.ContainerService/managedClusters/cluster01'
    hostType: 'Kubernetes'
    namespace: 'namespace01'
  }
}
```

## microsoft.extendedlocation/customlocations/resourcesyncrules

Create/Update Resource Sync Rule
```bicep
resource exampleResource 'Microsoft.ExtendedLocation/customLocations/resourceSyncRules@2024-09-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    priority: 999
    selector: {
      matchExpressions: [
        {
          key: 'key4'
          operator: 'In'
          values: [
            'value4'
          ]
        }
      ]
      matchLabels: {
        key1: 'value1'
      }
    }
    targetResourceGroup: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/testresourcegroup'
  }
}
```
