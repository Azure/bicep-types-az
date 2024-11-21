# Microsoft.ManagedNetworkFabric

## microsoft.managednetworkfabric/accesscontrollists

AccessControlLists_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/accessControlLists@2023-06-15' = {
  name: 'example'
  location: 'eastUs'
  properties: {
    aclsUrl: 'https://ACL-Storage-URL'
    annotation: 'annotation'
    configurationType: 'File'
    defaultAction: 'Permit'
    dynamicMatchConfigurations: [
      {
        ipGroups: [
          {
            name: 'example-ipGroup'
            ipAddressType: 'IPv4'
            ipPrefixes: [
              '10.20.3.1/20'
            ]
          }
        ]
        portGroups: [
          {
            name: 'example-portGroup'
            ports: [
              '100-200'
            ]
          }
        ]
        vlanGroups: [
          {
            name: 'example-vlanGroup'
            vlans: [
              '20-30'
            ]
          }
        ]
      }
    ]
    matchConfigurations: [
      {
        actions: [
          {
            type: 'Count'
            counterName: 'example-counter'
          }
        ]
        ipAddressType: 'IPv4'
        matchConditions: [
          {
            dscpMarkings: [
              '32'
            ]
            etherTypes: [
              '0x1'
            ]
            fragments: [
              '0xff00-0xffff'
            ]
            ipCondition: {
              type: 'SourceIP'
              ipGroupNames: [
                'example-ipGroup'
              ]
              ipPrefixValues: [
                '10.20.20.20/12'
              ]
              prefixType: 'Prefix'
            }
            ipLengths: [
              '4094-9214'
            ]
            portCondition: {
              flags: [
                'established'
              ]
              layer4Protocol: 'TCP'
              portGroupNames: [
                'example-portGroup'
              ]
              portType: 'SourcePort'
              ports: [
                '1-20'
              ]
            }
            protocolTypes: [
              'TCP'
            ]
            ttlValues: [
              '23'
            ]
            vlanMatchCondition: {
              innerVlans: [
                '30'
              ]
              vlanGroupNames: [
                'example-vlanGroup'
              ]
              vlans: [
                '20-30'
              ]
            }
          }
        ]
        matchConfigurationName: 'example-match'
        sequenceNumber: 123
      }
    ]
  }
  tags: {
    keyID: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/internetgateways

InternetGateways_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/internetGateways@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    type: 'Infrastructure'
    annotation: 'annotation'
    internetGatewayRuleId: '/subscriptions/xxxx-xxxx-xxxx-xxxx/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/example-internetGatewayRule'
    networkFabricControllerId: '/subscriptions/xxxx-xxxx-xxxx-xxxx/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/example-networkFabricController'
  }
  tags: {
    key3540: '1234'
  }
}
```

## microsoft.managednetworkfabric/internetgatewayrules

InternetGatewayRules_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/internetGatewayRules@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotationValue'
    ruleProperties: {
      action: 'Allow'
      addressList: [
        '10.10.10.10'
      ]
    }
  }
  tags: {
    keyID: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/ipcommunities

IpCommunities_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/ipCommunities@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotation'
    ipCommunityRules: [
      {
        action: 'Permit'
        communityMembers: [
          '1:1'
        ]
        sequenceNumber: 4155123341
        wellKnownCommunities: [
          'Internet'
        ]
      }
    ]
  }
  tags: {
    keyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/ipextendedcommunities

IpExtendedCommunities_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/ipExtendedCommunities@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotation'
    ipExtendedCommunityRules: [
      {
        action: 'Permit'
        routeTargets: [
          '1234:2345'
        ]
        sequenceNumber: 4155123341
      }
    ]
  }
  tags: {
    keyID: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/ipprefixes

IpPrefixes_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/ipPrefixes@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotation'
    ipPrefixRules: [
      {
        action: 'Permit'
        condition: 'GreaterThanOrEqualTo'
        networkPrefix: '10.10.10.10/30'
        sequenceNumber: 4155123341
        subnetMaskLength: '10'
      }
    ]
  }
  tags: {
    keyID: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/l2isolationdomains

L2IsolationDomains_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l2IsolationDomains@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotation'
    mtu: 1500
    networkFabricId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric'
    vlanId: 501
  }
  tags: {
    keyID: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/l3isolationdomains

L3IsolationDomains_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l3IsolationDomains@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    aggregateRouteConfiguration: {
      ipv4Routes: [
        {
          prefix: '10.0.0.0/24'
        }
      ]
      ipv6Routes: [
        {
          prefix: '3FFE:FFFF:0:CD30::a0/29'
        }
      ]
    }
    annotation: 'annotation'
    connectedSubnetRoutePolicy: {
      exportRoutePolicy: {
        exportIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy'
        exportIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy'
      }
      exportRoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    }
    networkFabricId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric'
    redistributeConnectedSubnets: 'True'
    redistributeStaticRoutes: 'False'
  }
  tags: {
    keyID: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/l3isolationdomains/internalnetworks

InternalNetworks_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l3IsolationDomains/internalNetworks@2023-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    annotation: 'annotation'
    bgpConfiguration: {
      allowAS: 10
      allowASOverride: 'Enable'
      annotation: 'annotation'
      bfdConfiguration: {
        intervalInMilliSeconds: 300
        multiplier: 5
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
      peerASN: 61234
    }
    connectedIPv4Subnets: [
      {
        annotation: 'annotation'
        prefix: '10.0.0.0/24'
      }
    ]
    connectedIPv6Subnets: [
      {
        annotation: 'annotation'
        prefix: '3FFE:FFFF:0:CD30::a0/29'
      }
    ]
    egressAclId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
    exportRoutePolicy: {
      exportIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
      exportIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    }
    exportRoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    extension: 'NoExtension'
    importRoutePolicy: {
      importIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
      importIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    }
    importRoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    ingressAclId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
    isMonitoringEnabled: 'True'
    mtu: 1500
    staticRouteConfiguration: {
      bfdConfiguration: {
        intervalInMilliSeconds: 300
        multiplier: 15
      }
      extension: 'NoExtension'
      ipv4Routes: [
        {
          nextHop: [
            '10.0.0.1'
          ]
          prefix: 'jffgck'
        }
      ]
      ipv6Routes: [
        {
          nextHop: [
            '3ffe::1'
          ]
          prefix: '2fff::/64'
        }
      ]
    }
    vlanId: 755
  }
}
```

