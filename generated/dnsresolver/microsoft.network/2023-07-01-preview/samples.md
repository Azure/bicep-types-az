# Microsoft.Network

## microsoft.network/dnsresolvers

Upsert DNS resolver
```bicep
resource exampleResource 'Microsoft.Network/dnsResolvers@2023-07-01-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    virtualNetwork: {
      id: '/subscriptions/cbb1387e-4b03-44f2-ad41-58d4677b9873/resourceGroups/virtualNetworkResourceGroup/providers/Microsoft.Network/virtualNetworks/sampleVirtualNetwork'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/dnsresolvers/inboundendpoints

Upsert inbound endpoint for DNS resolver
```bicep
resource exampleResource 'Microsoft.Network/dnsResolvers/inboundEndpoints@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus2'
  properties: {
    ipConfigurations: [
      {
        privateIpAllocationMethod: 'Dynamic'
        subnet: {
          id: '/subscriptions/0403cfa9-9659-4f33-9f30-1f191c51d111/resourceGroups/sampleVnetResourceGroupName/providers/Microsoft.Network/virtualNetworks/sampleVirtualNetwork/subnets/sampleSubnet'
        }
      }
    ]
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/dnsresolvers/outboundendpoints

Upsert outbound endpoint for DNS resolver
```bicep
resource exampleResource 'Microsoft.Network/dnsResolvers/outboundEndpoints@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus2'
  properties: {
    subnet: {
      id: '/subscriptions/0403cfa9-9659-4f33-9f30-1f191c51d111/resourceGroups/sampleVnetResourceGroupName/providers/Microsoft.Network/virtualNetworks/sampleVirtualNetwork/subnets/sampleSubnet'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/dnsforwardingrulesets

Upsert DNS forwarding ruleset
```bicep
resource exampleResource 'Microsoft.Network/dnsForwardingRulesets@2023-07-01-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    dnsResolverOutboundEndpoints: [
      {
        id: '/subscriptions/abdd4249-9f34-4cc6-8e42-c2e32110603e/resourceGroups/sampleResourceGroup/providers/Microsoft.Network/dnsResolvers/sampleDnsResolver/outboundEndpoints/sampleOutboundEndpoint0'
      }
      {
        id: '/subscriptions/abdd4249-9f34-4cc6-8e42-c2e32110603e/resourceGroups/sampleResourceGroup/providers/Microsoft.Network/dnsResolvers/sampleDnsResolver/outboundEndpoints/sampleOutboundEndpoint1'
      }
    ]
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/dnsforwardingrulesets/forwardingrules

Upsert forwarding rule in a DNS forwarding ruleset
```bicep
resource exampleResource 'Microsoft.Network/dnsForwardingRulesets/forwardingRules@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    domainName: 'contoso.com.'
    forwardingRuleState: 'Enabled'
    metadata: {
      additionalProp1: 'value1'
    }
    targetDnsServers: [
      {
        ipAddress: '10.0.0.1'
        port: 53
      }
      {
        ipAddress: '10.0.0.2'
        port: 53
      }
    ]
  }
}
```

## microsoft.network/dnsforwardingrulesets/virtualnetworklinks

Upsert virtual network link to a DNS forwarding ruleset
```bicep
resource exampleResource 'Microsoft.Network/dnsForwardingRulesets/virtualNetworkLinks@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    metadata: {
      additionalProp1: 'value1'
    }
    virtualNetwork: {
      id: '/subscriptions/0403cfa9-9659-4f33-9f30-1f191c51d111/resourceGroups/sampleVnetResourceGroupName/providers/Microsoft.Network/virtualNetworks/sampleVirtualNetwork'
    }
  }
}
```

## microsoft.network/dnsresolverpolicies

Upsert DNS resolver policy
```bicep
resource exampleResource 'Microsoft.Network/dnsResolverPolicies@2023-07-01-preview' = {
  name: 'example'
  location: 'westus2'
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/dnsresolverpolicies/dnssecurityrules

Upsert DNS security rule
```bicep
resource exampleResource 'Microsoft.Network/dnsResolverPolicies/dnsSecurityRules@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus2'
  properties: {
    action: {
      actionType: 'Block'
      blockResponseCode: 'SERVFAIL'
    }
    dnsResolverDomainLists: [
      {
        id: '/subscriptions/abdd4249-9f34-4cc6-8e42-c2e32110603e/resourceGroups/sampleResourceGroup/providers/Microsoft.Network/dnsResolverDomainLists/sampleDnsResolverDomainList'
      }
    ]
    dnsSecurityRuleState: 'Enabled'
    priority: 100
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/dnsresolverpolicies/virtualnetworklinks

Upsert DNS resolver policy virtual network link
```bicep
resource exampleResource 'Microsoft.Network/dnsResolverPolicies/virtualNetworkLinks@2023-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'westus2'
  properties: {
    virtualNetwork: {
      id: '/subscriptions/0403cfa9-9659-4f33-9f30-1f191c51d111/resourceGroups/sampleVnetResourceGroupName/providers/Microsoft.Network/virtualNetworks/sampleVirtualNetwork'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/dnsresolverdomainlists

Upsert DNS resolver domain list
```bicep
resource exampleResource 'Microsoft.Network/dnsResolverDomainLists@2023-07-01-preview' = {
  name: 'example'
  location: 'westus2'
  properties: {
    domains: [
      'contoso.com'
    ]
  }
  tags: {
    key1: 'value1'
  }
}
```
