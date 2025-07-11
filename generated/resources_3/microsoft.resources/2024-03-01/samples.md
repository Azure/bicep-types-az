# Microsoft.Resources
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.resources/deploymentstacks

DeploymentStacksResourceGroupCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Resources/deploymentStacks@2024-03-01' = {
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
