# Microsoft.Resources
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.resources/deployments

Create deployment at a given scope.
```bicep
resource exampleResource 'Microsoft.Resources/deployments@2019-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    mode: 'Incremental'
    parameters: {
    }
    templateLink: {
      uri: '{templateUri}'
    }
  }
  tags: {
    tagKey1: 'tagValue1'
    tagKey2: 'tagValue2'
  }
}
```

## microsoft.resources/resourcegroups

Create or update a resource group
```bicep
resource exampleResource 'Microsoft.Resources/resourceGroups@2019-10-01' = {
  name: 'example'
  location: 'eastus'
}
```

## microsoft.resources/tags

Update tags on a resource
```bicep
resource exampleResource 'Microsoft.Resources/tags@2019-10-01' = {
  name: 'example'
  properties: {
    tags: {
      tagKey1: 'tagValue1'
      tagKey2: 'tagValue2'
    }
  }
}
```

Update tags on a subscription
```bicep
resource exampleResource 'Microsoft.Resources/tags@2019-10-01' = {
  name: 'example'
  properties: {
    tags: {
      tagKey1: 'tagValue1'
      tagKey2: 'tagValue2'
    }
  }
}
```