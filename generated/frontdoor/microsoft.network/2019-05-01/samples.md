# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/frontdoors

Create or update specific Front Door
```bicep
resource exampleResource 'Microsoft.Network/frontDoors@2019-05-01' = {
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
