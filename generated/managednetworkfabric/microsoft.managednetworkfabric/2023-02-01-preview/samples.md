# Microsoft.ManagedNetworkFabric

## microsoft.managednetworkfabric/accesscontrollists

AccessControlLists_Create_MinimumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/accessControlLists@2023-02-01-preview' = {
  name: 'example'
  location: 'EastUs'
  properties: {
    addressFamily: 'ipv4'
    conditions: [
      {
        action: 'allow'
        destinationAddress: '1.1.1.1'
        destinationPort: '21'
        sequenceNumber: 3
        sourceAddress: '2.2.2.2'
        sourcePort: '65000'
        protocol: 6
      }
    ]
  }
}
```

## microsoft.managednetworkfabric/ipcommunities

IpCommunities_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/ipCommunities@2023-02-01-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    action: 'Permit'
    annotation: 'annotationValue'
    communityMembers: [
      '1234:5678'
    ]
    wellKnownCommunities: [
      'Internet'
      'LocalAS'
      'NoExport'
      'GShut'
    ]
  }
  tags: {
    key2814: ''
  }
}
```

## microsoft.managednetworkfabric/ipextendedcommunities

IpExtendedCommunities_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/ipExtendedCommunities@2023-02-01-preview' = {
  name: 'example'
  location: 'EastUs'
  properties: {
    action: 'Permit'
    annotation: 'annotationValue'
    routeTargets: [
      '1234:5678'
    ]
  }
  tags: {
    key5054: 'key'
  }
}
```

## microsoft.managednetworkfabric/ipprefixes

IpPrefixes_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/ipPrefixes@2023-02-01-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    annotation: 'annotationValue'
    ipPrefixRules: [
      {
        action: 'Permit'
        condition: 'EqualTo'
        networkPrefix: '1.1.1.0/24'
        sequenceNumber: 12
        subnetMaskLength: 28
      }
    ]
  }
  tags: {
    key6404: ''
  }
}
```

## microsoft.managednetworkfabric/l2isolationdomains

L2IsolationDomains_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l2IsolationDomains@2023-02-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    mtu: 1500
    networkFabricId: '/subscriptions/xxxxxx/resourceGroups/resourcegroupname/providers/Microsoft.ManagedNetworkFabric/networkFabrics/FabricName'
    vlanId: 501
  }
}
```

## microsoft.managednetworkfabric/l3isolationdomains

L3IsolationDomains_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l3IsolationDomains@2023-02-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'creating L3 isolation domain'
    aggregateRouteConfiguration: {
      ipv4Routes: [
        {
          prefix: '10.0.0.0/24'
        }
      ]
      ipv6Routes: [
        {
          prefix: '10.0.0.1'
        }
      ]
    }
    connectedSubnetRoutePolicy: {
      exportRoutePolicyId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName2'
    }
    networkFabricId: '/subscriptions/xxxxxx/resourceGroups/resourcegroupname/providers/Microsoft.ManagedNetworkFabric/networkFabrics/FabricName'
    redistributeConnectedSubnets: 'True'
    redistributeStaticRoutes: 'False'
  }
}
```

## microsoft.managednetworkfabric/l3isolationdomains/internalnetworks

