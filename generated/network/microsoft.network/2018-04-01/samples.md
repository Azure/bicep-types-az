# Microsoft.Network

## microsoft.network/azurefirewalls

Create Azure Firewall
```bicep
resource exampleResource 'Microsoft.Network/azureFirewalls@2018-04-01' = {
  name: 'example'
  properties: {
    applicationRuleCollections: [
      {
        name: 'apprulecoll'
        properties: {
          action: {
            type: 'Deny'
          }
          priority: 110
          rules: [
            {
              name: 'rule1'
              description: 'Deny inbound rule'
              protocols: [
                {
                  port: 443
                  protocolType: 'Https'
                }
              ]
              sourceAddresses: [
                '216.58.216.164'
                '10.0.0.0/24'
              ]
              targetUrls: [
                'www.test.com'
              ]
            }
          ]
        }
      }
    ]
    ipConfigurations: [
      {
        name: 'azureFirewallIpConfiguration'
        properties: {
          internalPublicIpAddress: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName'
          }
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallSubnet'
          }
        }
      }
    ]
    networkRuleCollections: [
      {
        name: 'netrulecoll'
        properties: {
          action: {
            type: 'Deny'
          }
          priority: 112
          rules: [
            {
              name: 'D-NAT-web-traffic'
              description: 'D-NAT all outbound web traffic for inspection'
              destinationAddresses: [
                '*'
              ]
              destinationPorts: [
                '443-444'
                '8443'
              ]
              protocols: [
                'TCP'
                'ICMP'
              ]
              sourceAddresses: [
                '192.168.1.1-192.168.1.12'
                '10.1.4.12-10.1.4.255'
              ]
            }
          ]
        }
      }
    ]
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/applicationgateways

Create Application Gateway
```bicep
resource exampleResource 'Microsoft.Network/applicationGateways@2018-04-01' = {
  name: 'example'
  properties: {
    backendAddressPools: [
      {
        name: 'appgwpool'
        properties: {
          backendAddresses: [
            {
              ipAddress: '10.0.1.1'
            }
            {
              ipAddress: '10.0.1.2'
            }
          ]
        }
      }
    ]
    backendHttpSettingsCollection: [
      {
        name: 'appgwbhs'
        properties: {
          cookieBasedAffinity: 'Disabled'
          port: 80
          requestTimeout: 30
          protocol: 'Http'
        }
      }
    ]
    frontendIPConfigurations: [
      {
        name: 'appgwfip'
        properties: {
          publicIPAddress: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/appgwpip'
          }
        }
      }
    ]
    frontendPorts: [
      {
        name: 'appgwfp'
        properties: {
          port: 443
        }
      }
    ]
    gatewayIPConfigurations: [
      {
        name: 'appgwipc'
        properties: {
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet/subnets/appgwsubnet'
          }
        }
      }
    ]
    httpListeners: [
      {
        name: 'appgwhl'
        properties: {
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/frontendIPConfigurations/appgwfip'
          }
          frontendPort: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/frontendPorts/appgwfp'
          }
          requireServerNameIndication: false
          sslCertificate: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/sslCertificates/sslcert'
          }
          protocol: 'Https'
        }
      }
    ]
    requestRoutingRules: [
      {
        name: 'appgwrule'
        properties: {
          backendAddressPool: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool'
          }
          backendHttpSettings: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/appgwbhs'
          }
          httpListener: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/appgwhl'
          }
          ruleType: 'Basic'
        }
      }
    ]
    sku: {
      name: 'Standard_Medium'
      capacity: 3
      tier: 'Standard'
    }
    sslCertificates: [
      {
        name: 'sslcert'
        properties: {
          data: '****'
          password: '****'
        }
      }
    ]
  }
}
```

## microsoft.network/applicationsecuritygroups

Create application security group
```bicep
resource exampleResource 'Microsoft.Network/applicationSecurityGroups@2018-04-01' = {
  name: 'example'
  location: 'westus'
  properties: {
  }
}
```

## microsoft.network/ddosprotectionplans

Create DDoS protection plan
```bicep
resource exampleResource 'Microsoft.Network/ddosProtectionPlans@2018-04-01' = {
  name: 'example'
  location: 'westus'
  properties: {
  }
}
```

## microsoft.network/expressroutecircuits/authorizations

Create ExpressRouteCircuit Authorization
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits/authorizations@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authorizationKey: 'authKey'
    authorizationUseStatus: 'Available'
  }
}
```

