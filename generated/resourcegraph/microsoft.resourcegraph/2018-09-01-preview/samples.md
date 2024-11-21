# Microsoft.ResourceGraph
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
