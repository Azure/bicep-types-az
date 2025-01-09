# Microsoft.Devices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devices/iothubs

IotHubResource_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Devices/IotHubs@2020-08-31-preview' = {
  name: 'example'
  etag: 'AAAAAAFD6M4='
  location: 'centraluseuap'
  properties: {
    cloudToDevice: {
      defaultTtlAsIso8601: 'PT1H'
      feedback: {
        lockDurationAsIso8601: 'PT1M'
        maxDeliveryCount: 10
        ttlAsIso8601: 'PT1H'
      }
      maxDeliveryCount: 10
    }
    enableFileUploadNotifications: false
    eventHubEndpoints: {
      events: {
        partitionCount: 2
        retentionTimeInDays: 1
      }
    }
    features: 'None'
    ipFilterRules: [
    ]
    messagingEndpoints: {
      fileNotifications: {
        lockDurationAsIso8601: 'PT1M'
        maxDeliveryCount: 10
        ttlAsIso8601: 'PT1H'
      }
    }
    minTlsVersion: '1.2'
    networkRuleSets: {
      applyToBuiltInEventHubEndpoint: true
      defaultAction: 'Deny'
      ipRules: [
        {
          action: 'Allow'
          filterName: 'rule1'
          ipMask: '131.117.159.53'
        }
        {
          action: 'Allow'
          filterName: 'rule2'
          ipMask: '157.55.59.128/25'
        }
      ]
    }
    routing: {
      endpoints: {
        eventHubs: [
        ]
        serviceBusQueues: [
        ]
        serviceBusTopics: [
        ]
        storageContainers: [
        ]
      }
      fallbackRoute: {
        name: '$fallback'
        condition: 'true'
        endpointNames: [
          'events'
        ]
        isEnabled: true
        source: 'DeviceMessages'
      }
      routes: [
      ]
    }
    storageEndpoints: {
      '$default': {
        connectionString: ''
        containerName: ''
        sasTtlAsIso8601: 'PT1H'
      }
    }
  }
  sku: {
    name: 'S1'
    capacity: 1
  }
  tags: {
  }
}
```

## microsoft.devices/iothubs/certificates

Certificates_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Devices/IotHubs/certificates@2020-08-31-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    certificate: '############################################'
  }
}
```

## microsoft.devices/iothubs/eventhubendpoints/consumergroups

IotHubResource_CreateEventHubConsumerGroup
```bicep
resource exampleResource 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups@2020-08-31-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    name: 'test'
  }
}
```

## microsoft.devices/iothubs/privateendpointconnections

PrivateEndpointConnection_Update
```bicep
resource exampleResource 'Microsoft.Devices/iotHubs/privateEndpointConnections@2020-08-31-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@contoso.com'
      status: 'Approved'
    }
  }
}
```
