# Microsoft.StorageCache
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.storagecache/caches

Caches_Create
```bicep
resource exampleResource 'Microsoft.StorageCache/caches@2019-08-01-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    cacheSizeGB: 3072
    subnet: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/scgroup/providers/Microsoft.Network/virtualNetworks/scvnet/subnets/sub1'
  }
  sku: {
    name: 'Standard_2G'
  }
  tags: {
    Dept: 'Initech'
  }
}
```

## microsoft.storagecache/caches/storagetargets

StorageTargets_Create
```bicep
resource exampleResource 'Microsoft.StorageCache/caches/storageTargets@2019-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    junctions: [
      {
        namespacePath: '/path/on/cache'
        nfsExport: 'exp1'
        targetPath: '/path/on/exp1'
      }
      {
        namespacePath: '/path2/on/cache'
        nfsExport: 'exp2'
        targetPath: '/path2/on/exp2'
      }
    ]
    nfs3: {
      target: '10.0.44.44'
      usageModel: 'READ_HEAVY_INFREQ'
    }
    targetType: 'nfs3'
  }
}
```
