# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/frontdoors

Create or update specific Front Door
```bicep
resource exampleResource 'Microsoft.Network/frontDoors@2025-10-01' = {
  name: 'example'
  location: 'westus'
  properties: {
    backendPools: [
      {
        name: 'backendPool1'
        properties: {
          backends: [
            {
              address: 'w3.contoso.com'
              httpPort: 80
              httpsPort: 443
              priority: 2
              weight: 1
            }
            {
              address: 'contoso.com.website-us-west-2.othercloud.net'
              httpPort: 80
              httpsPort: 443
              priority: 1
              privateLinkApprovalMessage: 'Please approve the connection request for this Private Link'
              privateLinkLocation: 'eastus'
              privateLinkResourceId: '/subscriptions/subid/resourcegroups/rg1/providers/Microsoft.Network/privateLinkServices/pls1'
              weight: 2
            }
            {
              address: '10.0.1.5'
              httpPort: 80
              httpsPort: 443
              priority: 1
              privateLinkAlias: 'APPSERVER.d84e61f0-0870-4d24-9746-7438fa0019d1.westus2.azure.privatelinkservice'
              privateLinkApprovalMessage: 'Please approve this request to connect to the Private Link'
              weight: 1
            }
          ]
          healthProbeSettings: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/healthProbeSettings/healthProbeSettings1'
          }
          loadBalancingSettings: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/loadBalancingSettings/loadBalancingSettings1'
          }
        }
      }
    ]
    backendPoolsSettings: {
      enforceCertificateNameCheck: 'Enabled'
      sendRecvTimeoutSeconds: 60
    }
    enabledState: 'Enabled'
    frontendEndpoints: [
      {
        name: 'frontendEndpoint1'
        properties: {
          hostName: 'www.contoso.com'
          sessionAffinityEnabledState: 'Enabled'
          sessionAffinityTtlSeconds: 60
          webApplicationFirewallPolicyLink: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoorWebApplicationFirewallPolicies/policy1'
          }
        }
      }
      {
        name: 'default'
        properties: {
          hostName: 'frontDoor1.azurefd.net'
        }
      }
    ]
    healthProbeSettings: [
      {
        name: 'healthProbeSettings1'
        properties: {
          path: '/'
          enabledState: 'Enabled'
          healthProbeMethod: 'HEAD'
          intervalInSeconds: 120
          protocol: 'Http'
        }
      }
    ]
    loadBalancingSettings: [
      {
        name: 'loadBalancingSettings1'
        properties: {
          sampleSize: 4
          successfulSamplesRequired: 2
        }
      }
    ]
    routingRules: [
      {
        name: 'routingRule1'
        properties: {
          acceptedProtocols: [
            'Http'
          ]
          enabledState: 'Enabled'
          frontendEndpoints: [
            {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/frontendEndpoints/frontendEndpoint1'
            }
            {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/frontendEndpoints/default'
            }
          ]
          patternsToMatch: [
            '/*'
          ]
          routeConfiguration: {
            '@odata.type': '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration'
            backendPool: {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/backendPools/backendPool1'
            }
          }
          rulesEngine: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/rulesEngines/rulesEngine1'
          }
          webApplicationFirewallPolicyLink: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoorWebApplicationFirewallPolicies/policy1'
          }
        }
      }
    ]
  }
  tags: {
    tag1: 'value1'
    tag2: 'value2'
  }
}
```

## microsoft.network/frontdoors/rulesengines

Create or update a specific Rules Engine Configuration
```bicep
resource exampleResource 'Microsoft.Network/frontDoors/rulesEngines@2025-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    rules: [
      {
        name: 'Rule1'
        action: {
          routeConfigurationOverride: {
            '@odata.type': '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration'
            customFragment: 'fragment'
            customHost: 'www.bing.com'
            customPath: '/api'
            customQueryString: 'a=b'
            redirectProtocol: 'HttpsOnly'
            redirectType: 'Moved'
          }
        }
        matchConditions: [
          {
            rulesEngineMatchValue: [
              'CH'
            ]
            rulesEngineMatchVariable: 'RemoteAddr'
            rulesEngineOperator: 'GeoMatch'
          }
        ]
        matchProcessingBehavior: 'Stop'
        priority: 1
      }
      {
        name: 'Rule2'
        action: {
          responseHeaderActions: [
            {
              headerActionType: 'Overwrite'
              headerName: 'Cache-Control'
              value: 'public, max-age=31536000'
            }
          ]
        }
        matchConditions: [
          {
            rulesEngineMatchValue: [
              'jpg'
            ]
            rulesEngineMatchVariable: 'RequestFilenameExtension'
            rulesEngineOperator: 'Equal'
            transforms: [
              'Lowercase'
            ]
          }
        ]
        priority: 2
      }
      {
        name: 'Rule3'
        action: {
          routeConfigurationOverride: {
            '@odata.type': '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration'
            backendPool: {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/backendPools/backendPool1'
            }
            cacheConfiguration: {
              cacheDuration: 'P1DT12H20M30S'
              dynamicCompression: 'Disabled'
              queryParameterStripDirective: 'StripOnly'
              queryParameters: 'a=b,p=q'
            }
            customForwardingPath: {
            }
            forwardingProtocol: 'HttpsOnly'
          }
        }
        matchConditions: [
          {
            negateCondition: false
            rulesEngineMatchValue: [
              'allowoverride'
            ]
            rulesEngineMatchVariable: 'RequestHeader'
            rulesEngineOperator: 'Equal'
            selector: 'Rules-Engine-Route-Forward'
            transforms: [
              'Lowercase'
            ]
          }
        ]
        priority: 3
      }
    ]
  }
}
```

