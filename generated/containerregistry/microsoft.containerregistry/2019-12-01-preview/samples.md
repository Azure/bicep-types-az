# Microsoft.ContainerRegistry
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerregistry/registries

RegistryCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries@2019-12-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    adminUserEnabled: true
  }
  sku: {
    name: 'Standard'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.containerregistry/registries/exportpipelines

ExportPipelineCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/exportPipelines@2019-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'westus'
  properties: {
    options: [
      'OverwriteBlobs'
    ]
    target: {
      type: 'AzureStorageBlobContainer'
      keyVaultUri: 'https://myvault.vault.azure.net/secrets/acrexportsas'
      uri: 'https://accountname.blob.core.windows.net/containername'
    }
  }
}
```

## microsoft.containerregistry/registries/importpipelines

ImportPipelineCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/importPipelines@2019-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/f9d7ebed-adbd-4cb4-b973-aaf82c136138/resourcegroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity2': {
      }
    }
  }
  location: 'westus'
  properties: {
    options: [
      'OverwriteTags'
      'DeleteSourceBlobOnSuccess'
      'ContinueOnErrors'
    ]
    source: {
      type: 'AzureStorageBlobContainer'
      keyVaultUri: 'https://myvault.vault.azure.net/secrets/acrimportsas'
      uri: 'https://accountname.blob.core.windows.net/containername'
    }
  }
}
```

## microsoft.containerregistry/registries/pipelineruns

PipelineRunCreate_Export
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/pipelineRuns@2019-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    request: {
      artifacts: [
        'sourceRepository/hello-world'
        'sourceRepository2@sha256:00000000000000000000000000000000000'
      ]
      pipelineResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerRegistry/registries/myRegistry/exportPipelines/myExportPipeline'
      target: {
        name: 'myblob.tar.gz'
        type: 'AzureStorageBlob'
      }
    }
  }
}
```

PipelineRunCreate_Import
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/pipelineRuns@2019-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    forceUpdateTag: '2020-03-04T17:23:21.9261521+00:00'
    request: {
      catalogDigest: 'sha256@'
      pipelineResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerRegistry/registries/myRegistry/importPipelines/myImportPipeline'
      source: {
        name: 'myblob.tar.gz'
        type: 'AzureStorageBlob'
      }
    }
  }
}
```

## microsoft.containerregistry/registries/privateendpointconnections

PrivateEndpointConnectionCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/privateEndpointConnections@2019-12-01-preview' = {
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

## microsoft.containerregistry/registries/replications

ReplicationCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/replications@2019-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  tags: {
    key: 'value'
  }
}
```

## microsoft.containerregistry/registries/webhooks

WebhookCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/webhooks@2019-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus'
  properties: {
    actions: [
      'push'
    ]
    customHeaders: {
      Authorization: '******'
    }
    scope: 'myRepository'
    serviceUri: 'http://myservice.com'
    status: 'enabled'
  }
  tags: {
    key: 'value'
  }
}
```
