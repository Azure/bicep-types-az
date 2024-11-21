# Microsoft.AzureDataTransfer

## microsoft.azuredatatransfer/connections/flows

Creates or updates the flow resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/connections/flows@2024-01-25' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    connection: {
      id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testRG/providers/Microsoft.AzureDataTransfer/connections/testConnection'
    }
    flowType: 'Blob'
    storageAccountName: 'testsa'
    storageContainerName: 'testcontainer'
  }
}
```

## microsoft.azuredatatransfer/connections

Creates or updates the connection resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/connections@2024-01-25' = {
  name: 'example'
  location: 'East US'
  properties: {
    justification: 'justification'
    pipeline: 'testdc'
    requirementId: 'id'
  }
}
```

## microsoft.azuredatatransfer/pipelines

Creates or updates the pipeline resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/pipelines@2024-01-25' = {
  name: 'example'
  location: 'East US'
  properties: {
    remoteCloud: 'testdc'
  }
}
```
