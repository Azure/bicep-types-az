# Microsoft.SignalRService

## microsoft.signalrservice/webpubsub

WebPubSub_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub@2021-06-01-preview' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    diagnosticConfiguration: {
      enableConnectivityLogs: 'Disabled'
      enableLiveTrace: 'Disabled'
      enableMessagingLogs: 'Disabled'
    }
    disableAadAuth: false
    disableLocalAuth: false
    eventHandler: {
      items: {
        hub1: [
          {
            urlTemplate: 'https://example.com/chat/api/hub1'
            userEventPattern: '*'
          }
        ]
        hub2: [
          {
            urlTemplate: 'https://example.com/chat/api/hub2/example1'
            userEventPattern: 'example1'
          }
          {
            urlTemplate: 'https://example.com/chat/api/hub2/example2'
            userEventPattern: 'example2'
          }
        ]
      }
    }
    networkACLs: {
      defaultAction: 'Deny'
      privateEndpoints: [
        {
          name: 'mywebpubsubservice.1fa229cd-bf3f-47f0-8c49-afb36723997e'
          allow: [
            'ServerConnection'
          ]
        }
      ]
      publicNetwork: {
        allow: [
          'ClientConnection'
        ]
      }
    }
    publicNetworkAccess: 'Enabled'
    tls: {
      clientCertEnabled: false
    }
  }
  sku: {
    name: 'Standard_S1'
    capacity: 1
    tier: 'Standard'
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.signalrservice/webpubsub/privateendpointconnections

WebPubSubPrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub/privateEndpointConnections@2021-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
      id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.Network/privateEndpoints/myPrivateEndpoint'
    }
    privateLinkServiceConnectionState: {
      actionsRequired: 'None'
      status: 'Approved'
    }
  }
}
```

## microsoft.signalrservice/webpubsub/sharedprivatelinkresources

WebPubSubSharedPrivateLinkResources_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources@2021-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: 'sites'
    privateLinkResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.Web/sites/myWebApp'
    requestMessage: 'Please approve'
  }
}
```
