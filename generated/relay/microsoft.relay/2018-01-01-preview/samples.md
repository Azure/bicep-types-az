# Microsoft.Relay

## microsoft.relay/namespaces

RelayNamespaceCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces@2018-01-01-preview' = {
  name: 'example'
  location: 'South Central US'
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

## microsoft.relay/namespaces/networkrulesets

NameSpaceNetworkRuleSetCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/networkRuleSets@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    defaultAction: 'Deny'
    ipRules: [
      {
        action: 'Allow'
        ipMask: '1.1.1.1'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.2'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.3'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.4'
      }
      {
        action: 'Allow'
        ipMask: '1.1.1.5'
      }
    ]
  }
}
```

## microsoft.relay/namespaces/privateendpointconnections

RelayPutPrivateEndpointConnection
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/privateEndpointConnections@2018-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'South Central US'
  properties: {
    privateEndpoint: {
      id: '/subscriptions/ffffffff-ffff-ffff-ffff-ffffffffffff/resourceGroups/resourcegroup/providers/Microsoft.Network/privateEndpoints/ali-relay-pve-1'
    }
    privateLinkServiceConnectionState: {
      description: 'You may pass'
      status: 'Approved'
    }
  }
}
```
