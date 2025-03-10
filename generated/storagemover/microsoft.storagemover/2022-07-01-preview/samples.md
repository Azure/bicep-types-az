# Microsoft.StorageMover
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storagemover/storagemovers

StorageMovers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers@2022-07-01-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    description: 'Example Storage Mover Description'
  }
  tags: {
    key1: 'value1'
    key2: 'value2'
  }
}
```

## microsoft.storagemover/storagemovers/agents

Agents_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/agents@2022-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Agent Description'
    arcResourceId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/examples-rg/providers/Microsoft.HybridCompute/machines/examples-hybridComputeName'
    arcVmUuid: '3bb2c024-eba9-4d18-9e7a-1d772fcc5fe9'
  }
}
```

## microsoft.storagemover/storagemovers/endpoints

Endpoints_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2022-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Storage Container Endpoint Description'
    blobContainerName: 'examples-blobContainerName'
    endpointType: 'AzureStorageBlobContainer'
    storageAccountResourceId: '/subscriptions/11111111-2222-3333-4444-555555555555/resourceGroups/examples-rg/providers/Microsoft.Storage/storageAccounts/examples-storageAccountName/'
  }
}
```

## microsoft.storagemover/storagemovers/projects

Projects_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects@2022-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Project Description'
  }
}
```

## microsoft.storagemover/storagemovers/projects/jobdefinitions

JobDefinitions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2022-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Job Definition Description'
    agentName: 'migration-agent'
    copyMode: 'Additive'
    sourceName: 'examples-sourceEndpointName'
    sourceSubpath: '/'
    targetName: 'examples-targetEndpointName'
    targetSubpath: '/'
  }
}
```
