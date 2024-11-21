# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/applicationgateways

Create Application Gateway
```bicep
resource exampleResource 'Microsoft.Network/applicationGateways@2019-08-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1: {
      }
    }
  }
  location: 'eastus'
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
      {
        name: 'appgwfp80'
        properties: {
          port: 80
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
      {
        name: 'appgwhttplistener'
        properties: {
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/frontendIPConfigurations/appgwfip'
          }
          frontendPort: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/frontendPorts/appgwfp80'
          }
          protocol: 'Http'
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
          priority: 10
          rewriteRuleSet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/rewriteRuleSets/rewriteRuleSet1'
          }
          ruleType: 'Basic'
        }
      }
      {
        name: 'appgwPathBasedRule'
        properties: {
          httpListener: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/httpListeners/appgwhttplistener'
          }
          priority: 20
          ruleType: 'PathBasedRouting'
          urlPathMap: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/urlPathMaps/pathMap1'
          }
        }
      }
    ]
    rewriteRuleSets: [
      {
        name: 'rewriteRuleSet1'
        properties: {
          rewriteRules: [
            {
              name: 'Set X-Forwarded-For'
              actionSet: {
                requestHeaderConfigurations: [
                  {
                    headerName: 'X-Forwarded-For'
                    headerValue: '{var_add_x_forwarded_for_proxy}'
                  }
                ]
                responseHeaderConfigurations: [
                  {
                    headerName: 'Strict-Transport-Security'
                    headerValue: 'max-age=31536000'
                  }
                ]
              }
              conditions: [
                {
                  ignoreCase: true
                  negate: false
                  pattern: '^Bearer'
                  variable: 'http_req_Authorization'
                }
              ]
              ruleSequence: 102
            }
          ]
        }
      }
    ]
    sku: {
      name: 'Standard_v2'
      capacity: 3
      tier: 'Standard_v2'
    }
    sslCertificates: [
      {
        name: 'sslcert'
        properties: {
          data: '****'
          password: '****'
        }
      }
      {
        name: 'sslcert2'
        properties: {
          keyVaultSecretId: 'https://kv/secret'
        }
      }
    ]
    trustedRootCertificates: [
      {
        name: 'rootcert'
        properties: {
          data: '****'
        }
      }
      {
        name: 'rootcert1'
        properties: {
          keyVaultSecretId: 'https://kv/secret'
        }
      }
    ]
    urlPathMaps: [
      {
        name: 'pathMap1'
        properties: {
          defaultBackendAddressPool: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool'
          }
          defaultBackendHttpSettings: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/appgwbhs'
          }
          defaultRewriteRuleSet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/rewriteRuleSets/rewriteRuleSet1'
          }
          pathRules: [
            {
              name: 'apiPaths'
              properties: {
                backendAddressPool: {
                  id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool'
                }
                backendHttpSettings: {
                  id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendHttpSettingsCollection/appgwbhs'
                }
                paths: [
                  '/api'
                  '/v1/api'
                ]
                rewriteRuleSet: {
                  id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/rewriteRuleSets/rewriteRuleSet1'
                }
              }
            }
          ]
        }
      }
    ]
  }
}
```

## microsoft.network/applicationgatewaywebapplicationfirewallpolicies

Creates or updates a WAF policy within a resource group
```bicep
resource exampleResource 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2019-08-01' = {
  name: 'example'
  location: 'WestUs'
  properties: {
    customRules: [
      {
        name: 'Rule1'
        action: 'Block'
        matchConditions: [
          {
            matchValues: [
              '192.168.1.0/24'
              '10.0.0.0/24'
            ]
            matchVariables: [
              {
                selector: {
                }
                variableName: 'RemoteAddr'
              }
            ]
            operator: 'IPMatch'
          }
        ]
        priority: 1
        ruleType: 'MatchRule'
      }
      {
        name: 'Rule2'
        action: 'Block'
        matchConditions: [
          {
            matchValues: [
              '192.168.1.0/24'
            ]
            matchVariables: [
              {
                selector: {
                }
                variableName: 'RemoteAddr'
              }
            ]
            operator: 'IPMatch'
          }
          {
            matchValues: [
              'Windows'
            ]
            matchVariables: [
              {
                selector: 'UserAgent'
                variableName: 'RequestHeaders'
              }
            ]
            operator: 'Contains'
          }
        ]
        priority: 2
        ruleType: 'MatchRule'
      }
    ]
    managedRules: {
      managedRuleSets: [
        {
          ruleSetType: 'OWASP'
          ruleSetVersion: '3.0'
        }
      ]
    }
  }
}
```

