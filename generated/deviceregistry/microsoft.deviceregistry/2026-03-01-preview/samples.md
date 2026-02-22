# Microsoft.DeviceRegistry
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.deviceregistry/assetendpointprofiles

CreateOrReplace_AssetEndpointProfile
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assetEndpointProfiles@2026-03-01-preview' = {
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

CreateOrReplace_AssetEndpointProfile_With_DiscoveredAepRef
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assetEndpointProfiles@2026-03-01-preview' = {
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

CreateOrReplace_Asset_With_DiscoveredAssetRefs
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assets@2026-03-01-preview' = {
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

CreateOrReplace_Asset_With_ExternalAssetId
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assets@2026-03-01-preview' = {
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

CreateOrReplace_Asset_Without_DisplayName
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assets@2026-03-01-preview' = {
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

CreateOrReplace_Asset_Without_ExternalAssetId
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assets@2026-03-01-preview' = {
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

## microsoft.deviceregistry/namespaces

CreateOrReplace_Namespace_With_Endpoints
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces@2026-03-01-preview' = {
  name: 'example'
  location: 'North Europe'
  properties: {
    messaging: {
      endpoints: {
        anotherIothubEndpoint: {
          address: 'https://iothub-for-dps-2.azure-devices.net'
          endpointType: 'Microsoft.Devices/IotHubs'
        }
        iothubEndpoint: {
          address: 'https://iothub-for-dps.azure-devices.net'
          endpointType: 'Microsoft.Devices/IotHubs'
        }
      }
    }
  }
}
```

## microsoft.deviceregistry/namespaces/assets

CreateOrReplace_NamespaceAsset
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces/assets@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    description: 'This is a sample Asset'
    assetTypeRefs: [
      'myAssetTypeRef1'
      'myAssetTypeRef2'
    ]
    attributes: {
      floor: '1'
    }
    datasets: [
      {
        name: 'dataset1'
        dataPoints: [
          {
            name: 'dataset1DataPoint1'
            dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
            typeRef: 'dataset1DataPoint1TypeRef'
          }
          {
            name: 'dataset1DataPoint2'
            dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
            typeRef: 'dataset1DataPoint2TypeRef'
          }
        ]
        dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/Oven;i=5'
        datasetConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
        destinations: [
          {
            configuration: {
              key: 'dataset1'
            }
            target: 'BrokerStateStore'
          }
        ]
        typeRef: 'dataset1TypeRef'
      }
    ]
    defaultDatasetsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultDatasetsDestinations: [
      {
        configuration: {
          key: 'defaultValue'
        }
        target: 'BrokerStateStore'
      }
    ]
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsDestinations: [
      {
        configuration: {
          path: '/tmp'
        }
        target: 'Storage'
      }
    ]
    defaultManagementGroupsConfiguration: '{"retryCount":10,"retryBackoffInterval":15}'
    defaultStreamsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultStreamsDestinations: [
      {
        configuration: {
          qos: 'Qos0'
          retain: 'Never'
          topic: '/contoso/test'
          ttl: 3600
        }
        target: 'Mqtt'
      }
    ]
    deviceRef: {
      deviceName: 'device1'
      endpointName: 'opcuaendpointname'
    }
    discoveredAssetRefs: [
      'discoveredAsset1'
    ]
    displayName: 'AssetDisplayName'
    documentationUri: 'https://www.example.com/manual'
    enabled: true
    externalAssetId: '8ZBA6LRHU0A458969'
    hardwareRevision: '1.0'
    managementGroups: [
      {
        name: 'managementGroup1'
        actions: [
          {
            name: 'action1'
            actionConfiguration: '{"retryCount":5,"retryBackoffInterval":5}'
            actionType: 'Call'
            targetUri: '/onvif/device_service?ONVIFProfile=Profile1'
            timeoutInSeconds: 60
            topic: '/contoso/managementGroup1/action1'
            typeRef: 'action1TypeRef'
          }
          {
            name: 'action2'
            actionConfiguration: '{"retryCount":5,"retryBackoffInterval":5}'
            actionType: 'Call'
            targetUri: '/onvif/device_service?ONVIFProfile=Profile2'
            timeoutInSeconds: 60
            topic: '/contoso/managementGroup1/action2'
            typeRef: 'action2TypeRef'
          }
        ]
        defaultTimeoutInSeconds: 100
        defaultTopic: '/contoso/managementGroup1'
        managementGroupConfiguration: '{"retryCount":10,"retryBackoffInterval":15}'
        typeRef: 'managementGroup1TypeRef'
      }
    ]
    manufacturer: 'Contoso'
    manufacturerUri: 'https://www.contoso.com/manufacturerUri'
    model: 'ContosoModel'
    productCode: 'SA34VDG'
    serialNumber: '64-103816-519918-8'
    softwareRevision: '2.0'
    streams: [
      {
        name: 'stream1'
        destinations: [
          {
            configuration: {
              path: '/tmp/stream1'
            }
            target: 'Storage'
          }
        ]
        streamConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
        typeRef: 'stream1TypeRef'
      }
      {
        name: 'stream2'
        destinations: [
          {
            configuration: {
              qos: 'Qos0'
              retain: 'Never'
              topic: '/contoso/testStream2'
              ttl: 7200
            }
            target: 'Mqtt'
          }
        ]
        streamConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
        typeRef: 'stream2TypeRef'
      }
    ]
  }
  tags: {
    site: 'building-1'
  }
}
```

