# Microsoft.Devices
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.devices/iothubs

IotHubResource_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Devices/IotHubs@2018-01-22' = {
  name: 'example'
  name: 'iot-dps-cit-hub-1'
  type: 'Microsoft.Devices/IotHubs'
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
        path: 'iot-dps-cit-hub-1'
        endpoint: 'sb://iothub-ns-iot-dps-ci-245306-76aca8e13b.servicebus.windows.net/'
        partitionCount: 2
        partitionIds: [
          '0'
          '1'
        ]
        retentionTimeInDays: 1
      }
      operationsMonitoringEvents: {
        path: 'iot-dps-cit-hub-1-operationmonitoring'
        endpoint: 'sb://iothub-ns-iot-dps-ci-245306-76aca8e13b.servicebus.windows.net/'
        partitionCount: 2
        partitionIds: [
          '0'
          '1'
        ]
        retentionTimeInDays: 1
      }
    }
    features: 'None'
    hostName: 'iot-dps-cit-hub-1.azure-devices.net'
    ipFilterRules: [
    ]
    messagingEndpoints: {
      fileNotifications: {
        lockDurationAsIso8601: 'PT1M'
        maxDeliveryCount: 10
        ttlAsIso8601: 'PT1H'
      }
    }
    operationsMonitoringProperties: {
      events: {
        C2DCommands: 'None'
        Connections: 'None'
        DeviceIdentityOperations: 'None'
        DeviceTelemetry: 'None'
        FileUploadOperations: 'None'
        None: 'None'
        Routes: 'None'
      }
    }
    provisioningState: 'Succeeded'
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
    state: 'Active'
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
    tier: 'Standard'
  }
  tags: {
  }
}
```

## microsoft.devices/iothubs/certificates

Certificates_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.Devices/IotHubs/certificates@2018-01-22' = {
  parent: parentResource 
  name: 'example'
  certificate: '############################################'
}
```
