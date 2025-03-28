# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/managementgroups/networkmanagerconnections

Create or Update Management Group Network Manager Connection
```bicep
resource exampleResource 'Microsoft.Network/managementGroups/networkManagerConnections@2021-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    networkManagerId: '/subscriptions/subscriptionC/resourceGroup/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager'
  }
}
```

## microsoft.network/networkmanagerconnections

Create or Update Subscription Network Manager Connection
```bicep
resource exampleResource 'Microsoft.Network/networkManagerConnections@2021-05-01-preview' = {
  name: 'example'
  properties: {
    networkManagerId: '/subscriptions/subscriptionC/resourceGroup/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager'
  }
}
```

## microsoft.network/networkmanagers

Put Network Manager
```bicep
resource exampleResource 'Microsoft.Network/networkManagers@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/connectivityConfigurations@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/networkGroups@2021-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample group'
    displayName: 'My Network Group'
    memberType: 'VirtualNetwork'
  }
}
```

## microsoft.network/networkmanagers/networkgroups/staticmembers

StaticMemberPut
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/networkGroups/staticMembers@2021-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resourceId: '/subscriptions/subscriptionC/resourceGroup/rg1/providers/Microsoft.Network/virtualnetworks/vnet1'
  }
}
```

## microsoft.network/networkmanagers/scopeconnections

Create or Update Network Manager Scope Connection
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/scopeConnections@2021-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'This is a scope connection to a cross tenant subscription.'
    resourceId: 'subscriptions/f0dc2b34-dfad-40e4-83e0-2309fed8d00b'
    tenantId: '6babcaad-604b-40ac-a9d7-9fd97c0b779f'
  }
}
```

## microsoft.network/networkmanagers/securityadminconfigurations

Create network manager security admin configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations@2021-05-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    applyOnNetworkIntentPolicyBasedServices: [
      'None'
    ]
    deleteExistingNSGs: 'True'
    securityType: 'AdminPolicy'
  }
}
```

## microsoft.network/networkmanagers/securityadminconfigurations/rulecollections

Create or Update an admin rule collection
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2021-05-01-preview' = {
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

## microsoft.network/networkmanagers/securityuserconfigurations

Create network manager security user configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2021-05-01-preview' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2021-05-01-preview' = {
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