## microsoft.network/frontdoorwebapplicationfirewallpolicies

Creates specific policy
```bicep
resource exampleResource 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2025-10-01' = {
  name: 'example'
  location: 'WestUs'
  properties: {
    customRules: {
      rules: [
        {
          name: 'Rule1'
          action: 'Block'
          matchConditions: [
            {
              matchValue: [
                '192.168.1.0/24'
                '10.0.0.0/24'
              ]
              matchVariable: 'RemoteAddr'
              operator: 'IPMatch'
            }
          ]
          priority: 1
          rateLimitThreshold: 1000
          ruleType: 'RateLimitRule'
        }
        {
          name: 'Rule2'
          action: 'Block'
          matchConditions: [
            {
              matchValue: [
                'CH'
              ]
              matchVariable: 'RemoteAddr'
              operator: 'GeoMatch'
            }
            {
              matchValue: [
                'windows'
              ]
              matchVariable: 'RequestHeader'
              operator: 'Contains'
              selector: 'UserAgent'
              transforms: [
                'Lowercase'
              ]
            }
          ]
          priority: 2
          ruleType: 'MatchRule'
        }
        {
          name: 'Rule3'
          action: 'CAPTCHA'
          matchConditions: [
            {
              matchValue: [
                'AzureBackup'
                'AzureBotService'
              ]
              matchVariable: 'RemoteAddr'
              operator: 'ServiceTagMatch'
            }
          ]
          priority: 1
          rateLimitThreshold: 1000
          ruleType: 'RateLimitRule'
        }
      ]
    }
    managedRules: {
      managedRuleSets: [
        {
          exclusions: [
            {
              matchVariable: 'RequestHeaderNames'
              selector: 'User-Agent'
              selectorMatchOperator: 'Equals'
            }
          ]
          ruleGroupOverrides: [
            {
              exclusions: [
                {
                  matchVariable: 'RequestCookieNames'
                  selector: 'token'
                  selectorMatchOperator: 'StartsWith'
                }
              ]
              ruleGroupName: 'SQLI'
              rules: [
                {
                  action: 'Redirect'
                  enabledState: 'Enabled'
                  exclusions: [
                    {
                      matchVariable: 'QueryStringArgNames'
                      selector: 'query'
                      selectorMatchOperator: 'Equals'
                    }
                  ]
                  ruleId: '942100'
                }
                {
                  enabledState: 'Disabled'
                  ruleId: '942110'
                }
              ]
            }
          ]
          ruleSetAction: 'Block'
          ruleSetType: 'DefaultRuleSet'
          ruleSetVersion: '1.0'
        }
        {
          ruleGroupOverrides: [
            {
              ruleGroupName: 'ExcessiveRequests'
              rules: [
                {
                  action: 'Block'
                  enabledState: 'Enabled'
                  ruleId: '500100'
                  sensitivity: 'High'
                }
              ]
            }
          ]
          ruleSetType: 'Microsoft_HTTPDDoSRuleSet'
          ruleSetVersion: '1.0'
        }
      ]
    }
    policySettings: {
      captchaExpirationInMinutes: 30
      customBlockResponseBody: 'PGh0bWw+CjxoZWFkZXI+PHRpdGxlPkhlbGxvPC90aXRsZT48L2hlYWRlcj4KPGJvZHk+CkhlbGxvIHdvcmxkCjwvYm9keT4KPC9odG1sPg=='
      customBlockResponseStatusCode: 429
      enabledState: 'Enabled'
      javascriptChallengeExpirationInMinutes: 30
      logScrubbing: {
        scrubbingRules: [
          {
            matchVariable: 'RequestIPAddress'
            selector: {
            }
            selectorMatchOperator: 'EqualsAny'
            state: 'Enabled'
          }
        ]
        state: 'Enabled'
      }
      mode: 'Prevention'
      redirectUrl: 'http://www.bing.com'
      requestBodyCheck: 'Disabled'
    }
  }
  sku: {
    name: 'Premium_AzureFrontDoor'
  }
}
```

## microsoft.network/networkexperimentprofiles

Creates an NetworkExperiment Profile in a Resource Group
```bicep
resource exampleResource 'Microsoft.Network/NetworkExperimentProfiles@2025-10-01' = {
  name: 'example'
  location: 'WestUs'
  properties: {
    enabledState: 'Enabled'
  }
}
```

## microsoft.network/networkexperimentprofiles/experiments

Creates an Experiment
```bicep
resource exampleResource 'Microsoft.Network/NetworkExperimentProfiles/Experiments@2025-10-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    description: 'this is my first experiment!'
    enabledState: 'Enabled'
    endpointA: {
      name: 'endpoint A'
      endpoint: 'endpointA.net'
    }
    endpointB: {
      name: 'endpoint B'
      endpoint: 'endpointB.net'
    }
  }
}
```
