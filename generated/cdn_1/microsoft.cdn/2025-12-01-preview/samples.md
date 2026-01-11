# Microsoft.Cdn
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cdn/edgeactions

CreateEdgeAction
```bicep
resource exampleResource 'Microsoft.Cdn/edgeActions@2025-12-01-preview' = {
  name: 'example'
  location: 'global'
  sku: {
    name: 'Standard'
    tier: 'Standard'
  }
}
```

## microsoft.cdn/edgeactions/executionfilters

CreateEdgeActionExecutionFilters
```bicep
resource exampleResource 'Microsoft.Cdn/edgeActions/executionFilters@2025-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'global'
  properties: {
    executionFilterIdentifierHeaderName: 'header-key'
    executionFilterIdentifierHeaderValue: 'header-value'
    versionId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/testrg/providers/Microsoft.Cdn/EdgeActions/edgeAction1/versions/version1'
  }
}
```

## microsoft.cdn/edgeactions/versions

CreateEdgeActionVersion
```bicep
resource exampleResource 'Microsoft.Cdn/edgeActions/versions@2025-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'global'
  properties: {
    deploymentType: 'zip'
    isDefaultVersion: 'True'
  }
}
```
