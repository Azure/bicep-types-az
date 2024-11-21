# microsoft.visualstudio

## microsoft.visualstudio/account

Create an account resource
```bicep
resource exampleResource 'microsoft.visualstudio/account@2014-04-01-preview' = {
  name: 'example'
  accountName: 'Example'
  location: 'Central US'
  operationType: 'create'
  properties: {
  }
  tags: {
  }
}
```

## microsoft.visualstudio/account/extension

Create an extension resource
```bicep
resource exampleResource 'microsoft.visualstudio/account/extension@2014-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'Central US'
  plan: {
    name: 'ExamplePlan'
    product: 'ExampleExtensionName'
    promotionCode: ''
    publisher: 'ExampleExtensionPublisher'
    version: '1.0'
  }
  properties: {
  }
  tags: {
  }
}
```

## microsoft.visualstudio/account/project

Create a project resource
```bicep
resource exampleResource 'microsoft.visualstudio/account/project@2014-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'ExampleProject'
  type: 'Microsoft.VisualStudio/account/project'
  id: '/subscriptions/0de7f055-dbea-498d-8e9e-da287eedca90/resourceGroups/VS-Example-Group/providers/Microsoft.VisualStudio/account/ExampleAccount/project/ExampleProject'
  location: 'Central US'
  properties: {
    ProcessTemplateId: '6B724908-EF14-45CF-84F8-768B5384DA45'
    VersionControlOption: 'Git'
  }
  tags: {
  }
}
```
