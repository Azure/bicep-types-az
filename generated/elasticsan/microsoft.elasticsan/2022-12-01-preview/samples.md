# Microsoft.ElasticSan
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.elasticsan/elasticsans

ElasticSans_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans@2022-12-01-preview' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    availabilityZones: [
      '1'
    ]
    baseSizeTiB: 5
    extendedCapacitySizeTiB: 25
    sku: {
      name: 'Premium_LRS'
      tier: 'Premium'
    }
  }
  tags: {
    key9316: 'ihndtieqibtob'
  }
}
```

ElasticSans_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans@2022-12-01-preview' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    baseSizeTiB: 5
    extendedCapacitySizeTiB: 25
    sku: {
      name: 'Premium_LRS'
    }
  }
}
```

## microsoft.elasticsan/elasticsans/privateendpointconnections

PrivateEndpointConnections_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2022-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupIds: [
      'sytxzqlcoapcaywthgwvwcw'
    ]
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      actionsRequired: 'None'
      status: 'Pending'
    }
  }
}
```

PrivateEndpointConnections_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/privateEndpointConnections@2022-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      actionsRequired: 'None'
      status: 'Pending'
    }
  }
}
```

## microsoft.elasticsan/elasticsans/volumegroups

VolumeGroups_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups@2022-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    encryption: 'EncryptionAtRestWithPlatformKey'
    networkAcls: {
      virtualNetworkRules: [
        {
          action: 'Allow'
          id: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/virtualNetworks/{vnetName}/subnets/{subnetName}'
        }
      ]
    }
    protocolType: 'Iscsi'
  }
}
```

VolumeGroups_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups@2022-12-01-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.elasticsan/elasticsans/volumegroups/volumes

Volumes_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2022-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    creationData: {
      createSource: 'None'
      sourceUri: ' ARM Id of resource'
    }
    sizeGiB: 23
  }
}
```

Volumes_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ElasticSan/elasticSans/volumegroups/volumes@2022-12-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    sizeGiB: 23
  }
}
```
