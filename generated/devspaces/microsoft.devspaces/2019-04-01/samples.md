# Microsoft.DevSpaces

## microsoft.devspaces/controllers

ControllersCreate
```bicep
resource exampleResource 'Microsoft.DevSpaces/controllers@2019-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    targetContainerHostCredentialsBase64: 'QmFzZTY0IEVuY29kZWQgVmFsdWUK'
    targetContainerHostResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerService/managedClusters/myCluster'
  }
  sku: {
    name: 'S1'
    tier: 'Standard'
  }
  tags: {
  }
}
```
