# Microsoft.FileShares
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.fileshares/fileshares

FileShares_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.FileShares/fileShares@2025-06-01-preview' = {
  name: 'example'
  location: 'gdsuixfhrgfbbbfjtgocmlzyuonrr'
  properties: {
    mediaTier: 'SSD'
    mountName: 'fileshare'
    nfsProtocolProperties: {
      rootSquash: 'NoRootSquash'
    }
    provisionedIOPerSec: 5
    provisionedStorageGiB: 8
    provisionedThroughputMiBPerSec: 22
    publicAccessProperties: {
      allowedSubnets: [
        '/subscriptions/9760acf5-4638-11e7-9bdb-020073ca7778/resourceGroups/myRP/providers/Microsoft.Network/virtualNetworks/testvnet3/subnets/testsubnet3'
      ]
    }
    publicNetworkAccess: 'Enabled'
    redundancy: 'Local'
    protocol: 'NFS'
  }
  tags: {
    key9647: 'xwokdvyoae'
  }
}
```

## microsoft.fileshares/fileshares/filesharesnapshots

FileShareSnapshot_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.FileShares/fileShares/fileShareSnapshots@2025-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      key9372: 'jtc'
    }
  }
}
```
