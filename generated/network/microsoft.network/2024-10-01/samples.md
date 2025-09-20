# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/applicationgateways

Create Application Gateway
```bicep
resource exampleResource 'Microsoft.Network/applicationGateways@2024-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
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
      {
        name: 'appgwpool1'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/backendAddressPools/appgwpool1'
        properties: {
          backendAddresses: [
            {
              ipAddress: '10.0.0.1'
            }
            {
              ipAddress: '10.0.0.2'
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
    globalConfiguration: {
      enableRequestBuffering: true
      enableResponseBuffering: true
    }
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
          sslProfile: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/sslProfiles/sslProfile1'
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
                urlConfiguration: {
                  modifiedPath: '/abc'
                }
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
    sslProfiles: [
      {
        name: 'sslProfile1'
        properties: {
          clientAuthConfiguration: {
            verifyClientCertIssuerDN: true
          }
          sslPolicy: {
            cipherSuites: [
              'TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256'
            ]
            minProtocolVersion: 'TLSv1_1'
            policyType: 'Custom'
          }
          trustedClientCertificates: [
            {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/applicationGateways/appgw/trustedClientCertificates/clientcert'
            }
          ]
        }
      }
    ]
    trustedClientCertificates: [
      {
        name: 'clientcert'
        properties: {
          data: '****'
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
  }
}
```

## microsoft.network/applicationgateways/privateendpointconnections

Update Application Gateway Private Endpoint Connection
```bicep
resource exampleResource 'Microsoft.Network/applicationGateways/privateEndpointConnections@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'connection1'
  properties: {
    privateEndpoint: {
      id: '/subscriptions/subId2/resourceGroups/rg1/providers/Microsoft.Network/privateEndpoints/testPe'
    }
    privateLinkServiceConnectionState: {
      description: 'approved it for some reason.'
      status: 'Approved'
    }
  }
}
```

## microsoft.network/applicationgatewaywebapplicationfirewallpolicies

Creates or updates a WAF policy within a resource group
```bicep
resource exampleResource 'Microsoft.Network/ApplicationGatewayWebApplicationFirewallPolicies@2024-10-01' = {
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
      {
        name: 'RateLimitRule3'
        action: 'Block'
        groupByUserSession: [
          {
            groupByVariables: [
              {
                variableName: 'ClientAddr'
              }
            ]
          }
        ]
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
            negationConditon: true
            operator: 'IPMatch'
          }
        ]
        priority: 3
        rateLimitDuration: 'OneMin'
        rateLimitThreshold: 10
        ruleType: 'RateLimitRule'
      }
      {
        name: 'Rule4'
        action: 'JSChallenge'
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
              'Bot'
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
        priority: 4
        ruleType: 'MatchRule'
      }
    ]
    managedRules: {
      exclusions: [
        {
          exclusionManagedRuleSets: [
            {
              ruleGroups: [
                {
                  ruleGroupName: 'REQUEST-930-APPLICATION-ATTACK-LFI'
                  rules: [
                    {
                      ruleId: '930120'
                    }
                  ]
                }
                {
                  ruleGroupName: 'REQUEST-932-APPLICATION-ATTACK-RCE'
                }
              ]
              ruleSetType: 'OWASP'
              ruleSetVersion: '3.2'
            }
          ]
          matchVariable: 'RequestArgNames'
          selector: 'hello'
          selectorMatchOperator: 'StartsWith'
        }
        {
          exclusionManagedRuleSets: [
            {
              ruleGroups: [
              ]
              ruleSetType: 'OWASP'
              ruleSetVersion: '3.1'
            }
          ]
          matchVariable: 'RequestArgNames'
          selector: 'hello'
          selectorMatchOperator: 'EndsWith'
        }
        {
          matchVariable: 'RequestArgNames'
          selector: 'test'
          selectorMatchOperator: 'StartsWith'
        }
        {
          matchVariable: 'RequestArgValues'
          selector: 'test'
          selectorMatchOperator: 'StartsWith'
        }
      ]
      managedRuleSets: [
        {
          ruleGroupOverrides: [
            {
              ruleGroupName: 'REQUEST-931-APPLICATION-ATTACK-RFI'
              rules: [
                {
                  action: 'Log'
                  ruleId: '931120'
                  state: 'Enabled'
                }
                {
                  action: 'AnomalyScoring'
                  ruleId: '931130'
                  state: 'Disabled'
                }
              ]
            }
          ]
          ruleSetType: 'OWASP'
          ruleSetVersion: '3.2'
        }
        {
          ruleGroupOverrides: [
            {
              ruleGroupName: 'UnknownBots'
              rules: [
                {
                  action: 'JSChallenge'
                  ruleId: '300700'
                  state: 'Enabled'
                }
              ]
            }
          ]
          ruleSetType: 'Microsoft_BotManagerRuleSet'
          ruleSetVersion: '1.0'
        }
        {
          ruleGroupOverrides: [
            {
              ruleGroupName: 'ExcessiveRequests'
              rules: [
                {
                  action: 'Block'
                  ruleId: '500100'
                  sensitivity: 'High'
                  state: 'Enabled'
                }
              ]
            }
          ]
          ruleSetType: 'Microsoft_HTTPDDoSRuleSet'
          ruleSetVersion: '1.0'
        }
      ]
      exceptions: [
        {
          exceptionManagedRuleSets: [
            {
              ruleSetType: 'OWASP'
              ruleSetVersion: '3.2'
            }
          ]
          matchVariable: 'RequestURI'
          valueMatchOperator: 'Contains'
          values: [
            'health'
            'account/images'
            'default.aspx'
          ]
        }
        {
          exceptionManagedRuleSets: [
            {
              ruleGroups: [
                {
                  ruleGroupName: 'REQUEST-932-APPLICATION-ATTACK-RCE'
                }
              ]
              ruleSetType: 'OWASP'
              ruleSetVersion: '3.2'
            }
          ]
          matchVariable: 'RequestHeader'
          selector: 'User-Agent'
          selectorMatchOperator: 'StartsWith'
          valueMatchOperator: 'Contains'
          values: [
            'Mozilla/5.0'
            'Chrome/122.0.0.0'
          ]
        }
        {
          exceptionManagedRuleSets: [
            {
              ruleGroups: [
                {
                  ruleGroupName: 'BadBots'
                  rules: [
                    {
                      ruleId: '100100'
                    }
                  ]
                }
              ]
              ruleSetType: 'Microsoft_BotManagerRuleSet'
              ruleSetVersion: '1.0'
            }
          ]
          matchVariable: 'RemoteAddr'
          valueMatchOperator: 'IPMatch'
          values: [
            '1.2.3.4'
            '10.0.0.1/6'
          ]
        }
      ]
    }
    policySettings: {
      jsChallengeCookieExpirationInMins: 100
      logScrubbing: {
        scrubbingRules: [
          {
            matchVariable: 'RequestArgNames'
            selector: 'test'
            selectorMatchOperator: 'Equals'
            state: 'Enabled'
          }
          {
            matchVariable: 'RequestIPAddress'
            selectorMatchOperator: 'EqualsAny'
            state: 'Enabled'
          }
        ]
        state: 'Enabled'
      }
    }
  }
}
```

## microsoft.network/applicationsecuritygroups

Create application security group
```bicep
resource exampleResource 'Microsoft.Network/applicationSecurityGroups@2024-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
  }
}
```

## microsoft.network/azurefirewalls