## microsoft.deviceregistry/namespaces/credentials

CreateOrReplace_Credentials
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces/credentials@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'East US 2'
  properties: {
  }
  tags: {
    key7121: 'mtdjqipusqaqhdvekrknyjeo'
  }
}
```

## microsoft.deviceregistry/namespaces/credentials/policies

CreateOrReplace_Policies
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces/credentials/policies@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificate: {
      certificateAuthorityConfiguration: {
        bringYourOwnRoot: {
          enabled: true
        }
        keyType: 'ECC'
      }
      leafCertificateConfiguration: {
        validityPeriodInDays: 10
      }
    }
  }
}
```

## microsoft.deviceregistry/namespaces/devices

Create edge enabled device with anonymous host authentication.
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces/devices@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    attributes: {
      deviceCategory: 16
      deviceOwner: 'OT'
      deviceType: 'dough-maker'
    }
    enabled: true
    endpoints: {
      inbound: {
        theOnlyOPCUABroker: {
          address: 'opc.tcp://192.168.86.23:51211/UA/SampleServer'
          authentication: {
            method: 'Anonymous'
          }
          endpointType: 'microsoft.opcua:v1'
          version: '2'
        }
      }
    }
    externalDeviceId: 'unique-edge-device-identifier'
  }
}
```

Create edge enabled device with UsernamesPassword inbound authentication.
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces/devices@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    attributes: {
      deviceCategory: 16
      deviceOwner: 'IT'
      deviceType: 'sensor'
    }
    enabled: true
    endpoints: {
      inbound: {
        theOnlyOPCUABroker: {
          address: 'opc.tcp://192.168.86.23:51211/UA/SampleServer'
          authentication: {
            method: 'UsernamePassword'
            usernamePasswordCredentials: {
              passwordSecretName: 'pwd-ref'
              usernameSecretName: 'user-ref'
            }
          }
          endpointType: 'microsoft.opcua:v1'
          version: '2'
        }
      }
    }
    externalDeviceId: 'unique-edge-device-identifier'
  }
}
```

Create edge enabled device with x509 inbound authentication.
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces/devices@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    attributes: {
      deviceCategory: 16
      deviceOwner: 'OT'
      deviceType: 'OPCUAServers'
    }
    enabled: true
    endpoints: {
      inbound: {
        theV1OPCUAEndpoint: {
          address: 'opc.tcp://192.168.86.23:51211/UA/SampleServer'
          authentication: {
            method: 'Certificate'
            x509Credentials: {
              certificateSecretName: 'cert-secret'
            }
          }
          endpointType: 'microsoft.opcua'
          version: '2'
        }
        theV2OPCUAEndpoint: {
          address: 'opc.tcp://192.168.86.23:51211/UA/SampleServer'
          authentication: {
            method: 'Certificate'
            x509Credentials: {
              certificateSecretName: 'cert-secret'
            }
          }
          endpointType: 'microsoft.opcua'
          trustSettings: {
            trustList: 'trust-secret-reference'
          }
          version: '2'
        }
      }
    }
    externalDeviceId: 'unique-edge-device-identifier'
  }
}
```

CreateOrReplace_NamespaceDevices
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces/devices@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West Europe'
  properties: {
    attributes: {
      deviceCategory: 16
      deviceOwner: 'IT'
      deviceType: 'sensor'
    }
    enabled: true
    endpoints: {
      outbound: {
        assigned: {
          iothubEndpoint: {
            address: 'https://iothub-for-dps.azure-devices.net'
            endpointType: 'Microsoft.Devices/IotHubs'
          }
        }
      }
    }
  }
}
```

## microsoft.deviceregistry/namespaces/discoveredassets

