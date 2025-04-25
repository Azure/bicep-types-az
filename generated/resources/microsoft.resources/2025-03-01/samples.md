# Microsoft.Resources
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.resources/deployments

Create deployment at a given scope.
```bicep
resource exampleResource 'Microsoft.Resources/deployments@2025-03-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    mode: 'Incremental'
    parameters: {
    }
    templateLink: {
      uri: 'https://example.com/exampleTemplate.json'
    }
  }
  tags: {
    tagKey1: 'tag-value-1'
    tagKey2: 'tag-value-2'
  }
}
```

## microsoft.resources/resourcegroups

Create or update a resource group
```bicep
resource exampleResource 'Microsoft.Resources/resourceGroups@2025-03-01' = {
  name: 'example'
  location: 'eastus'
}
```

## microsoft.resources/tags

Update tags on a resource
```bicep
resource exampleResource 'Microsoft.Resources/tags@2025-03-01' = {
  name: 'example'
  properties: {
    tags: {
      tagKey1: 'tag-value-1'
      tagKey2: 'tag-value-2'
    }
  }
}
```

Update tags on a subscription
```bicep
resource exampleResource 'Microsoft.Resources/tags@2025-03-01' = {
  name: 'example'
  properties: {
    tags: {
      tagKey1: 'tag-value-1'
      tagKey2: 'tag-value-2'
    }
  }
}
```