Create Azure Firewall
```bicep
resource exampleResource 'Microsoft.Network/azureFirewalls@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    applicationRuleCollections: [
      {
        name: 'apprulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/applicationRuleCollections/apprulecoll'
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
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/natRuleCollections/natrulecoll'
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
            {
              name: 'DNAT-HTTP-traffic-With-FQDN'
              description: 'D-NAT all inbound web traffic for inspection'
              destinationAddresses: [
                '1.2.3.4'
              ]
              destinationPorts: [
                '80'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '*'
              ]
              translatedFqdn: 'internalhttpserver'
              translatedPort: '880'
            }
          ]
        }
      }
    ]
    networkRuleCollections: [
      {
        name: 'netrulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/networkRuleCollections/netrulecoll'
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
            {
              name: 'L4-traffic-with-FQDN'
              description: 'Block traffic based on source IPs and ports to amazon'
              destinationFqdns: [
                'www.amazon.com'
              ]
              destinationPorts: [
                '443-444'
                '8443'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '10.2.4.12-10.2.4.255'
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
resource exampleResource 'Microsoft.Network/azureFirewalls@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    firewallPolicy: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/firewallPolicies/policy1'
    }
    hubIPAddresses: {
      publicIPs: {
        addresses: [
        ]
        count: 1
      }
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

Create Azure Firewall With Additional Properties
```bicep
resource exampleResource 'Microsoft.Network/azureFirewalls@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    additionalProperties: {
      key1: 'value1'
      key2: 'value2'
    }
    applicationRuleCollections: [
      {
        name: 'apprulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/applicationRuleCollections/apprulecoll'
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
    ipGroups: [
    ]
    natRuleCollections: [
      {
        name: 'natrulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/natRuleCollections/natrulecoll'
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
            {
              name: 'DNAT-HTTP-traffic-With-FQDN'
              description: 'D-NAT all inbound web traffic for inspection'
              destinationAddresses: [
                '1.2.3.4'
              ]
              destinationPorts: [
                '80'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '*'
              ]
              translatedFqdn: 'internalhttpserver'
              translatedPort: '880'
            }
          ]
        }
      }
    ]
    networkRuleCollections: [
      {
        name: 'netrulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/networkRuleCollections/netrulecoll'
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
            {
              name: 'L4-traffic-with-FQDN'
              description: 'Block traffic based on source IPs and ports to amazon'
              destinationFqdns: [
                'www.amazon.com'
              ]
              destinationPorts: [
                '443-444'
                '8443'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '10.2.4.12-10.2.4.255'
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

Create Azure Firewall With IpGroups
```bicep
resource exampleResource 'Microsoft.Network/azureFirewalls@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    applicationRuleCollections: [
      {
        name: 'apprulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/applicationRuleCollections/apprulecoll'
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
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/natRuleCollections/natrulecoll'
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
            {
              name: 'DNAT-HTTP-traffic-With-FQDN'
              description: 'D-NAT all inbound web traffic for inspection'
              destinationAddresses: [
                '1.2.3.4'
              ]
              destinationPorts: [
                '80'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '*'
              ]
              translatedFqdn: 'internalhttpserver'
              translatedPort: '880'
            }
          ]
        }
      }
    ]
    networkRuleCollections: [
      {
        name: 'netrulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/networkRuleCollections/netrulecoll'
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
            {
              name: 'L4-traffic-with-FQDN'
              description: 'Block traffic based on source IPs and ports to amazon'
              destinationFqdns: [
                'www.amazon.com'
              ]
              destinationPorts: [
                '443-444'
                '8443'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '10.2.4.12-10.2.4.255'
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

Create Azure Firewall With management subnet
```bicep
resource exampleResource 'Microsoft.Network/azureFirewalls@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    applicationRuleCollections: [
      {
        name: 'apprulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/applicationRuleCollections/apprulecoll'
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
    managementIpConfiguration: {
      name: 'azureFirewallMgmtIpConfiguration'
      properties: {
        publicIPAddress: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/managementPipName'
        }
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/AzureFirewallManagementSubnet'
        }
      }
    }
    natRuleCollections: [
      {
        name: 'natrulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/natRuleCollections/natrulecoll'
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
            {
              name: 'DNAT-HTTP-traffic-With-FQDN'
              description: 'D-NAT all inbound web traffic for inspection'
              destinationAddresses: [
                '1.2.3.4'
              ]
              destinationPorts: [
                '80'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '*'
              ]
              translatedFqdn: 'internalhttpserver'
              translatedPort: '880'
            }
          ]
        }
      }
    ]
    networkRuleCollections: [
      {
        name: 'netrulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/networkRuleCollections/netrulecoll'
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
            {
              name: 'L4-traffic-with-FQDN'
              description: 'Block traffic based on source IPs and ports to amazon'
              destinationFqdns: [
                'www.amazon.com'
              ]
              destinationPorts: [
                '443-444'
                '8443'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '10.2.4.12-10.2.4.255'
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

Create Azure Firewall With Zones
```bicep
resource exampleResource 'Microsoft.Network/azureFirewalls@2024-10-01' = {
  name: 'example'
  location: 'West US 2'
  properties: {
    applicationRuleCollections: [
      {
        name: 'apprulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/applicationRuleCollections/apprulecoll'
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
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/natRuleCollections/natrulecoll'
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
            {
              name: 'DNAT-HTTP-traffic-With-FQDN'
              description: 'D-NAT all inbound web traffic for inspection'
              destinationAddresses: [
                '1.2.3.4'
              ]
              destinationPorts: [
                '80'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '*'
              ]
              translatedFqdn: 'internalhttpserver'
              translatedPort: '880'
            }
          ]
        }
      }
    ]
    networkRuleCollections: [
      {
        name: 'netrulecoll'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azurefirewall/networkRuleCollections/netrulecoll'
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
            {
              name: 'L4-traffic-with-FQDN'
              description: 'Block traffic based on source IPs and ports to amazon'
              destinationFqdns: [
                'www.amazon.com'
              ]
              destinationPorts: [
                '443-444'
                '8443'
              ]
              protocols: [
                'TCP'
              ]
              sourceAddresses: [
                '10.2.4.12-10.2.4.255'
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
resource exampleResource 'Microsoft.Network/bastionHosts@2024-10-01' = {
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

Create Bastion Host With Private Only
```bicep
resource exampleResource 'Microsoft.Network/bastionHosts@2024-10-01' = {
  name: 'example'
  properties: {
    enablePrivateOnlyBastion: true
    ipConfigurations: [
      {
        name: 'bastionHostIpConfiguration'
        properties: {
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet2/subnets/BastionHostSubnet'
          }
        }
      }
    ]
  }
}
```

Create Bastion Host With Zones
```bicep
resource exampleResource 'Microsoft.Network/bastionHosts@2024-10-01' = {
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

Create Developer Bastion Host
```bicep
resource exampleResource 'Microsoft.Network/bastionHosts@2024-10-01' = {
  name: 'example'
  properties: {
    ipConfigurations: [
    ]
    networkAcls: {
      ipRules: [
        {
          addressPrefix: '1.1.1.1/16'
        }
      ]
    }
    virtualNetwork: {
      id: '/subscriptions/subid/resourceGroups/rg2/providers/Microsoft.Network/virtualNetworks/vnet2'
    }
  }
}
```

## microsoft.network/cloudserviceslots

Put vip swap operation.
```bicep
resource exampleResource 'Microsoft.Network/cloudServiceSlots@2024-10-01' = {
  name: 'example'
  properties: {
    slotType: 'Production'
  }
}
```

## microsoft.network/connections

CreateVirtualNetworkGatewayConnection_S2S
```bicep
resource exampleResource 'Microsoft.Network/connections@2024-10-01' = {
  name: 'example'
  location: 'centralus'
  properties: {
    connectionMode: 'Default'
    connectionProtocol: 'IKEv2'
    connectionType: 'IPsec'
    dpdTimeoutSeconds: 30
    egressNatRules: [
      {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/natRules/natRule2'
      }
    ]
    enableBgp: false
    gatewayCustomBgpIpAddresses: [
      {
        customBgpIpAddress: '169.254.21.1'
        ipConfigurationId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/ipConfigurations/default'
      }
      {
        customBgpIpAddress: '169.254.21.3'
        ipConfigurationId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/ipConfigurations/ActiveActive'
      }
    ]
    ingressNatRules: [
      {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/natRules/natRule1'
      }
    ]
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
    tunnelProperties: [
      {
        bgpPeeringAddress: '10.78.1.17'
        tunnelIpAddress: '10.78.1.5'
      }
      {
        bgpPeeringAddress: '10.78.1.20'
        tunnelIpAddress: '10.78.1.7'
      }
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

## microsoft.network/customipprefixes

Create custom IP prefix allocation method
```bicep
resource exampleResource 'Microsoft.Network/customIpPrefixes@2024-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    cidr: '0.0.0.0/24'
  }
}
```

## microsoft.network/ddoscustompolicies

Create DDoS custom policy
```bicep
resource exampleResource 'Microsoft.Network/ddosCustomPolicies@2024-10-01' = {
  name: 'example'
  location: 'centraluseuap'
}
```

## microsoft.network/ddosprotectionplans

Create DDoS protection plan
```bicep
resource exampleResource 'Microsoft.Network/ddosProtectionPlans@2024-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
  }
}
```

## microsoft.network/dscpconfigurations

Create DSCP Configuration
```bicep
resource exampleResource 'Microsoft.Network/dscpConfigurations@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    qosDefinitionCollection: [
      {
        destinationIpRanges: [
          {
            endIP: '127.0.10.2'
            startIP: '127.0.10.1'
          }
        ]
        destinationPortRanges: [
          {
            end: 15
            start: 15
          }
        ]
        markings: [
          1
        ]
        sourceIpRanges: [
          {
            endIP: '127.0.0.2'
            startIP: '127.0.0.1'
          }
        ]
        sourcePortRanges: [
          {
            end: 11
            start: 10
          }
          {
            end: 21
            start: 20
          }
        ]
        protocol: 'Tcp'
      }
      {
        destinationIpRanges: [
          {
            endIP: '12.0.10.2'
            startIP: '12.0.10.1'
          }
        ]
        destinationPortRanges: [
          {
            end: 52
            start: 51
          }
        ]
        markings: [
          2
        ]
        sourceIpRanges: [
          {
            endIP: '12.0.0.2'
            startIP: '12.0.0.1'
          }
        ]
        sourcePortRanges: [
          {
            end: 12
            start: 11
          }
        ]
        protocol: 'Udp'
      }
    ]
  }
}
```

## microsoft.network/expressroutecircuits

Create ExpressRouteCircuit
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/expressRouteCircuits@2024-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    authorizationKey: 'b0be57f5-1fba-463b-adec-ffe767354cdd'
    bandwidthInGbps: 10
    enableDirectPortRateLimit: false
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
resource exampleResource 'Microsoft.Network/expressRouteCircuits/authorizations@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.network/expressroutecircuits/peerings

Create ExpressRouteCircuit Peerings
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits/peerings@2024-10-01' = {
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

## microsoft.network/expressroutecircuits/peerings/connections

ExpressRouteCircuitConnectionCreate
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCircuits/peerings/connections@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/29'
    authorizationKey: '946a1918-b7a2-4917-b43c-8c4cdaee006a'
    expressRouteCircuitPeering: {
      id: '/subscriptions/subid1/resourceGroups/dedharcktinit/providers/Microsoft.Network/expressRouteCircuits/dedharcktlocal/peerings/AzurePrivatePeering'
    }
    ipv6CircuitConnectionConfig: {
      addressPrefix: 'aa:bb::/125'
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
resource exampleResource 'Microsoft.Network/expressRouteCrossConnections@2024-10-01' = {
  name: 'example'
  properties: {
    serviceProviderProvisioningState: 'NotProvisioned'
  }
}
```

