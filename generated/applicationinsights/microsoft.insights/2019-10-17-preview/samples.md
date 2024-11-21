# microsoft.insights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.insights/workbooktemplates

WorkbookTemplateAdd
```bicep
resource exampleResource 'microsoft.insights/workbooktemplates@2019-10-17-preview' = {
  name: 'example'
  location: 'west us'
  properties: {
    author: 'Contoso'
    galleries: [
      {
        name: 'Simple Template'
        type: 'tsg'
        category: 'Failures'
        order: 100
        resourceType: 'microsoft.insights/components'
      }
    ]
    priority: 1
    templateData: {
    }
  }
  tags: {
  }
}
```
