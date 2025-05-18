# Microsoft.AzureDataTransfer
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.azuredatatransfer/connections

Creates or updates the connection resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/connections@2025-04-11-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    justification: 'justification'
    pipeline: 'testdc'
    requirementId: 'id'
  }
}
```

## microsoft.azuredatatransfer/connections/flows

Creates or updates the flow resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/connections/flows@2025-04-11-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US'
  properties: {
    connection: {
      id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testRG/providers/Microsoft.AzureDataTransfer/connections/testConnection'
    }
    flowType: 'Standard'
    storageAccountName: 'testsa'
    storageContainerName: 'testcontainer'
  }
}
```

## microsoft.azuredatatransfer/pipelines

Creates or updates the pipeline resource
```bicep
resource exampleResource 'Microsoft.AzureDataTransfer/pipelines@2025-04-11-preview' = {
  name: 'example'
  location: 'East US'
  properties: {
    remoteCloud: 'testdc'
  }
}
```
