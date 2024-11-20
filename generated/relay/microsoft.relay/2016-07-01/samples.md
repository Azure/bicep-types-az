# Microsoft.Relay

## microsoft.relay/namespaces

RelayNamespaceCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces@2016-07-01' = {
  name: 'example'
  location: 'West US'
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

## microsoft.relay/namespaces/authorizationrules

RelayNameSpaceAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/AuthorizationRules@2016-07-01' = {
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
resource exampleResource 'Microsoft.Relay/namespaces/HybridConnections@2016-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    requiresClientAuthorization: true
  }
}
```

## microsoft.relay/namespaces/hybridconnections/authorizationrules

RelayHybridConnectionAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/HybridConnections/authorizationRules@2016-07-01' = {
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
resource exampleResource 'Microsoft.Relay/namespaces/WcfRelays@2016-07-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    relayType: 'NetTcp'
    requiresClientAuthorization: true
    requiresTransportSecurity: true
  }
}
```

## microsoft.relay/namespaces/wcfrelays/authorizationrules

RelayAuthorizationRuleCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces/WcfRelays/authorizationRules@2016-07-01' = {
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
