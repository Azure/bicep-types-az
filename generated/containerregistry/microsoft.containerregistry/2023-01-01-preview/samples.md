# Microsoft.ContainerRegistry
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerregistry/registries

RegistryCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries@2023-01-01-preview' = {
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

RegistryCreateZoneRedundant
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries@2023-01-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    zoneRedundancy: 'Enabled'
  }
  sku: {
    name: 'Standard'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.containerregistry/registries/cacherules

CacheRuleCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/cacheRules@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    credentialSetResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerRegistry/registries/myRegistry/credentialSets/myCredentialSet'
    sourceRepository: 'docker.io/library/hello-world'
    targetRepository: 'cached-docker-hub/hello-world'
  }
}
```

## microsoft.containerregistry/registries/connectedregistries

ConnectedRegistryCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/connectedRegistries@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clientTokenIds: [
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerRegistry/registries/myRegistry/tokens/client1Token'
    ]
    mode: 'ReadWrite'
    notificationsList: [
      'hello-world:*:*'
      'sample/repo/*:1.0:*'
    ]
    parent: {
      syncProperties: {
        messageTtl: 'P2D'
        schedule: '0 9 * * *'
        syncWindow: 'PT3H'
        tokenId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerRegistry/registries/myRegistry/tokens/syncToken'
      }
    }
  }
}
```

## microsoft.containerregistry/registries/credentialsets

CredentialSetCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/credentialSets@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    authCredentials: [
      {
        name: 'Credential1'
        passwordSecretIdentifier: 'https://myvault.vault.azure.net/secrets/password'
        usernameSecretIdentifier: 'https://myvault.vault.azure.net/secrets/username'
      }
    ]
    loginServer: 'docker.io'
  }
}
```

## microsoft.containerregistry/registries/exportpipelines

ExportPipelineCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/exportPipelines@2023-01-01-preview' = {
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
resource exampleResource 'Microsoft.ContainerRegistry/registries/importPipelines@2023-01-01-preview' = {
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
resource exampleResource 'Microsoft.ContainerRegistry/registries/pipelineRuns@2023-01-01-preview' = {
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
resource exampleResource 'Microsoft.ContainerRegistry/registries/pipelineRuns@2023-01-01-preview' = {
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
resource exampleResource 'Microsoft.ContainerRegistry/registries/privateEndpointConnections@2023-01-01-preview' = {
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
resource exampleResource 'Microsoft.ContainerRegistry/registries/replications@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  tags: {
    key: 'value'
  }
}
```

ReplicationCreateZoneRedundant
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/replications@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    regionEndpointEnabled: true
    zoneRedundancy: 'Enabled'
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.containerregistry/registries/scopemaps

ScopeMapCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/scopeMaps@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Developer Scopes'
    actions: [
      'repositories/myrepository/contentWrite'
      'repositories/myrepository/delete'
    ]
  }
}
```

## microsoft.containerregistry/registries/tokens

TokenCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/tokens@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    credentials: {
      certificates: [
        {
          name: 'certificate1'
          encodedPemCertificate: 'LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSUc3akNDQk5hZ0F3SUJBZ0lURmdBQlR3UVpyZGdmdmhxdzBnQUFBQUZQQkRBTkJna3Foa2lHOXcwQkFRc0YKQURDQml6RUxNQWtHQTFVRUJoTUNWVk14RXpBUkJnTlZCQWdUQ2xkaGMyaHBibWQwYjI0eEVEQU9CZ05WQkFjVApCMUpsWkcxdmJtUXhIakFjQmdOVkJBb1RGVTFwWTNKdmMyOW1kQ0JEYjNKd2IzSmhkR2x2YmpFVk1CTUdBMVVFCkN4TU1UV2xqY205emIyWjBJRWxVTVI0d0hBWURWUVFERXhWTmFXTnliM052Wm5RZ1NWUWdWRXhUSUVOQklEUXcKSGhjTk1UZ3dOREV5TWpJek1qUTRXaGNOTWpBd05ERXlNakl6TWpRNFdqQTVNVGN3TlFZRFZRUURFeTV6WlhKMgphV05sWTJ4cFpXNTBZMlZ5ZEMxd1lYSjBibVZ5TG0xaGJtRm5aVzFsYm5RdVlYcDFjbVV1WTI5dE1JSUJJakFOCkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQTBSYjdJcHpxMmR4emhhbVpyS1ZDakMzeTQyYlYKUnNIY2pCUTFuSDBHZ1puUDhXeDZDSE1mWThybkVJQzRLeVRRYkJXVzhnNXlmc3NSQ0ZXbFpxYjR6SkRXS0pmTgpGSmNMUm9LNnhwTktZYVZVTkVlT25IdUxHYTM0ZlA0VjBFRjZybzdvbkRLME5zanhjY1dZVzRNVXVzc0xrQS94CkUrM2RwU1REdk1KcjJoWUpsVnFDcVR6blQvbmZaVUZzQUVEQnp5MUpOOHZiZDlIR2czc2Myd0x4dk95cFJOc0gKT1V3V2pmN2xzWWZleEVlcWkzY29EeHc2alpLVWEyVkdsUnBpTkowMjhBQitYSi9TU1FVNVBsd0JBbU9TT3ovRApGY0NKdGpPZlBqU1NKckFIQVV3SHU3RzlSV05JTFBwYU9zQ1J5eitETE5zNGpvNlEvUUg4d1lManJRSURBUUFCCm80SUNtakNDQXBZd0N3WURWUjBQQkFRREFnU3dNQjBHQTFVZEpRUVdNQlFHQ0NzR0FRVUZCd01DQmdnckJnRUYKQlFjREFUQWRCZ05WSFE0RUZnUVVlbEdkVVJrZzJoSFFOWEQ4WUc4L3drdjJVT0F3SHdZRFZSMGpCQmd3Rm9BVQplbnVNd2Mvbm9Nb2MxR3Y2KytFend3OGFvcDB3Z2F3R0ExVWRId1NCcERDQm9UQ0JucUNCbTZDQm1JWkxhSFIwCmNEb3ZMMjF6WTNKc0xtMXBZM0p2YzI5bWRDNWpiMjB2Y0d0cEwyMXpZMjl5Y0M5amNtd3ZUV2xqY205emIyWjAKSlRJd1NWUWxNakJVVEZNbE1qQkRRU1V5TURRdVkzSnNoa2xvZEhSd09pOHZZM0pzTG0xcFkzSnZjMjltZEM1agpiMjB2Y0d0cEwyMXpZMjl5Y0M5amNtd3ZUV2xqY205emIyWjBKVEl3U1ZRbE1qQlVURk1sTWpCRFFTVXlNRFF1ClkzSnNNSUdGQmdnckJnRUZCUWNCQVFSNU1IY3dVUVlJS3dZQkJRVUhNQUtHUldoMGRIQTZMeTkzZDNjdWJXbGoKY205emIyWjBMbU52YlM5d2Eya3ZiWE5qYjNKd0wwMXBZM0p2YzI5bWRDVXlNRWxVSlRJd1ZFeFRKVEl3UTBFbApNakEwTG1OeWREQWlCZ2dyQmdFRkJRY3dBWVlXYUhSMGNEb3ZMMjlqYzNBdWJYTnZZM053TG1OdmJUQStCZ2tyCkJnRUVBWUkzRlFjRU1UQXZCaWNyQmdFRUFZSTNGUWlIMm9aMWcrN1pBWUxKaFJ1QnRaNWhoZlRyWUlGZGhOTGYKUW9Mbmszb0NBV1FDQVIwd1RRWURWUjBnQkVZd1JEQkNCZ2tyQmdFRUFZSTNLZ0V3TlRBekJnZ3JCZ0VGQlFjQwpBUlluYUhSMGNEb3ZMM2QzZHk1dGFXTnliM052Wm5RdVkyOXRMM0JyYVM5dGMyTnZjbkF2WTNCek1DY0dDU3NHCkFRUUJnamNWQ2dRYU1CZ3dDZ1lJS3dZQkJRVUhBd0l3Q2dZSUt3WUJCUVVIQXdFd09RWURWUjBSQkRJd01JSXUKYzJWeWRtbGpaV05zYVdWdWRHTmxjblF0Y0dGeWRHNWxjaTV0WVc1aFoyVnRaVzUwTG1GNmRYSmxMbU52YlRBTgpCZ2txaGtpRzl3MEJBUXNGQUFPQ0FnRUFIVXIzbk1vdUI5WWdDUlRWYndUTllIS2RkWGJkSW1GUXNDYys4T1g1CjE5c0N6dFFSR05iSXEwVW1Ba01MbFVvWTIxckh4ZXdxU2hWczFhL2RwaFh5Tk1pcUdaU2QzU1BtYzZscitqUFQKNXVEREs0MUlWeXN0K2VUNlpyazFvcCtMVmdkeS9EU2lyNzVqcWZFY016bS82bU8rNnFNeWRLTWtVYmM5K3JHVwphUkpUcjRWUUdIRmEwNEIwZVZpNUd4MG9pL2RpZDNSaXg2aXJMMjFJSGEwYjN6c1hzZHpHU0R2K3hqL2Q2S0l4Ckdrd2FhYmZvU1NoQnFqaFNlQ0VyZXFlb1RpYjljdGw0MGRVdUp3THl4bjhHS2N6K3AvMEJUOEIxU3lYK01OQ2wKY0pkMjVtMjhLajY2TGUxOEVyeFlJYXZJVGVGa3Y2eGZjdkEvcHladDdPaU41QTlGQk1IUmpQK1kyZ2tvdjMrcQpISFRUZG4xNnlRajduNit3YlFHNGVleXc0YisyQkRLcUxNVFU2ZmlSQ3ZPM2FPZVBLSFVNN3R4b1FidWl6Z3NzCkNiMzl3QnJOTEZsMkJLQ1RkSCtkSU9oZVJiSkZvbmlwOGRPOUVFZWdSSG9lQW54ZUlYTFBrdXMzTzEvZjRhNkIKWHQ3RG5BUm8xSzJmeEp3VXRaU2MvR3dFSjU5NzlnRXlEa3pDZEVsLzdpWE9QZXVjTXhlM2xVM2pweUtsNERUaApjSkJqQytqNGpLWTFrK1U4b040aGdqYnJISUx6Vnd2eU15OU5KS290U3BMSjQxeHdPOHlGangxalFTT3Bxc0N1ClFhUFUvTjhSZ0hxWjBGTkFzS3dNUmZ6WmdXanRCNzRzYUVEdk5jVmNuNFhCQnFNSG0ydHo2Uzk3d3kxZGt0cTgKSE5BPQotLS0tLUVORCBDRVJUSUZJQ0FURS0tLS0tCg=='
        }
      ]
    }
    scopeMapId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.ContainerRegistry/registries/myRegistry/scopeMaps/myScopeMap'
    status: 'disabled'
  }
}
```

## microsoft.containerregistry/registries/webhooks

WebhookCreate
```bicep
resource exampleResource 'Microsoft.ContainerRegistry/registries/webhooks@2023-01-01-preview' = {
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