InternalNetworks_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l3IsolationDomains/internalNetworks@2023-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    bgpConfiguration: {
      allowAS: 1
      allowASOverride: 'Enable'
      bfdConfiguration: {
      }
      defaultRouteOriginate: 'True'
      ipv4ListenRangePrefixes: [
        '10.1.0.0/25'
      ]
      ipv4NeighborAddress: [
        {
          address: '10.1.0.0'
        }
      ]
      ipv6ListenRangePrefixes: [
        '2fff::/66'
      ]
      ipv6NeighborAddress: [
        {
          address: '2fff::'
        }
      ]
      peerASN: 6
    }
    connectedIPv4Subnets: [
      {
        prefix: '10.0.0.0/24'
      }
    ]
    connectedIPv6Subnets: [
      {
        prefix: '3FFE:FFFF:0:CD30::a0/29'
      }
    ]
    exportRoutePolicyId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName2'
    importRoutePolicyId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName1'
    mtu: 1500
    staticRouteConfiguration: {
      bfdConfiguration: {
      }
      ipv4Routes: [
        {
          nextHop: [
            '10.0.0.1'
          ]
          prefix: '10.1.0.0/24'
        }
      ]
      ipv6Routes: [
        {
          nextHop: [
            '2ffe::1'
          ]
          prefix: '2fff::/64'
        }
      ]
    }
    vlanId: 501
  }
}
```

## microsoft.managednetworkfabric/l3isolationdomains/externalnetworks

ExternalNetworks_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l3IsolationDomains/externalNetworks@2023-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    exportRoutePolicyId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    importRoutePolicyId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    optionAProperties: {
      bfdConfiguration: {
      }
      mtu: 1500
      peerASN: 65047
      primaryIpv4Prefix: '10.1.1.0/30'
      primaryIpv6Prefix: '3FFE:FFFF:0:CD30::a0/126'
      secondaryIpv4Prefix: '10.1.1.4/30'
      secondaryIpv6Prefix: '3FFE:FFFF:0:CD30::a4/126'
      vlanId: 1001
    }
    optionBProperties: {
      exportRouteTargets: [
        '65046:10039'
      ]
      importRouteTargets: [
        '65046:10039'
      ]
    }
    peeringOption: 'OptionA'
  }
}
```

## microsoft.managednetworkfabric/networkdevices

NetworkDevices_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkDevices@2023-02-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'null'
    hostName: 'networkDeviceName'
    networkDeviceRole: 'CE'
    networkDeviceSku: 'DefaultSku'
    serialNumber: 'Arista;DCS-7280PR3-24;12.05;JPE21330382'
  }
  tags: {
    keyID: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/networkdevices/networkinterfaces

NetworkInterfaces_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkDevices/networkInterfaces@2023-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    annotation: 'null'
  }
}
```

## microsoft.managednetworkfabric/networkfabriccontrollers

NetworkFabricControllers_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkFabricControllers@2023-02-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'lab 1'
    infrastructureExpressRouteConnections: [
      {
        expressRouteAuthorizationKey: 'xxxxxxx'
        expressRouteCircuitId: '/subscriptions/xxxxx/resourceGroups/resourceGroupName/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName'
      }
    ]
    ipv4AddressSpace: '172.253.0.0/19'
    managedResourceGroupConfiguration: {
      name: 'managedResourceGroupName'
      location: 'eastus'
    }
    workloadExpressRouteConnections: [
      {
        expressRouteAuthorizationKey: 'xxxxx'
        expressRouteCircuitId: '/subscriptions/xxxxx/resourceGroups/resourceGroupName/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName'
      }
    ]
  }
}
```

## microsoft.managednetworkfabric/networkfabrics