## microsoft.network/expressroutecrossconnections/peerings

ExpressRouteCrossConnectionBgpPeeringCreate
```bicep
resource exampleResource 'Microsoft.Network/expressRouteCrossConnections/peerings@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/expressRouteGateways@2024-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    allowNonVirtualWanTraffic: false
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
resource exampleResource 'Microsoft.Network/expressRouteGateways/expressRouteConnections@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'connectionName'
  id: '/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/expressRouteGateways/gateway-2/expressRouteConnections/connectionName'
  properties: {
    authorizationKey: 'authorizationKey'
    expressRouteCircuitPeering: {
      id: '/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/expressRouteCircuits/circuitName/peerings/AzurePrivatePeering'
    }
    routingConfiguration: {
      associatedRouteTable: {
        id: '/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/virtualHubs/hub1/hubRouteTables/hubRouteTable1'
      }
      inboundRouteMap: {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/routeMaps/routeMap1'
      }
      outboundRouteMap: {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/routeMaps/routeMap2'
      }
      propagatedRouteTables: {
        ids: [
          {
            id: '/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/virtualHubs/hub1/hubRouteTables/hubRouteTable1'
          }
          {
            id: '/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/virtualHubs/hub1/hubRouteTables/hubRouteTable2'
          }
          {
            id: '/subscriptions/subid/resourceGroups/resourceGroupName/providers/Microsoft.Network/virtualHubs/hub1/hubRouteTables/hubRouteTable3'
          }
        ]
        labels: [
          'label1'
          'label2'
        ]
      }
    }
    routingWeight: 2
  }
}
```

## microsoft.network/expressrouteports

ExpressRoutePortCreate
```bicep
resource exampleResource 'Microsoft.Network/ExpressRoutePorts@2024-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    bandwidthInGbps: 100
    billingType: 'UnlimitedData'
    encapsulation: 'QinQ'
    peeringLocation: 'peeringLocationName'
  }
}
```

ExpressRoutePortUpdateLink
```bicep
resource exampleResource 'Microsoft.Network/ExpressRoutePorts@2024-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    bandwidthInGbps: 100
    billingType: 'UnlimitedData'
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

## microsoft.network/expressrouteports/authorizations

Create ExpressRoutePort Authorization
```bicep
resource exampleResource 'Microsoft.Network/expressRoutePorts/authorizations@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.network/firewallpolicies

Create FirewallPolicy
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    dnsSettings: {
      enableProxy: true
      requireProxyForNetworkRules: false
      servers: [
        '30.3.4.5'
      ]
    }
    explicitProxy: {
      enableExplicitProxy: true
      enablePacFile: true
      httpPort: 8087
      httpsPort: 8087
      pacFile: 'https://tinawstorage.file.core.windows.net/?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-06-04T07:01:12Z&st=2021-06-03T23:01:12Z&sip=68.65.171.11&spr=https&sig=Plsa0RRVpGbY0IETZZOT6znOHcSro71LLTTbzquYPgs%3D'
      pacFilePort: 8087
    }
    insights: {
      isEnabled: true
      logAnalyticsResources: {
        defaultWorkspaceId: {
          id: '/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/defaultWorkspace'
        }
        workspaces: [
          {
            region: 'westus'
            workspaceId: {
              id: '/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/workspace1'
            }
          }
          {
            region: 'eastus'
            workspaceId: {
              id: '/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/workspace2'
            }
          }
        ]
      }
      retentionDays: 100
    }
    intrusionDetection: {
      configuration: {
        bypassTrafficSettings: [
          {
            name: 'bypassRule1'
            description: 'Rule 1'
            destinationAddresses: [
              '5.6.7.8'
            ]
            destinationPorts: [
              '*'
            ]
            sourceAddresses: [
              '1.2.3.4'
            ]
            protocol: 'TCP'
          }
        ]
        signatureOverrides: [
          {
            id: '2525004'
            mode: 'Deny'
          }
        ]
      }
      mode: 'Alert'
      profile: 'Balanced'
    }
    sku: {
      tier: 'Premium'
    }
    snat: {
      privateRanges: [
        'IANAPrivateRanges'
      ]
    }
    sql: {
      allowSqlRedirect: true
    }
    threatIntelMode: 'Alert'
    threatIntelWhitelist: {
      fqdns: [
        '*.microsoft.com'
      ]
      ipAddresses: [
        '20.3.4.5'
      ]
    }
    transportSecurity: {
      certificateAuthority: {
        name: 'clientcert'
        keyVaultSecretId: 'https://kv/secret'
      }
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/firewallpolicies/firewallpolicydrafts

create or update firewall policy draft
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies/firewallPolicyDrafts@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dnsSettings: {
      enableProxy: true
      requireProxyForNetworkRules: false
      servers: [
        '30.3.4.5'
      ]
    }
    explicitProxy: {
      enableExplicitProxy: true
      enablePacFile: true
      httpPort: 8087
      httpsPort: 8087
      pacFile: 'https://tinawstorage.file.core.windows.net/?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-06-04T07:01:12Z&st=2021-06-03T23:01:12Z&sip=68.65.171.11&spr=https&sig=Plsa0RRVpGbY0IETZZOT6znOHcSro71LLTTbzquYPgs%3D'
      pacFilePort: 8087
    }
    insights: {
      isEnabled: true
      logAnalyticsResources: {
        defaultWorkspaceId: {
          id: '/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/defaultWorkspace'
        }
        workspaces: [
          {
            region: 'westus'
            workspaceId: {
              id: '/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/workspace1'
            }
          }
          {
            region: 'eastus'
            workspaceId: {
              id: '/subscriptions/subid/resourcegroups/rg1/providers/microsoft.operationalinsights/workspaces/workspace2'
            }
          }
        ]
      }
      retentionDays: 100
    }
    intrusionDetection: {
      configuration: {
        bypassTrafficSettings: [
          {
            name: 'bypassRule1'
            description: 'Rule 1'
            destinationAddresses: [
              '5.6.7.8'
            ]
            destinationPorts: [
              '*'
            ]
            sourceAddresses: [
              '1.2.3.4'
            ]
            protocol: 'TCP'
          }
        ]
        signatureOverrides: [
          {
            id: '2525004'
            mode: 'Deny'
          }
        ]
      }
      mode: 'Alert'
      profile: 'Balanced'
    }
    snat: {
      privateRanges: [
        'IANAPrivateRanges'
      ]
    }
    sql: {
      allowSqlRedirect: true
    }
    threatIntelMode: 'Alert'
    threatIntelWhitelist: {
      fqdns: [
        '*.microsoft.com'
      ]
      ipAddresses: [
        '20.3.4.5'
      ]
    }
  }
}
```

## microsoft.network/firewallpolicies/rulecollectiongroups

Create Firewall Policy Nat Rule Collection Group
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies/ruleCollectionGroups@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    priority: 100
    ruleCollections: [
      {
        name: 'Example-Nat-Rule-Collection'
        action: {
          type: 'DNAT'
        }
        priority: 100
        ruleCollectionType: 'FirewallPolicyNatRuleCollection'
        rules: [
          {
            name: 'nat-rule1'
            destinationAddresses: [
              '152.23.32.23'
            ]
            destinationPorts: [
              '8080'
            ]
            ipProtocols: [
              'TCP'
              'UDP'
            ]
            ruleType: 'NatRule'
            sourceAddresses: [
              '2.2.2.2'
            ]
            sourceIpGroups: [
            ]
            translatedFqdn: 'internalhttp.server.net'
            translatedPort: '8080'
          }
        ]
      }
    ]
  }
}
```

