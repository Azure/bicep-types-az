# Microsoft.Network

## microsoft.network/networkmanagers

Put Network Manager
```bicep
resource exampleResource 'Microsoft.Network/networkManagers@2021-02-01-preview' = {
  name: 'example'
  properties: {
    description: 'My Test Network Manager'
    displayName: 'TestNetworkManager'
    networkManagerScopeAccesses: [
      'Connectivity'
    ]
    networkManagerScopes: {
      managementGroups: [
        '/providers/Microsoft.Management/managementGroups/sampleMG'
      ]
      subscriptions: [
        '/subscriptions/00000000-0000-0000-0000-000000000000'
      ]
    }
  }
}
```

## microsoft.network/networkmanagers/connectivityconfigurations

ConnectivityConfigurationsPut
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/connectivityConfigurations@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Sample Configuration'
    appliesToGroups: [
      {
        groupConnectivity: 'None'
        isGlobal: 'False'
        networkGroupId: 'subscriptions/subscriptionA/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/group1'
        useHubGateway: 'True'
      }
    ]
    connectivityTopology: 'HubAndSpoke'
    deleteExistingPeering: 'True'
    displayName: 'myTestConnectivityConfig'
    hubs: [
      {
        resourceId: 'subscriptions/subscriptionA/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myTestConnectivityConfig'
        resourceType: 'Microsoft.Network/virtualNetworks'
      }
    ]
    isGlobal: 'True'
  }
}
```

## microsoft.network/networkmanagers/networkgroups

NetworkGroupsPut
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/networkGroups@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample group'
    conditionalMembership: ''
    displayName: 'My Network Group'
    groupMembers: [
      {
        resourceId: '/subscriptions/subscriptionC/resourceGroup/rg1/providers/Microsoft.Network/virtualnetworks/vnet1'
      }
    ]
    memberType: 'VirtualNetwork'
  }
}
```

## microsoft.network/networkmanagers/securityuserconfigurations

Create network manager security user configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    deleteExistingNSGs: 'True'
    securityType: 'UserPolicy'
  }
}
```

## microsoft.network/networkmanagers/securityuserconfigurations/rulecollections

Create or Update a User Rule Collection
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    appliesToGroups: [
      {
        networkGroupId: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/testGroup'
      }
    ]
  }
}
```

## microsoft.network/networkmanagers/securityuserconfigurations/rulecollections/rules

Create a default user rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'Default'
  properties: {
    flag: 'AllowVnetInbound'
  }
}
```

Create a user rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'Custom'
  properties: {
    description: 'Sample User Rule'
    destinationPortRanges: [
      '22'
    ]
    destinations: [
      {
        addressPrefix: '*'
        addressPrefixType: 'IPPrefix'
      }
    ]
    direction: 'Inbound'
    sourcePortRanges: [
      '0-65535'
    ]
    sources: [
      {
        addressPrefix: '*'
        addressPrefixType: 'IPPrefix'
      }
    ]
    protocol: 'Tcp'
  }
}
```

## microsoft.network/networkmanagers/securityadminconfigurations

Create network manager security admin configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    deleteExistingNSGs: 'True'
    securityType: 'AdminPolicy'
  }
}
```

## microsoft.network/networkmanagers/securityadminconfigurations/rulecollections

Create or Update an admin rule collection
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    appliesToGroups: [
      {
        networkGroupId: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/testGroup'
      }
    ]
  }
}
```

## microsoft.network/networkmanagers/securityadminconfigurations/rulecollections/rules

Create a default admin rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'Default'
  properties: {
    flag: 'AllowVnetInbound'
  }
}
```

Create an admin rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  kind: 'Custom'
  properties: {
    description: 'This is Sample Admin Rule'
    access: 'Deny'
    destinationPortRanges: [
      '22'
    ]
    destinations: [
      {
        addressPrefix: '*'
        addressPrefixType: 'IPPrefix'
      }
    ]
    direction: 'Inbound'
    priority: 1
    sourcePortRanges: [
      '0-65535'
    ]
    sources: [
      {
        addressPrefix: 'Internet'
        addressPrefixType: 'ServiceTag'
      }
    ]
    protocol: 'Tcp'
  }
}
```

## microsoft.network/networksecurityperimeters

Put Network Security Perimeter
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters@2021-02-01-preview' = {
  name: 'example'
  properties: {
  }
}
```

## microsoft.network/networksecurityperimeters/profiles

NspProfilesPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/profiles@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.network/networksecurityperimeters/profiles/accessrules

NspAccessRulePut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefixes: [
      '10.11.0.0/16'
      '10.10.1.0/24'
    ]
    direction: 'Inbound'
  }
}
```

## microsoft.network/networksecurityperimeters/resourceassociations

NspAssociationPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    accessMode: 'Enforced'
    privateLinkResource: {
      id: '/subscriptions/{paasSubscriptionId}/resourceGroups/{paasResourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}'
    }
    profile: {
      id: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/networkSecurityPerimeters/nsp1/profiles/{profileName}'
    }
  }
}
```

## microsoft.network/networksecurityperimeters/links

NspLinksPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/links@2021-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autoApprovedRemotePerimeterResourceId: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/networkSecurityPerimeters/nsp2'
  }
}
```
