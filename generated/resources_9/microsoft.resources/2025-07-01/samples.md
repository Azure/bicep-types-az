# Microsoft.Resources
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.resources/deploymentstacks

Create or update a management group Deployment stack
```bicep
resource exampleResource 'Microsoft.Resources/deploymentStacks@2025-07-01' = {
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
    extensionConfigs: {
      contoso: {
        configOne: {
          value: 'config1Value'
        }
        configTwo: {
          value: true
        }
      }
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

## microsoft.resources/deploymentstackswhatifresults

Create or update a management group Deployment stack what-if result
```bicep
resource exampleResource 'Microsoft.Resources/deploymentStacksWhatIfResults@2025-07-01' = {
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
      mode: 'none'
    }
    deploymentStackResourceId: '/providers/Microsoft.Management/managementGroups/myMg/providers/Microsoft.Resources/deploymentStacks/simpleDeploymentStack'
    extensionConfigs: {
      contoso: {
        configOne: {
          value: 'config1Value'
        }
        configTwo: {
          value: true
        }
      }
    }
    parameters: {
    }
    retentionInterval: 'P7D'
    templateLink: {
      uri: 'https://example.com/exampleTemplate.json'
    }
  }
}
```