Create Firewall Policy Rule Collection Group
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies/ruleCollectionGroups@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    priority: 100
    ruleCollections: [
      {
        name: 'Example-Filter-Rule-Collection'
        action: {
          type: 'Deny'
        }
        priority: 100
        ruleCollectionType: 'FirewallPolicyFilterRuleCollection'
        rules: [
          {
            name: 'network-rule1'
            destinationAddresses: [
              '*'
            ]
            destinationPorts: [
              '*'
            ]
            ipProtocols: [
              'TCP'
            ]
            ruleType: 'NetworkRule'
            sourceAddresses: [
              '10.1.25.0/24'
            ]
          }
        ]
      }
    ]
  }
}
```

Create Firewall Policy Rule Collection Group With http header to insert
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies/ruleCollectionGroups@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    priority: 110
    ruleCollections: [
      {
        name: 'Example-Filter-Rule-Collection'
        action: {
          type: 'Allow'
        }
        ruleCollectionType: 'FirewallPolicyFilterRuleCollection'
        rules: [
          {
            name: 'rule1'
            description: 'Insert trusted tenants header'
            fqdnTags: [
              'WindowsVirtualDesktop'
            ]
            httpHeadersToInsert: [
              {
                headerName: 'Restrict-Access-To-Tenants'
                headerValue: 'contoso.com,fabrikam.onmicrosoft.com'
              }
            ]
            protocols: [
              {
                port: 80
                protocolType: 'Http'
              }
            ]
            ruleType: 'ApplicationRule'
            sourceAddresses: [
              '216.58.216.164'
              '10.0.0.0/24'
            ]
          }
        ]
      }
    ]
  }
}
```

Create Firewall Policy Rule Collection Group With IP Groups
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies/ruleCollectionGroups@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    priority: 110
    ruleCollections: [
      {
        name: 'Example-Filter-Rule-Collection'
        action: {
          type: 'Deny'
        }
        ruleCollectionType: 'FirewallPolicyFilterRuleCollection'
        rules: [
          {
            name: 'network-1'
            destinationIpGroups: [
              '/subscriptions/subid/providers/Microsoft.Network/resourceGroup/rg1/ipGroups/ipGroups2'
            ]
            destinationPorts: [
              '*'
            ]
            ipProtocols: [
              'TCP'
            ]
            ruleType: 'NetworkRule'
            sourceIpGroups: [
              '/subscriptions/subid/providers/Microsoft.Network/resourceGroup/rg1/ipGroups/ipGroups1'
            ]
          }
        ]
      }
    ]
  }
}
```

Create Firewall Policy Rule Collection Group With Web Categories
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies/ruleCollectionGroups@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    priority: 110
    ruleCollections: [
      {
        name: 'Example-Filter-Rule-Collection'
        action: {
          type: 'Deny'
        }
        ruleCollectionType: 'FirewallPolicyFilterRuleCollection'
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
            ruleType: 'ApplicationRule'
            sourceAddresses: [
              '216.58.216.164'
              '10.0.0.0/24'
            ]
            webCategories: [
              'Hacking'
            ]
          }
        ]
      }
    ]
  }
}
```

## microsoft.network/firewallpolicies/rulecollectiongroups/rulecollectiongroupdrafts

create or update rule collection group draft
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies/ruleCollectionGroups/ruleCollectionGroupDrafts@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    priority: 100
    ruleCollections: [
      {
        name: 'Example-Filter-Rule-Collection'
        action: {
          type: 'Deny'
        }
        priority: 100
        ruleCollectionType: 'FirewallPolicyFilterRuleCollection'
        rules: [
          {
            name: 'network-rule1'
            destinationAddresses: [
              '*'
            ]
            destinationPorts: [
              '*'
            ]
            ipProtocols: [
              'TCP'
            ]
            ruleType: 'NetworkRule'
            sourceAddresses: [
              '10.1.25.0/24'
            ]
          }
        ]
      }
    ]
  }
}
```

## microsoft.network/firewallpolicies/signatureoverrides

put signature overrides
```bicep
resource exampleResource 'Microsoft.Network/firewallPolicies/signatureOverrides@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  name: 'default'
  type: 'Microsoft.Network/firewallPolicies/signatureOverrides'
  id: '/subscriptions/e747cc13-97d4-4a79-b463-42d7f4e558f2/resourceGroups/rg1/providers/Microsoft.Network/firewallPolicies/firewallPolicy/signatureOverrides/default'
  properties: {
    signatures: {
      '2000105': 'Off'
      '2000106': 'Deny'
    }
  }
}
```

## microsoft.network/ipallocations

Create IpAllocation
```bicep
resource exampleResource 'Microsoft.Network/IpAllocations@2024-10-01' = {
  name: 'example'
  location: 'centraluseuap'
  properties: {
    type: 'Hypernet'
    allocationTags: {
      VNetID: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/HypernetVnet1'
    }
    prefix: '3.2.5.0/24'
  }
}
```

## microsoft.network/ipgroups

CreateOrUpdate_IpGroups
```bicep
resource exampleResource 'Microsoft.Network/ipGroups@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    ipAddresses: [
      '13.64.39.16/32'
      '40.74.146.80/31'
      '40.74.147.32/28'
    ]
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/loadbalancers

Create load balancer
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
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
          probeThreshold: 1
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
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
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
          probeThreshold: 1
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

Create load balancer with Gateway Load Balancer Consumer configured
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
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
          gatewayLoadBalancer: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb-provider'
          }
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
          probeThreshold: 1
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

Create load balancer with Gateway Load Balancer Provider configured with one Backend Pool
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    backendAddressPools: [
      {
        name: 'be-lb'
        properties: {
          tunnelInterfaces: [
            {
              type: 'Internal'
              identifier: 900
              port: 15000
              protocol: 'VXLAN'
            }
            {
              type: 'Internal'
              identifier: 901
              port: 15001
              protocol: 'VXLAN'
            }
          ]
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
    loadBalancingRules: [
      {
        name: 'rulelb'
        properties: {
          backendAddressPools: [
            {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb'
            }
          ]
          backendPort: 0
          enableFloatingIP: true
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
          }
          frontendPort: 0
          idleTimeoutInMinutes: 15
          loadDistribution: 'Default'
          probe: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb'
          }
          protocol: 'All'
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
          probeThreshold: 1
          requestPath: 'healthcheck.aspx'
          protocol: 'Http'
        }
      }
    ]
  }
  sku: {
    name: 'Gateway'
  }
}
```

Create load balancer with Gateway Load Balancer Provider configured with two Backend Pool
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    backendAddressPools: [
      {
        name: 'be-lb1'
        properties: {
        }
      }
      {
        name: 'be-lb2'
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
    loadBalancingRules: [
      {
        name: 'rulelb'
        properties: {
          backendAddressPool: {
          }
          backendAddressPools: [
            {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb1'
            }
            {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb2'
            }
          ]
          backendPort: 0
          enableFloatingIP: true
          frontendIPConfiguration: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb'
          }
          frontendPort: 0
          idleTimeoutInMinutes: 15
          loadDistribution: 'Default'
          probe: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/probes/probe-lb'
          }
          protocol: 'All'
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
          probeThreshold: 1
          requestPath: 'healthcheck.aspx'
          protocol: 'Http'
        }
      }
    ]
  }
  sku: {
    name: 'Gateway'
  }
}
```

Create load balancer with Global Tier and one regional load balancer in its backend pool
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    backendAddressPools: [
      {
        name: 'be-lb'
        properties: {
          loadBalancerBackendAddresses: [
            {
              name: 'regional-lb1-address'
              properties: {
                loadBalancerFrontendIPConfiguration: {
                  id: '/subscriptions/subid/resourceGroups/regional-lb-rg1/providers/Microsoft.Network/loadBalancers/regional-lb/frontendIPConfigurations/fe-rlb'
                }
              }
            }
          ]
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
    loadBalancingRules: [
      {
        name: 'rulelb'
        properties: {
          backendAddressPool: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/backendAddressPools/be-lb'
          }
          backendPort: 80
          enableFloatingIP: false
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
          probeThreshold: 1
          requestPath: 'healthcheck.aspx'
          protocol: 'Http'
        }
      }
    ]
  }
  sku: {
    name: 'Standard'
    tier: 'Global'
  }
}
```

Create load balancer with inbound nat pool
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
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
          probeThreshold: 1
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
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
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
          probeThreshold: 1
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

Create load balancer with Sync Mode Property on Pool
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    backendAddressPools: [
      {
        name: 'be-lb'
        properties: {
          syncMode: 'Automatic'
          virtualNetwork: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb'
          }
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
          probeThreshold: 1
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

## microsoft.network/loadbalancers/backendaddresspools

Update load balancer backend pool with backend addresses containing virtual network and  IP address.
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers/backendAddressPools@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    loadBalancerBackendAddresses: [
      {
        name: 'address1'
        properties: {
          ipAddress: '10.0.0.4'
          virtualNetwork: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb'
          }
        }
      }
      {
        name: 'address2'
        properties: {
          ipAddress: '10.0.0.5'
          virtualNetwork: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnetlb'
          }
        }
      }
    ]
  }
}
```

