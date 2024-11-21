# Microsoft.MachineLearning

## microsoft.machinelearning/workspaces

WorkspaceCreate
```bicep
resource exampleResource 'Microsoft.MachineLearning/workspaces@2019-10-01' = {
  name: 'example'
  location: 'West Europe'
  properties: {
    ownerEmail: 'abc@microsoft.com'
    userStorageAccountId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/teststorage'
  }
  sku: {
    name: 'Enterprise'
    tier: 'Enterprise'
  }
  tags: {
    tagKey1: 'TagValue1'
  }
}
```