## microsoft.network/applicationsecuritygroups

Create application security group
```bicep
resource exampleResource 'Microsoft.Network/applicationSecurityGroups@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
  }
}
```

## microsoft.network/azurefirewalls

Create Azure Firewall
```bicep
resource exampleResource 'Microsoft.Network/azureFirewalls@2019-08-01' = {
  name: 'example'
  location: 'West US'
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
              targetFqdns: [
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
          publicIPAddress: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName'
          }
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallSubnet'
          }
        }
      }
    ]
    natRuleCollections: [
      {
        name: 'natrulecoll'
        properties: {
          action: {
            type: 'Dnat'
          }
          priority: 112
          rules: [
            {
              name: 'DNAT-HTTPS-traffic'
              description: 'D-NAT all outbound web traffic for inspection'
              destinationAddresses: [
                '1.2.3.4'
              ]
              destinationPorts: [
                '443'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '*'
              ]
              translatedAddress: '1.2.3.5'
              translatedPort: '8443'
            }
          ]
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
              name: 'L4-traffic'
              description: 'Block traffic based on source IPs and ports'
              destinationAddresses: [
                '*'
              ]
              destinationPorts: [
                '443-444'
                '8443'
              ]
              protocols: [
                'TCP'
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
    sku: {
      name: 'AZFW_VNet'
      tier: 'Standard'
    }
    threatIntelMode: 'Alert'
  }
  tags: {
    key1: 'value1'
  }
  zones: [
  ]
}
```

Create Azure Firewall in virtual Hub
```bicep
resource exampleResource 'Microsoft.Network/azureFirewalls@2019-08-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    firewallPolicy: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/firewallPolicies/policy1'
    }
    sku: {
      name: 'AZFW_Hub'
      tier: 'Standard'
    }
    threatIntelMode: 'Alert'
    virtualHub: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1'
    }
  }
  tags: {
    key1: 'value1'
  }
  zones: [
  ]
}
```

Create Azure Firewall With Zones
```bicep
resource exampleResource 'Microsoft.Network/azureFirewalls@2019-08-01' = {
  name: 'example'
  location: 'West US 2'
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
              targetFqdns: [
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
          publicIPAddress: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName'
          }
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallSubnet'
          }
        }
      }
    ]
    natRuleCollections: [
      {
        name: 'natrulecoll'
        properties: {
          action: {
            type: 'Dnat'
          }
          priority: 112
          rules: [
            {
              name: 'DNAT-HTTPS-traffic'
              description: 'D-NAT all outbound web traffic for inspection'
              destinationAddresses: [
                '1.2.3.4'
              ]
              destinationPorts: [
                '443'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '*'
              ]
              translatedAddress: '1.2.3.5'
              translatedPort: '8443'
            }
          ]
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
              name: 'L4-traffic'
              description: 'Block traffic based on source IPs and ports'
              destinationAddresses: [
                '*'
              ]
              destinationPorts: [
                '443-444'
                '8443'
              ]
              protocols: [
                'TCP'
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
    sku: {
      name: 'AZFW_VNet'
      tier: 'Standard'
    }
    threatIntelMode: 'Alert'
  }
  tags: {
    key1: 'value1'
  }
  zones: [
    '1'
    '2'
    '3'
  ]
}
```

## microsoft.network/bastionhosts

