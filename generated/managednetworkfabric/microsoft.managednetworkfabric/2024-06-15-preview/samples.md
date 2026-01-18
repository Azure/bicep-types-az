# Microsoft.ManagedNetworkFabric
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.managednetworkfabric/accesscontrollists

AccessControlLists_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/accessControlLists@2024-06-15-preview' = {
  name: 'example'
  location: 'eastUs'
  properties: {
    aclType: 'ControlPlaneTrafficPolicy'
    aclsUrl: 'https://ACL-Storage-URL'
    annotation: 'annotation'
    configurationType: 'File'
    defaultAction: 'Permit'
    deviceRole: 'CE'
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
    globalAccessControlListActions: {
      enableCount: 'True'
    }
    matchConfigurations: [
      {
        actions: [
          {
            type: 'Count'
            counterName: 'example-counter'
            policeRateConfiguration: {
              bitRate: {
                rate: 15
                unit: 'bps'
              }
              burstSize: {
                size: 2
                unit: 'Bytes'
              }
            }
            remarkComment: 'example-remark'
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
            icmpConfiguration: {
              icmpTypes: [
                'echo'
              ]
            }
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
            protocolNeighbors: [
              'example-neighbor'
            ]
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
    keyID: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/internetgatewayrules

InternetGatewayRules_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/internetGatewayRules@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotationValue'
    ruleProperties: {
      action: 'Allow'
      addressList: [
        '10.10.10.10'
      ]
      condition: 'Or'
      destinationAddressList: [
        '11.11.10.11'
      ]
      headerAddressList: [
        {
          addressList: [
            '10.10.10.10'
          ]
          headerName: 'abcHeader'
        }
      ]
      sourceAddressList: [
        '10.10.10.10'
      ]
    }
  }
  tags: {
    KeyID: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/internetgateways

InternetGateways_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/internetGateways@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    type: 'Infrastructure'
    annotation: 'annotation'
    internetGatewayRuleId: '/subscriptions/xxxx-xxxx-xxxx-xxxx/providers/Microsoft.ManagedNetworkFabric/internetGatewayRules/example-internetGatewayRule'
    internetGatewayType: 'Infrastructure'
    networkFabricControllerId: '/subscriptions/xxxx-xxxx-xxxx-xxxx/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabricControllers/example-networkFabricController'
  }
  tags: {
    keyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/ipcommunities

IpCommunities_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/ipCommunities@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administrativeState: 'Enabled'
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
    KeyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/ipextendedcommunities

IpExtendedCommunities_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/ipExtendedCommunities@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administrativeState: 'Enabled'
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
    KeyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/ipprefixes

IpPrefixes_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/ipPrefixes@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administrativeState: 'Enabled'
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
    KeyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/l2isolationdomains

L2IsolationDomains_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l2IsolationDomains@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administrativeState: 'Enabled'
    annotation: 'annotation'
    extendedVlan: 'Enabled'
    mtu: 1500
    networkFabricId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric'
    networkToNetworkInterconnectId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric/networkToNetworkInterconnects/example-nni'
    vlanId: 501
  }
  tags: {
    KeyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/l3isolationdomains

L3IsolationDomains_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l3IsolationDomains@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administrativeState: 'Enabled'
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
    }
    networkFabricId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric'
    redistributeConnectedSubnets: 'True'
    redistributeStaticRoutes: 'True'
    routePrefixLimit: {
      hardLimit: 1
      threshold: 90
    }
    staticRouteRoutePolicy: {
      exportRoutePolicy: {
        exportIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy'
        exportIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/example-routePolicy'
      }
    }
    uniqueRdConfiguration: {
    }
  }
  tags: {
    KeyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/l3isolationdomains/externalnetworks

ExternalNetworks_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l3IsolationDomains/externalNetworks@2024-06-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    annotation: 'annotation'
    exportRoutePolicy: {
      exportIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
      exportIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    }
    importRoutePolicy: {
      importIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
      importIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    }
    networkToNetworkInterconnectId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric/networkToNetworkInterconnects/example-nni'
    optionAProperties: {
      bfdConfiguration: {
        intervalInMilliSeconds: 300
        multiplier: 10
      }
      bmpConfiguration: {
        configurationState: 'Enabled'
      }
      egressAclId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
      ingressAclId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
      mtu: 1500
      nativeIpv4PrefixLimit: {
        prefixLimits: [
          {
            idleTimeExpiry: 7
            maximumRoutes: 14
            threshold: 17
          }
        ]
      }
      nativeIpv6PrefixLimit: {
        prefixLimits: [
          {
            idleTimeExpiry: 7
            maximumRoutes: 14
            threshold: 17
          }
        ]
      }
      peerASN: 65047
      primaryIpv4Prefix: '10.1.1.0/30'
      primaryIpv6Prefix: '3FFE:FFFF:0:CD30::a0/126'
      secondaryIpv4Prefix: '10.1.1.4/30'
      secondaryIpv6Prefix: '3FFE:FFFF:0:CD30::a4/126'
      v4OverV6BgpSession: 'Enabled'
      v6OverV4BgpSession: 'Enabled'
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
          '65046:10050'
        ]
        exportIpv6RouteTargets: [
          '65046:10050'
        ]
        importIpv4RouteTargets: [
          '65046:10050'
        ]
        importIpv6RouteTargets: [
          '65046:10050'
        ]
      }
    }
    peeringOption: 'OptionA'
    staticRouteConfiguration: {
      bfdConfiguration: {
        intervalInMilliSeconds: 300
        multiplier: 10
      }
      ipv4Routes: [
        {
          nextHop: [
            '10.0.0.1'
          ]
          prefix: '10.0.0.1/24'
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
  }
}
```

## microsoft.managednetworkfabric/l3isolationdomains/internalnetworks

InternalNetworks_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/l3IsolationDomains/internalNetworks@2024-06-15-preview' = {
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
        multiplier: 10
      }
      bmpConfiguration: {
        bmpConfigurationState: 'Enabled'
        neighborIpExclusions: [
          '10.0.0.1'
        ]
      }
      defaultRouteOriginate: 'True'
      ipv4ListenRangePrefixes: [
        '10.1.0.0/25'
      ]
      ipv4NeighborAddress: [
        {
          address: '10.1.0.0'
          bfdAdministrativeState: 'Enable'
          bgpAdministrativeState: 'Enable'
        }
      ]
      ipv6ListenRangePrefixes: [
        '2fff::/66'
      ]
      ipv6NeighborAddress: [
        {
          address: '2fff::'
          bfdAdministrativeState: 'Enable'
          bgpAdministrativeState: 'Enable'
        }
      ]
      peerASN: 61234
      v4OverV6BgpSession: 'Enabled'
      v6OverV4BgpSession: 'Enabled'
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
    extension: 'NoExtension'
    importRoutePolicy: {
      importIpv4RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
      importIpv6RoutePolicyId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/routePolicies/routePolicyName'
    }
    ingressAclId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
    isMonitoringEnabled: 'True'
    mtu: 1500
    nativeIpv4PrefixLimit: {
      prefixLimits: [
        {
          idleTimeExpiry: 28
          maximumRoutes: 23
          threshold: 7
        }
      ]
    }
    nativeIpv6PrefixLimit: {
      prefixLimits: [
        {
          idleTimeExpiry: 28
          maximumRoutes: 23
          threshold: 7
        }
      ]
    }
    staticRouteConfiguration: {
      bfdConfiguration: {
        intervalInMilliSeconds: 300
        multiplier: 10
      }
      extension: 'NoExtension'
      ipv4Routes: [
        {
          nextHop: [
            '10.0.0.1'
          ]
          prefix: '10.0.0.1/24'
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

## microsoft.managednetworkfabric/neighborgroups

NeighborGroups_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/neighborGroups@2024-06-15-preview' = {
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
    KeyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/networkdevices

NetworkDevices_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkDevices@2024-06-15-preview' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    administrativeState: 'Enabled'
    annotation: 'annotation'
    hostName: 'NFA-Device'
    networkDeviceRole: 'CE'
    networkDeviceSku: 'DeviceSku'
    serialNumber: 'Vendor;DCS-7280XXX-24;12.05;JPE2111XXXX'
  }
  tags: {
    KeyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/networkdevices/networkinterfaces

NetworkInterfaces_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkDevices/networkInterfaces@2024-06-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'device 1'
    additionalDescription: 'device 1'
    annotation: 'annotation'
    interfaceType: 'Management'
  }
}
```

## microsoft.managednetworkfabric/networkfabriccontrollers

NetworkFabricControllers_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkFabricControllers@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    annotation: 'annotation'
    infrastructureExpressRouteConnections: [
      {
        expressRouteAuthorizationKey: 'xxx-xxx-xxx'
        expressRouteCircuitId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName'
      }
    ]
    infrastructureServices: {
      ipv4AddressSpaces: [
        '172.253.0.0/19'
      ]
      ipv6AddressSpaces: [
      ]
    }
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
        expressRouteAuthorizationKey: 'xxx-xxx-xxx'
        expressRouteCircuitId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.Network/expressRouteCircuits/expressRouteCircuitName'
      }
    ]
    workloadServices: {
      ipv4AddressSpaces: [
        '172.253.28.0/22'
      ]
      ipv6AddressSpaces: [
      ]
    }
  }
  tags: {
    keyId: 'KeyValue'
  }
}
```

## microsoft.managednetworkfabric/networkfabrics

NetworkFabrics_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkFabrics@2024-06-15-preview' = {
  name: 'example'
  identity: {
    type: 'None'
    userAssignedIdentities: {
      key872: {
      }
    }
  }
  location: 'eastuseuap'
  properties: {
    annotation: 'annotation'
    controlPlaneAcls: [
      '/subscriptions/xxxxxx/resourceGroups/resourcegroupname/providers/Microsoft.ManagedNetworkFabric/accessControlLists/example-acl'
    ]
    fabricASN: 29249
    fabricVersion: 'version1'
    hardwareAlertThreshold: 74
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
              '65046:10050'
            ]
            exportIpv6RouteTargets: [
              '65046:10050'
            ]
            importIpv4RouteTargets: [
              '65046:10050'
            ]
            importIpv6RouteTargets: [
              '65046:10050'
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
              '65046:10050'
            ]
            exportIpv6RouteTargets: [
              '65046:10050'
            ]
            importIpv4RouteTargets: [
              '65046:10050'
            ]
            importIpv6RouteTargets: [
              '65046:10050'
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
    storageAccountConfiguration: {
      storageAccountId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.Storage/storageAccounts/nfStorage'
      storageAccountIdentity: {
        identityType: 'UserAssignedIdentity'
        userAssignedIdentityResourceId: '/subscriptions/12345678-1234-1234-1234-123456789abc/resourceGroups/myResourceGroup/providers/Microsoft.ManagedIdentity/userAssignedIdentities/my-id'
      }
    }
    storageArrayCount: 1
    terminalServerConfiguration: {
      password: 'xxx-xx-xx'
      primaryIpv4Prefix: '10.0.0.12/30'
      primaryIpv6Prefix: '4FFE:FFFF:0:CD30::a8/127'
      secondaryIpv4Prefix: '40.0.0.14/30'
      secondaryIpv6Prefix: '6FFE:FFFF:0:CD30::ac/127'
      serialNumber: '123456'
      username: 'username'
    }
    trustedIpPrefixes: [
      '/subscriptions/xxxxxx/resourceGroups/resourcegroupname/providers/Microsoft.ManagedNetworkFabric/ipPrefixes/example-prefix'
    ]
    uniqueRdConfiguration: {
      nniDerivedUniqueRdConfigurationState: 'Enabled'
      uniqueRdConfigurationState: 'Enabled'
    }
  }
  tags: {
    keyId: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/networkfabrics/networktonetworkinterconnects

NetworkToNetworkInterconnects_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkFabrics/networkToNetworkInterconnects@2024-06-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    conditionalDefaultRouteConfiguration: {
      ipv4Routes: [
        {
          nextHop: [
            '10.0.0.1'
          ]
          prefix: '10.0.0.1/24'
        }
      ]
      ipv6Routes: [
        {
          nextHop: [
            'fe01::1'
          ]
          prefix: 'fe08:00/64'
        }
      ]
    }
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
    microBfdState: 'Enabled'
    nniType: 'CE'
    npbStaticRouteConfiguration: {
      bfdConfiguration: {
        intervalInMilliSeconds: 300
        multiplier: 10
      }
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
            '10.0.0.1'
          ]
          prefix: 'jffgck'
        }
      ]
    }
    optionBLayer3Configuration: {
      bmpConfiguration: {
        configurationState: 'Enabled'
      }
      peLoopbackIpAddress: [
        '10.0.0.1'
      ]
      peerASN: 61234
      prefixLimits: [
        {
          maximumRoutes: 24
        }
      ]
      primaryIpv4Prefix: '10.0.0.12/30'
      primaryIpv6Prefix: '4FFE:FFFF:0:CD30::a8/127'
      secondaryIpv4Prefix: '40.0.0.14/30'
      secondaryIpv6Prefix: '6FFE:FFFF:0:CD30::ac/127'
      vlanId: 1234
    }
    staticRouteConfiguration: {
      bfdConfiguration: {
        intervalInMilliSeconds: 300
        multiplier: 10
      }
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
    useOptionB: 'True'
  }
}
```

