# Microsoft.Resources
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.resources/deployments

Create deployment at a given scope.
```bicep
resource exampleResource 'Microsoft.Resources/deployments@2020-08-01' = {
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
