# Microsoft.DigitalTwins

## microsoft.digitaltwins/digitaltwinsinstances

Put a DigitalTwinsInstance resource
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances@2020-10-31' = {
  name: 'example'
  location: 'WestUS2'
}
```

## microsoft.digitaltwins/digitaltwinsinstances/endpoints

Put a DigitalTwinsInstance resource
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-10-31' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endpointType: 'ServiceBus'
    primaryConnectionString: 'Endpoint=sb://mysb.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=xyzxyzoX4=;EntityPath=abcabc'
    secondaryConnectionString: 'Endpoint=sb://mysb.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=xyzxyzoX4=;EntityPath=abcabc'
  }
}
```
