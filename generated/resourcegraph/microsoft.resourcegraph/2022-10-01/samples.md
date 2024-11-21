# Microsoft.ResourceGraph

## microsoft.resourcegraph/queries

Create Graph Query
```bicep
resource exampleResource 'Microsoft.ResourceGraph/queries@2022-10-01' = {
  name: 'example'
  properties: {
    description: 'Docker VMs in PROD'
    query: 'where isnotnull(tags[\'Prod\']) and properties.extensions[0].Name == \'docker\''
  }
  tags: {
  }
}
```
