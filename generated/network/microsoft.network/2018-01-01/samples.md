# Microsoft.Network
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.network/applicationgateways

Create Application Gateway
```bicep
resource exampleResource 'Microsoft.Network/applicationGateways@2018-01-01' = {
  name: 'example'
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
          protocol: 'Https'
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
          ruleType: 'Basic'
        }
      }
    ]
    sku: {
      name: 'Standard_Medium'
      capacity: 3
      tier: 'Standard'
    }
    sslCertificates: [
      {
        name: 'sslcert'
        properties: {
          data: '****'
          password: '****'
        }
      }
    ]
  }
}
```

## microsoft.network/applicationsecuritygroups

Create application security group
```bicep
resource exampleResource 'Microsoft.Network/applicationSecurityGroups@2018-01-01' = {
  name: 'example'
  location: 'westus'
  properties: {
  }
}
```

## microsoft.network/loadbalancers

Create load balancer
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2018-01-01' = {
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
    outboundNatRules: [
    ]
    probes: [
      {
        name: 'probe-lb'
        properties: {
          intervalInSeconds: 15
          numberOfProbes: 2
          port: 80
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
resource exampleResource 'Microsoft.Network/loadBalancers@2018-01-01' = {
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
    outboundNatRules: [
    ]
    probes: [
      {
        name: 'probe-lb'
        properties: {
          intervalInSeconds: 15
          numberOfProbes: 2
          port: 80
          requestPath: 'healthcheck.aspx'
          protocol: 'Http'
        }
      }
    ]
  }
}
```

Create load balancer with inbound nat pool
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2018-01-01' = {
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
            properties: {
              resourceNavigationLinks: [
              ]
              serviceEndpoints: [
              ]
            }
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
    outboundNatRules: [
    ]
    probes: [
    ]
  }
}
```

Create load balancer with Standard SKU
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2018-01-01' = {
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
    outboundNatRules: [
    ]
    probes: [
      {
        name: 'probe-lb'
        properties: {
          intervalInSeconds: 15
          numberOfProbes: 2
          port: 80
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

## microsoft.network/loadbalancers/inboundnatrules

InboundNatRuleCreate
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers/inboundNatRules@2018-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    backendPort: 3389
    enableFloatingIP: false
    frontendIPConfiguration: {
      id: '/subscriptions/subid/resourceGroups/testrg/providers/Microsoft.Network/loadBalancers/lb1/frontendIPConfigurations/ip1'
    }
    frontendPort: 3390
    idleTimeoutInMinutes: 4
    protocol: 'Tcp'
  }
}
```

## microsoft.network/networkinterfaces

Create network interface
```bicep
resource exampleResource 'Microsoft.Network/networkInterfaces@2018-01-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
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
    ]
  }
}
```

## microsoft.network/networksecuritygroups

Create network security group
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2018-01-01' = {
  name: 'example'
  location: 'eastus'
}
```

Create network security group with rule
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2018-01-01' = {
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
resource exampleResource 'Microsoft.Network/networkSecurityGroups/securityRules@2018-01-01' = {
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

## microsoft.network/networkwatchers

Create network watcher
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers@2018-01-01' = {
  name: 'example'
  location: 'eastus'
}
```

## microsoft.network/networkwatchers/connectionmonitors

Create connection monitor
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/connectionMonitors@2018-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: {
      address: 'bing.com'
      port: 80
    }
    monitoringIntervalInSeconds: 60
    source: {
      resourceId: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1'
    }
  }
}
```

## microsoft.network/networkwatchers/packetcaptures

Create packet capture
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/packetCaptures@2018-01-01' = {
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

## microsoft.network/publicipaddresses

Create public IP address allocation method
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2018-01-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    idleTimeoutInMinutes: 10
    publicIPAddressVersion: 'IPv4'
    publicIPAllocationMethod: 'Static'
  }
  sku: {
    name: 'Standard'
  }
}
```

Create public IP address defaults
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2018-01-01' = {
  name: 'example'
  location: 'eastus'
}
```

Create public IP address DNS
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2018-01-01' = {
  name: 'example'
  properties: {
    dnsSettings: {
      domainNameLabel: 'dnslbl'
    }
  }
}
```

## microsoft.network/routefilters

RouteFilterCreate
```bicep
resource exampleResource 'Microsoft.Network/routeFilters@2018-01-01' = {
  name: 'example'
  location: 'West US'
  properties: {
    peerings: [
    ]
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
resource exampleResource 'Microsoft.Network/routeFilters/routeFilterRules@2018-01-01' = {
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
resource exampleResource 'Microsoft.Network/routeTables@2018-01-01' = {
  name: 'example'
  location: 'westus'
}
```

Create route table with route
```bicep
resource exampleResource 'Microsoft.Network/routeTables@2018-01-01' = {
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
resource exampleResource 'Microsoft.Network/routeTables/routes@2018-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.3.0/24'
    nextHopType: 'VirtualNetworkGateway'
  }
}
```

## microsoft.network/virtualnetworks

Create virtual network
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2018-01-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
  }
}
```

Create virtual network with service endpoints
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2018-01-01' = {
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

Create virtual network with subnet
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks@2018-01-01' = {
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

## microsoft.network/virtualnetworks/subnets

Create subnet
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2018-01-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
  }
}
```

Create subnet with service endpoints
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2018-01-01' = {
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
