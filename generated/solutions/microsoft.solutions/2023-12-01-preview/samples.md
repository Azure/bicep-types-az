# Microsoft.Solutions

## microsoft.solutions/applications

Create or update managed application
```bicep
resource exampleResource 'Microsoft.Solutions/applications@2023-12-01-preview' = {
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
resource exampleResource 'Microsoft.Solutions/applicationDefinitions@2023-12-01-preview' = {
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

## microsoft.solutions/jitrequests

Create or update jit request
```bicep
resource exampleResource 'Microsoft.Solutions/jitRequests@2023-12-01-preview' = {
  name: 'example'
  properties: {
    applicationResourceId: '/subscriptions/00c76877-e316-48a7-af60-4a09fec9d43f/resourceGroups/52F30DB2/providers/Microsoft.Solutions/applications/7E193158'
    jitAuthorizationPolicies: [
      {
        principalId: '1db8e132e2934dbcb8e1178a61319491'
        roleDefinitionId: 'ecd05a23-931a-4c38-a52b-ac7c4c583334'
      }
    ]
    jitSchedulingPolicy: {
      type: 'Once'
      duration: 'PT8H'
      startTime: '2021-04-22T05:48:30.6661804Z'
    }
  }
}
```