## microsoft.network/expressroutecircuits/peerings

Create ExpressRouteCircuit Peerings
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits/peerings@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    azureASN: 12076
    peerASN: 200
    primaryPeerAddressPrefix: '192.168.16.252/30'
    secondaryPeerAddressPrefix: '192.168.18.252/30'
    vlanId: 200
  }
}
```

## microsoft.network/expressroutecircuits/peerings/connections

ExpressRouteCircuitConnectionCreate
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits/peerings/connections@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/29'
    authorizationKey: '946a1918-b7a2-4917-b43c-8c4cdaee006a'
    expressRouteCircuitPeering: {
      id: '/subscriptions/subid1/resourceGroups/dedharcktinit/providers/Microsoft.Network/expressRouteCircuits/dedharcktlocal/peerings/AzurePrivatePeering'
    }
    peerExpressRouteCircuitPeering: {
      id: '/subscriptions/subid2/resourceGroups/dedharcktpeer/providers/Microsoft.Network/expressRouteCircuits/dedharcktremote/peerings/AzurePrivatePeering'
    }
  }
}
```

## microsoft.network/expressroutecircuits

Create ExpressRouteCircuit
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits@2018-04-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    allowClassicOperations: false
    authorizations: [
    ]
    peerings: [
    ]
    serviceProviderProperties: {
      bandwidthInMbps: 200
      peeringLocation: 'peeringLocation'
      serviceProviderName: 'providerName'
    }
  }
  sku: {
    name: 'Standard_MeteredData'
    family: 'MeteredData'
    tier: 'Standard'
  }
}
```

## microsoft.network/expressroutecrossconnections

UpdateExpressRouteCrossConnection
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCrossConnections@2018-04-01' = {
  name: 'example'
  properties: {
    serviceProviderProvisioningState: 'NotProvisioned'
  }
}
```

## microsoft.network/expressroutecrossconnections/peerings

ExpressRouteCrossConnectionBgpPeeringCreate
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCrossConnections/peerings@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    peerASN: 200
    primaryPeerAddressPrefix: '192.168.16.252/30'
    secondaryPeerAddressPrefix: '192.168.18.252/30'
    vlanId: 200
  }
}
```

## microsoft.network/loadbalancers

Create load balancer
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    backendAddressPools: [
      {
        name: 'be-lb'
        properties: {
        }
      }
    ]
    frontendIPConfigurations: [
      {
        name: 'fe-lb'
        properties: {
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb/subnets/subnetlb'
          }
        }
      }
    ]
    inboundNatPools: [
    ]
    inboundNatRules: [
      {
        name: 'in-nat-rule'
        properties: {
          backendPort: 3389
          enableFloatingIP: true
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
          }
          frontendPort: 3389
          idleTimeoutInMinutes: 15
          protocol: 'Tcp'
        }
      }
    ]
    loadBalancingRules: [
      {
        name: 'rulelb'
        properties: {
          backendAddressPool: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb'
          }
          backendPort: 80
          enableFloatingIP: true
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
          }
          frontendPort: 80
          idleTimeoutInMinutes: 15
          loadDistribution: 'Default'
          probe: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb'
          }
          protocol: 'Tcp'
        }
      }
    ]
    outboundNatRules: [
    ]
    probes: [
      {
        name: 'probe-lb'
        properties: {
          intervalInSeconds: 15
          numberOfProbes: 2
          port: 80
          requestPath: 'healthcheck.aspx'
          protocol: 'Http'
        }
      }
    ]
  }
}
```

