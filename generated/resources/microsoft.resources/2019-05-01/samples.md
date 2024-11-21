# Microsoft.Resources

## microsoft.resources/deployments

Create deployment at management group scope.
```bicep
resource exampleResource 'Microsoft.Resources/deployments@2019-05-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    mode: 'Incremental'
    parameters: {
    }
    templateLink: '{templateUri}'
  }
}
```

## microsoft.resources/resourcegroups

Create or update a resource group
```bicep
resource exampleResource 'Microsoft.Resources/resourceGroups@2019-05-01' = {
  name: 'example'
  location: 'eastus'
}
```
