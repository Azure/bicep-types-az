# Microsoft.SignalRService
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.signalrservice/webpubsub

WebPubSub_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub@2023-02-01' = {
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
    name: 'Premium_P1'
    capacity: 1
    tier: 'Premium'
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.signalrservice/webpubsub/customcertificates

WebPubSubCustomCertificates_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub/customCertificates@2023-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    keyVaultBaseUri: 'https://myvault.keyvault.azure.net/'
    keyVaultSecretName: 'mycert'
    keyVaultSecretVersion: 'bb6a44b2743f47f68dad0d6cc9756432'
  }
}
```

## microsoft.signalrservice/webpubsub/customdomains

WebPubSubCustomDomains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub/customDomains@2023-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customCertificate: {
      id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.SignalRService/WebPubSub/myWebPubSubService/customCertificates/myCert'
    }
    domainName: 'example.com'
  }
}
```

## microsoft.signalrservice/webpubsub/hubs

WebPubSubHubs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub/hubs@2023-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    anonymousConnectPolicy: 'allow'
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
    eventListeners: [
      {
        endpoint: {
          type: 'EventHub'
          eventHubName: 'eventHubName1'
          fullyQualifiedNamespace: 'example.servicebus.windows.net'
        }
        filter: {
          type: 'EventName'
          systemEvents: [
            'connected'
            'disconnected'
          ]
          userEventPattern: '*'
        }
      }
    ]
  }
}
```

## microsoft.signalrservice/webpubsub/privateendpointconnections

WebPubSubPrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.SignalRService/webPubSub/privateEndpointConnections@2023-02-01' = {
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
resource exampleResource 'Microsoft.SignalRService/webPubSub/sharedPrivateLinkResources@2023-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: 'sites'
    privateLinkResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.Web/sites/myWebApp'
    requestMessage: 'Please approve'
  }
}
```
