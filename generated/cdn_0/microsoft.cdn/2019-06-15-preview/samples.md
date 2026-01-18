# Microsoft.Cdn
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.cdn/cdnwebapplicationfirewallpolicies

Creates specific policy
```bicep
resource exampleResource 'Microsoft.Cdn/CdnWebApplicationFirewallPolicies@2019-06-15-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    customRules: {
      rules: [
        {
          name: 'CustomRule1'
          action: 'Block'
          enabledState: 'Enabled'
          matchConditions: [
            {
              matchValue: [
                'CH'
              ]
              matchVariable: 'RemoteAddr'
              negateCondition: false
              operator: 'GeoMatch'
              selector: {
              }
              transforms: [
              ]
            }
            {
              matchValue: [
                'windows'
              ]
              matchVariable: 'RequestHeader'
              negateCondition: false
              operator: 'Contains'
              selector: 'UserAgent'
              transforms: [
              ]
            }
            {
              matchValue: [
                '<?php'
                '?>'
              ]
              matchVariable: 'QueryString'
              negateCondition: false
              operator: 'Contains'
              selector: 'search'
              transforms: [
                'UrlDecode'
                'Lowercase'
              ]
            }
          ]
          priority: 2
        }
      ]
    }
    managedRules: {
      managedRuleSets: [
        {
          ruleGroupOverrides: [
            {
              ruleGroupName: 'Group1'
              rules: [
                {
                  action: 'Redirect'
                  enabledState: 'Enabled'
                  ruleId: 'GROUP1-0001'
                }
                {
                  enabledState: 'Disabled'
                  ruleId: 'GROUP1-0002'
                }
              ]
            }
          ]
          ruleSetType: 'DefaultRuleSet'
          ruleSetVersion: 'preview-1.0'
        }
      ]
    }
    policySettings: {
      defaultCustomBlockResponseBody: 'PGh0bWw+CjxoZWFkZXI+PHRpdGxlPkhlbGxvPC90aXRsZT48L2hlYWRlcj4KPGJvZHk+CkhlbGxvIHdvcmxkCjwvYm9keT4KPC9odG1sPg=='
      defaultCustomBlockResponseStatusCode: 200
      defaultRedirectUrl: 'http://www.bing.com'
    }
    rateLimitRules: {
      rules: [
        {
          name: 'RateLimitRule1'
          action: 'Block'
          enabledState: 'Enabled'
          matchConditions: [
            {
              matchValue: [
                '192.168.1.0/24'
                '10.0.0.0/24'
              ]
              matchVariable: 'RemoteAddr'
              negateCondition: false
              operator: 'IPMatch'
              selector: {
              }
              transforms: [
              ]
            }
          ]
          priority: 1
          rateLimitDurationInMinutes: 0
          rateLimitThreshold: 1000
        }
      ]
    }
  }
  sku: {
    name: 'Standard_Microsoft'
  }
}
```

## microsoft.cdn/profiles

Profiles_Create
```bicep
resource exampleResource 'Microsoft.Cdn/profiles@2019-06-15-preview' = {
  name: 'example'
  location: 'WestCentralUs'
  sku: {
    name: 'Standard_Verizon'
  }
}
```

## microsoft.cdn/profiles/endpoints

Endpoints_Create
```bicep
resource exampleResource 'Microsoft.Cdn/profiles/endpoints@2019-06-15-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'WestUs'
  properties: {
    contentTypesToCompress: [
      'text/html'
      'application/octet-stream'
    ]
    deliveryPolicy: {
      description: 'Test description for a policy.'
      rules: [
        {
          name: 'rule1'
          actions: [
            {
              name: 'CacheExpiration'
              parameters: {
                '@odata.type': '#Microsoft.Azure.Cdn.Models.DeliveryRuleCacheExpirationActionParameters'
                cacheBehavior: 'Override'
                cacheDuration: '10:10:09'
                cacheType: 'All'
              }
            }
            {
              name: 'ModifyResponseHeader'
              parameters: {
                '@odata.type': '#Microsoft.Azure.Cdn.Models.DeliveryRuleHeaderActionParameters'
                headerAction: 'Overwrite'
                headerName: 'Access-Control-Allow-Origin'
                value: '*'
              }
            }
            {
              name: 'ModifyRequestHeader'
              parameters: {
                '@odata.type': '#Microsoft.Azure.Cdn.Models.DeliveryRuleHeaderActionParameters'
                headerAction: 'Overwrite'
                headerName: 'Accept-Encoding'
                value: 'gzip'
              }
            }
          ]
          conditions: [
            {
              name: 'RemoteAddress'
              parameters: {
                '@odata.type': '#Microsoft.Azure.Cdn.Models.DeliveryRuleRemoteAddressConditionParameters'
                matchValues: [
                  '192.168.1.0/24'
                  '10.0.0.0/24'
                ]
                negateCondition: true
                operator: 'IPMatch'
              }
            }
          ]
          order: 1
        }
      ]
    }
    isCompressionEnabled: true
    isHttpAllowed: true
    isHttpsAllowed: true
    originHostHeader: 'www.bing.com'
    originPath: '/photos'
    origins: [
      {
        name: 'origin1'
        properties: {
          hostName: 'host1.hello.com'
        }
      }
    ]
    queryStringCachingBehavior: 'BypassCaching'
    webApplicationFirewallPolicyLink: {
      id: '/subscriptions/subid/resourceGroups/RG/providers/Microsoft.Cdn/CdnWebApplicationFirewallPolicies/cdnWafPolicy1'
    }
  }
  tags: {
    kay1: 'value1'
  }
}
```

## microsoft.cdn/profiles/endpoints/customdomains

CustomDomains_Create
```bicep
resource exampleResource 'Microsoft.Cdn/profiles/endpoints/customDomains@2019-06-15-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    hostName: 'www.someDomain.net'
  }
}
```
