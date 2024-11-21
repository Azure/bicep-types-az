# Microsoft.ContainerRegistry.Admin

## microsoft.containerregistry.admin/locations/configurations

Returns container registry overall configuration properties.
```bicep
resource exampleResource 'Microsoft.ContainerRegistry.Admin/locations/configurations@2019-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    maximumCapacityInGiB: 10
  }
}
```

## microsoft.containerregistry.admin/locations/quotas

Create or update an existing container registry quota.
```bicep
resource exampleResource 'Microsoft.ContainerRegistry.Admin/locations/quotas@2019-11-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    capacityPerRegistryInGiB: 50
    numberOfRegistries: 10
  }
}
```
