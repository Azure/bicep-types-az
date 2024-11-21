# Microsoft.Network

## microsoft.network/frontdoorwebapplicationfirewallpolicies

Creates specific policy
```bicep
resource exampleResource 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2020-11-01' = {
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
      ]
    }
    policySettings: {
      customBlockResponseBody: 'PGh0bWw+CjxoZWFkZXI+PHRpdGxlPkhlbGxvPC90aXRsZT48L2hlYWRlcj4KPGJvZHk+CkhlbGxvIHdvcmxkCjwvYm9keT4KPC9odG1sPg=='
      customBlockResponseStatusCode: 499
      enabledState: 'Enabled'
      mode: 'Prevention'
      redirectUrl: 'http://www.bing.com'
      requestBodyCheck: 'Disabled'
    }
  }
  sku: {
    name: 'Classic_AzureFrontDoor'
  }
}
```