CreateOrReplace_NamespaceDiscoveredAsset
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces/discoveredAssets@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    assetTypeRefs: [
      'myAssetTypeRef1'
      'myAssetTypeRef2'
    ]
    attributes: {
      floor: '1'
    }
    datasets: [
      {
        name: 'dataset1'
        dataPoints: [
          {
            name: 'dataset1DataPoint1'
            dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
            lastUpdatedOn: '2024-04-09T14:20:00.52Z'
            typeRef: 'dataset1DataPoint1TypeRef'
          }
          {
            name: 'dataset1DataPoint2'
            dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
            dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
            lastUpdatedOn: '2024-04-09T14:20:00.52Z'
            typeRef: 'dataset1DataPoint2TypeRef'
          }
        ]
        dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/Boiler;i=5'
        datasetConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
        destinations: [
          {
            configuration: {
              key: 'dataset1'
            }
            target: 'BrokerStateStore'
          }
        ]
        lastUpdatedOn: '2024-04-09T14:20:00.52Z'
        typeRef: 'dataset1TypeRef'
      }
    ]
    defaultDatasetsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultDatasetsDestinations: [
      {
        configuration: {
          key: 'defaultValue'
        }
        target: 'BrokerStateStore'
      }
    ]
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsDestinations: [
      {
        configuration: {
          path: '/tmp'
        }
        target: 'Storage'
      }
    ]
    defaultManagementGroupsConfiguration: '{"retryCount":10,"retryBackoffInterval":15}'
    defaultStreamsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultStreamsDestinations: [
      {
        configuration: {
          qos: 'Qos0'
          retain: 'Never'
          topic: '/contoso/test'
          ttl: 3600
        }
        target: 'Mqtt'
      }
    ]
    deviceRef: {
      deviceName: 'myDevice'
      endpointName: 'opcuaendpointname'
    }
    discoveryId: '11111111-1111-1111-1111-111111111111'
    documentationUri: 'https://www.example.com/manual'
    hardwareRevision: '1.0'
    managementGroups: [
      {
        name: 'managementGroup1'
        actions: [
          {
            name: 'action1'
            actionConfiguration: '{"retryCount":5,"retryBackoffInterval":5}'
            actionType: 'Call'
            lastUpdatedOn: '2024-04-09T14:20:00.52Z'
            targetUri: '/onvif/device_service?ONVIFProfile=Profile1'
            timeoutInSeconds: 60
            topic: '/contoso/managementGroup1/action1'
            typeRef: 'action1TypeRef'
          }
          {
            name: 'action2'
            actionConfiguration: '{"retryCount":5,"retryBackoffInterval":5}'
            actionType: 'Call'
            lastUpdatedOn: '2024-04-09T14:20:00.52Z'
            targetUri: '/onvif/device_service?ONVIFProfile=Profile2'
            timeoutInSeconds: 60
            topic: '/contoso/managementGroup1/action2'
            typeRef: 'action2TypeRef'
          }
        ]
        defaultTimeoutInSeconds: 100
        defaultTopic: '/contoso/managementGroup1'
        lastUpdatedOn: '2024-04-09T14:20:00.52Z'
        managementGroupConfiguration: '{"retryCount":10,"retryBackoffInterval":15}'
        typeRef: 'managementGroup1TypeRef'
      }
    ]
    manufacturer: 'Contoso'
    manufacturerUri: 'https://www.contoso.com/manufacturerUri'
    model: 'ContosoModel'
    productCode: 'SA34VDG'
    serialNumber: '64-103816-519918-8'
    softwareRevision: '2.0'
    streams: [
      {
        name: 'stream1'
        destinations: [
          {
            configuration: {
              path: '/tmp/stream1'
            }
            target: 'Storage'
          }
        ]
        lastUpdatedOn: '2024-04-09T14:20:00.52Z'
        streamConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
        typeRef: 'stream1TypeRef'
      }
      {
        name: 'stream2'
        destinations: [
          {
            configuration: {
              qos: 'Qos0'
              retain: 'Never'
              topic: '/contoso/testStream2'
              ttl: 7200
            }
            target: 'Mqtt'
          }
        ]
        lastUpdatedOn: '2024-04-09T14:20:00.52Z'
        streamConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
        typeRef: 'stream2TypeRef'
      }
    ]
    version: 73766
  }
  tags: {
    site: 'building-1'
  }
}
```

## microsoft.deviceregistry/namespaces/discovereddevices

CreateOrReplace_NamespaceDiscoveredDevice
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/namespaces/discoveredDevices@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    discoveryId: 'discoveryId1'
    endpoints: {
      outbound: {
        assigned: {
          iothubEndpoint: {
            address: 'https://iothub-for-dps.azure-devices.net'
            endpointType: 'Microsoft.Devices/IotHubs'
          }
        }
      }
    }
    version: 1
  }
  tags: {
    site: 'building-1'
  }
}
```

## microsoft.deviceregistry/schemaregistries

CreateOrReplace_SchemaRegistry
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/schemaRegistries@2026-03-01-preview' = {
  name: 'example'
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

CreateOrReplace_Schema
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/schemaRegistries/schemas@2026-03-01-preview' = {
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

CreateOrReplace_SchemaVersion
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/schemaRegistries/schemas/schemaVersions@2026-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Schema version 1'
    schemaContent: '{"$schema": "http://json-schema.org/draft-07/schema#","type": "object","properties": {"humidity": {"type": "string"},"temperature": {"type":"number"}}}'
  }
}
```
