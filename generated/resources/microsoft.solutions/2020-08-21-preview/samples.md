# Microsoft.Solutions

## microsoft.solutions/applications

Create or update managed application
```bicep
resource exampleResource 'Microsoft.Solutions/applications@2020-08-21-preview' = {
  name: 'example'
  kind: 'ServiceCatalog'
  properties: {
    applicationDefinitionId: '/subscriptions/subid/resourceGroups/rg/providers/Microsoft.Solutions/applicationDefinitions/myAppDef'
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
  }
}
```

## microsoft.solutions/applicationdefinitions

Create or update managed application definition
```bicep
resource exampleResource 'Microsoft.Solutions/applicationDefinitions@2020-08-21-preview' = {
  name: 'example'
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
