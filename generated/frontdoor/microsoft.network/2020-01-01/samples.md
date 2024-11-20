# Microsoft.Network

## microsoft.network/frontdoors

Create or update specific Front Door
```bicep
resource exampleResource 'Microsoft.Network/frontDoors@2020-01-01' = {
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
              address: '10.0.1.5'
              httpPort: 80
              httpsPort: 443
              priority: 1
              privateLinkAlias: 'SQLSERVER.d84e61f0-0870-4d24-9746-7438fa0019d1.westus2.azure.privatelinkservice'
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
            @odata.type: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration'
            backendPool: {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/backendPools/backendPool1'
            }
          }
          rulesEngine: {
            id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/frontDoors/frontDoor1/rulesEngines/rulesEngine1'
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
resource exampleResource 'Microsoft.Network/frontDoors/rulesEngines@2020-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    rules: [
      {
        name: 'Rule1'
        action: {
          routeConfigurationOverride: {
            @odata.type: '#Microsoft.Azure.FrontDoor.Models.FrontdoorRedirectConfiguration'
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
            @odata.type: '#Microsoft.Azure.FrontDoor.Models.FrontdoorForwardingConfiguration'
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
