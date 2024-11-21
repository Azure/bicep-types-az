# Microsoft.DigitalTwins
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.digitaltwins/digitaltwinsinstances

Put a DigitalTwinsInstance resource
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances@2020-12-01' = {
  name: 'example'
  location: 'WestUS2'
}
```

Put a DigitalTwinsInstance resource with identity
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances@2020-12-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'WestUS2'
}
```

Put a DigitalTwinsInstance resource with publicNetworkAccess property
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances@2020-12-01' = {
  name: 'example'
  location: 'WestUS2'
  properties: {
    publicNetworkAccess: 'Enabled'
  }
}
```

## microsoft.digitaltwins/digitaltwinsinstances/endpoints

Put a DigitalTwinsInstance resource
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authenticationType: 'KeyBased'
    endpointType: 'ServiceBus'
    primaryConnectionString: 'Endpoint=sb://mysb.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=xyzxyzoX4=;EntityPath=abcabc'
    secondaryConnectionString: 'Endpoint=sb://mysb.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=xyzxyzoX4=;EntityPath=abcabc'
  }
}
```

Put a DigitalTwinsInstance resource with identity
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2020-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authenticationType: 'IdentityBased'
    endpointType: 'ServiceBus'
    endpointUri: 'sb://mysb.servicebus.windows.net/'
    entityPath: 'mysbtopic'
  }
}
```

## microsoft.digitaltwins/digitaltwinsinstances/privateendpointconnections

Update the status of a private endpoint connection with the given name
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2020-12-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Approved by johndoe@company.com.'
      status: 'Approved'
    }
  }
}
```
