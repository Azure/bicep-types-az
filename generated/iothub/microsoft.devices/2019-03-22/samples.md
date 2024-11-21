# Microsoft.Devices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devices/iothubs

IotHubResource_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Devices/IotHubs@2019-03-22' = {
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
      $default: {
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
resource exampleResource 'Microsoft.Devices/IotHubs/certificates@2019-03-22' = {
  parent: parentResource 
  name: 'example'
  certificate: '############################################'
}
```
