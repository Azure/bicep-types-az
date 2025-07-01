# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/networkmanagers/routingconfigurations

Create network manager routing configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations@2024-09-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections@2024-09-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    appliesTo: [
      {
        networkGroupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/testGroup'
      }
    ]
    peeringRoutePropagationRules: [
      {
        propagationOption: 'Default'
      }
    ]
  }
}
```

## microsoft.network/networkmanagers/routingconfigurations/rulecollections/rules

Create a default routing rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections/rules@2024-09-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections/rules@2024-09-01-preview' = {
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
