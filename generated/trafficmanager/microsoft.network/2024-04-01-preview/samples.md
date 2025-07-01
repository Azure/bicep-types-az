# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/trafficmanagerprofiles

Profile-PUT-MultiValue
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles@2024-04-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    dnsConfig: {
      relativeName: 'azsmnet6386'
      ttl: 35
    }
    maxReturn: 2
    monitorConfig: {
      path: '/testpath.aspx'
      port: 80
      protocol: 'HTTP'
    }
    profileStatus: 'Enabled'
    trafficRoutingMethod: 'MultiValue'
    trafficViewEnrollmentStatus: 'Disabled'
  }
}
```

Profile-PUT-NoEndpoints
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles@2024-04-01-preview' = {
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

Profile-PUT-WithAliasing
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles@2024-04-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    allowedEndpointRecordTypes: [
      'DomainName'
    ]
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

Profile-PUT-WithCustomHeaders
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles@2024-04-01-preview' = {
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
          customHeaders: [
            {
              name: 'header-2'
              value: 'value-2-overridden'
            }
          ]
          endpointLocation: 'North Europe'
          endpointStatus: 'Enabled'
          target: 'foobar.contoso.com'
        }
      }
    ]
    monitorConfig: {
      path: '/testpath.aspx'
      customHeaders: [
        {
          name: 'header-1'
          value: 'value-1'
        }
        {
          name: 'header-2'
          value: 'value-2'
        }
      ]
      expectedStatusCodeRanges: [
        {
          max: 205
          min: 200
        }
        {
          max: 410
          min: 400
        }
      ]
      intervalInSeconds: 10
      port: 80
      timeoutInSeconds: 5
      toleratedNumberOfFailures: 2
      protocol: 'HTTP'
    }
    profileStatus: 'Enabled'
    trafficRoutingMethod: 'Performance'
    trafficViewEnrollmentStatus: 'Disabled'
  }
}
```

Profile-PUT-WithEndpoints
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles@2024-04-01-preview' = {
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

Profile-PUT-WithEndpointsAndRecordType
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles@2024-04-01-preview' = {
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
    recordType: 'CNAME'
    trafficRoutingMethod: 'Performance'
  }
}
```

Profile-PUT-WithNestedEndpoints
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles@2024-04-01-preview' = {
  name: 'example'
  location: 'global'
  properties: {
    dnsConfig: {
      relativeName: 'parentprofile'
      ttl: 35
    }
    endpoints: [
      {
        name: 'MyFirstNestedEndpoint'
        type: 'Microsoft.Network/trafficManagerProfiles/nestedEndpoints'
        properties: {
          endpointStatus: 'Enabled'
          minChildEndpoints: 2
          minChildEndpointsIPv4: 1
          minChildEndpointsIPv6: 2
          priority: 1
          target: 'firstnestedprofile.tmpreview.watmtest.azure-test.net'
          weight: 1
        }
      }
      {
        name: 'MySecondNestedEndpoint'
        type: 'Microsoft.Network/trafficManagerProfiles/nestedEndpoints'
        properties: {
          endpointStatus: 'Enabled'
          minChildEndpoints: 2
          minChildEndpointsIPv4: 2
          minChildEndpointsIPv6: 1
          priority: 2
          target: 'secondnestedprofile.tmpreview.watmtest.azure-test.net'
          weight: 1
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
    trafficRoutingMethod: 'Priority'
  }
}
```

## microsoft.network/trafficmanagerprofiles/azureendpoints

Endpoint-PUT-External-WithAlwaysServe
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'azsmnet7187'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    alwaysServe: 'Enabled'
    endpointLocation: 'North Europe'
    endpointStatus: 'Enabled'
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithCustomHeaders
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'azsmnet7187'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    customHeaders: [
      {
        name: 'header-1'
        value: 'value-1'
      }
      {
        name: 'header-2'
        value: 'value-2'
      }
    ]
    endpointLocation: 'North Europe'
    endpointStatus: 'Enabled'
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithGeoMapping
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'My external endpoint'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    endpointStatus: 'Enabled'
    geoMapping: [
      'GEO-AS'
      'GEO-AF'
    ]
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithLocation
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'azsmnet7187'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    endpointLocation: 'North Europe'
    endpointStatus: 'Enabled'
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithSubnetMapping
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/AzureEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'My external endpoint'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    endpointStatus: 'Enabled'
    subnets: [
      {
        first: '1.2.3.0'
        scope: 24
      }
      {
        first: '25.26.27.28'
        last: '29.30.31.32'
      }
    ]
    target: 'foobar.contoso.com'
  }
}
```

## microsoft.network/trafficmanagerprofiles/externalendpoints

Endpoint-PUT-External-WithAlwaysServe
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'azsmnet7187'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    alwaysServe: 'Enabled'
    endpointLocation: 'North Europe'
    endpointStatus: 'Enabled'
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithCustomHeaders
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'azsmnet7187'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    customHeaders: [
      {
        name: 'header-1'
        value: 'value-1'
      }
      {
        name: 'header-2'
        value: 'value-2'
      }
    ]
    endpointLocation: 'North Europe'
    endpointStatus: 'Enabled'
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithGeoMapping
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'My external endpoint'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    endpointStatus: 'Enabled'
    geoMapping: [
      'GEO-AS'
      'GEO-AF'
    ]
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithLocation
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'azsmnet7187'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    endpointLocation: 'North Europe'
    endpointStatus: 'Enabled'
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithSubnetMapping
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/ExternalEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'My external endpoint'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    endpointStatus: 'Enabled'
    subnets: [
      {
        first: '1.2.3.0'
        scope: 24
      }
      {
        first: '25.26.27.28'
        last: '29.30.31.32'
      }
    ]
    target: 'foobar.contoso.com'
  }
}
```

## microsoft.network/trafficmanagerprofiles/nestedendpoints

Endpoint-PUT-External-WithAlwaysServe
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'azsmnet7187'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    alwaysServe: 'Enabled'
    endpointLocation: 'North Europe'
    endpointStatus: 'Enabled'
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithCustomHeaders
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'azsmnet7187'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    customHeaders: [
      {
        name: 'header-1'
        value: 'value-1'
      }
      {
        name: 'header-2'
        value: 'value-2'
      }
    ]
    endpointLocation: 'North Europe'
    endpointStatus: 'Enabled'
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithGeoMapping
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'My external endpoint'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    endpointStatus: 'Enabled'
    geoMapping: [
      'GEO-AS'
      'GEO-AF'
    ]
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithLocation
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'azsmnet7187'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    endpointLocation: 'North Europe'
    endpointStatus: 'Enabled'
    target: 'foobar.contoso.com'
  }
}
```

Endpoint-PUT-External-WithSubnetMapping
```bicep
resource exampleResource 'Microsoft.Network/trafficmanagerprofiles/NestedEndpoints@2024-04-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'My external endpoint'
  type: 'Microsoft.network/TrafficManagerProfiles/ExternalEndpoints'
  properties: {
    endpointStatus: 'Enabled'
    subnets: [
      {
        first: '1.2.3.0'
        scope: 24
      }
      {
        first: '25.26.27.28'
        last: '29.30.31.32'
      }
    ]
    target: 'foobar.contoso.com'
  }
}
```