Create Bastion Host
```bicep
resource exampleResource 'Microsoft.Network/bastionHosts@2019-08-01' = {
  name: 'example'
  properties: {
    ipConfigurations: [
      {
        name: 'bastionHostIpConfiguration'
        properties: {
          publicIPAddress: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pipName'
          }
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/BastionHostSubnet'
          }
        }
      }
    ]
  }
}
```

## microsoft.network/connections

CreateVirtualNetworkGatewayConnection_S2S
```bicep
resource exampleResource 'Microsoft.Network/connections@2019-08-01' = {
  name: 'example'
  location: 'centralus'
  properties: {
    connectionProtocol: 'IKEv2'
    connectionType: 'IPsec'
    enableBgp: false
    ipsecPolicies: [
    ]
    localNetworkGateway2: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/localNetworkGateways/localgw'
      location: 'centralus'
      properties: {
        gatewayIpAddress: 'x.x.x.x'
        localNetworkAddressSpace: {
          addressPrefixes: [
            '10.1.0.0/16'
          ]
        }
      }
      tags: {
      }
    }
    routingWeight: 0
    sharedKey: 'Abc123'
    trafficSelectorPolicies: [
    ]
    usePolicyBasedTrafficSelectors: false
    virtualNetworkGateway1: {
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

## microsoft.network/ddoscustompolicies

Create DDoS custom policy
```bicep
resource exampleResource 'Microsoft.Network/ddosCustomPolicies@2019-08-01' = {
  name: 'example'
  location: 'centraluseuap'
  properties: {
    protocolCustomSettings: [
      {
        protocol: 'Tcp'
      }
    ]
  }
}
```

## microsoft.network/ddosprotectionplans

Create DDoS protection plan
```bicep
resource exampleResource 'Microsoft.Network/ddosProtectionPlans@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
  }
}
```

## microsoft.network/expressroutecircuits

Create ExpressRouteCircuit
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits@2019-08-01' = {
  name: 'example'
  location: 'Brazil South'
  properties: {
    allowClassicOperations: false
    authorizations: [
    ]
    peerings: [
    ]
    serviceProviderProperties: {
      bandwidthInMbps: 200
      peeringLocation: 'Silicon Valley'
      serviceProviderName: 'Equinix'
    }
  }
  sku: {
    name: 'Standard_MeteredData'
    family: 'MeteredData'
    tier: 'Standard'
  }
}
```

Create ExpressRouteCircuit on ExpressRoutePort
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    bandwidthInGbps: 10
    expressRoutePort: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/expressRoutePorts/portName'
    }
  }
  sku: {
    name: 'Premium_MeteredData'
    family: 'MeteredData'
    tier: 'Premium'
  }
}
```

## microsoft.network/expressroutecircuits/authorizations

Create ExpressRouteCircuit Authorization
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits/authorizations@2019-08-01' = {
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
resource exampleResource 'Microsoft.Network/expressRouteCircuits/peerings@2019-08-01' = {
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
resource exampleResource 'Microsoft.Network/expressRouteCircuits/peerings/connections@2019-08-01' = {
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

## microsoft.network/expressroutecrossconnections

UpdateExpressRouteCrossConnection
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCrossConnections@2019-08-01' = {
  name: 'example'
  properties: {
    serviceProviderProvisioningState: 'NotProvisioned'
  }
}
```

## microsoft.network/expressroutecrossconnections/peerings

