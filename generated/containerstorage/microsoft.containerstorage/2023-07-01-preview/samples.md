# Microsoft.ContainerStorage
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.containerstorage/pools

Pools_CreateOrUpdate_AzureDisk
```bicep
resource exampleResource 'Microsoft.ContainerStorage/pools@2023-07-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    assignments: [
      {
        id: '/subscriptions/bb4d87a2-4273-466c-a6ba-61d818061b3a/resourceGroups/test-rg/providers/Microsoft.ContainerService/managedClusters/containerstoragetest'
      }
    ]
    poolType: {
      azureDisk: {
        encryption: {
          identity: {
            type: 'None'
            userAssignedIdentities: {
              key7678: {
              }
            }
          }
          keyName: 'test-key'
          keyVaultUri: 'https://test-kv.vault.azure.net/'
        }
        skuName: 'Premium_LRS'
      }
    }
    provisioningState: 'Succeeded'
    reclaimPolicy: 'Delete'
    resources: {
      requests: {
        storage: 15578
      }
    }
    status: {
      message: 'Operation is Pending'
      state: 'Pending'
    }
    zones: [
      '1'
      '2'
      '3'
    ]
  }
  tags: {
    key1888: 'value1888'
  }
}
```

Pools_CreateOrUpdate_ElasticSan
```bicep
resource exampleResource 'Microsoft.ContainerStorage/pools@2023-07-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    assignments: [
      {
        id: '/subscriptions/bb4d87a2-4273-466c-a6ba-61d818061b3a/resourceGroups/test-rg/providers/Microsoft.ContainerService/managedClusters/containerstoragetest'
      }
    ]
    poolType: {
      elasticSan: {
        encryption: {
          identity: {
            type: 'None'
            userAssignedIdentities: {
              key7678: {
              }
            }
          }
          keyName: 'test-key'
          keyVaultUri: 'https://test-kv.vault.azure.net/'
        }
        skuName: 'Premium_LRS'
      }
    }
    provisioningState: 'Succeeded'
    reclaimPolicy: 'Delete'
    resources: {
      requests: {
        storage: 15578
      }
    }
    status: {
      message: 'Operation is Pending'
      state: 'Pending'
    }
    zones: [
      '1'
      '2'
      '3'
    ]
  }
  tags: {
    key1888: 'value1888'
  }
}
```

Pools_CreateOrUpdate_Ephemeral
```bicep
resource exampleResource 'Microsoft.ContainerStorage/pools@2023-07-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    assignments: [
      {
        id: '/subscriptions/bb4d87a2-4273-466c-a6ba-61d818061b3a/resourceGroups/test-rg/providers/Microsoft.ContainerService/managedClusters/containerstoragetest'
      }
    ]
    poolType: {
      ephemeralDisk: {
        replicas: 3
      }
    }
    provisioningState: 'Succeeded'
    reclaimPolicy: 'Delete'
    resources: {
      requests: {
        storage: 15578
      }
    }
    status: {
      message: 'Operation is Pending'
      state: 'Pending'
    }
    zones: [
      '1'
      '2'
      '3'
    ]
  }
  tags: {
    key1888: 'value1888'
  }
}
```

## microsoft.containerstorage/pools/snapshots

Snapshots_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerStorage/pools/snapshots@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    provisioningState: 'Succeeded'
    source: 'C0C6I6'
    status: {
      message: 'Operation is Pending'
      state: 'Pending'
    }
  }
}
```

## microsoft.containerstorage/pools/volumes

Volumes_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.ContainerStorage/pools/volumes@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    capacityGiB: 25838
    labels: {
      key2039: 'value2039'
    }
    provisioningState: 'Succeeded'
    status: {
      message: 'Operation is Pending'
      state: 'Pending'
    }
  }
}
```