## microsoft.network/loadbalancers/inboundnatrules

InboundNatRuleCreate
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers/inboundNatRules@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/localNetworkGateways@2024-10-01' = {
  name: 'example'
  location: 'Central US'
  properties: {
    fqdn: 'site1.contoso.com'
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
resource exampleResource 'Microsoft.Network/natGateways@2024-10-01' = {
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

Create nat gateway with StandardV2 Sku
```bicep
resource exampleResource 'Microsoft.Network/natGateways@2024-10-01' = {
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
    name: 'StandardV2'
  }
}
```

## microsoft.network/networkinterfaces

Create network interface
```bicep
resource exampleResource 'Microsoft.Network/networkInterfaces@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    disableTcpStateTracking: true
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
      {
        name: 'ipconfig2'
        properties: {
          privateIPAddressPrefixLength: 28
        }
      }
    ]
  }
}
```

Create network interface with Gateway Load Balancer Consumer configured
```bicep
resource exampleResource 'Microsoft.Network/networkInterfaces@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    enableAcceleratedNetworking: true
    ipConfigurations: [
      {
        name: 'ipconfig1'
        properties: {
          gatewayLoadBalancer: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/loadBalancers/lb/frontendIPConfigurations/fe-lb-provider'
          }
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
resource exampleResource 'Microsoft.Network/networkInterfaces/tapConfigurations@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    virtualNetworkTap: {
      id: '/subscriptions/subid/resourceGroups/testrg/providers/Microsoft.Network/virtualNetworkTaps/testvtap'
    }
  }
}
```

## microsoft.network/networkmanagerconnections

Create or Update Subscription Network Manager Connection
```bicep
resource exampleResource 'Microsoft.Network/networkManagerConnections@2024-10-01' = {
  name: 'example'
  properties: {
    networkManagerId: '/subscriptions/subscriptionC/resourceGroup/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager'
  }
}
```

## microsoft.network/networkmanagers

Put Network Manager
```bicep
resource exampleResource 'Microsoft.Network/networkManagers@2024-10-01' = {
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

## microsoft.network/networkmanagers/connectivityconfigurations

ConnectivityConfigurationsPut
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/connectivityConfigurations@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'Sample Configuration'
    appliesToGroups: [
      {
        groupConnectivity: 'None'
        isGlobal: 'False'
        networkGroupId: 'subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/group1'
        useHubGateway: 'True'
      }
    ]
    connectivityCapabilities: {
      connectedGroupAddressOverlap: 'Allowed'
      connectedGroupPrivateEndpointsScale: 'Standard'
      peeringEnforcement: 'Unenforced'
    }
    connectivityTopology: 'HubAndSpoke'
    deleteExistingPeering: 'True'
    hubs: [
      {
        resourceId: 'subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myTestConnectivityConfig'
        resourceType: 'Microsoft.Network/virtualNetworks'
      }
    ]
    isGlobal: 'True'
  }
}
```

## microsoft.network/networkmanagers/ipampools

IpamPools_Create
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/ipamPools@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'Test description.'
    addressPrefixes: [
      '10.0.0.0/24'
    ]
    parentPoolName: ''
  }
}
```

## microsoft.network/networkmanagers/networkgroups

NetworkGroupsPut
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/networkGroups@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample group'
    memberType: 'VirtualNetwork'
  }
}
```

## microsoft.network/networkmanagers/networkgroups/staticmembers

StaticMemberPut
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/networkGroups/staticMembers@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroup/rg1/providers/Microsoft.Network/virtualnetworks/vnet1'
  }
}
```

## microsoft.network/networkmanagers/routingconfigurations

Create network manager routing configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
  }
}
```

## microsoft.network/networkmanagers/routingconfigurations/rulecollections

Create or Update a routing rule collection
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
    appliesTo: [
      {
        networkGroupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/networkGroups/testGroup'
      }
    ]
  }
}
```

## microsoft.network/networkmanagers/routingconfigurations/rulecollections/rules

Create a default routing rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections/rules@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'This is Sample Routing Rule'
    destination: {
      type: 'AddressPrefix'
      destinationAddress: '10.0.0.0/16'
    }
    nextHop: {
      nextHopType: 'VirtualNetworkGateway'
    }
  }
}
```

Create an routing rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/routingConfigurations/ruleCollections/rules@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'This is Sample Routing Rule'
    destination: {
      type: 'AddressPrefix'
      destinationAddress: '10.0.0.0/16'
    }
    nextHop: {
      nextHopType: 'VirtualNetworkGateway'
    }
  }
}
```

## microsoft.network/networkmanagers/scopeconnections

Create or Update Network Manager Scope Connection
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/scopeConnections@2024-10-01' = {
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

Create manual-mode security admin configuration
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityAdminConfigurations/ruleCollections/rules@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample policy'
  }
}
```

## microsoft.network/networkmanagers/securityuserconfigurations/rulecollections

Create or Update a Security User Rule Collection
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections@2024-10-01' = {
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

Create a security user rule
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/securityUserConfigurations/ruleCollections/rules@2024-10-01' = {
  parent: parentResource 
  name: 'example'
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

## microsoft.network/networkmanagers/verifierworkspaces

VerifierWorkspaceCreate
```bicep
resource exampleResource 'Microsoft.Network/networkManagers/verifierWorkspaces@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/verifierWorkspaces/reachabilityAnalysisIntents@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkManagers/verifierWorkspaces/reachabilityAnalysisRuns@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'A sample reachability analysis run'
    intentId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/testNetworkManager/verifierWorkspaces/testVerifierWorkspace1/reachabilityAnalysisIntents/testReachabilityAnalysisIntenant1'
  }
}
```

## microsoft.network/networkprofiles

Create network profile defaults
```bicep
resource exampleResource 'Microsoft.Network/networkProfiles@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2024-10-01' = {
  name: 'example'
  location: 'eastus'
}
```

Create network security group with rule
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkSecurityGroups/securityRules@2024-10-01' = {
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

## microsoft.network/networksecurityperimeters

Put Network Security Perimeter
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters@2024-10-01' = {
  name: 'example'
  location: 'location1'
  properties: {
  }
}
```

## microsoft.network/networksecurityperimeters/links

NspLinksPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/links@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    autoApprovedRemotePerimeterResourceId: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/networkSecurityPerimeters/nsp2'
    localInboundProfiles: [
      '*'
    ]
    remoteInboundProfiles: [
      '*'
    ]
  }
}
```

## microsoft.network/networksecurityperimeters/loggingconfigurations

NspLoggingConfigurationPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/loggingConfigurations@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enabledLogCategories: [
      'NspPublicInboundPerimeterRulesDenied'
      'NspPublicOutboundPerimeterRulesDenied'
    ]
  }
}
```

## microsoft.network/networksecurityperimeters/profiles

NspProfilesPut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/profiles@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
  }
}
```

## microsoft.network/networksecurityperimeters/profiles/accessrules

NspAccessRulePut
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/networkSecurityPerimeters/resourceAssociations@2024-10-01' = {
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

## microsoft.network/networkvirtualappliances

