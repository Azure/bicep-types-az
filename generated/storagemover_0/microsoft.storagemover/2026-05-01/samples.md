# Microsoft.StorageMover
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storagemover/storagemovers

StorageMovers_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers@2026-05-01' = {
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
resource exampleResource 'Microsoft.StorageMover/storageMovers/agents@2026-05-01' = {
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
resource exampleResource 'Microsoft.StorageMover/storageMovers/agents@2026-05-01' = {
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
resource exampleResource 'Microsoft.StorageMover/storageMovers/agents@2026-05-01' = {
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

## microsoft.storagemover/storagemovers/connections

Connections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/connections@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Connection Description'
    privateLinkServiceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.Network/privateLinkServices/example-pls'
  }
}
```

## microsoft.storagemover/storagemovers/endpoints

Endpoints_CreateOrUpdate_AzureMultiCloudConnector
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example multi cloud connector resource id'
    awsS3BucketId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.AwsConnector/s3Buckets/testBucket'
    endpointKind: 'Source'
    endpointType: 'AzureMultiCloudConnector'
    multiCloudConnectorId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.HybridConnectivity/publicCloudConnectors/TestConnector'
  }
}
```

Endpoints_CreateOrUpdate_AzureStorageBlobContainer
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Storage Blob Container Endpoint Description'
    blobContainerName: 'examples-blobcontainer'
    endpointKind: 'Target'
    endpointType: 'AzureStorageBlobContainer'
    storageAccountResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.Storage/storageAccounts/examplesa'
  }
}
```

Endpoints_CreateOrUpdate_AzureStorageBlobContainer_CrossTenant
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Cross-tenant source Storage Blob Container Endpoint'
    allowedStorageAccounts: [
      '/subscriptions/0a2b3c4d-5e6f-7081-92a3-b4c5d6e7f809/resourceGroups/partner-rg/providers/Microsoft.Storage/storageAccounts/partnertargetsa'
    ]
    blobContainerName: 'examples-blobcontainer'
    enableCrossTenantTransfer: true
    endpointKind: 'Source'
    endpointType: 'AzureStorageBlobContainer'
    storageAccountResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.Storage/storageAccounts/examplesourcesa'
  }
}
```

Endpoints_CreateOrUpdate_AzureStorageNfsFileShare
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Storage File Share Endpoint Description'
    endpointKind: 'Target'
    endpointType: 'AzureStorageNfsFileShare'
    fileShareName: 'examples-fileshare'
    storageAccountResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.Storage/storageAccounts/examplesa'
  }
}
```

Endpoints_CreateOrUpdate_AzureStorageSmbFileShare
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Storage File Share Endpoint Description'
    endpointKind: 'Target'
    endpointType: 'AzureStorageSmbFileShare'
    fileShareName: 'examples-fileshare'
    storageAccountResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.Storage/storageAccounts/examplesa'
  }
}
```

Endpoints_CreateOrUpdate_AzureStorageSmbFileShare_CrossTenant
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Cross-tenant source Azure Storage SMB file share Endpoint'
    allowedStorageAccounts: [
      '/subscriptions/0a2b3c4d-5e6f-7081-92a3-b4c5d6e7f809/resourceGroups/partner-rg/providers/Microsoft.Storage/storageAccounts/partnertargetsa'
    ]
    enableCrossTenantTransfer: true
    endpointKind: 'Source'
    endpointType: 'AzureStorageSmbFileShare'
    fileShareName: 'examples-fileshare'
    storageAccountResourceId: '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.Storage/storageAccounts/examplesourcesa'
  }
}
```

Endpoints_CreateOrUpdate_NfsMount
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example NFS Mount Endpoint Description'
    endpointKind: 'Source'
    endpointType: 'NfsMount'
    export: 'examples-exportName'
    host: '0.0.0.0'
    sourceType: 'NfsMount'
  }
}
```

