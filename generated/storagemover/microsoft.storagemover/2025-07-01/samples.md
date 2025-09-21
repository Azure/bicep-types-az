# Microsoft.StorageMover
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storagemover/storagemovers

StorageMovers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers@2025-07-01' = {
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

Agents_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/agents@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Agent Description'
    arcResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.HybridCompute/machines/examples-hybridComputeName'
    arcVmUuid: '3bb2c024-eba9-4d18-9e7a-1d772fcc5fe9'
    uploadLimitSchedule: {
      weeklyRecurrences: [
        {
          days: [
            'Monday'
          ]
          endTime: {
            hour: 18
            minute: 30
          }
          limitInMbps: 2000
          startTime: {
            hour: 9
            minute: 0
          }
        }
      ]
    }
  }
}
```

Agents_CreateOrUpdate_MinimumSet
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/agents@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    arcResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.HybridCompute/machines/examples-hybridComputeName'
    arcVmUuid: '3bb2c024-eba9-4d18-9e7a-1d772fcc5fe9'
  }
}
```

Agents_CreateOrUpdate_WithOvernightUploadLimitSchedule
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/agents@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    arcResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.HybridCompute/machines/examples-hybridComputeName'
    arcVmUuid: '3bb2c024-eba9-4d18-9e7a-1d772fcc5fe9'
    uploadLimitSchedule: {
      weeklyRecurrences: [
        {
          days: [
            'Monday'
            'Tuesday'
            'Wednesday'
            'Thursday'
            'Friday'
            'Saturday'
            'Sunday'
          ]
          endTime: {
            hour: 24
            minute: 0
          }
          limitInMbps: 2000
          startTime: {
            hour: 18
            minute: 0
          }
        }
        {
          days: [
            'Monday'
            'Tuesday'
            'Wednesday'
            'Thursday'
            'Friday'
            'Saturday'
            'Sunday'
          ]
          endTime: {
            hour: 9
            minute: 0
          }
          limitInMbps: 2000
          startTime: {
            hour: 0
            minute: 0
          }
        }
      ]
    }
  }
}
```

## microsoft.storagemover/storagemovers/endpoints

Endpoints_CreateOrUpdate_AzureMultiCloudConnector
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example multi cloud connector resource id'
    awsS3BucketId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.AwsConnector/s3Buckets/testBucket'
    endpointType: 'AzureMultiCloudConnector'
    multiCloudConnectorId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.HybridConnectivity/publicCloudConnectors/TestConnector'
  }
}
```

Endpoints_CreateOrUpdate_AzureStorageBlobContainer
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Storage Blob Container Endpoint Description'
    blobContainerName: 'examples-blobcontainer'
    endpointType: 'AzureStorageBlobContainer'
    storageAccountResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.Storage/storageAccounts/examplesa'
  }
}
```

Endpoints_CreateOrUpdate_AzureStorageNfsFileShare
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Storage File Share Endpoint Description'
    endpointType: 'AzureStorageNfsFileShare'
    fileShareName: 'examples-fileshare'
    storageAccountResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.Storage/storageAccounts/examplesa'
  }
}
```

Endpoints_CreateOrUpdate_AzureStorageSmbFileShare
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Storage File Share Endpoint Description'
    endpointType: 'AzureStorageSmbFileShare'
    fileShareName: 'examples-fileshare'
    storageAccountResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.Storage/storageAccounts/examplesa'
  }
}
```

Endpoints_CreateOrUpdate_NfsMount
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example NFS Mount Endpoint Description'
    endpointType: 'NfsMount'
    export: 'examples-exportName'
    host: '0.0.0.0'
  }
}
```

Endpoints_CreateOrUpdate_SmbMount
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example SMB Mount Endpoint Description'
    credentials: {
      type: 'AzureKeyVaultSmb'
      passwordUri: 'https://examples-azureKeyVault.vault.azure.net/secrets/examples-password'
      usernameUri: 'https://examples-azureKeyVault.vault.azure.net/secrets/examples-username'
    }
    endpointType: 'SmbMount'
    host: '0.0.0.0'
    shareName: 'examples-shareName'
  }
}
```

## microsoft.storagemover/storagemovers/projects

Projects_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects@2025-07-01' = {
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
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Job Definition Description'
    agentName: 'migration-agent'
    copyMode: 'Additive'
    jobType: 'OnPremToCloud'
    sourceName: 'examples-sourceEndpointName'
    sourceSubpath: '/'
    targetName: 'examples-targetEndpointName'
    targetSubpath: '/'
  }
}
```

JobDefinitions_CreateOrUpdate_CloudToCloud
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2025-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Job Definition Description'
    agentName: 'dummy-agent'
    copyMode: 'Additive'
    jobType: 'CloudToCloud'
    sourceName: 'examples-sourceEndpointName'
    sourceSubpath: '/'
    targetName: 'examples-targetEndpointName'
    targetSubpath: '/'
  }
}
```