Create NetworkVirtualAppliance
```bicep
resource exampleResource 'Microsoft.Network/networkVirtualAppliances@2024-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
    }
  }
  location: 'West US'
  properties: {
    additionalNics: [
      {
        name: 'exrsdwan'
        hasPublicIp: true
      }
    ]
    bootStrapConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrbootstrapconfig'
    ]
    cloudInitConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrcloudinitconfig'
    ]
    internetIngressPublicIps: [
      {
        id: '/subscriptions/{{subscriptionId}}/resourceGroups/{{rg}}/providers/Microsoft.Network/publicIPAddresses/slbip'
      }
    ]
    networkProfile: {
      networkInterfaceConfigurations: [
        {
          type: 'PublicNic'
          properties: {
            ipConfigurations: [
              {
                name: 'publicnicipconfig'
                properties: {
                  primary: true
                }
              }
              {
                name: 'publicnicipconfig-2'
                properties: {
                  primary: false
                }
              }
            ]
          }
        }
        {
          type: 'PrivateNic'
          properties: {
            ipConfigurations: [
              {
                name: 'privatenicipconfig'
                properties: {
                  primary: true
                }
              }
              {
                name: 'privatenicipconfig-2'
                properties: {
                  primary: false
                }
              }
            ]
          }
        }
      ]
    }
    nvaSku: {
      bundledScaleUnit: '1'
      marketPlaceVersion: '12.1'
      vendor: 'Cisco SDWAN'
    }
    virtualApplianceAsn: 10000
    virtualHub: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

Create NVA in VNet with PrivateNic & PublicNic
```bicep
resource exampleResource 'Microsoft.Network/networkVirtualAppliances@2024-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
    }
  }
  location: 'West US'
  properties: {
    bootStrapConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrbootstrapconfig'
    ]
    cloudInitConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrcloudinitconfig'
    ]
    nvaInterfaceConfigurations: [
      {
        name: 'dataInterface'
        type: [
          'PrivateNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
        }
      }
      {
        name: 'managementInterface'
        type: [
          'PublicNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet2'
        }
      }
    ]
    nvaSku: {
      bundledScaleUnit: '1'
      marketPlaceVersion: 'latest'
      vendor: 'Cisco SDWAN'
    }
    virtualApplianceAsn: 10000
  }
  tags: {
    key1: 'value1'
  }
}
```

Create NVA in VNet with PrivateNic & PublicNic, including Internet-Ingress
```bicep
resource exampleResource 'Microsoft.Network/networkVirtualAppliances@2024-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
    }
  }
  location: 'West US'
  properties: {
    bootStrapConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrbootstrapconfig'
    ]
    cloudInitConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrcloudinitconfig'
    ]
    internetIngressPublicIps: [
      {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/slbip'
      }
    ]
    nvaInterfaceConfigurations: [
      {
        name: 'dataInterface'
        type: [
          'PrivateNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
        }
      }
      {
        name: 'managementInterface'
        type: [
          'PublicNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet2'
        }
      }
    ]
    nvaSku: {
      bundledScaleUnit: '1'
      marketPlaceVersion: 'latest'
      vendor: 'Cisco SDWAN'
    }
    virtualApplianceAsn: 10000
  }
  tags: {
    key1: 'value1'
  }
}
```

Create NVA in VNet with PrivateNic & PublicNic, including NetworkProfile
```bicep
resource exampleResource 'Microsoft.Network/networkVirtualAppliances@2024-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
    }
  }
  location: 'West US'
  properties: {
    bootStrapConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrbootstrapconfig'
    ]
    cloudInitConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrcloudinitconfig'
    ]
    networkProfile: {
      networkInterfaceConfigurations: [
        {
          type: 'PublicNic'
          properties: {
            ipConfigurations: [
              {
                name: 'myPrimaryPublicIpConfig'
                properties: {
                  primary: true
                }
              }
              {
                name: 'myNonPrimaryPublicIpConfig'
                properties: {
                  primary: false
                }
              }
            ]
          }
        }
        {
          type: 'PrivateNic'
          properties: {
            ipConfigurations: [
              {
                name: 'myPrimaryPrivateIpConfig'
                properties: {
                  primary: true
                }
              }
              {
                name: 'myNonPrimaryPrivateIpConfig'
                properties: {
                  primary: false
                }
              }
            ]
          }
        }
      ]
    }
    nvaInterfaceConfigurations: [
      {
        name: 'dataInterface'
        type: [
          'PrivateNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
        }
      }
      {
        name: 'managementInterface'
        type: [
          'PublicNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet2'
        }
      }
    ]
    nvaSku: {
      bundledScaleUnit: '1'
      marketPlaceVersion: 'latest'
      vendor: 'Cisco SDWAN'
    }
    virtualApplianceAsn: 10000
  }
  tags: {
    key1: 'value1'
  }
}
```

Create NVA in VNet with PrivateNic, PublicNic & AdditionalPrivateNic
```bicep
resource exampleResource 'Microsoft.Network/networkVirtualAppliances@2024-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
    }
  }
  location: 'West US'
  properties: {
    bootStrapConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrbootstrapconfig'
    ]
    cloudInitConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrcloudinitconfig'
    ]
    nvaInterfaceConfigurations: [
      {
        name: 'dataInterface'
        type: [
          'PrivateNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
        }
      }
      {
        name: 'managementInterface'
        type: [
          'PublicNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet2'
        }
      }
      {
        name: 'myAdditionalInterface'
        type: [
          'AdditionalPrivateNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet3'
        }
      }
    ]
    nvaSku: {
      bundledScaleUnit: '1'
      marketPlaceVersion: 'latest'
      vendor: 'Cisco SDWAN'
    }
    virtualApplianceAsn: 10000
  }
  tags: {
    key1: 'value1'
  }
}
```

Create NVA in VNet with PrivateNic, PublicNic & AdditionalPublicNic
```bicep
resource exampleResource 'Microsoft.Network/networkVirtualAppliances@2024-10-01' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity1': {
      }
    }
  }
  location: 'West US'
  properties: {
    bootStrapConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrbootstrapconfig'
    ]
    cloudInitConfigurationBlobs: [
      'https://csrncvhdstorage1.blob.core.windows.net/csrncvhdstoragecont/csrcloudinitconfig'
    ]
    nvaInterfaceConfigurations: [
      {
        name: 'dataInterface'
        type: [
          'PrivateNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
        }
      }
      {
        name: 'managementInterface'
        type: [
          'PublicNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet2'
        }
      }
      {
        name: 'myAdditionalPublicInterface'
        type: [
          'AdditionalPublicNic'
        ]
        subnet: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet3'
        }
      }
    ]
    nvaSku: {
      bundledScaleUnit: '1'
      marketPlaceVersion: 'latest'
      vendor: 'Cisco SDWAN'
    }
    virtualApplianceAsn: 10000
  }
  tags: {
    key1: 'value1'
  }
}
```

Create SaaS NetworkVirtualAppliance
```bicep
resource exampleResource 'Microsoft.Network/networkVirtualAppliances@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    delegation: {
      serviceName: 'PaloAltoNetworks.Cloudngfw/firewalls'
    }
    virtualHub: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/networkvirtualappliances/inboundsecurityrules

Create Network Virtual Appliance Inbound Security Rules
```bicep
resource exampleResource 'Microsoft.Network/networkVirtualAppliances/inboundSecurityRules@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    ruleType: 'Permanent'
    rules: [
      {
        name: 'inboundRule1'
        appliesOn: [
          'slbip1'
        ]
        destinationPortRange: 22
        destinationPortRanges: [
          '80-100'
        ]
        sourceAddressPrefix: '50.20.121.5/32'
        protocol: 'TCP'
      }
    ]
  }
}
```

## microsoft.network/networkvirtualappliances/virtualappliancesites

Create Network Virtual Appliance Site
```bicep
resource exampleResource 'Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '192.168.1.0/24'
    o365Policy: {
      breakOutCategories: {
        default: true
        allow: true
        optimize: true
      }
    }
  }
}
```

## microsoft.network/networkwatchers

Create network watcher
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

## microsoft.network/networkwatchers/connectionmonitors

Create connection monitor V1
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/connectionMonitors@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    endpoints: [
      {
        name: 'source'
        resourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/ct1'
      }
      {
        name: 'destination'
        address: 'bing.com'
      }
    ]
    testConfigurations: [
      {
        name: 'tcp'
        tcpConfiguration: {
          port: 80
        }
        testFrequencySec: 60
        protocol: 'Tcp'
      }
    ]
    testGroups: [
      {
        name: 'tg'
        destinations: [
          'destination'
        ]
        sources: [
          'source'
        ]
        testConfigurations: [
          'tcp'
        ]
      }
    ]
  }
}
```

Create connection monitor V2
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/connectionMonitors@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endpoints: [
      {
        name: 'vm1'
        resourceId: '/subscriptions/96e68903-0a56-4819-9987-8d08ad6a1f99/resourceGroups/NwRgIrinaCentralUSEUAP/providers/Microsoft.Compute/virtualMachines/vm1'
      }
      {
        name: 'CanaryWorkspaceVamshi'
        filter: {
          type: 'Include'
          items: [
            {
              type: 'AgentAddress'
              address: 'npmuser'
            }
          ]
        }
        resourceId: '/subscriptions/96e68903-0a56-4819-9987-8d08ad6a1f99/resourceGroups/vasamudrRG/providers/Microsoft.OperationalInsights/workspaces/vasamudrWorkspace'
      }
      {
        name: 'bing'
        address: 'bing.com'
      }
      {
        name: 'google'
        address: 'google.com'
      }
    ]
    outputs: [
    ]
    testConfigurations: [
      {
        name: 'testConfig1'
        tcpConfiguration: {
          disableTraceRoute: false
          port: 80
        }
        testFrequencySec: 60
        protocol: 'Tcp'
      }
    ]
    testGroups: [
      {
        name: 'test1'
        destinations: [
          'bing'
          'google'
        ]
        disable: false
        sources: [
          'vm1'
          'CanaryWorkspaceVamshi'
        ]
        testConfigurations: [
          'testConfig1'
        ]
      }
    ]
  }
}
```