## microsoft.managednetworkfabric/l3isolationdomains/externalnetworks

ExternalNetworks_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l3IsolationDomains/externalNetworks@2023-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    annotation: 'annotation'
    exportRoutePolicy: {
      exportIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
      exportIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    }
    exportRoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    importRoutePolicy: {
      importIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
      importIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    }
    importRoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    networkToNetworkInterconnectId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric/networkToNetworkInterconnects/example-nni'
    optionAProperties: {
      bfdConfiguration: {
        intervalInMilliSeconds: 300
        multiplier: 15
      }
      egressAclId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
      ingressAclId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
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
      routeTargets: {
        exportIpv4RouteTargets: [
          '65046:10039'
        ]
        exportIpv6RouteTargets: [
          '65046:10039'
        ]
        importIpv4RouteTargets: [
          '65046:10039'
        ]
        importIpv6RouteTargets: [
          '65046:10039'
        ]
      }
    }
    peeringOption: 'OptionA'
  }
}
```

## microsoft.managednetworkfabric/neighborgroups

NeighborGroups_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/neighborGroups@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotation'
    destination: {
      ipv4Addresses: [
        '10.10.10.10'
        '20.10.10.10'
        '30.10.10.10'
        '40.10.10.10'
        '50.10.10.10'
        '60.10.10.10'
        '70.10.10.10'
        '80.10.10.10'
        '90.10.10.10'
      ]
      ipv6Addresses: [
        '2F::/100'
      ]
    }
  }
  tags: {
    key8107: '1234'
  }
}
```

## microsoft.managednetworkfabric/networkdevices

NetworkDevices_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkDevices@2023-06-15' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    annotation: 'annotation'
    hostName: 'NFA-Device'
    networkDeviceSku: 'DeviceSku'
    serialNumber: 'Vendor;DCS-7280XXX-24;12.05;JPE2111XXXX'
  }
  tags: {
    keyID: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/networkdevices/networkinterfaces

NetworkInterfaces_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkDevices/networkInterfaces@2023-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    annotation: 'annotation'
  }
}
```

## microsoft.managednetworkfabric/networkfabriccontrollers

NetworkFabricControllers_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkFabricControllers@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotation'
    infrastructureExpressRouteConnections: [
      {
        expressRouteAuthorizationKey: '1234ABCD-0A1B-1234-5678-123456ABCDEF'
        expressRouteCircuitId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName'
      }
    ]
    ipv4AddressSpace: '172.253.0.0/19'
    ipv6AddressSpace: '::/60'
    isWorkloadManagementNetworkEnabled: 'True'
    managedResourceGroupConfiguration: {
      name: 'managedResourceGroupName'
      location: 'eastus'
    }
    nfcSku: 'Standard'
    workloadExpressRouteConnections: [
      {
        expressRouteAuthorizationKey: 'xxxxx'
        expressRouteCircuitId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName'
      }
    ]
  }
}
```

## microsoft.managednetworkfabric/networkfabrics

