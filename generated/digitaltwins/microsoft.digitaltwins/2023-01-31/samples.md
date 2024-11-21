# Microsoft.DigitalTwins
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.digitaltwins/digitaltwinsinstances

Put a DigitalTwinsInstance resource
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31' = {
  name: 'example'
  location: 'WestUS2'
}
```

Put a DigitalTwinsInstance resource with identity
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned,UserAssigned'
    userAssignedIdentities: {
      /subscriptions/50016170-c839-41ba-a724-51e9df440b9e/resourceGroups/testrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity: {
      }
    }
  }
  location: 'WestUS2'
}
```

Put a DigitalTwinsInstance resource with publicNetworkAccess property
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances@2023-01-31' = {
  name: 'example'
  location: 'WestUS2'
  properties: {
    publicNetworkAccess: 'Enabled'
  }
}
```

## microsoft.digitaltwins/digitaltwinsinstances/endpoints

Put a DigitalTwinsEndpoint resource
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31' = {
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

Put a DigitalTwinsEndpoint resource with identity
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31' = {
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

Put a DigitalTwinsEndpoint resource with user assigned identity
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/endpoints@2023-01-31' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authenticationType: 'IdentityBased'
    endpointType: 'ServiceBus'
    endpointUri: 'sb://mysb.servicebus.windows.net/'
    entityPath: 'mysbtopic'
    identity: {
      type: 'UserAssigned'
      userAssignedIdentity: '/subscriptions/50016170-c839-41ba-a724-51e9df440b9e/resourceGroups/testrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity'
    }
  }
}
```

## microsoft.digitaltwins/digitaltwinsinstances/privateendpointconnections

Update the status of a private endpoint connection with the given name
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/privateEndpointConnections@2023-01-31' = {
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

## microsoft.digitaltwins/digitaltwinsinstances/timeseriesdatabaseconnections

Create or replace a time series database connection for a DigitalTwins instance with user assigned identity.
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections@2023-01-31' = {
  parent: parentResource 
  name: 'example'
  properties: {
    adxDatabaseName: 'myDatabase'
    adxEndpointUri: 'https://mycluster.kusto.windows.net'
    adxResourceId: '/subscriptions/c493073e-2460-45ba-a403-f3e0df1e9feg/resourceGroups/testrg/providers/Microsoft.Kusto/clusters/mycluster'
    adxTableName: 'myTable'
    connectionType: 'AzureDataExplorer'
    eventHubEndpointUri: 'sb://myeh.servicebus.windows.net/'
    eventHubEntityPath: 'myeh'
    eventHubNamespaceResourceId: '/subscriptions/c493073e-2460-45ba-a403-f3e0df1e9feg/resourceGroups/testrg/providers/Microsoft.EventHub/namespaces/myeh'
    identity: {
      type: 'UserAssigned'
      userAssignedIdentity: '/subscriptions/50016170-c839-41ba-a724-51e9df440b9e/resourceGroups/testrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/testidentity'
    }
  }
}
```

Create or replace a time series database connection for a DigitalTwins instance.
```bicep
resource exampleResource 'Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections@2023-01-31' = {
  parent: parentResource 
  name: 'example'
  properties: {
    adxDatabaseName: 'myDatabase'
    adxEndpointUri: 'https://mycluster.kusto.windows.net'
    adxRelationshipLifecycleEventsTableName: 'myRelationshipLifecycleEventsTable'
    adxResourceId: '/subscriptions/c493073e-2460-45ba-a403-f3e0df1e9feg/resourceGroups/testrg/providers/Microsoft.Kusto/clusters/mycluster'
    adxTableName: 'myPropertyUpdatesTable'
    adxTwinLifecycleEventsTableName: 'myTwinLifecycleEventsTable'
    connectionType: 'AzureDataExplorer'
    eventHubEndpointUri: 'sb://myeh.servicebus.windows.net/'
    eventHubEntityPath: 'myeh'
    eventHubNamespaceResourceId: '/subscriptions/c493073e-2460-45ba-a403-f3e0df1e9feg/resourceGroups/testrg/providers/Microsoft.EventHub/namespaces/myeh'
    recordPropertyAndItemRemovals: 'true'
  }
}
```
