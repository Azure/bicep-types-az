# Microsoft.Network

## microsoft.network/networkmanagers/routingconfigurations

Create network manager routing configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations@2023-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
  }
}
```

## microsoft.network/networkmanagers/routingconfigurations/rulecollections

Create or Update a routing rule collection
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections@2023-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    appliesTo: [
      {
        networkGroupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/testGroup'
      }
    ]
    localRouteSetting: 'NotSpecified'
  }
}
```

## microsoft.network/networkmanagers/routingconfigurations/rulecollections/rules

Create a default routing rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections/rules@2023-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'This is Sample Routing Rule'
    destination: {
      type: 'AddressPrefix'
      destinationAddress: '10.0.0.0/16'
    }
    nextHop: {
      nextHopType: 'VirtualNetworkGateway'
    }
  }
}
```

Create an routing rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections/rules@2023-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'This is Sample Routing Rule'
    destination: {
      type: 'AddressPrefix'
      destinationAddress: '10.0.0.0/16'
    }
    nextHop: {
      nextHopType: 'VirtualNetworkGateway'
    }
  }
}
```