Create load balancer with Frontend IP in Zone 1
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    backendAddressPools: [
      {
        name: 'be-lb'
        properties: {
        }
      }
    ]
    frontendIPConfigurations: [
      {
        name: 'fe-lb'
        properties: {
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb/subnets/subnetlb'
          }
        }
        zones: [
          '1'
        ]
      }
    ]
    inboundNatPools: [
    ]
    inboundNatRules: [
      {
        name: 'in-nat-rule'
        properties: {
          backendPort: 3389
          enableFloatingIP: true
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
          }
          frontendPort: 3389
          idleTimeoutInMinutes: 15
          protocol: 'Tcp'
        }
      }
    ]
    loadBalancingRules: [
      {
        name: 'rulelb'
        properties: {
          backendAddressPool: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb'
          }
          backendPort: 80
          enableFloatingIP: true
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
          }
          frontendPort: 80
          idleTimeoutInMinutes: 15
          loadDistribution: 'Default'
          probe: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb'
          }
          protocol: 'Tcp'
        }
      }
    ]
    outboundNatRules: [
    ]
    probes: [
      {
        name: 'probe-lb'
        properties: {
          intervalInSeconds: 15
          numberOfProbes: 2
          port: 80
          requestPath: 'healthcheck.aspx'
          protocol: 'Http'
        }
      }
    ]
  }
}
```

Create load balancer with Standard SKU
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    backendAddressPools: [
      {
        name: 'be-lb'
        properties: {
        }
      }
    ]
    frontendIPConfigurations: [
      {
        name: 'fe-lb'
        properties: {
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb/subnets/subnetlb'
          }
        }
      }
    ]
    inboundNatPools: [
    ]
    inboundNatRules: [
      {
        name: 'in-nat-rule'
        properties: {
          backendPort: 3389
          enableFloatingIP: true
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
          }
          frontendPort: 3389
          idleTimeoutInMinutes: 15
          protocol: 'Tcp'
        }
      }
    ]
    loadBalancingRules: [
      {
        name: 'rulelb'
        properties: {
          backendAddressPool: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb'
          }
          backendPort: 80
          enableFloatingIP: true
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
          }
          frontendPort: 80
          idleTimeoutInMinutes: 15
          loadDistribution: 'Default'
          probe: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb'
          }
          protocol: 'Tcp'
        }
      }
    ]
    outboundNatRules: [
    ]
    probes: [
      {
        name: 'probe-lb'
        properties: {
          intervalInSeconds: 15
          numberOfProbes: 2
          port: 80
          requestPath: 'healthcheck.aspx'
          protocol: 'Http'
        }
      }
    ]
  }
  sku: {
    name: 'Standard'
  }
}
```

Create load balancer with inbound nat pool
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    backendAddressPools: [
    ]
    frontendIPConfigurations: [
      {
        name: 'test'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/test'
        properties: {
          privateIPAllocationMethod: 'Dynamic'
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/lbvnet/subnets/lbsubnet'
            properties: {
              resourceNavigationLinks: [
              ]
              serviceEndpoints: [
              ]
            }
          }
        }
        zones: [
        ]
      }
    ]
    inboundNatPools: [
      {
        name: 'test'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/inboundNatPools/test'
        properties: {
          backendPort: 8888
          enableFloatingIP: true
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/test'
          }
          frontendPortRangeEnd: 8085
          frontendPortRangeStart: 8080
          idleTimeoutInMinutes: 10
          protocol: 'Tcp'
        }
      }
    ]
    inboundNatRules: [
    ]
    loadBalancingRules: [
    ]
    outboundNatRules: [
    ]
    probes: [
    ]
  }
}
```

## microsoft.network/loadbalancers/inboundnatrules

InboundNatRuleCreate
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers/inboundNatRules@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backendPort: 3389
    enableFloatingIP: false
    frontendIPConfiguration: {
      id: '/subscriptions/subid/resourceGroups/testrg/providers/Microsoft.Network/loadBalancers/lb1/frontendIPConfigurations/ip1'
    }
    frontendPort: 3390
    idleTimeoutInMinutes: 4
    protocol: 'Tcp'
  }
}
```

## microsoft.network/networkinterfaces

Create network interface
```bicep
resource exampleResource 'Microsoft.Network/networkInterfaces@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    enableAcceleratedNetworking: true
    ipConfigurations: [
      {
        name: 'ipconfig1'
        properties: {
          publicIPAddress: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/test-ip'
          }
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/rg1-vnet/subnets/default'
          }
        }
      }
    ]
  }
}
```

## microsoft.network/networksecuritygroups

Create network security group
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2018-04-01' = {
  name: 'example'
  location: 'eastus'
}
```

Create network security group with rule
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    securityRules: [
      {
        name: 'rule1'
        properties: {
          access: 'Allow'
          destinationAddressPrefix: '*'
          destinationPortRange: '80'
          direction: 'Inbound'
          priority: 130
          sourceAddressPrefix: '*'
          sourcePortRange: '*'
          protocol: '*'
        }
      }
    ]
  }
}
```

