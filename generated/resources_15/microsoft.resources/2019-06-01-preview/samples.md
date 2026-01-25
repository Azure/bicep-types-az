# Microsoft.Resources
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.resources/templatespecs

TemplateSpecsCreateUpdate
```bicep
resource exampleResource 'Microsoft.Resources/templateSpecs@2019-06-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'A very simple Template Spec'
  }
}
```

## microsoft.resources/templatespecs/versions

TemplateSpecVersionsCreateUpdate
```bicep
resource exampleResource 'Microsoft.Resources/templateSpecs/versions@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'This is version v1.0 of our template content'
    template: {
      '$schema': 'http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#'
      contentVersion: '1.0.0.0'
      parameters: {
      }
      resources: [
      ]
    }
  }
}
```
