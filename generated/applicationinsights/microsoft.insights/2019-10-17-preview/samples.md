# microsoft.insights

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