Create connection monitor with Arc Network
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/connectionMonitors@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    endpoints: [
      {
        name: 'vm1'
        type: 'AzureVM'
        resourceId: '/subscriptions/9cece3e3-0f7d-47ca-af0e-9772773f90b7/resourceGroups/testRG/providers/Microsoft.Compute/virtualMachines/TESTVM'
      }
      {
        name: 'bing'
        type: 'ExternalAddress'
        address: 'bing.com'
      }
      {
        name: 'google'
        type: 'ExternalAddress'
        address: 'google.com'
      }
      {
        name: 'ArcBasedNetwork'
        type: 'AzureArcNetwork'
        locationDetails: {
          region: 'eastus'
        }
        scope: {
          include: [
            {
              address: '172.21.128.0/20'
            }
          ]
        }
        subscriptionId: '9cece3e3-0f7d-47ca-af0e-9772773f90b7'
      }
    ]
    outputs: [
    ]
    testConfigurations: [
      {
        name: 'testConfig1'
        tcpConfiguration: {
          disableTraceRoute: false
          port: 80
        }
        testFrequencySec: 60
        protocol: 'Tcp'
      }
    ]
    testGroups: [
      {
        name: 'test1'
        destinations: [
          'bing'
          'google'
        ]
        disable: false
        sources: [
          'vm1'
          'ArcBasedNetwork'
        ]
        testConfigurations: [
          'testConfig1'
        ]
      }
    ]
  }
}
```

## microsoft.network/networkwatchers/flowlogs

Create or update flow log
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/flowLogs@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1': {
      }
    }
  }
  location: 'centraluseuap'
  properties: {
    format: {
      type: 'JSON'
      version: 1
    }
    enabled: true
    enabledFilteringCriteria: 'srcIP=158.255.7.8 || dstPort=56891'
    storageId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Storage/storageAccounts/nwtest1mgvbfmqsigdxe'
    targetResourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/networkSecurityGroups/desmondcentral-nsg'
  }
}
```

## microsoft.network/networkwatchers/packetcaptures

Create packet capture
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/packetCaptures@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/p2svpnGateways@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    customDnsServers: [
      '1.1.1.1'
      '2.2.2.2'
    ]
    isRoutingPreferenceInternet: false
    p2SConnectionConfigurations: [
      {
        name: 'P2SConnectionConfig1'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/p2sVpnGateways/p2sVpnGateway1/p2sConnectionConfigurations/P2SConnectionConfig1'
        properties: {
          routingConfiguration: {
            associatedRouteTable: {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1'
            }
            propagatedRouteTables: {
              ids: [
                {
                  id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1'
                }
                {
                  id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable2'
                }
                {
                  id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable3'
                }
              ]
              labels: [
                'label1'
                'label2'
              ]
            }
            vnetRoutes: {
              staticRoutes: [
              ]
            }
          }
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
resource exampleResource 'Microsoft.Network/privateEndpoints@2024-10-01' = {
  name: 'example'
  location: 'eastus2euap'
  properties: {
    customNetworkInterfaceName: 'testPeNic'
    ipConfigurations: [
      {
        name: 'pestaticconfig'
        properties: {
          groupId: 'file'
          memberName: 'file'
          privateIPAddress: '192.168.0.6'
        }
      }
    ]
    privateLinkServiceConnections: [
      {
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

Create private endpoint with application security groups
```bicep
resource exampleResource 'Microsoft.Network/privateEndpoints@2024-10-01' = {
  name: 'example'
  location: 'eastus2euap'
  properties: {
    applicationSecurityGroups: [
      {
        id: '/subscriptions/subId/resourceGroups/rg1/provders/Microsoft.Network/applicationSecurityGroup/asg1'
      }
    ]
    privateLinkServiceConnections: [
      {
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
resource exampleResource 'Microsoft.Network/privateEndpoints@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    customNetworkInterfaceName: 'testPeNic'
    ipConfigurations: [
      {
        name: 'pestaticconfig'
        properties: {
          groupId: 'file'
          memberName: 'file'
          privateIPAddress: '192.168.0.5'
        }
      }
    ]
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

## microsoft.network/privateendpoints/privatednszonegroups

Create private dns zone group
```bicep
resource exampleResource 'Microsoft.Network/privateEndpoints/privateDnsZoneGroups@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateDnsZoneConfigs: [
      {
        properties: {
          privateDnsZoneId: '/subscriptions/subId/resourceGroups/rg1/providers/Microsoft.Network/privateDnsZones/zone1.com'
        }
      }
    ]
  }
}
```

## microsoft.network/privatelinkservices

Create private link service
```bicep
resource exampleResource 'Microsoft.Network/privateLinkServices@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/privateLinkServices/privateEndpointConnections@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/publicIPAddresses@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    idleTimeoutInMinutes: 10
    publicIPAddressVersion: 'IPv4'
    publicIPAllocationMethod: 'Static'
  }
  sku: {
    name: 'Standard'
    tier: 'Global'
  }
}
```

Create public IP address defaults
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2024-10-01' = {
  name: 'example'
  location: 'eastus'
}
```

Create public IP address defaults with StandardV2 Sku
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2024-10-01' = {
  name: 'example'
  location: 'eastus'
}
```

Create public IP address DNS
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    dnsSettings: {
      domainNameLabel: 'dnslbl'
    }
  }
}
```

Create public IP address DNS with Domain Name Label Scope
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    dnsSettings: {
      domainNameLabel: 'dnslbl'
      domainNameLabelScope: 'TenantReuse'
    }
  }
}
```

## microsoft.network/publicipprefixes

Create public IP prefix allocation method
```bicep
resource exampleResource 'Microsoft.Network/publicIPPrefixes@2024-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    prefixLength: 30
    publicIPAddressVersion: 'IPv4'
  }
  sku: {
    name: 'Standard'
    tier: 'Regional'
  }
}
```

Create public IP prefix defaults
```bicep
resource exampleResource 'Microsoft.Network/publicIPPrefixes@2024-10-01' = {
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

Create public IP prefix defaults with StandardV2 Sku
```bicep
resource exampleResource 'Microsoft.Network/publicIPPrefixes@2024-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    prefixLength: 30
  }
  sku: {
    name: 'StandardV2'
  }
}
```

## microsoft.network/routefilters

RouteFilterCreate
```bicep
resource exampleResource 'Microsoft.Network/routeFilters@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
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
resource exampleResource 'Microsoft.Network/routeFilters/routeFilterRules@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/routeTables@2024-10-01' = {
  name: 'example'
  location: 'westus'
}
```

Create route table with route
```bicep
resource exampleResource 'Microsoft.Network/routeTables@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/routeTables/routes@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.3.0/24'
    nextHopType: 'VirtualNetworkGateway'
  }
}
```

## microsoft.network/securitypartnerproviders

Create Security Partner Provider
```bicep
resource exampleResource 'Microsoft.Network/securityPartnerProviders@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    securityProviderName: 'ZScaler'
    virtualHub: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/serviceendpointpolicies

Create service endpoint policy
```bicep
resource exampleResource 'Microsoft.Network/serviceEndpointPolicies@2024-10-01' = {
  name: 'example'
  location: 'westus'
}
```

Create service endpoint policy with definition
```bicep
resource exampleResource 'Microsoft.Network/serviceEndpointPolicies@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/virtualHubs@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    addressPrefix: '10.168.0.0/24'
    sku: 'Basic'
    virtualWan: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualWans/virtualWan1'
    }
  }
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/virtualhubs/bgpconnections

VirtualHubRouteTableV2Put
```bicep
resource exampleResource 'Microsoft.Network/virtualHubs/bgpConnections@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    hubVirtualNetworkConnection: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1/hubVirtualNetworkConnections/hubVnetConn1'
    }
    peerAsn: 20000
    peerIp: '192.168.1.5'
  }
}
```

## microsoft.network/virtualhubs/hubroutetables

RouteTablePut
```bicep
resource exampleResource 'Microsoft.Network/virtualHubs/hubRouteTables@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    labels: [
      'label1'
      'label2'
    ]
    routes: [
      {
        name: 'route1'
        destinationType: 'CIDR'
        destinations: [
          '10.0.0.0/8'
          '20.0.0.0/8'
          '30.0.0.0/8'
        ]
        nextHop: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azureFirewall1'
        nextHopType: 'ResourceId'
      }
    ]
  }
}
```

## microsoft.network/virtualhubs/hubvirtualnetworkconnections

HubVirtualNetworkConnectionPut
```bicep
resource exampleResource 'Microsoft.Network/virtualHubs/hubVirtualNetworkConnections@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enableInternetSecurity: false
    remoteVirtualNetwork: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/SpokeVnet1'
    }
    routingConfiguration: {
      associatedRouteTable: {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1'
      }
      inboundRouteMap: {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/routeMaps/routeMap1'
      }
      outboundRouteMap: {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/routeMaps/routeMap2'
      }
      propagatedRouteTables: {
        ids: [
          {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1'
          }
        ]
        labels: [
          'label1'
          'label2'
        ]
      }
      vnetRoutes: {
        staticRoutes: [
          {
            name: 'route1'
            addressPrefixes: [
              '10.1.0.0/16'
              '10.2.0.0/16'
            ]
            nextHopIpAddress: '10.0.0.68'
          }
          {
            name: 'route2'
            addressPrefixes: [
              '10.3.0.0/16'
              '10.4.0.0/16'
            ]
            nextHopIpAddress: '10.0.0.65'
          }
        ]
        staticRoutesConfig: {
          vnetLocalRouteOverrideCriteria: 'Equal'
        }
      }
    }
  }
}
```

