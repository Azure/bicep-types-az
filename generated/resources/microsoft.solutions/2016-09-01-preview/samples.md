# Microsoft.Solutions

## microsoft.solutions/appliances

Create or update appliance
```bicep
resource exampleResource 'Microsoft.Solutions/appliances@2016-09-01-preview' = {
  name: 'example'
  name: 'myAppliance'
  kind: 'ServiceCatalog'
  location: 'East US 2'
  properties: {
    applianceDefinitionId: '/subscriptions/subid/resourceGroups/rg/providers/Microsoft.Solutions/applianceDefinitions/myAppDef'
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
  }
}
```

## microsoft.solutions/appliancedefinitions

Create or update appliance definition
```bicep
resource exampleResource 'Microsoft.Solutions/applianceDefinitions@2016-09-01-preview' = {
  name: 'example'
  location: 'East US 2'
  properties: {
    description: 'myApplianceDef description'
    authorizations: [
      {
        principalId: 'validprincipalguid'
        roleDefinitionId: 'validroleguid'
      }
    ]
    displayName: 'myApplianceDef'
    lockLevel: 'None'
    packageFileUri: 'https://path/to/packagezipfile'
  }
}
```
