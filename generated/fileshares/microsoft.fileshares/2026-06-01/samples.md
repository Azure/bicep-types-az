# Microsoft.FileShares
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.fileshares/fileshares

FileShares_CreateOrUpdate_MaximumSet
```bicep
resource exampleResource 'Microsoft.FileShares/fileShares@2026-06-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    mediaTier: 'SSD'
    mountName: 'fileshare'
    nfsProtocolProperties: {
      encryptionInTransitRequired: 'Enabled'
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
resource exampleResource 'Microsoft.FileShares/fileShares/fileShareSnapshots@2026-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    initiatorId: 'backup-vault-001'
    metadata: {
      key9372: 'jtc'
    }
  }
}
```

## microsoft.fileshares/fileshares/privateendpointconnections

PrivateEndpointConnections_Create
```bicep
resource exampleResource 'Microsoft.FileShares/fileShares/privateEndpointConnections@2026-06-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by admin'
      status: 'Approved'
    }
  }
}
```
