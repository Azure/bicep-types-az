# Microsoft.Network

## microsoft.network/loadbalancers

Create load balancer
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/loadBalancers@2017-08-01' = {
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

Create load balancer with Standard SKU
```bicep
resource exampleResource 'Microsoft.Network/loadBalancers@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/loadBalancers/inboundNatRules@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/networkInterfaces@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2017-08-01' = {
  name: 'example'
  location: 'eastus'
}
```

Create network security group with rule
```bicep
resource exampleResource 'Microsoft.Network/networkSecurityGroups@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/networkSecurityGroups/securityRules@2017-08-01' = {
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

Create Network Watcher
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers@2017-08-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
  }
}
```

## microsoft.network/networkwatchers/packetcaptures

Create Packet Capture
```bicep
resource exampleResource 'Microsoft.Network/networkWatchers/packetCaptures@2017-08-01' = {
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

Create public IP address DNS
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2017-08-01' = {
  name: 'example'
  location: 'eastus'
  properties: {
    dnsSettings: {
      domainNameLabel: 'dnslbl'
    }
  }
}
```

Create public IP address allocation method
```bicep
resource exampleResource 'Microsoft.Network/publicIPAddresses@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/publicIPAddresses@2017-08-01' = {
  name: 'example'
  location: 'eastus'
}
```

## microsoft.network/routefilters

RouteFilterCreate
```bicep
resource exampleResource 'Microsoft.Network/routeFilters@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/routeFilters/routeFilterRules@2017-08-01' = {
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
  tags: {
    key1: 'value1'
  }
}
```

## microsoft.network/routetables

Create route table
```bicep
resource exampleResource 'Microsoft.Network/routeTables@2017-08-01' = {
  name: 'example'
  location: 'westus'
}
```

Create route table with route
```bicep
resource exampleResource 'Microsoft.Network/routeTables@2017-08-01' = {
  name: 'example'
  location: 'westus'
  properties: {
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
resource exampleResource 'Microsoft.Network/routeTables/routes@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/virtualNetworks@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/virtualNetworks@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/virtualNetworks@2017-08-01' = {
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
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2017-08-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addressPrefix: '10.0.0.0/16'
  }
}
```

Create subnet with service endpoints
```bicep
resource exampleResource 'Microsoft.Network/virtualNetworks/subnets@2017-08-01' = {
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
