# Microsoft.DeviceRegistry

## microsoft.deviceregistry/assetendpointprofiles

Create_AssetEndpointProfile
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assetEndpointProfiles@2023-11-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    targetAddress: 'https://www.example.com/myTargetAddress'
    userAuthentication: {
      mode: 'Anonymous'
    }
  }
  tags: {
    site: 'building-1'
  }
}
```

## microsoft.deviceregistry/assets

Create_Asset_With_ExternalAssetId
```bicep
resource exampleResource 'Microsoft.DeviceRegistry/assets@2023-11-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    description: 'This is a sample Asset'
    assetEndpointProfileUri: 'https://www.example.com/myAssetEndpointProfile'
    assetType: 'MyAssetType'
    dataPoints: [
      {
        capabilityId: 'dtmi:com:example:Thermostat:__temperature;1'
        dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
        dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt1'
        observabilityMode: 'counter'
      }
      {
        capabilityId: 'dtmi:com:example:Thermostat:__pressure;1'
        dataPointConfiguration: '{"publishingInterval":4,"samplingInterval":4,"queueSize":7}'
        dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt2'
        observabilityMode: 'none'
      }
    ]
    defaultDataPointsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    displayName: 'AssetDisplayName'
    documentationUri: 'https://www.example.com/manual'
    enabled: true
    events: [
      {
        capabilityId: 'dtmi:com:example:Thermostat:__temperature;1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":1,"queueSize":8}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
        observabilityMode: 'none'
      }
      {
        capabilityId: 'dtmi:com:example:Thermostat:__pressure;1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":8,"queueSize":4}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
        observabilityMode: 'log'
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
resource exampleResource 'Microsoft.DeviceRegistry/assets@2023-11-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    description: 'This is a sample Asset'
    assetEndpointProfileUri: 'https://www.example.com/myAssetEndpointProfile'
    assetType: 'MyAssetType'
    dataPoints: [
      {
        capabilityId: 'dtmi:com:example:Thermostat:__temperature;1'
        dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
        dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt1'
        observabilityMode: 'counter'
      }
      {
        capabilityId: 'dtmi:com:example:Thermostat:__pressure;1'
        dataPointConfiguration: '{"publishingInterval":4,"samplingInterval":4,"queueSize":7}'
        dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt2'
        observabilityMode: 'none'
      }
    ]
    defaultDataPointsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    documentationUri: 'https://www.example.com/manual'
    enabled: true
    events: [
      {
        capabilityId: 'dtmi:com:example:Thermostat:__temperature;1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":1,"queueSize":8}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
        observabilityMode: 'none'
      }
      {
        capabilityId: 'dtmi:com:example:Thermostat:__pressure;1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":8,"queueSize":4}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
        observabilityMode: 'log'
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
resource exampleResource 'Microsoft.DeviceRegistry/assets@2023-11-01-preview' = {
  name: 'example'
  extendedLocation: {
    name: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.extendedlocation/customlocations/location1'
    type: 'CustomLocation'
  }
  location: 'West Europe'
  properties: {
    description: 'This is a sample Asset'
    assetEndpointProfileUri: 'https://www.example.com/myAssetEndpointProfile'
    assetType: 'MyAssetType'
    dataPoints: [
      {
        capabilityId: 'dtmi:com:example:Thermostat:__temperature;1'
        dataPointConfiguration: '{"publishingInterval":8,"samplingInterval":8,"queueSize":4}'
        dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt1'
        observabilityMode: 'counter'
      }
      {
        capabilityId: 'dtmi:com:example:Thermostat:__pressure;1'
        dataPointConfiguration: '{"publishingInterval":4,"samplingInterval":4,"queueSize":7}'
        dataSource: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt2'
        observabilityMode: 'none'
      }
    ]
    defaultDataPointsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    defaultEventsConfiguration: '{"publishingInterval":10,"samplingInterval":15,"queueSize":20}'
    displayName: 'AssetDisplayName'
    documentationUri: 'https://www.example.com/manual'
    enabled: true
    events: [
      {
        capabilityId: 'dtmi:com:example:Thermostat:__temperature;1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":1,"queueSize":8}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt3'
        observabilityMode: 'none'
      }
      {
        capabilityId: 'dtmi:com:example:Thermostat:__pressure;1'
        eventConfiguration: '{"publishingInterval":7,"samplingInterval":8,"queueSize":4}'
        eventNotifier: 'nsu=http://microsoft.com/Opc/OpcPlc/;s=FastUInt4'
        observabilityMode: 'log'
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
