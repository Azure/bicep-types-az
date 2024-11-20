# Microsoft.ResourceGraph

## microsoft.resourcegraph/queries

Create Graph Query
```bicep
resource exampleResource 'Microsoft.ResourceGraph/queries@2018-09-01-preview' = {
  name: 'example'
  properties: {
    description: 'Docker VMs in PROD'
    query: 'where isnotnull(tags[\'Prod\']) and properties.extensions[0].Name == \'docker\''
  }
  tags: {
  }
}
```
