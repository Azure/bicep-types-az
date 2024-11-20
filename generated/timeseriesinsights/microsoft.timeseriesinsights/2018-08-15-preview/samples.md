# Microsoft.TimeSeriesInsights

## microsoft.timeseriesinsights/environments

EnvironmentsCreate
```bicep
resource exampleResource 'Microsoft.TimeSeriesInsights/environments@2018-08-15-preview' = {
  name: 'example'
  kind: 'Standard'
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

## microsoft.timeseriesinsights/environments/eventsources

CreateEventHubEventSource
```bicep
resource exampleResource 'Microsoft.TimeSeriesInsights/environments/eventSources@2018-08-15-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'Microsoft.EventHub'
  location: 'West US'
  properties: {
    consumerGroupName: 'cgn'
    eventHubName: 'ehn'
    eventSourceResourceId: 'somePathInArm'
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
resource exampleResource 'Microsoft.TimeSeriesInsights/environments/referenceDataSets@2018-08-15-preview' = {
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

## microsoft.timeseriesinsights/environments/accesspolicies

AccessPoliciesCreate
```bicep
resource exampleResource 'Microsoft.TimeSeriesInsights/environments/accessPolicies@2018-08-15-preview' = {
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