NetworkFabrics_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkFabrics@2023-02-01-preview' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    annotation: 'annotationValue'
    fabricASN: 29249
    ipv4Prefix: '10.18.0.0/19'
    ipv6Prefix: '3FFE:FFFF:0:CD40::/59'
    managementNetworkConfiguration: {
      infrastructureVpnConfiguration: {
        optionAProperties: {
          mtu: 5892
          peerASN: 42666
          primaryIpv4Prefix: '20.0.0.12/30'
          primaryIpv6Prefix: '3FFE:FFFF:0:CD30::a8/126'
          secondaryIpv4Prefix: '20.0.0.13/30'
          secondaryIpv6Prefix: '3FFE:FFFF:0:CD30::ac/126'
          vlanId: 2724
        }
        optionBProperties: {
          exportRouteTargets: [
            '65046:10039'
          ]
          importRouteTargets: [
            '65046:10039'
          ]
        }
        peeringOption: 'OptionA'
      }
      workloadVpnConfiguration: {
        optionAProperties: {
          mtu: 5892
          peerASN: 42666
          primaryIpv4Prefix: '10.0.0.14/30'
          primaryIpv6Prefix: '2FFE:FFFF:0:CD30::a7/126'
          secondaryIpv4Prefix: '10.0.0.15/30'
          secondaryIpv6Prefix: '2FFE:FFFF:0:CD30::ac/126'
          vlanId: 2724
        }
        optionBProperties: {
          exportRouteTargets: [
            '65046:10050'
          ]
          importRouteTargets: [
            '65046:10050'
          ]
        }
        peeringOption: 'OptionA'
      }
    }
    networkFabricControllerId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/fabricControllerName'
    networkFabricSku: 'M4-A400-A100-C16-aa'
    rackCount: 4
    serverCountPerRack: 8
    terminalServerConfiguration: {
      password: 'xxxx'
      primaryIpv4Prefix: '20.0.0.12/30'
      primaryIpv6Prefix: '3FFE:FFFF:0:CD30::a8/126'
      secondaryIpv4Prefix: '20.0.0.13/30'
      secondaryIpv6Prefix: '3FFE:FFFF:0:CD30::ac/126'
      serialNumber: '123456'
      username: 'username'
    }
  }
  tags: {
    key6468: ''
  }
}
```

## microsoft.managednetworkfabric/networkfabrics/networktonetworkinterconnects

NetworkToNetworkInterconnects_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkFabrics/networkToNetworkInterconnects@2023-02-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    isManagementType: 'True'
    layer2Configuration: {
      mtu: 1500
      portCount: 10
    }
    layer3Configuration: {
      exportRoutePolicyId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName2'
      importRoutePolicyId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName1'
      peerASN: 50272
      primaryIpv4Prefix: '172.31.0.0/31'
      primaryIpv6Prefix: '3FFE:FFFF:0:CD30::a0/126'
      secondaryIpv4Prefix: '172.31.0.20/31'
      secondaryIpv6Prefix: '3FFE:FFFF:0:CD30::a4/126'
      vlanId: 2064
    }
    nniType: 'CE'
    useOptionB: 'False'
  }
}
```

## microsoft.managednetworkfabric/networkracks

NetworkRacks_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkRacks@2023-02-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'null'
    networkFabricId: '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/networkFabrics/networkFabricName'
    networkRackSku: 'RackSKU'
  }
  tags: {
    keyID: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/routepolicies

RoutePolicies_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/routePolicies@2023-02-01-preview' = {
  name: 'example'
  location: 'EastUS'
  properties: {
    annotation: 'annotationValue'
    statements: [
      {
        action: {
          actionType: 'Permit'
          ipCommunityProperties: {
            add: {
              ipCommunityIds: [
                '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/ipCommunities/ipCommunityName'
              ]
            }
            delete: {
              ipCommunityIds: [
                '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/ipCommunities/ipCommunityName'
              ]
            }
            set: {
              ipCommunityIds: [
                '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/ipCommunities/ipCommunityName'
              ]
            }
          }
          ipExtendedCommunityProperties: {
            add: {
              ipExtendedCommunityIds: [
                '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/ipExtendedCommunityName'
              ]
            }
            delete: {
              ipExtendedCommunityIds: [
                '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/ipExtendedCommunityName'
              ]
            }
            set: {
              ipExtendedCommunityIds: [
                '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/ipExtendedCommunityName'
              ]
            }
          }
          localPreference: 20
        }
        annotation: 'annotationValue'
        condition: {
          ipCommunityIds: [
            '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/ipCommunities/ipCommunityName'
          ]
          ipExtendedCommunityIds: [
            '/subscriptions/subscriptionId/resourceGroups/resourceGroupName/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/ipExtendedCommunityName'
          ]
          ipPrefixId: 'subscriptions/xxxxxx/resourceGroups/resourcegroupname/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/example-ipPrefix'
        }
        sequenceNumber: 7
      }
    ]
  }
  tags: {
    key8254: ''
  }
}
```
