# Microsoft.MachineLearningServices

## microsoft.machinelearningservices/workspaces

Create Workspace
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces@2018-03-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
  properties: {
    description: 'test description'
    applicationInsights: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/microsoft.insights/components/testinsights'
    batchaiWorkspace: '/subscriptions/00000000-1111-2222-3333-444444444444/resourcegroups/workspace-1234/providers/Microsoft.BatchAI/workspaces/testBatchAIWorkspace'
    containerRegistry: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.ContainerRegistry/registries/testRegistry'
    friendlyName: 'HelloName'
    keyVault: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.KeyVault/vaults/testkv'
    storageAccount: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/accountcrud-1234/providers/Microsoft.Storage/storageAccounts/testStorageAccount'
  }
}
```

## microsoft.machinelearningservices/workspaces/computes

Create AKS Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2018-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'AKS'
  }
}
```

Create a BatchAI Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2018-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'BatchAI'
  }
}
```

Create a DataFactory Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2018-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'DataFactory'
  }
}
```

Update a AKS Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2018-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'some compute'
    computeType: 'AKS'
    properties: {
      agentCount: 4
    }
    resourceId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourcegroups/testrg123/providers/Microsoft.ContainerService/managedClusters/compute123-56826-c9b00420020b2'
  }
}
```

Update a BatchAI Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2018-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'some compute'
    computeType: 'BatchAI'
    properties: {
      scaleSettings: {
        autoScaleEnabled: false
        maxNodeCount: 4
        minNodeCount: 4
      }
    }
    resourceId: '/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testrg123/providers/Microsoft.BatchAI/clusters/compute123-ccb488844dcc2'
  }
}
```
