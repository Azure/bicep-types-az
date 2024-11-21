# Microsoft.SignalRService

## microsoft.signalrservice/signalr

SignalR_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/signalR@2021-10-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  kind: 'SignalR'
  location: 'eastus'
  properties: {
    cors: {
      allowedOrigins: [
        'https://foo.com'
        'https://bar.com'
      ]
    }
    disableAadAuth: false
    disableLocalAuth: false
    features: [
      {
        flag: 'ServiceMode'
        properties: {
        }
        value: 'Serverless'
      }
      {
        flag: 'EnableConnectivityLogs'
        properties: {
        }
        value: 'True'
      }
      {
        flag: 'EnableMessagingLogs'
        properties: {
        }
        value: 'False'
      }
      {
        flag: 'EnableLiveTrace'
        properties: {
        }
        value: 'False'
      }
    ]
    networkACLs: {
      defaultAction: 'Deny'
      privateEndpoints: [
        {
          name: 'mysignalrservice.1fa229cd-bf3f-47f0-8c49-afb36723997e'
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
    upstream: {
      templates: [
        {
          auth: {
            type: 'ManagedIdentity'
            managedIdentity: {
              resource: 'api://example'
            }
          }
          categoryPattern: '*'
          eventPattern: 'connect,disconnect'
          hubPattern: '*'
          urlTemplate: 'https://example.com/chat/api/connect'
        }
      ]
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

## microsoft.signalrservice/signalr/privateendpointconnections

SignalRPrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.SignalRService/signalR/privateEndpointConnections@2021-10-01' = {
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

## microsoft.signalrservice/signalr/sharedprivatelinkresources

SignalRSharedPrivateLinkResources_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/signalR/sharedPrivateLinkResources@2021-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: 'sites'
    privateLinkResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.Web/sites/myWebApp'
    requestMessage: 'Please approve'
  }
}
```
