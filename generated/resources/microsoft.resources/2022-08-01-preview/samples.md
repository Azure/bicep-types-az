# Microsoft.Resources

## microsoft.resources/deploymentstacks

DeploymentStacksCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Resources/deploymentStacks@2022-08-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    actionOnUnmanage: {
      managementGroups: 'detach'
      resourceGroups: 'delete'
      resources: 'delete'
    }
    denySettings: {
      applyToChildScopes: false
      excludedActions: [
        'action'
      ]
      excludedPrincipals: [
        'principal'
      ]
      mode: 'denyDelete'
    }
    parameters: {
      parameter1: {
        value: 'a string'
      }
    }
  }
  tags: {
    tagkey: 'tagVal'
  }
}
```
