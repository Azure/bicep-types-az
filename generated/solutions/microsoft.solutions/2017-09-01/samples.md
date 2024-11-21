# Microsoft.Solutions

## microsoft.solutions/applications

Create or update managed application
```bicep
resource exampleResource 'Microsoft.Solutions/applications@2017-09-01' = {
  name: 'example'
  kind: 'ServiceCatalog'
  location: 'East US 2'
  properties: {
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
  }
}
```

## microsoft.solutions/applicationdefinitions

Create or update managed application definition
```bicep
resource exampleResource 'Microsoft.Solutions/applicationDefinitions@2017-09-01' = {
  name: 'example'
  location: 'East US 2'
  properties: {
    description: 'myManagedApplicationDef description'
    authorizations: [
      {
        principalId: 'validprincipalguid'
        roleDefinitionId: 'validroleguid'
      }
    ]
    displayName: 'myManagedApplicationDef'
    lockLevel: 'None'
    packageFileUri: 'https://path/to/packagezipfile'
  }
}
```
