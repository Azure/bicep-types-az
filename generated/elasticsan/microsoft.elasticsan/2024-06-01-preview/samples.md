# Microsoft.ElasticSan
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.elasticsan/elasticsans

ElasticSans_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans@2024-06-01-preview' = {
  name: 'example'
  location: 'France Central'
  properties: {
    autoScaleProperties: {
      scaleUpProperties: {
        autoScalePolicyEnforcement: 'None'
        capacityUnitScaleUpLimitTiB: 17
        increaseCapacityUnitByTiB: 4
        unusedSizeTiB: 24
      }
    }
    availabilityZones: [
      'xoz'
    ]
    baseSizeTiB: 1
    extendedCapacitySizeTiB: 3
    publicNetworkAccess: 'Enabled'
    sku: {
      name: 'Premium_LRS'
      tier: 'Premium'
    }
  }
  tags: {
    key9706: 'haitqqakcntcpalkzqmjmcnifnhd'
  }
}
```

ElasticSans_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans@2024-06-01-preview' = {
  name: 'example'
  location: 'France Central'
  properties: {
    baseSizeTiB: 1
    extendedCapacitySizeTiB: 3
    sku: {
      name: 'Premium_LRS'
    }
  }
}
```

## microsoft.elasticsan/elasticsans/privateendpointconnections

PrivateEndpointConnections_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupIds: [
      'jdwrzpemdjrpiwzvy'
    ]
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: 'dxl'
      actionsRequired: 'jhjdpwvyzipggtn'
      status: 'Pending'
    }
  }
}
```

PrivateEndpointConnections_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
    }
  }
}
```

## microsoft.elasticsan/elasticsans/volumegroups

VolumeGroups_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key1006: {
      }
    }
  }
  properties: {
    encryption: 'EncryptionAtRestWithPlatformKey'
    encryptionProperties: {
      identity: {
        userAssignedIdentity: 'gfhkfbozahmmwluqndfgxunssafa'
      }
      keyVaultProperties: {
        keyName: 'lunpapamzeimppgobraxjt'
        keyVaultUri: 'https://microsoft.com/a'
        keyVersion: 'oemygbnfmqhijmonkqfqmy'
      }
    }
    enforceDataIntegrityCheckForIscsi: true
    networkAcls: {
      virtualNetworkRules: [
        {
          action: 'Allow'
          id: 'bkhwaiqvvaguymsmnzzbzz'
        }
      ]
    }
    protocolType: 'Iscsi'
  }
}
```

VolumeGroups_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.elasticsan/elasticsans/volumegroups/snapshots

VolumeSnapshots_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups/snapshots@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    creationData: {
      sourceId: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}'
    }
  }
}
```

VolumeSnapshots_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups/snapshots@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    creationData: {
      sourceId: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}'
    }
  }
}
```

## microsoft.elasticsan/elasticsans/volumegroups/volumes

Volumes_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    creationData: {
      createSource: 'None'
      sourceId: 'ARM Id of Resource'
    }
    managedBy: {
      resourceId: 'mtkeip'
    }
    sizeGiB: 9
  }
}
```

Volumes_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2024-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    sizeGiB: 9
  }
}
```
