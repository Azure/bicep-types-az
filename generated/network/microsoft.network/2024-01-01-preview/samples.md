# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/networkmanagers

Put Network Manager
```bicep
resource exampleResource 'Microsoft.Network/networkManagers@2024-01-01-preview' = {
  name: 'example'
  properties: {
    description: 'My Test Network Manager'
    networkManagerScopeAccesses: [
      'Connectivity'
    ]
    networkManagerScopes: {
      managementGroups: [
        '/Microsoft.Management/testmg'
      ]
      subscriptions: [
        '/subscriptions/00000000-0000-0000-0000-000000000000'
      ]
    }
  }
}
```

## microsoft.network/networkmanagers/securityadminconfigurations

Create manual-mode security admin configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A configuration which will update any network groups ip addresses at commit times.'
    networkGroupAddressSpaceAggregationOption: 'Manual'
  }
}
```

Create network manager security admin configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    applyOnNetworkIntentPolicyBasedServices: [
      'None'
    ]
  }
}
```

## microsoft.network/networkmanagers/securityadminconfigurations/rulecollections

Create or Update an admin rule collection
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    appliesToGroups: [
      {
        networkGroupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/testGroup'
      }
    ]
  }
}
```

## microsoft.network/networkmanagers/securityadminconfigurations/rulecollections/rules

Create a admin rule with network group as source or destination
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2024-01-01-preview' = {
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
        addressPrefix: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/ng1'
        addressPrefixType: 'NetworkGroup'
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

Create an admin rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2024-01-01-preview' = {
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

## microsoft.network/networkmanagers/verifierworkspaces

VerifierWorkspaceCreate
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/verifierWorkspaces@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'A sample workspace'
  }
}
```

## microsoft.network/networkmanagers/verifierworkspaces/reachabilityanalysisintents

ReachabilityAnalysisIntentCreate
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/verifierWorkspaces/reachabilityAnalysisIntents@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample reachability analysis intent'
    destinationResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/testVmDest'
    ipTraffic: {
      destinationIps: [
        '10.4.0.1'
      ]
      destinationPorts: [
        '0'
      ]
      protocols: [
        'Any'
      ]
      sourceIps: [
        '10.4.0.0'
      ]
      sourcePorts: [
        '0'
      ]
    }
    sourceResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/testVmSrc'
  }
}
```

## microsoft.network/networkmanagers/verifierworkspaces/reachabilityanalysisruns

ReachabilityAnalysisRunCreate
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/verifierWorkspaces/reachabilityAnalysisRuns@2024-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample reachability analysis run'
    intentId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/verifierWorkspaces/testVerifierWorkspace1/reachabilityAnalysisIntents/testReachabilityAnalysisIntenant1'
  }
}
```
