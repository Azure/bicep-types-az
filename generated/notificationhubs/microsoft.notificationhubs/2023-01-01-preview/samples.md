# Microsoft.NotificationHubs

## microsoft.notificationhubs/namespaces/notificationhubs

NotificationHubs_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NotificationHubs/namespaces/notificationHubs@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

## microsoft.notificationhubs/namespaces/notificationhubs/authorizationrules

NotificationHubs_CreateOrUpdateAuthorizationRule
```bicep
resource exampleResource 'Microsoft.NotificationHubs/namespaces/notificationHubs/authorizationRules@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    rights: [
      'Listen'
      'Send'
    ]
  }
}
```

## microsoft.notificationhubs/namespaces

Namespaces_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.NotificationHubs/namespaces@2023-01-01-preview' = {
  name: 'example'
  location: 'South Central US'
  properties: {
    networkAcls: {
      ipRules: [
        {
          ipMask: '185.48.100.00/24'
          rights: [
            'Manage'
            'Send'
            'Listen'
          ]
        }
      ]
      publicNetworkRule: {
        rights: [
          'Listen'
        ]
      }
    }
    zoneRedundancy: 'Enabled'
  }
  sku: {
    name: 'Standard'
    tier: 'Standard'
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.notificationhubs/namespaces/authorizationrules

Namespaces_CreateOrUpdateAuthorizationRule
```bicep
resource exampleResource 'Microsoft.NotificationHubs/namespaces/authorizationRules@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    rights: [
      'Listen'
      'Send'
    ]
  }
}
```

## microsoft.notificationhubs/namespaces/privateendpointconnections

PrivateEndpointConnections_Update
```bicep
resource exampleResource 'Microsoft.NotificationHubs/namespaces/privateEndpointConnections@2023-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateEndpoint: {
    }
    privateLinkServiceConnectionState: {
      status: 'Approved'
    }
  }
}
```
