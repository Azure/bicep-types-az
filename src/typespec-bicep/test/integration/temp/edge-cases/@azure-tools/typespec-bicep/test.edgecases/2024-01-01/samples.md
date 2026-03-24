# Test.EdgeCases

> [!NOTE]
> The code samples in this document are generated from TypeSpec definitions.


## test.edgecases/constrainedresources

### Basic Test.EdgeCases/constrainedResources resource
```bicep
resource exampleResource 'Test.EdgeCases/constrainedResources@2024-01-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    // Add resource-specific properties here
  }
}
```

## test.edgecases/namespaces

### Basic Test.EdgeCases/Namespaces resource
```bicep
resource exampleResource 'Test.EdgeCases/Namespaces@2024-01-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    // Add resource-specific properties here
  }
}
```

## test.edgecases/namespaces/authorizationrules

### Basic Test.EdgeCases/Namespaces/AuthorizationRules resource
```bicep
resource exampleResource 'Test.EdgeCases/Namespaces/AuthorizationRules@2024-01-01' = {
  parent: parentResource
  name: 'example'
  location: 'eastus'
  properties: {
    // Add resource-specific properties here
  }
}
```

## test.edgecases/namespaces/privatelinkresources

### Basic Test.EdgeCases/Namespaces/privateLinkResources resource
```bicep
resource exampleResource 'Test.EdgeCases/Namespaces/privateLinkResources@2024-01-01' = {
  parent: parentResource
  name: 'example'
  location: 'eastus'
  properties: {
    // Add resource-specific properties here
  }
}
```
