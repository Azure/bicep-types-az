# Microsoft.SignalRService

## microsoft.signalrservice/signalr

SignalR_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/signalR@2023-02-01' = {
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
    serverless: {
      connectionTimeoutInSeconds: 5
    }
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
    name: 'Premium_P1'
    capacity: 1
    tier: 'Premium'
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.signalrservice/signalr/customcertificates

SignalRCustomCertificates_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/signalR/customCertificates@2023-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    keyVaultBaseUri: 'https://myvault.keyvault.azure.net/'
    keyVaultSecretName: 'mycert'
    keyVaultSecretVersion: 'bb6a44b2743f47f68dad0d6cc9756432'
  }
}
```

## microsoft.signalrservice/signalr/customdomains

SignalRCustomDomains_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.SignalRService/signalR/customDomains@2023-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    customCertificate: {
      id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.SignalRService/SignalR/mySignalRService/customCertificates/myCert'
    }
    domainName: 'example.com'
  }
}
```

## microsoft.signalrservice/signalr/privateendpointconnections

SignalRPrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.SignalRService/signalR/privateEndpointConnections@2023-02-01' = {
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
resource exampleResource 'Microsoft.SignalRService/signalR/sharedPrivateLinkResources@2023-02-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    groupId: 'sites'
    privateLinkResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/Microsoft.Web/sites/myWebApp'
    requestMessage: 'Please approve'
  }
}
```