NetworkFabrics_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkFabrics@2023-06-15' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    annotation: 'annotation'
    fabricASN: 29249
    fabricVersion: '1.x.x'
    ipv4Prefix: '10.18.0.0/19'
    ipv6Prefix: '3FFE:FFFF:0:CD40::/59'
    managementNetworkConfiguration: {
      infrastructureVpnConfiguration: {
        networkToNetworkInterconnectId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric/networkToNetworkInterconnects/example-nni'
        optionAProperties: {
          bfdConfiguration: {
            intervalInMilliSeconds: 300
            multiplier: 10
          }
          mtu: 1501
          peerASN: 1235
          primaryIpv4Prefix: '10.0.0.12/30'
          primaryIpv6Prefix: '4FFE:FFFF:0:CD30::a8/127'
          secondaryIpv4Prefix: '20.0.0.13/30'
          secondaryIpv6Prefix: '6FFE:FFFF:0:CD30::ac/127'
          vlanId: 3001
        }
        optionBProperties: {
          exportRouteTargets: [
            '65046:10050'
          ]
          importRouteTargets: [
            '65046:10050'
          ]
          routeTargets: {
            exportIpv4RouteTargets: [
              '65046:10039'
            ]
            exportIpv6RouteTargets: [
              '65046:10039'
            ]
            importIpv4RouteTargets: [
              '65046:10039'
            ]
            importIpv6RouteTargets: [
              '65046:10039'
            ]
          }
        }
        peeringOption: 'OptionA'
      }
      workloadVpnConfiguration: {
        networkToNetworkInterconnectId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric/networkToNetworkInterconnects/example-nni'
        optionAProperties: {
          bfdConfiguration: {
            intervalInMilliSeconds: 300
            multiplier: 5
          }
          mtu: 1500
          peerASN: 61234
          primaryIpv4Prefix: '10.0.0.14/30'
          primaryIpv6Prefix: '2FFE:FFFF:0:CD30::a7/126'
          secondaryIpv4Prefix: '10.0.0.15/30'
          secondaryIpv6Prefix: '2FFE:FFFF:0:CD30::ac/126'
          vlanId: 3000
        }
        optionBProperties: {
          exportRouteTargets: [
            '65046:10050'
          ]
          importRouteTargets: [
            '65046:10050'
          ]
          routeTargets: {
            exportIpv4RouteTargets: [
              '65046:10039'
            ]
            exportIpv6RouteTargets: [
              '65046:10039'
            ]
            importIpv4RouteTargets: [
              '65046:10039'
            ]
            importIpv6RouteTargets: [
              '65046:10039'
            ]
          }
        }
        peeringOption: 'OptionA'
      }
    }
    networkFabricControllerId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/example-fabricController'
    networkFabricSku: 'M4-A400-A100-C16-aa'
    rackCount: 4
    serverCountPerRack: 8
    terminalServerConfiguration: {
      password: 'xxxx'
      primaryIpv4Prefix: '10.0.0.12/30'
      primaryIpv6Prefix: '4FFE:FFFF:0:CD30::a8/127'
      secondaryIpv4Prefix: '20.0.0.13/30'
      secondaryIpv6Prefix: '6FFE:FFFF:0:CD30::ac/127'
      serialNumber: '123456'
      username: 'username'
    }
  }
  tags: {
    keyID: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/networkfabrics/networktonetworkinterconnects

NetworkToNetworkInterconnects_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkFabrics/networkToNetworkInterconnects@2023-06-15' = {
  parent: parentResource 
  name: 'example'
  properties: {
    egressAclId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
    exportRoutePolicy: {
      exportIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy'
      exportIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy'
    }
    importRoutePolicy: {
      importIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy'
      importIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy'
    }
    ingressAclId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
    isManagementType: 'True'
    layer2Configuration: {
      interfaces: [
        '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkDevices/example-networkDevice/networkInterfaces/example-networkInterface'
      ]
      mtu: 1500
    }
    nniType: 'CE'
    npbStaticRouteConfiguration: {
      bfdConfiguration: {
        intervalInMilliSeconds: 300
        multiplier: 25
      }
      ipv4Routes: [
        {
          nextHop: [
            '21.20.20.20'
          ]
          prefix: '20.0.0.12/30'
        }
      ]
      ipv6Routes: [
        {
          nextHop: [
            '4FFE:FFFF:0:CD30::ac'
          ]
          prefix: '3FFE:FFFF:0:CD30::ac/127'
        }
      ]
    }
    optionBLayer3Configuration: {
      peerASN: 61234
      primaryIpv4Prefix: '10.0.0.12/30'
      primaryIpv6Prefix: '4FFE:FFFF:0:CD30::a8/127'
      secondaryIpv4Prefix: '40.0.0.14/30'
      secondaryIpv6Prefix: '6FFE:FFFF:0:CD30::ac/127'
      vlanId: 1234
    }
    useOptionB: 'True'
  }
}
```

## microsoft.managednetworkfabric/networkpacketbrokers

NetworkPacketBrokers_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkPacketBrokers@2023-06-15' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    networkFabricId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-networkFabric'
  }
  tags: {
    key2806: 'key'
  }
}
```

