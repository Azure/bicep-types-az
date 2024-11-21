# Microsoft.Resources

## microsoft.resources/templatespecs

TemplateSpecsCreateUpdate
```bicep
resource exampleResource 'Microsoft.Resources/templateSpecs@2021-05-01' = {
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
resource exampleResource 'Microsoft.Resources/templateSpecs/versions@2021-05-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'This is version v1.0 of our template content'
    mainTemplate: {
      $schema: 'http://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#'
      contentVersion: '1.0.0.0'
      parameters: {
      }
      resources: [
      ]
    }
  }
}
```
