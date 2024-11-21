# Microsoft.MachineLearning

## microsoft.machinelearning/workspaces

WorkspaceCreate
```bicep
resource exampleResource 'Microsoft.MachineLearning/workspaces@2016-04-01' = {
  name: 'example'
  location: 'West Europe'
  properties: {
    ownerEmail: 'abc@microsoft.com'
    userStorageAccountId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/teststorage'
  }
  tags: {
    tagKey1: 'TagValue1'
  }
}
```
