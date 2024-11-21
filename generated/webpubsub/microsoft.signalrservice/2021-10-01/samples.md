# Microsoft.SignalRService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.signalrservice/webpubsub

WebPubSub_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub@2021-10-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus'
  properties: {
    disableAadAuth: false
    disableLocalAuth: false
    liveTraceConfiguration: {
      categories: [
        {
          name: 'ConnectivityLogs'
          enabled: 'true'
        }
      ]
      enabled: 'false'
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

## microsoft.signalrservice/webpubsub/hubs

WebPubSubHubs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub/hubs@2021-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    eventHandlers: [
      {
        auth: {
          type: 'ManagedIdentity'
          managedIdentity: {
            resource: 'abc'
          }
        }
        systemEvents: [
          'connect'
          'connected'
        ]
        urlTemplate: 'http://host.com'
        userEventPattern: '*'
      }
    ]
  }
}
```

## microsoft.signalrservice/webpubsub/privateendpointconnections

WebPubSubPrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub/privateEndpointConnections@2021-10-01' = {
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
resource exampleResource 'Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources@2021-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: 'sites'
    privateLinkResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.Web/sites/myWebApp'
    requestMessage: 'Please approve'
  }
}
```
