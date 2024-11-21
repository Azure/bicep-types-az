# Microsoft.DigitalTwins

## microsoft.digitaltwins/digitaltwinsinstances

Put a DigitalTwinsInstance resource
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances@2020-03-01-preview' = {
  name: 'example'
  location: 'WestUS'
}
```

## microsoft.digitaltwins/digitaltwinsinstances/endpoints

Put a DigitalTwinsInstance resource
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endpointType: 'ServiceBus'
    primaryConnectionString: 'Endpoint=sb://mysb.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=xyzxyzoX4='
    secondaryConnectionString: 'Endpoint=sb://mysb.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=xyzxyzoX4='
  }
}
```