ExpressRouteCrossConnectionBgpPeeringCreate
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCrossConnections/peerings@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ipv6PeeringConfig: {
      primaryPeerAddressPrefix: '3FFE:FFFF:0:CD30::/126'
      secondaryPeerAddressPrefix: '3FFE:FFFF:0:CD30::4/126'
    }
    peerASN: 200
    primaryPeerAddressPrefix: '192.168.16.252/30'
    secondaryPeerAddressPrefix: '192.168.18.252/30'
    vlanId: 200
  }
}
```

## microsoft.network/expressroutegateways

ExpressRouteGatewayCreate
```bicep
resource exampleResource 'Microsoft.Network/expressRouteGateways@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    autoScaleConfiguration: {
      bounds: {
        min: 3
      }
    }
    virtualHub: {
      id: '/subscriptions/subid/resourceGroups/resourceGroupId/providers/Microsoft.Network/virtualHubs/virtualHubName'
    }
  }
}
```

## microsoft.network/expressroutegateways/expressrouteconnections

ExpressRouteConnectionCreate
```bicep
resource exampleResource 'Microsoft.Network/expressRouteGateways/expressRouteConnections@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  name: 'connectionName'
  id: '/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/expressRouteGateways/gateway-2/expressRouteConnections/connectionName'
  properties: {
    authorizationKey: 'authorizationKey'
    expressRouteCircuitPeering: {
      id: '/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/expressRouteCircuits/circuitName/peerings/AzurePrivatePeering'
    }
    routingWeight: 2
  }
}
```

## microsoft.network/expressrouteports

ExpressRoutePortCreate
```bicep
resource exampleResource 'Microsoft.Network/ExpressRoutePorts@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    bandwidthInGbps: 100
    encapsulation: 'QinQ'
    peeringLocation: 'peeringLocationName'
  }
}
```

ExpressRoutePortUpdateLink
```bicep
resource exampleResource 'Microsoft.Network/ExpressRoutePorts@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    bandwidthInGbps: 100
    encapsulation: 'QinQ'
    links: [
      {
        name: 'link1'
        properties: {
          adminState: 'Enabled'
        }
      }
    ]
    peeringLocation: 'peeringLocationName'
  }
}
```

## microsoft.network/firewallpolicies

Create FirewallPolicy
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies@2019-08-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    threatIntelMode: 'Alert'
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/firewallpolicies/rulegroups

Create FirewallPolicyRuleGroup
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies/ruleGroups@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    priority: 110
    rules: [
      {
        name: 'Example-Filter-Rule'
        action: {
          type: 'Deny'
        }
        ruleConditions: [
          {
            name: 'network-condition1'
            destinationAddresses: [
              '*'
            ]
            destinationPorts: [
              '*'
            ]
            ipProtocols: [
              'TCP'
            ]
            ruleConditionType: 'NetworkRuleCondition'
            sourceAddresses: [
              '10.1.25.0/24'
            ]
          }
        ]
        ruleType: 'FirewallPolicyFilterRule'
      }
    ]
  }
}
```

## microsoft.network/loadbalancers