## microsoft.managednetworkfabric/networkmonitors

NetworkMonitors_Create
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkMonitors@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    administrativeState: 'Enabled'
    annotation: 'annotation'
    bmpConfiguration: {
      exportPolicy: 'Pre-Policy'
      monitoredAddressFamilies: [
        'ipv4Unicast'
      ]
      monitoredNetworks: [
        '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/example-l3domain'
      ]
      scopeResourceId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-fabric'
      stationConfigurationState: 'Enabled'
      stationConnectionMode: 'Active'
      stationConnectionProperties: {
        keepaliveIdleTime: 49
        probeCount: 43
        probeInterval: 3558
      }
      stationIp: '10.0.0.1'
      stationName: 'name'
      stationNetwork: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourceGroups/example-rg/providers/Microsoft.ManagedNetworkFabric/l3IsolationDomains/example-l3domain/internalNetworks/example-internalnetwork'
      stationPort: 62695
    }
  }
  tags: {
    key: 'value'
  }
}
```

## microsoft.managednetworkfabric/networkpacketbrokers

NetworkPacketBrokers_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkPacketBrokers@2024-06-15-preview' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    networkFabricId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-networkFabric'
  }
  tags: {
    keyId: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/networkracks

NetworkRacks_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkRacks@2024-06-15-preview' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    annotation: 'annotation'
    networkFabricId: '/subscriptions/1234ABCD-0A1B-1234-5678-123456ABCDEF/resourcegroups/example-rg/providers/Microsoft.ManagedNetworkFabric/networkFabrics/example-networkFabric'
    networkRackType: 'Aggregate'
  }
  tags: {
    keyId: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/networktaprules

NetworkTapRules_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkTapRules@2024-06-15-preview' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    administrativeState: 'Enabled'
    annotation: 'annotation'
    configurationType: 'File'
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
    globalNetworkTapRuleActions: {
      enableCount: 'True'
      truncate: 'truncate-name'
    }
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
                '10.20.20.20/12'
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
        matchConfigurationName: 'config1'
        sequenceNumber: 10
      }
    ]
    pollingIntervalInSeconds: 30
    tapRulesUrl: 'https://microsoft.com/a'
  }
  tags: {
    keyId: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/networktaps

NetworkTaps_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/networkTaps@2024-06-15-preview' = {
  name: 'example'
  location: 'eastuseuap'
  properties: {
    administrativeState: 'Enabled'
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
    keyId: 'keyValue'
  }
}
```

## microsoft.managednetworkfabric/routepolicies

RoutePolicies_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.ManagedNetworkFabric/routePolicies@2024-06-15-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressFamilyType: 'IPv4'
    administrativeState: 'Enabled'
    annotation: 'annotation'
    defaultAction: 'Permit'
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
    keyId: 'keyValue'
  }
}
```
