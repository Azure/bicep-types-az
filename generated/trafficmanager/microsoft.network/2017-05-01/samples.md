# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/trafficmanagerprofiles

Profile-PUT-NoEndpoints
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles@2017-05-01' = {
  name: 'example'
  location: 'global'
  properties: {
    dnsConfig: {
      relativeName: 'azsmnet6386'
      ttl: 35
    }
    monitorConfig: {
      path: '/testpath.aspx'
      port: 80
      protocol: 'HTTP'
    }
    profileStatus: 'Enabled'
    trafficRoutingMethod: 'Performance'
  }
}
```

Profile-PUT-WithEndpoints
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles@2017-05-01' = {
  name: 'example'
  location: 'global'
  properties: {
    dnsConfig: {
      relativeName: 'azuresdkfornetautoresttrafficmanager6192'
      ttl: 35
    }
    endpoints: [
      {
        name: 'My external endpoint'
        type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
        properties: {
          endpointLocation: 'North Europe'
          endpointStatus: 'Enabled'
          target: 'foobar.contoso.com'
        }
      }
    ]
    monitorConfig: {
      path: '/testpath.aspx'
      intervalInSeconds: 10
      port: 80
      timeoutInSeconds: 5
      toleratedNumberOfFailures: 2
      protocol: 'HTTP'
    }
    profileStatus: 'Enabled'
    trafficRoutingMethod: 'Performance'
  }
}
```
