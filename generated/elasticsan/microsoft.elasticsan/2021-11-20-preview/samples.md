# Microsoft.ElasticSan

## microsoft.elasticsan/elasticsans

ElasticSans_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans@2021-11-20-preview' = {
  name: 'example'
  location: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa'
  properties: {
    availabilityZones: [
      'aaaaaaaaaaaaaaaaa'
    ]
    baseSizeTiB: 26
    extendedCapacitySizeTiB: 7
    sku: {
      name: 'Premium_LRS'
      tier: 'Premium'
    }
  }
  tags: {
    key896: 'aaaaaaaaaaaaaaaaaa'
  }
}
```

ElasticSans_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans@2021-11-20-preview' = {
  name: 'example'
  properties: {
    baseSizeTiB: 26
    extendedCapacitySizeTiB: 7
    sku: {
      name: 'Premium_LRS'
    }
  }
}
```

## microsoft.elasticsan/elasticsans/volumegroups

VolumeGroups_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups@2021-11-20-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    encryption: 'EncryptionAtRestWithPlatformKey'
    networkAcls: {
      virtualNetworkRules: [
        {
          action: 'Allow'
          id: 'aaaaaaaaaaaaaaaa'
        }
      ]
    }
    protocolType: 'Iscsi'
  }
  tags: {
    key5933: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  }
}
```

VolumeGroups_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups@2021-11-20-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.elasticsan/elasticsans/volumegroups/volumes

Volumes_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2021-11-20-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    creationData: {
      createSource: 'None'
      sourceUri: 'aaaaaa'
    }
    sizeGiB: 22
  }
  tags: {
    key7423: 'aaaa'
  }
}
```

Volumes_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2021-11-20-preview' = {
  parent: parentResource 
  name: 'example'
}
```
