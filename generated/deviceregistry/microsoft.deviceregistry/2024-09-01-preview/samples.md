# Microsoft.DeviceRegistry

## microsoft.deviceregistry/assetendpointprofiles

Create_AssetEndpointProfile
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assetEndpointProfiles@2024-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    authentication: {
      method: 'Anonymous'
    }
    endpointProfileType: 'myEndpointProfileType'
    targetAddress: 'https://www.example.com/myTargetAddress'
  }
  tags: {
    site: 'building-1'
  }
}
```

Create_AssetEndpointProfile_With_DiscoveredAepRef
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assetEndpointProfiles@2024-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    authentication: {
      method: 'Anonymous'
    }
    discoveredAssetEndpointProfileRef: 'discoveredAssetEndpointProfile1'
    endpointProfileType: 'myEndpointProfileType'
    targetAddress: 'https://www.example.com/myTargetAddress'
  }
  tags: {
    site: 'building-1'
  }
}
```

## microsoft.deviceregistry/assets

Create_Asset_With_DiscoveredAssetRefs
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assets@2024-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    description: 'This is a sample Asset'
    assetEndpointProfileRef: 'myAssetEndpointProfile'
    datasets: [
      {
        name: 'dataset1'
        dataPoints: [
          {
            name: 'dataPoint1'
            dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt1'
            observabilityMode: 'Counter'
          }
          {
            name: 'dataPoint2'
            dataPointConfiguration: '{"publishingInterval":4,"samplingInterval":4,"queueSize":7}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt2'
            observabilityMode: 'None'
          }
        ]
        datasetConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
        topic: {
          path: '/path/dataset1'
          retain: 'Keep'
        }
      }
    ]
    defaultDatasetsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultTopic: {
      path: '/path/defaultTopic'
      retain: 'Keep'
    }
    discoveredAssetRefs: [
      'discoveredAsset1'
      'discoveredAsset2'
    ]
    displayName: 'AssetDisplayName'
    documentationUri: 'https://www.example.com/manual'
    enabled: true
    events: [
      {
        name: 'event1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":1,"queueSize":8}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
        observabilityMode: 'None'
        topic: {
          path: '/path/event1'
          retain: 'Keep'
        }
      }
      {
        name: 'event2'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":8,"queueSize":4}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
        observabilityMode: 'Log'
      }
    ]
    externalAssetId: '8ZBA6LRHU0A458969'
    hardwareRevision: '1.0'
    manufacturer: 'Contoso'
    manufacturerUri: 'https://www.contoso.com/manufacturerUri'
    model: 'ContosoModel'
    productCode: 'SA34VDG'
    serialNumber: '64-103816-519918-8'
    softwareRevision: '2.0'
  }
  tags: {
    site: 'building-1'
  }
}
```

Create_Asset_With_ExternalAssetId
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assets@2024-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    description: 'This is a sample Asset'
    assetEndpointProfileRef: 'myAssetEndpointProfile'
    datasets: [
      {
        name: 'dataset1'
        dataPoints: [
          {
            name: 'dataPoint1'
            dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt1'
            observabilityMode: 'Counter'
          }
          {
            name: 'dataPoint2'
            dataPointConfiguration: '{"publishingInterval":4,"samplingInterval":4,"queueSize":7}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt2'
            observabilityMode: 'None'
          }
        ]
        datasetConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
        topic: {
          path: '/path/dataset1'
          retain: 'Keep'
        }
      }
    ]
    defaultDatasetsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultTopic: {
      path: '/path/defaultTopic'
      retain: 'Keep'
    }
    displayName: 'AssetDisplayName'
    documentationUri: 'https://www.example.com/manual'
    enabled: true
    events: [
      {
        name: 'event1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":1,"queueSize":8}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
        observabilityMode: 'None'
        topic: {
          path: '/path/event1'
          retain: 'Keep'
        }
      }
      {
        name: 'event2'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":8,"queueSize":4}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
        observabilityMode: 'Log'
      }
    ]
    externalAssetId: '8ZBA6LRHU0A458969'
    hardwareRevision: '1.0'
    manufacturer: 'Contoso'
    manufacturerUri: 'https://www.contoso.com/manufacturerUri'
    model: 'ContosoModel'
    productCode: 'SA34VDG'
    serialNumber: '64-103816-519918-8'
    softwareRevision: '2.0'
  }
  tags: {
    site: 'building-1'
  }
}
```

