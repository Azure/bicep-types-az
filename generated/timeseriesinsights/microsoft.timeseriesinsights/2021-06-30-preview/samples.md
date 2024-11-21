# Microsoft.TimeSeriesInsights
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.timeseriesinsights/environments

EnvironmentsCreate
```bicep
resource exampleResource 'Microsoft.TimeSeriesInsights/environments@2021-06-30-preview' = {
  name: 'example'
  kind: 'Gen1'
  location: 'West US'
  properties: {
    dataRetentionTime: 'P31D'
    partitionKeyProperties: [
      {
        name: 'DeviceId1'
        type: 'String'
      }
    ]
  }
  sku: {
    name: 'S1'
    capacity: 1
  }
}
```

## microsoft.timeseriesinsights/environments/accesspolicies

AccessPoliciesCreate
```bicep
resource exampleResource 'Microsoft.TimeSeriesInsights/environments/accessPolicies@2021-06-30-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'some description'
    principalObjectId: 'aGuid'
    roles: [
      'Reader'
    ]
  }
}
```

## microsoft.timeseriesinsights/environments/eventsources

CreateEventHubEventSource
```bicep
resource exampleResource 'Microsoft.TimeSeriesInsights/environments/eventSources@2021-06-30-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'Microsoft.EventHub'
  location: 'West US'
  properties: {
    consumerGroupName: 'cgn'
    eventHubName: 'ehn'
    eventSourceResourceId: 'somePathInArm'
    ingressStartAt: {
      type: 'EarliestAvailable'
    }
    keyName: 'managementKey'
    localTimestamp: {
      format: 'TimeSpan'
      timeZoneOffset: {
        propertyName: 'someEventPropertyName'
      }
    }
    serviceBusNamespace: 'sbn'
    sharedAccessKey: 'someSecretvalue'
    timestampPropertyName: 'someTimestampProperty'
  }
}
```

EventSourcesCreateEventHubWithCustomEnquedTime
```bicep
resource exampleResource 'Microsoft.TimeSeriesInsights/environments/eventSources@2021-06-30-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'Microsoft.EventHub'
  location: 'West US'
  properties: {
    consumerGroupName: 'cgn'
    eventHubName: 'ehn'
    eventSourceResourceId: 'somePathInArm'
    ingressStartAt: {
      type: 'CustomEnqueuedTime'
      time: '2017-04-01T19:20:33.2288820Z'
    }
    keyName: 'managementKey'
    serviceBusNamespace: 'sbn'
    sharedAccessKey: 'someSecretvalue'
    timestampPropertyName: 'someTimestampProperty'
  }
}
```

## microsoft.timeseriesinsights/environments/referencedatasets

ReferenceDataSetsCreate
```bicep
resource exampleResource 'Microsoft.TimeSeriesInsights/environments/referenceDataSets@2021-06-30-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'West US'
  properties: {
    keyProperties: [
      {
        name: 'DeviceId1'
        type: 'String'
      }
      {
        name: 'DeviceFloor'
        type: 'Double'
      }
    ]
  }
}
```