Endpoints_CreateOrUpdate_S3WithHmac
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example S3WithHmac Endpoint Description'
    credentials: {
      type: 'AzureKeyVaultS3WithHMAC'
      accessKeyUri: 'https://examples-azureKeyVault.vault.azure.net/secrets/examples-access'
      secretKeyUri: 'https://examples-azureKeyVault.vault.azure.net/secrets/examples-secret'
    }
    endpointKind: 'Source'
    endpointType: 'S3WithHMAC'
    sourceType: 'GCS'
    sourceUri: 'https://examples-bucket.s3.amazonaws.com/prefix/'
  }
}
```

Endpoints_CreateOrUpdate_SmbMount
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/endpoints@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example SMB Mount Endpoint Description'
    credentials: {
      type: 'AzureKeyVaultSmb'
      passwordUri: 'https://examples-azureKeyVault.vault.azure.net/secrets/examples-password'
      usernameUri: 'https://examples-azureKeyVault.vault.azure.net/secrets/examples-username'
    }
    endpointKind: 'Source'
    endpointType: 'SmbMount'
    host: '0.0.0.0'
    shareName: 'examples-shareName'
    sourceType: 'SmbMount'
  }
}
```

## microsoft.storagemover/storagemovers/projects

Projects_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects@2026-05-01' = {
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
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Job Definition Description'
    agentName: 'migration-agent'
    connections: [
      '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.StorageMover/storageMovers/examples-storageMoverName/connections/example-connection'
    ]
    copyMode: 'Additive'
    jobType: 'OnPremToCloud'
    moverSyncedUntil: '2026-05-01T00:00:00Z'
    preservePermissions: false
    sourceName: 'examples-sourceEndpointName'
    sourceSubpath: '/'
    syncMode: 'FullScan'
    targetName: 'examples-targetEndpointName'
    targetSubpath: '/'
  }
}
```

JobDefinitions_CreateOrUpdate_CloudToCloud
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Job Definition Description'
    agentName: 'dummy-agent'
    connections: [
      '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.StorageMover/storageMovers/examples-storageMoverName/connections/example-connection'
    ]
    copyMode: 'Additive'
    jobType: 'CloudToCloud'
    moverSyncedUntil: '2026-05-01T00:00:00Z'
    sourceName: 'examples-sourceEndpointName'
    sourceSubpath: '/'
    syncMode: 'SnapshotBased'
    targetName: 'examples-targetEndpointName'
    targetSubpath: '/'
  }
}
```

JobDefinitions_CreateOrUpdate_CrossTenant
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Cross-tenant Blob-to-Blob copy job. JobDefinition lives in the source (host) tenant alongside the local source endpoint; the target endpoint lives in a partner (guest) tenant.'
    agentName: 'migration-agent'
    copyMode: 'Additive'
    crossTenantEndpointResourceId: '/subscriptions/0a2b3c4d-5e6f-7081-92a3-b4c5d6e7f809/resourceGroups/partner-rg/providers/Microsoft.StorageMover/storageMovers/partner-storageMover/endpoints/partner-targetEndpoint'
    crossTenantEndpointTenantId: '11111111-2222-3333-4444-555555555555'
    isCrossTenantJob: true
    jobType: 'CloudToCloud'
    sourceName: 'examples-sourceEndpointName'
    sourceSubpath: '/'
    targetName: 'partner-targetEndpoint'
    targetSubpath: '/'
  }
}
```

JobDefinitions_CreateOrUpdate_With_Schedule
```bicep
resource exampleResource 'Microsoft.StorageMover/storageMovers/projects/jobDefinitions@2026-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Example Job Definition Description'
    agentName: 'dummy-agent'
    connections: [
      '/subscriptions/60bcfc77-6589-4da2-b7fd-f9ec9322cf95/resourceGroups/examples-rg/providers/Microsoft.StorageMover/storageMovers/examples-storageMoverName/connections/example-connection'
    ]
    copyMode: 'Additive'
    jobType: 'CloudToCloud'
    schedule: {
      daysOfWeek: [
        'Monday'
        'Wednesday'
        'Friday'
      ]
      endDate: '2025-12-31T12:00:00Z'
      executionTime: {
        hour: 9
        minute: 0
      }
      frequency: 'Weekly'
      isActive: true
      startDate: '2026-05-01T00:00:00Z'
    }
    sourceName: 'examples-sourceEndpointName'
    sourceSubpath: '/'
    targetName: 'examples-targetEndpointName'
    targetSubpath: '/'
  }
}
```