Create load balancer
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2019-08-01' = {
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
          enableTcpReset: false
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
          enableTcpReset: false
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
resource exampleResource 'Microsoft.Network/loadBalancers@2019-08-01' = {
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
    outboundRules: [
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
resource exampleResource 'Microsoft.Network/loadBalancers@2019-08-01' = {
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
          enableTcpReset: true
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
    outboundRules: [
    ]
    probes: [
    ]
  }
  sku: {
    name: 'Standard'
  }
}
```

Create load balancer with outbound rules
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2019-08-01' = {
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
          publicIPAddress: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/pip'
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
          disableOutboundSnat: true
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
    outboundRules: [
      {
        name: 'rule1'
        properties: {
          backendAddressPool: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb'
          }
          frontendIPConfigurations: [
            {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
            }
          ]
          protocol: 'All'
        }
      }
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

Create load balancer with Standard SKU
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2019-08-01' = {
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
    outboundRules: [
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

## microsoft.network/loadbalancers/inboundnatrules

InboundNatRuleCreate
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers/inboundNatRules@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backendPort: 3389
    enableFloatingIP: false
    enableTcpReset: false
    frontendIPConfiguration: {
      id: '/subscriptions/subid/resourceGroups/testrg/providers/Microsoft.Network/loadBalancers/lb1/frontendIPConfigurations/ip1'
    }
    frontendPort: 3390
    idleTimeoutInMinutes: 4
    protocol: 'Tcp'
  }
}
```

## microsoft.network/localnetworkgateways

CreateLocalNetworkGateway
```bicep
resource exampleResource 'Microsoft.Network/localNetworkGateways@2019-08-01' = {
  name: 'example'
  location: 'Central US'
  properties: {
    gatewayIpAddress: '11.12.13.14'
    localNetworkAddressSpace: {
      addressPrefixes: [
        '10.1.0.0/16'
      ]
    }
  }
}
```

## microsoft.network/natgateways

Create nat gateway
```bicep
resource exampleResource 'Microsoft.Network/natGateways@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    publicIpAddresses: [
      {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/PublicIpAddress1'
      }
    ]
    publicIpPrefixes: [
      {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPPrefixes/PublicIpPrefix1'
      }
    ]
  }
  sku: {
    name: 'Standard'
  }
}
```

## microsoft.network/networkinterfaces

Create network interface
```bicep
resource exampleResource 'Microsoft.Network/networkInterfaces@2019-08-01' = {
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

## microsoft.network/networkinterfaces/tapconfigurations

Create Network Interface Tap Configurations
```bicep
resource exampleResource 'Microsoft.Network/networkInterfaces/tapConfigurations@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    virtualNetworkTap: {
      id: '/subscriptions/subid/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworkTaps/testvtap'
    }
  }
}
```

## microsoft.network/networkprofiles

Create network profile defaults
```bicep
resource exampleResource 'Microsoft.Network/networkProfiles@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    containerNetworkInterfaceConfigurations: [
      {
        name: 'eth1'
        properties: {
          ipConfigurations: [
            {
              name: 'ipconfig1'
              properties: {
                subnet: {
                  id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/networkProfileVnet/subnets/networkProfileSubnet1'
                }
              }
            }
          ]
        }
      }
    ]
  }
}
```

## microsoft.network/networksecuritygroups

Create network security group
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2019-08-01' = {
  name: 'example'
  location: 'eastus'
}
```

Create network security group with rule
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2019-08-01' = {
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
resource exampleResource 'Microsoft.Network/networkSecurityGroups/securityRules@2019-08-01' = {
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
resource exampleResource 'Microsoft.Network/networkWatchers@2019-08-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

## microsoft.network/networkwatchers/connectionmonitors

Create connection monitor
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/connectionMonitors@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
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

## microsoft.network/networkwatchers/packetcaptures

Create packet capture
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/packetCaptures@2019-08-01' = {
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

## microsoft.network/p2svpngateways

P2SVpnGatewayPut
```bicep
resource exampleResource 'Microsoft.Network/p2svpnGateways@2019-08-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    p2SConnectionConfigurations: [
      {
        name: 'P2SConnectionConfig1'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/p2sVpnGateways/p2sVpnGateway1/p2sConnectionConfigurations/P2SConnectionConfig1'
        properties: {
          vpnClientAddressPool: {
            addressPrefixes: [
              '101.3.0.0/16'
            ]
          }
        }
      }
    ]
    virtualHub: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1'
    }
    vpnGatewayScaleUnit: 1
    vpnServerConfiguration: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnServerConfigurations/vpnServerConfiguration1'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/privateendpoints

Create private endpoint
```bicep
resource exampleResource 'Microsoft.Network/privateEndpoints@2019-08-01' = {
  name: 'example'
  location: 'eastus2euap'
  properties: {
    privateLinkServiceConnections: [
      {
        name: 'testPlc'
        properties: {
          groupIds: [
            'groupIdFromResource'
          ]
          privateLinkServiceId: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/privateLinkServices/testPls'
          requestMessage: 'Please approve my connection.'
        }
      }
    ]
    subnet: {
      id: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet'
    }
  }
}
```

Create private endpoint with manual approval connection
```bicep
resource exampleResource 'Microsoft.Network/privateEndpoints@2019-08-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    manualPrivateLinkServiceConnections: [
      {
        properties: {
          groupIds: [
            'groupIdFromResource'
          ]
          privateLinkServiceId: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/privateLinkServices/testPls'
          requestMessage: 'Please manually approve my connection.'
        }
      }
    ]
    subnet: {
      id: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet'
    }
  }
}
```

## microsoft.network/privatelinkservices

Create private link service
```bicep
resource exampleResource 'Microsoft.Network/privateLinkServices@2019-08-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    autoApproval: {
      subscriptions: [
        'subscription1'
        'subscription2'
      ]
    }
    fqdns: [
      'fqdn1'
      'fqdn2'
      'fqdn3'
    ]
    ipConfigurations: [
      {
        name: 'fe-lb'
        properties: {
          privateIPAddress: '10.0.1.4'
          privateIPAddressVersion: 'IPv4'
          privateIPAllocationMethod: 'Static'
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb/subnets/subnetlb'
          }
        }
      }
    ]
    loadBalancerFrontendIpConfigurations: [
      {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
      }
    ]
    visibility: {
      subscriptions: [
        'subscription1'
        'subscription2'
        'subscription3'
      ]
    }
  }
}
```

## microsoft.network/privatelinkservices/privateendpointconnections

approve or reject private end point connection for a private link service
```bicep
resource exampleResource 'Microsoft.Network/privateLinkServices/privateEndpointConnections@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  name: 'testPlePeConnection'
  properties: {
    privateEndpoint: {
      id: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/privateEndpoints/testPe'
    }
    privateLinkServiceConnectionState: {
      description: 'approved it for some reason.'
      status: 'Approved'
    }
  }
}
```

## microsoft.network/publicipaddresses

Create public IP address allocation method
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2019-08-01' = {
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
resource exampleResource 'Microsoft.Network/publicIPAddresses@2019-08-01' = {
  name: 'example'
  location: 'eastus'
}
```

