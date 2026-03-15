# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/frontdoors

Create or update specific Front Door
```bicep
resource exampleResource 'Microsoft.Network/frontDoors@2018-08-01' = {
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
              weight: 2
            }
            {
              address: 'contoso1.azurewebsites.net'
              httpPort: 80
              httpsPort: 443
              priority: 1
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
          backendPool: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/backendPools/backendPool1'
          }
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

## microsoft.network/frontdoorwebapplicationfirewallpolicies

Creates specific policy
```bicep
resource exampleResource 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2018-08-01' = {
  name: 'example'
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
                'Windows'
              ]
              matchVariable: 'RequestHeader'
              operator: 'Contains'
              selector: 'UserAgent'
            }
          ]
          priority: 2
          ruleType: 'MatchRule'
        }
      ]
    }
    managedRules: {
      ruleSets: [
        {
          priority: 1
          ruleGroupOverrides: [
            {
              action: 'Block'
              ruleGroupOverride: 'SqlInjection'
            }
            {
              action: 'Log'
              ruleGroupOverride: 'XSS'
            }
          ]
          ruleSetType: 'AzureManagedRuleSet'
        }
      ]
    }
  }
}
```