Create_Asset_Without_DisplayName
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assets@2024-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    description: 'This is a sample Asset'
    assetEndpointProfileRef: 'myAssetEndpointProfile'
    datasets: [
      {
        name: 'dataset1'
        dataPoints: [
          {
            name: 'dataPoint1'
            dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt1'
            observabilityMode: 'Counter'
          }
          {
            name: 'dataPoint2'
            dataPointConfiguration: '{"publishingInterval":4,"samplingInterval":4,"queueSize":7}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt2'
            observabilityMode: 'None'
          }
        ]
        datasetConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
        topic: {
          path: '/path/dataset1'
          retain: 'Keep'
        }
      }
    ]
    defaultDatasetsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultTopic: {
      path: '/path/defaultTopic'
      retain: 'Keep'
    }
    documentationUri: 'https://www.example.com/manual'
    enabled: true
    events: [
      {
        name: 'event1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":1,"queueSize":8}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
        observabilityMode: 'None'
        topic: {
          path: '/path/event1'
          retain: 'Keep'
        }
      }
      {
        name: 'event2'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":8,"queueSize":4}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
        observabilityMode: 'Log'
      }
    ]
    externalAssetId: '8ZBA6LRHU0A458969'
    hardwareRevision: '1.0'
    manufacturer: 'Contoso'
    manufacturerUri: 'https://www.contoso.com/manufacturerUri'
    model: 'ContosoModel'
    productCode: 'SA34VDG'
    serialNumber: '64-103816-519918-8'
    softwareRevision: '2.0'
  }
  tags: {
    site: 'building-1'
  }
}
```

Create_Asset_Without_ExternalAssetId
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assets@2024-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    description: 'This is a sample Asset'
    assetEndpointProfileRef: 'myAssetEndpointProfile'
    datasets: [
      {
        name: 'dataset1'
        dataPoints: [
          {
            name: 'dataPoint1'
            dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt1'
            observabilityMode: 'Counter'
          }
          {
            name: 'dataPoint2'
            dataPointConfiguration: '{"publishingInterval":4,"samplingInterval":4,"queueSize":7}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt2'
            observabilityMode: 'None'
          }
        ]
        datasetConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
        topic: {
          path: '/path/dataset1'
          retain: 'Keep'
        }
      }
    ]
    defaultDatasetsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultTopic: {
      path: '/path/defaultTopic'
      retain: 'Keep'
    }
    displayName: 'AssetDisplayName'
    documentationUri: 'https://www.example.com/manual'
    enabled: true
    events: [
      {
        name: 'event1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":1,"queueSize":8}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
        observabilityMode: 'None'
        topic: {
          path: '/path/event1'
          retain: 'Keep'
        }
      }
      {
        name: 'event2'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":8,"queueSize":4}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
        observabilityMode: 'Log'
      }
    ]
    hardwareRevision: '1.0'
    manufacturer: 'Contoso'
    manufacturerUri: 'https://www.contoso.com/manufacturerUri'
    model: 'ContosoModel'
    productCode: 'SA34VDG'
    serialNumber: '64-103816-519918-8'
    softwareRevision: '2.0'
  }
  tags: {
    site: 'building-1'
  }
}
```

## microsoft.deviceregistry/discoveredassetendpointprofiles

Create_DiscoveredAssetEndpointProfile
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/discoveredAssetEndpointProfiles@2024-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    additionalConfiguration: '{"foo": "bar"}'
    discoveryId: '11111111-1111-1111-1111-111111111111'
    endpointProfileType: 'myEndpointProfileType'
    supportedAuthenticationMethods: [
      'Anonymous'
      'Certificate'
      'UsernamePassword'
    ]
    targetAddress: 'https://www.example.com/myTargetAddress'
    version: 73766
  }
  tags: {
    site: 'building-1'
  }
}
```

## microsoft.deviceregistry/discoveredassets

Create_DiscoveredAsset
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/discoveredAssets@2024-09-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    assetEndpointProfileRef: 'myAssetEndpointProfile'
    datasets: [
      {
        name: 'dataset1'
        dataPoints: [
          {
            name: 'dataPoint1'
            dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt1'
          }
          {
            name: 'dataPoint2'
            dataPointConfiguration: '{"publishingInterval":4,"samplingInterval":4,"queueSize":7}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt2'
          }
        ]
        datasetConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
        topic: {
          path: '/path/dataset1'
          retain: 'Keep'
        }
      }
    ]
    defaultDatasetsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultTopic: {
      path: '/path/defaultTopic'
      retain: 'Keep'
    }
    discoveryId: '11111111-1111-1111-1111-111111111111'
    documentationUri: 'https://www.example.com/manual'
    events: [
      {
        name: 'event1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":1,"queueSize":8}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
        topic: {
          path: '/path/event1'
          retain: 'Keep'
        }
      }
      {
        name: 'event2'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":8,"queueSize":4}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
      }
    ]
    hardwareRevision: '1.0'
    manufacturer: 'Contoso'
    manufacturerUri: 'https://www.contoso.com/manufacturerUri'
    model: 'ContosoModel'
    productCode: 'SA34VDG'
    serialNumber: '64-103816-519918-8'
    softwareRevision: '2.0'
    version: 73766
  }
  tags: {
    site: 'building-1'
  }
}
```

## microsoft.deviceregistry/schemaregistries

Create_SchemaRegistry
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/schemaRegistries@2024-09-01-preview' = {
  name: 'example'
  identity: {
    type: 'None'
  }
  location: 'West Europe'
  properties: {
    description: 'This is a sample Schema Registry'
    displayName: 'Schema Registry namespace 001'
    namespace: 'sr-namespace-001'
    storageAccountContainerUrl: 'my-blob-storage.blob.core.windows.net/my-container'
  }
  tags: {
  }
}
```

## microsoft.deviceregistry/schemaregistries/schemas

Create_Schema
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/schemaRegistries/schemas@2024-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    format: 'JsonSchema/draft-07'
    description: 'This is a sample Schema'
    displayName: 'My Schema'
    schemaType: 'MessageSchema'
    tags: {
      sampleKey: 'sampleValue'
    }
  }
}
```

## microsoft.deviceregistry/schemaregistries/schemas/schemaversions

Create_SchemaVersion
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/schemaRegistries/schemas/schemaVersions@2024-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Schema version 1'
    schemaContent: '{"$schema": "http://json-schema.org/draft-07/schema#","type": "object","properties": {"humidity": {"type": "string"},"temperature": {"type":"number"}}}'
  }
}
```