Create public IP address DNS
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2019-08-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    dnsSettings: {
      domainNameLabel: 'dnslbl'
    }
  }
}
```

## microsoft.network/publicipprefixes

Create public IP prefix allocation method
```bicep
resource exampleResource 'Microsoft.Network/publicIPPrefixes@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    prefixLength: 30
    publicIPAddressVersion: 'IPv4'
  }
  sku: {
    name: 'Standard'
  }
}
```

Create public IP prefix defaults
```bicep
resource exampleResource 'Microsoft.Network/publicIPPrefixes@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    prefixLength: 30
  }
  sku: {
    name: 'Standard'
  }
}
```

## microsoft.network/routefilters

RouteFilterCreate
```bicep
resource exampleResource 'Microsoft.Network/routeFilters@2019-08-01' = {
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
resource exampleResource 'Microsoft.Network/routeFilters/routeFilterRules@2019-08-01' = {
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
resource exampleResource 'Microsoft.Network/routeTables@2019-08-01' = {
  name: 'example'
  location: 'westus'
}
```

Create route table with route
```bicep
resource exampleResource 'Microsoft.Network/routeTables@2019-08-01' = {
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
resource exampleResource 'Microsoft.Network/routeTables/routes@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.3.0/24'
    nextHopType: 'VirtualNetworkGateway'
  }
}
```

## microsoft.network/serviceendpointpolicies

Create service endpoint policy
```bicep
resource exampleResource 'Microsoft.Network/serviceEndpointPolicies@2019-08-01' = {
  name: 'example'
  location: 'westus'
}
```

Create service endpoint policy with definition
```bicep
resource exampleResource 'Microsoft.Network/serviceEndpointPolicies@2019-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    serviceEndpointPolicyDefinitions: [
      {
        name: 'StorageServiceEndpointPolicyDefinition'
        properties: {
          description: 'Storage Service EndpointPolicy Definition'
          service: 'Microsoft.Storage'
          serviceResources: [
            '/subscriptions/subid1'
            '/subscriptions/subid1/resourceGroups/storageRg'
            '/subscriptions/subid1/resourceGroups/storageRg/providers/Microsoft.Storage/storageAccounts/stAccount'
          ]
        }
      }
    ]
  }
}
```

## microsoft.network/virtualhubs

VirtualHubPut
```bicep
resource exampleResource 'Microsoft.Network/virtualHubs@2019-08-01' = {
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

## microsoft.network/virtualnetworkgateways

UpdateVirtualNetworkGateway
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworkGateways@2019-08-01' = {
  name: 'example'
  location: 'centralus'
  properties: {
    activeActive: false
    bgpSettings: {
      asn: 65515
      bgpPeeringAddress: '10.0.1.30'
      peerWeight: 0
    }
    customRoutes: {
      addressPrefixes: [
        '101.168.0.6/32'
      ]
    }
    enableBgp: false
    enableDnsForwarding: true
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

## microsoft.network/virtualnetworks

Create virtual network
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2019-08-01' = {
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

Create virtual network with Bgp Communities
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2019-08-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
    bgpCommunities: {
      virtualNetworkCommunity: '12076:60000'
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

Create virtual network with delegated subnets
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2019-08-01' = {
  name: 'example'
  location: 'westcentralus'
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
          delegations: [
            {
              name: 'myDelegation'
              properties: {
                serviceName: 'Microsoft.Sql/managedInstances'
              }
            }
          ]
        }
      }
    ]
  }
}
```

Create virtual network with service endpoints
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2019-08-01' = {
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

Create virtual network with service endpoints and service endpoint policy
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2019-08-01' = {
  name: 'example'
  location: 'eastus2euap'
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
          serviceEndpointPolicies: [
            {
              id: '/subscriptions/subid/resourceGroups/vnetTest/providers/Microsoft.Network/serviceEndpointPolicies/ServiceEndpointPolicy1'
            }
          ]
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
resource exampleResource 'Microsoft.Network/virtualNetworks@2019-08-01' = {
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

Create virtual network with subnet containing address prefixes
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2019-08-01' = {
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
        name: 'test-2'
        properties: {
          addressPrefixes: [
            '10.0.0.0/28'
            '10.0.1.0/28'
          ]
        }
      }
    ]
  }
}
```