## microsoft.network/virtualhubs/ipconfigurations

VirtualHubIpConfigurationPut
```bicep
resource exampleResource 'Microsoft.Network/virtualHubs/ipConfigurations@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    subnet: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/subnet1'
    }
  }
}
```

## microsoft.network/virtualhubs/routemaps

RouteMapPut
```bicep
resource exampleResource 'Microsoft.Network/virtualHubs/routeMaps@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    associatedInboundConnections: [
      '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/expressRouteGateways/exrGateway1/expressRouteConnections/exrConn1'
    ]
    associatedOutboundConnections: [
    ]
    rules: [
      {
        name: 'rule1'
        actions: [
          {
            type: 'Add'
            parameters: [
              {
                asPath: [
                  '22334'
                ]
                community: [
                ]
                routePrefix: [
                ]
              }
            ]
          }
        ]
        matchCriteria: [
          {
            asPath: [
            ]
            community: [
            ]
            matchCondition: 'Contains'
            routePrefix: [
              '10.0.0.0/8'
            ]
          }
        ]
        nextStepIfMatched: 'Continue'
      }
    ]
  }
}
```

## microsoft.network/virtualhubs/routetables

VirtualHubRouteTableV2Put
```bicep
resource exampleResource 'Microsoft.Network/virtualHubs/routeTables@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    attachedConnections: [
      'All_Vnets'
    ]
    routes: [
      {
        destinationType: 'CIDR'
        destinations: [
          '20.10.0.0/16'
          '20.20.0.0/16'
        ]
        nextHopType: 'IPAddress'
        nextHops: [
          '10.0.0.68'
        ]
      }
      {
        destinationType: 'CIDR'
        destinations: [
          '0.0.0.0/0'
        ]
        nextHopType: 'IPAddress'
        nextHops: [
          '10.0.0.68'
        ]
      }
    ]
  }
}
```

## microsoft.network/virtualhubs/routingintent

RouteTablePut
```bicep
resource exampleResource 'Microsoft.Network/virtualHubs/routingIntent@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    routingPolicies: [
      {
        name: 'InternetTraffic'
        destinations: [
          'Internet'
        ]
        nextHop: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azfw1'
      }
      {
        name: 'PrivateTrafficPolicy'
        destinations: [
          'PrivateTraffic'
        ]
        nextHop: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/azureFirewalls/azfw1'
      }
    ]
  }
}
```

## microsoft.network/virtualnetworkgateways

UpdateVirtualNetworkGateway
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworkGateways@2024-10-01' = {
  name: 'example'
  location: 'centralus'
  properties: {
    activeActive: false
    allowRemoteVnetTraffic: false
    allowVirtualWanTraffic: false
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
    disableIPSecReplayProtection: false
    enableBgp: false
    enableBgpRouteTranslationForNat: false
    enableDnsForwarding: true
    enableHighBandwidthVpnGateway: false
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
    natRules: [
      {
        name: 'natRule1'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/natRules/natRule1'
        properties: {
          type: 'Static'
          externalMappings: [
            {
              addressSpace: '50.0.0.0/24'
            }
          ]
          internalMappings: [
            {
              addressSpace: '10.10.0.0/24'
            }
          ]
          ipConfigurationId: ''
          mode: 'EgressSnat'
        }
      }
      {
        name: 'natRule2'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/vpngw/natRules/natRule2'
        properties: {
          type: 'Static'
          externalMappings: [
            {
              addressSpace: '30.0.0.0/24'
            }
          ]
          internalMappings: [
            {
              addressSpace: '20.10.0.0/24'
            }
          ]
          ipConfigurationId: ''
          mode: 'IngressSnat'
        }
      }
    ]
    sku: {
      name: 'VpnGw1'
      tier: 'VpnGw1'
    }
    vpnClientConfiguration: {
      radiusServers: [
        {
          radiusServerAddress: '10.2.0.0'
          radiusServerScore: 20
          radiusServerSecret: 'radiusServerSecret'
        }
      ]
      vpnClientProtocols: [
        'OpenVPN'
      ]
      vpnClientRevokedCertificates: [
      ]
      vpnClientRootCertificates: [
      ]
    }
    vpnType: 'RouteBased'
  }
}
```

UpdateVirtualNetworkScalableGateway
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworkGateways@2024-10-01' = {
  name: 'example'
  location: 'centralus'
  properties: {
    activeActive: false
    allowRemoteVnetTraffic: false
    allowVirtualWanTraffic: false
    bgpSettings: {
    }
    disableIPSecReplayProtection: false
    enableBgp: false
    enableBgpRouteTranslationForNat: false
    gatewayType: 'ExpressRoute'
    ipConfigurations: [
      {
        name: 'gwipconfig1'
        properties: {
          privateIPAllocationMethod: 'Static'
          publicIPAddress: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/publicIPAddresses/gwpip'
          }
          subnet: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/vnet1/subnets/GatewaySubnet'
          }
        }
      }
    ]
    natRules: [
      {
        name: 'natRule1'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/ergw/natRules/natRule1'
        properties: {
          type: 'Static'
          externalMappings: [
            {
              addressSpace: '50.0.0.0/24'
            }
          ]
          internalMappings: [
            {
              addressSpace: '10.10.0.0/24'
            }
          ]
          ipConfigurationId: ''
          mode: 'EgressSnat'
        }
      }
      {
        name: 'natRule2'
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworkGateways/ergw/natRules/natRule2'
        properties: {
          type: 'Static'
          externalMappings: [
            {
              addressSpace: '30.0.0.0/24'
            }
          ]
          internalMappings: [
            {
              addressSpace: '20.10.0.0/24'
            }
          ]
          ipConfigurationId: ''
          mode: 'IngressSnat'
        }
      }
    ]
    sku: {
      name: 'ErGwScale'
      tier: 'ErGwScale'
    }
    vpnClientConfiguration: {
    }
    vpnType: 'PolicyBased'
  }
}
```

## microsoft.network/virtualnetworks

Create virtual network
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
    flowTimeoutInMinutes: 10
  }
}
```

Create virtual network with Bgp Communities
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
    bgpCommunities: {
      virtualNetworkCommunity: '12076:20000'
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
resource exampleResource 'Microsoft.Network/virtualNetworks@2024-10-01' = {
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

Create virtual network with encryption
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
    encryption: {
      enabled: true
      enforcement: 'AllowUnencrypted'
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

Create virtual network with ipamPool
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2024-10-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressSpace: {
      ipamPoolPrefixAllocations: [
        {
          numberOfIpAddresses: '65536'
          pool: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/nm1/ipamPools/testIpamPool'
          }
        }
      ]
    }
    subnets: [
      {
        name: 'test-1'
        properties: {
          ipamPoolPrefixAllocations: [
            {
              numberOfIpAddresses: '80'
              pool: {
                id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/networkManagers/nm1/ipamPools/testIpamPool'
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
resource exampleResource 'Microsoft.Network/virtualNetworks@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/virtualNetworks@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/virtualNetworks@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/virtualNetworks@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
  }
}
```

Create subnet with a delegation
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
  }
}
```

Create subnet with service endpoints
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2024-10-01' = {
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

Create subnet with service endpoints with network identifier
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
    serviceEndpoints: [
      {
        networkIdentifier: {
          id: '/subscriptions/subid/resourceGroups/subnet-test/providers/Microsoft.Network/publicIPAddresses/test-ip'
        }
        service: 'Microsoft.Storage'
      }
    ]
  }
}
```

Create subnet with sharing scope
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2024-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
  }
}
```

## microsoft.network/virtualnetworktaps

Create Virtual Network Tap
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworkTaps@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/virtualRouters@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/virtualRouters/peerings@2024-10-01' = {
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
resource exampleResource 'Microsoft.Network/virtualWans@2024-10-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    type: 'Basic'
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
resource exampleResource 'Microsoft.Network/vpnGateways@2024-10-01' = {
  name: 'example'
  location: 'westcentralus'
  properties: {
    bgpSettings: {
      asn: 65515
      bgpPeeringAddresses: [
        {
          customBgpIpAddresses: [
            '169.254.21.5'
          ]
          ipconfigurationId: 'Instance0'
        }
        {
          customBgpIpAddresses: [
            '169.254.21.10'
          ]
          ipconfigurationId: 'Instance1'
        }
      ]
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
                egressNatRules: [
                  {
                    id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/vpnGateways/gateway1/natRules/nat03'
                  }
                ]
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
    enableBgpRouteTranslationForNat: false
    isRoutingPreferenceInternet: false
    natRules: [
      {
        name: 'nat03'
        properties: {
          type: 'Static'
          externalMappings: [
            {
              addressSpace: '192.168.0.0/26'
            }
          ]
          internalMappings: [
            {
              addressSpace: '0.0.0.0/26'
            }
          ]
          ipConfigurationId: ''
          mode: 'EgressSnat'
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
