# Microsoft.MachineLearningServices

## microsoft.machinelearningservices/workspaces

Create Workspace
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces@2020-03-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2euap'
  properties: {
    description: 'test description'
    applicationInsights: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/microsoft.insights/components/testinsights'
    containerRegistry: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.ContainerRegistry/registries/testRegistry'
    encryption: {
      keyVaultProperties: {
        identityClientId: ''
        keyIdentifier: 'https://testkv.vault.azure.net/keys/testkey/aabbccddee112233445566778899aabb'
        keyVaultArmId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.KeyVault/vaults/testkv'
      }
      status: 'Enabled'
    }
    friendlyName: 'HelloName'
    hbiWorkspace: false
    keyVault: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.KeyVault/vaults/testkv'
    sharedPrivateLinkResources: [
      {
        name: 'testdbresource'
        properties: {
          groupId: 'Sql'
          privateLinkResourceId: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/workspace-1234/providers/Microsoft.DocumentDB/databaseAccounts/testdbresource/privateLinkResources/Sql'
          requestMessage: 'Please approve'
          status: 'Approved'
        }
      }
    ]
    storageAccount: '/subscriptions/00000000-1111-2222-3333-444444444444/resourceGroups/accountcrud-1234/providers/Microsoft.Storage/storageAccounts/testStorageAccount'
  }
  sku: {
    name: 'Basic'
    tier: 'Basic'
  }
}
```

## microsoft.machinelearningservices/workspaces/computes

Create AKS Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'AKS'
  }
}
```

Create a AML Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    computeType: 'AmlCompute'
    properties: {
      remoteLoginPortPublicAccess: 'NotSpecified'
      scaleSettings: {
        maxNodeCount: 1
        minNodeCount: 0
        nodeIdleTimeBeforeScaleDown: 'PT5M'
      }
      vmPriority: 'Dedicated'
      vmSize: 'STANDARD_NC6'
    }
  }
}
```

Create a DataFactory Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-03-01' = {
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
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-03-01' = {
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

Update a AML Compute
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/computes@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'some compute'
    computeType: 'AmlCompute'
    properties: {
      scaleSettings: {
        maxNodeCount: 4
        minNodeCount: 4
        nodeIdleTimeBeforeScaleDown: 'PT5M'
      }
    }
  }
}
```

## microsoft.machinelearningservices/workspaces/privateendpointconnections

WorkspacePutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.MachineLearningServices/workspaces/privateEndpointConnections@2020-03-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```