## microsoft.network/virtualnetworks/subnets

Create subnet
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
  }
}
```

Create subnet with a delegation
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
  }
}
```

Create subnet with service endpoints
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2019-08-01' = {
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

## microsoft.network/virtualnetworktaps

Create Virtual Network Tap
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworkTaps@2019-08-01' = {
  name: 'example'
  location: 'centraluseuap'
  properties: {
    destinationNetworkInterfaceIPConfiguration: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/networkInterfaces/testNetworkInterface/ipConfigurations/ipconfig1'
    }
  }
}
```

## microsoft.network/virtualrouters

Create VirtualRouter
```bicep
resource exampleResource 'Microsoft.Network/virtualRouters@2019-08-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    hostedGateway: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vnetGateway'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/virtualrouters/peerings

Create Virtual Router Peering
```bicep
resource exampleResource 'Microsoft.Network/virtualRouters/peerings@2019-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    peerAsn: 20000
    peerIp: '192.168.1.5'
  }
}
```

## microsoft.network/virtualwans

VirtualWANCreate
```bicep
resource exampleResource 'Microsoft.Network/virtualWans@2019-08-01' = {
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

## microsoft.network/vpngateways

VpnGatewayPut
```bicep
resource exampleResource 'Microsoft.Network/vpnGateways@2019-08-01' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    bgpSettings: {
      asn: 65515
      peerWeight: 0
    }
    connections: [
      {
        name: 'vpnConnection1'
        properties: {
          remoteVpnSite: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnSites/vpnSite1'
          }
          vpnLinkConnections: [
            {
              name: 'Connection-Link1'
              properties: {
                connectionBandwidth: 200
                sharedKey: 'key'
                vpnConnectionProtocolType: 'IKEv2'
                vpnSiteLink: {
                  id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnSites/vpnSite1/vpnSiteLinks/siteLink1'
                }
              }
            }
          ]
        }
      }
    ]
    virtualHub: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```
