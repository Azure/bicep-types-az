# Microsoft.ManagedNetwork
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.managednetwork/managednetworks

ManagedNetworksPut
```bicep
resource exampleResource 'Microsoft.ManagedNetwork/managedNetworks@2019-06-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    scope: {
      managementGroups: [
        {
          id: '/providers/Microsoft.Management/managementGroups/20000000-0001-0000-0000-000000000000'
        }
        {
          id: '/providers/Microsoft.Management/managementGroups/20000000-0002-0000-0000-000000000000'
        }
      ]
      subnets: [
        {
          id: '/subscriptions/subscriptionC/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/VnetC/subnets/subnetA'
        }
        {
          id: '/subscriptions/subscriptionC/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/VnetC/subnets/subnetB'
        }
      ]
      subscriptions: [
        {
          id: 'subscriptionA'
        }
        {
          id: 'subscriptionB'
        }
      ]
      virtualNetworks: [
        {
          id: '/subscriptions/subscriptionC/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/VnetA'
        }
        {
          id: '/subscriptions/subscriptionC/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/VnetB'
        }
      ]
    }
  }
  tags: {
  }
}
```

## microsoft.managednetwork/managednetworks/managednetworkgroups

ManagementNetworkGroupsPut
```bicep
resource exampleResource 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkGroups@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    managementGroups: [
    ]
    subnets: [
      {
        id: '/subscriptionB/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/VnetA/subnets/subnetA'
      }
    ]
    subscriptions: [
    ]
    virtualNetworks: [
      {
        id: '/subscriptionB/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/VnetA'
      }
      {
        id: '/subscriptionB/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/VnetB'
      }
    ]
  }
}
```

## microsoft.managednetwork/managednetworks/managednetworkpeeringpolicies

ManagedNetworkPeeringPoliciesPut
```bicep
resource exampleResource 'Microsoft.ManagedNetwork/managedNetworks/managedNetworkPeeringPolicies@2019-06-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'HubAndSpokeTopology'
    hub: {
      id: '/subscriptionB/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myHubVnet'
    }
    spokes: [
      {
        id: '/subscriptionB/resourceGroups/myResourceGroup/providers/Microsoft.ManagedNetwork/managedNetworks/myManagedNetwork/managedNetworkGroups/myManagedNetworkGroup1'
      }
    ]
  }
}
```

## microsoft.managednetwork/scopeassignments

ScopeAssignmentsPut
```bicep
resource exampleResource 'Microsoft.ManagedNetwork/scopeAssignments@2019-06-01-preview' = {
  name: 'example'
  properties: {
    assignedManagedNetwork: '/subscriptions/subscriptionA/resourceGroups/myResourceGroup/providers/Microsoft.ManagedNetwork/managedNetworks/myManagedNetwork'
  }
}
```
