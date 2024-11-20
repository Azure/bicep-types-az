# Microsoft.Relay

## microsoft.relay/namespaces

RelayNamespaceCreate
```bicep
resource exampleResource 'Microsoft.Relay/namespaces@2017-04-01' = {
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
resource exampleResource 'Microsoft.Relay/namespaces/authorizationRules@2017-04-01' = {
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
resource exampleResource 'Microsoft.Relay/namespaces/hybridConnections@2017-04-01' = {
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
resource exampleResource 'Microsoft.Relay/namespaces/hybridConnections/authorizationRules@2017-04-01' = {
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
resource exampleResource 'Microsoft.Relay/namespaces/wcfRelays@2017-04-01' = {
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
resource exampleResource 'Microsoft.Relay/namespaces/wcfRelays/authorizationRules@2017-04-01' = {
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
