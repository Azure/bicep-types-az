# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/frontdoorwebapplicationfirewallpolicies

Creates specific policy
```bicep
resource exampleResource 'Microsoft.Network/FrontDoorWebApplicationFirewallPolicies@2025-03-01' = {
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