## microsoft.managednetworkfabric/networkracks

NetworkRacks_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkRacks@2023-06-15' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    annotation: 'annotation'
    networkFabricId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-networkFabric'
    networkRackType: 'Aggregate'
  }
  tags: {
    keyID: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/networktaprules

NetworkTapRules_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkTapRules@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotation'
    configurationType: 'File'
    dynamicMatchConfigurations: [
      {
        ipGroups: [
          {
            name: 'example-ipGroup1'
            ipAddressType: 'IPv4'
            ipPrefixes: [
              '10.10.10.10/30'
            ]
          }
        ]
        portGroups: [
          {
            name: 'example-portGroup1'
            ports: [
              '100-200'
            ]
          }
          {
            name: 'example-portGroup2'
            ports: [
              '900'
              '1000-2000'
            ]
          }
        ]
        vlanGroups: [
          {
            name: 'exmaple-vlanGroup'
            vlans: [
              '10'
              '100-200'
            ]
          }
        ]
      }
    ]
    matchConfigurations: [
      {
        actions: [
          {
            type: 'Drop'
            destinationId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/neighborGroups/example-neighborGroup'
            isTimestampEnabled: 'True'
            matchConfigurationName: 'match1'
            truncate: '100'
          }
        ]
        ipAddressType: 'IPv4'
        matchConditions: [
          {
            encapsulationType: 'None'
            ipCondition: {
              type: 'SourceIP'
              ipGroupNames: [
                'example-ipGroup'
              ]
              ipPrefixValues: [
                '10.10.10.10/20'
              ]
              prefixType: 'Prefix'
            }
            portCondition: {
              layer4Protocol: 'TCP'
              portGroupNames: [
                'example-portGroup1'
              ]
              portType: 'SourcePort'
              ports: [
                '100'
              ]
            }
            protocolTypes: [
              'TCP'
            ]
            vlanMatchCondition: {
              innerVlans: [
                '11-20'
              ]
              vlanGroupNames: [
                'exmaple-vlanGroup'
              ]
              vlans: [
                '10'
              ]
            }
          }
        ]
        matchConfigurationName: 'config1'
        sequenceNumber: 10
      }
    ]
    pollingIntervalInSeconds: 30
    tapRulesUrl: 'https://microsoft.com/a'
  }
  tags: {
    keyID: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/networktaps

NetworkTaps_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkTaps@2023-06-15' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    annotation: 'annotation'
    destinations: [
      {
        name: 'example-destinaionName'
        destinationId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/l3IsloationDomains/example-l3Domain/internalNetworks/example-internalNetwork'
        destinationTapRuleId: '/subscriptions/xxxx-xxxx-xxxx-xxxx/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkTapRules/example-destinationTapRule'
        destinationType: 'IsolationDomain'
        isolationDomainProperties: {
          encapsulation: 'None'
          neighborGroupIds: [
            '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/neighborGroups/example-neighborGroup'
          ]
        }
      }
    ]
    networkPacketBrokerId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkPacketBrokers/example-networkPacketBroker'
    pollingType: 'Pull'
  }
  tags: {
    key6024: '1234'
  }
}
```

## microsoft.managednetworkfabric/routepolicies

RoutePolicies_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/routePolicies@2023-06-15' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressFamilyType: 'IPv4'
    annotation: 'annotation'
    defaultAction: 'Deny'
    networkFabricId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric'
    statements: [
      {
        action: {
          actionType: 'Permit'
          ipCommunityProperties: {
            add: {
              ipCommunityIds: [
                '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/ipCommunities/example-ipCommunity'
              ]
            }
            delete: {
              ipCommunityIds: [
                '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/ipCommunities/example-ipCommunity'
              ]
            }
            set: {
              ipCommunityIds: [
                '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/ipCommunities/example-ipCommunity'
              ]
            }
          }
          ipExtendedCommunityProperties: {
            add: {
              ipExtendedCommunityIds: [
                '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/example-ipExtendedCommunity'
              ]
            }
            delete: {
              ipExtendedCommunityIds: [
                '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/example-ipExtendedCommunity'
              ]
            }
            set: {
              ipExtendedCommunityIds: [
                '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/example-ipExtendedCommunity'
              ]
            }
          }
          localPreference: 20
        }
        annotation: 'annotation'
        condition: {
          type: 'Or'
          ipCommunityIds: [
            '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/ipCommunities/example-ipCommunity'
          ]
          ipExtendedCommunityIds: [
            '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/ipExtendedCommunities/example-ipExtendedCommunity'
          ]
          ipPrefixId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/example-ipPrefix'
        }
        sequenceNumber: 7
      }
    ]
  }
  tags: {
    keyID: 'keyValue'
  }
}
```
