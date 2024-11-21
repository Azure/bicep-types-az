# Microsoft.Relay

## microsoft.relay/namespaces/authorizationrules

RelayNameSpaceAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/authorizationRules@2024-01-01' = {
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

## microsoft.relay/namespaces

RelayNamespaceCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces@2024-01-01' = {
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
resource exampleResource 'Microsoft.Relay/namespaces/networkRuleSets@2024-01-01' = {
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
    trustedServiceAccessEnabled: false
  }
}
```

## microsoft.relay/namespaces/hybridconnections/authorizationrules

RelayHybridConnectionAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2024-01-01' = {
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

## microsoft.relay/namespaces/hybridconnections

RelayHybridConnectionCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/hybridConnections@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    requiresClientAuthorization: true
  }
}
```

## microsoft.relay/namespaces/wcfrelays/authorizationrules

RelayAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2024-01-01' = {
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

## microsoft.relay/namespaces/wcfrelays

RelayCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/wcfRelays@2024-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    relayType: 'NetTcp'
    requiresClientAuthorization: true
    requiresTransportSecurity: true
  }
}
```

## microsoft.relay/namespaces/privateendpointconnections

NameSpacePrivateEndPointConnectionCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/privateEndpointConnections@2024-01-01' = {
  parent: parentResource 
  name: 'example'
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