## microsoft.network/networksecuritygroups/securityrules

Create security rule
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityGroups/securityRules@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    access: 'Deny'
    destinationAddressPrefix: '11.0.0.0/8'
    destinationPortRange: '8080'
    direction: 'Outbound'
    priority: 100
    sourceAddressPrefix: '10.0.0.0/8'
    sourcePortRange: '*'
    protocol: '*'
  }
}
```

## microsoft.network/networkwatchers

Create network watcher
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

## microsoft.network/networkwatchers/packetcaptures

Create packet capture
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/packetCaptures@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    bytesToCapturePerPacket: 10000
    filters: [
      {
        localIPAddress: '10.0.0.4'
        localPort: '80'
        protocol: 'TCP'
      }
    ]
    storageLocation: {
      filePath: 'D:\\capture\\pc1.cap'
      storageId: '/subscriptions/subid/resourceGroups/rg2/providers/Microsoft.Storage/storageAccounts/pcstore'
      storagePath: 'https://mytestaccountname.blob.core.windows.net/capture/pc1.cap'
    }
    target: '/subscriptions/subid/resourceGroups/rg2/providers/Microsoft.Compute/virtualMachines/vm1'
    timeLimitInSeconds: 100
    totalBytesPerSession: 100000
  }
}
```

## microsoft.network/networkwatchers/connectionmonitors

Create connection monitor
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/connectionMonitors@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      address: 'bing.com'
      port: 80
    }
    monitoringIntervalInSeconds: 60
    source: {
      resourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1'
    }
  }
}
```

## microsoft.network/publicipaddresses

Create public IP address DNS
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    dnsSettings: {
      domainNameLabel: 'dnslbl'
    }
  }
}
```

Create public IP address allocation method
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    idleTimeoutInMinutes: 10
    publicIPAddressVersion: 'IPv4'
    publicIPAllocationMethod: 'Static'
  }
  sku: {
    name: 'Standard'
  }
}
```

Create public IP address defaults
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2018-04-01' = {
  name: 'example'
  location: 'eastus'
}
```

## microsoft.network/routefilters

RouteFilterCreate
```bicep
resource exampleResource 'Microsoft.Network/routeFilters@2018-04-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    peerings: [
    ]
    rules: [
      {
        name: 'ruleName'
        properties: {
          access: 'Allow'
          communities: [
            '12076:5030'
            '12076:5040'
          ]
          routeFilterRuleType: 'Community'
        }
      }
    ]
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/routefilters/routefilterrules

RouteFilterRuleCreate
```bicep
resource exampleResource 'Microsoft.Network/routeFilters/routeFilterRules@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    access: 'Allow'
    communities: [
      '12076:5030'
      '12076:5040'
    ]
    routeFilterRuleType: 'Community'
  }
}
```

## microsoft.network/routetables

Create route table
```bicep
resource exampleResource 'Microsoft.Network/routeTables@2018-04-01' = {
  name: 'example'
  location: 'westus'
}
```

Create route table with route
```bicep
resource exampleResource 'Microsoft.Network/routeTables@2018-04-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    disableBgpRoutePropagation: true
    routes: [
      {
        name: 'route1'
        properties: {
          addressPrefix: '10.0.3.0/24'
          nextHopType: 'VirtualNetworkGateway'
        }
      }
    ]
  }
}
```

## microsoft.network/routetables/routes

Create route
```bicep
resource exampleResource 'Microsoft.Network/routeTables/routes@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.3.0/24'
    nextHopType: 'VirtualNetworkGateway'
  }
}
```

## microsoft.network/virtualnetworks

Create virtual network
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
  }
}
```

Create virtual network with service endpoints
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
    subnets: [
      {
        name: 'test-1'
        properties: {
          addressPrefix: '10.0.0.0/16'
          serviceEndpoints: [
            {
              service: 'Microsoft.Storage'
            }
          ]
        }
      }
    ]
  }
}
```

Create virtual network with subnet
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2018-04-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
    subnets: [
      {
        name: 'test-1'
        properties: {
          addressPrefix: '10.0.0.0/24'
        }
      }
    ]
  }
}
```

## microsoft.network/virtualnetworks/subnets

Create subnet
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
  }
}
```

Create subnet with service endpoints
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2018-04-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
    serviceEndpoints: [
      {
        service: 'Microsoft.Storage'
      }
    ]
  }
}
```

