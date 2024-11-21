# Microsoft.Solutions
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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

## microsoft.solutions/applications

Create or update managed application
```bicep
resource exampleResource 'Microsoft.Solutions/applications@2017-09-01' = {
  name: 'example'
  name: 'myManagedApplication'
  kind: 'ServiceCatalog'
  location: 'East US 2'
  properties: {
    managedApplicationDefinitionId: '/subscriptions/subid/resourceGroups/rg/providers/Microsoft.Solutions/applicationDefinitions/myAppDef'
    managedResourceGroupId: '/subscriptions/subid/resourceGroups/myManagedRG'
  }
}
```
