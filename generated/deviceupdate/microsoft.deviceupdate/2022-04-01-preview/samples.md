# Microsoft.DeviceUpdate
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.deviceupdate/accounts/privateendpointconnectionproxies

PrivateEndpointConnectionProxyCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DeviceUpdate/accounts/privateEndpointConnectionProxies@2022-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  remotePrivateEndpoint: {
    id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.Network/privateEndpoints/{peName}'
    immutableResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.Network/privateEndpoints/{peName}'
    immutableSubscriptionId: '00000000-0000-0000-0000-000000000000'
    location: 'westus2'
    manualPrivateLinkServiceConnections: [
      {
        name: '{privateEndpointConnectionProxyId}'
        groupIds: [
          'DeviceUpdate'
        ]
        requestMessage: 'Please approve my connection, thanks.'
      }
    ]
    privateLinkServiceProxies: [
      {
        groupConnectivityInformation: [
        ]
        id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-rg/providers/Microsoft.Network/privateEndpoints/{privateEndpointConnectionProxyId}/privateLinkServiceProxies/{privateEndpointConnectionProxyId}'
      }
    ]
  }
}
```

## microsoft.deviceupdate/accounts/privateendpointconnections

PrivateEndpointConnectionCreateOrUpdate
```bicep
resource exampleResource 'Microsoft.DeviceUpdate/accounts/privateEndpointConnections@2022-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'Auto-Approved'
      status: 'Approved'
    }
  }
}
```