## microsoft.network/virtualnetworkgateways

UpdateVirtualNetworkGateway
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworkGateways@2018-04-01' = {
  name: 'example'
  location: 'centralus'
  properties: {
    activeActive: false
    bgpSettings: {
      asn: 65515
      bgpPeeringAddress: '10.0.1.30'
      peerWeight: 0
    }
    enableBgp: false
    gatewayType: 'Vpn'
    ipConfigurations: [
      {
        name: 'gwipconfig1'
        properties: {
          privateIPAllocationMethod: 'Dynamic'
          publicIPAddress: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/gwpip'
          }
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/GatewaySubnet'
          }
        }
      }
    ]
    sku: {
      name: 'VpnGw1'
      tier: 'VpnGw1'
    }
    vpnType: 'RouteBased'
  }
}
```

## microsoft.network/connections

CreateVirtualNetworkGatewayConnection_S2S
```bicep
resource exampleResource 'Microsoft.Network/connections@2018-04-01' = {
  name: 'example'
  location: 'centralus'
  properties: {
    connectionType: 'IPsec'
    enableBgp: false
    ipsecPolicies: [
    ]
    localNetworkGateway2: {
      etag: 'W/"00000000-0000-0000-0000-000000000000"'
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/localNetworkGateways/localgw'
      location: 'centralus'
      properties: {
        gatewayIpAddress: 'x.x.x.x'
        localNetworkAddressSpace: {
          addressPrefixes: [
            '10.1.0.0/16'
          ]
        }
        resourceGuid: '00000000-0000-0000-0000-000000000000'
      }
      tags: {
      }
    }
    routingWeight: 0
    sharedKey: 'Abc123'
    usePolicyBasedTrafficSelectors: false
    virtualNetworkGateway1: {
      etag: 'W/"00000000-0000-0000-0000-000000000000"'
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw'
      location: 'centralus'
      properties: {
        activeActive: false
        bgpSettings: {
          asn: 65514
          bgpPeeringAddress: '10.0.1.30'
          peerWeight: 0
        }
        enableBgp: false
        gatewayType: 'Vpn'
        ipConfigurations: [
          {
            name: 'gwipconfig1'
            etag: 'W/"00000000-0000-0000-0000-000000000000"'
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/ipConfigurations/gwipconfig1'
            properties: {
              privateIPAllocationMethod: 'Dynamic'
              publicIPAddress: {
                id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/gwpip'
              }
              subnet: {
                id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/GatewaySubnet'
              }
            }
          }
        ]
        resourceGuid: '00000000-0000-0000-0000-000000000000'
        sku: {
          name: 'VpnGw1'
          capacity: 2
          tier: 'VpnGw1'
        }
        vpnType: 'RouteBased'
      }
      tags: {
      }
    }
  }
}
```

## microsoft.network/localnetworkgateways

CreateLocalNetworkGateway
```bicep
resource exampleResource 'Microsoft.Network/localNetworkGateways@2018-04-01' = {
  name: 'example'
  location: 'Central US'
  properties: {
    gatewayIpAddress: 'x.x.x.x'
    localNetworkAddressSpace: {
      addressPrefixes: [
        '10.1.0.0/16'
      ]
    }
  }
}
```

## microsoft.network/virtualwans

VirtualWANCreate
```bicep
resource exampleResource 'Microsoft.Network/virtualWans@2018-04-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    disableVpnEncryption: false
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/virtualhubs

VirtualHubPut
```bicep
resource exampleResource 'Microsoft.Network/virtualHubs@2018-04-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    addressPrefix: '10.168.0.0/24'
    virtualWan: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualWans/virtualWan1'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/vpngateways

VpnGatewayPut
```bicep
resource exampleResource 'Microsoft.Network/vpnGateways@2018-04-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    bgpSettings: {
      asn: 65515
      bgpPeeringAddress: '10.0.1.30'
      peerWeight: 0
    }
    connections: [
      {
        name: 'vpnConnection1'
        properties: {
          remoteVpnSite: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnSites/vpnSite1'
          }
          sharedKey: 'key'
        }
      }
    ]
    policies: {
      allowBranchToBranchTraffic: true
      allowVnetToVnetTraffic: false
    }
    virtualHub: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```
