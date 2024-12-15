# Microsoft.MobileNetwork
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


## microsoft.mobilenetwork/mobilenetworks

Create mobile network
```bicep
resource exampleResource 'Microsoft.MobileNetwork/mobileNetworks@2022-03-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    publicLandMobileNetworkIdentifier: {
      mcc: '001'
      mnc: '01'
    }
  }
}
```

## microsoft.mobilenetwork/mobilenetworks/datanetworks

Create mobile network dataNetwork
```bicep
resource exampleResource 'Microsoft.MobileNetwork/mobileNetworks/dataNetworks@2022-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'myFavouriteDataNetwork'
  }
}
```

## microsoft.mobilenetwork/mobilenetworks/services

Create service
```bicep
resource exampleResource 'Microsoft.MobileNetwork/mobileNetworks/services@2022-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    pccRules: [
      {
        ruleName: 'default-rule'
        rulePrecedence: 255
        ruleQosPolicy: {
          '5qi': 9
          allocationAndRetentionPriorityLevel: 9
          maximumBitRate: {
            downlink: '1 Gbps'
            uplink: '500 Mbps'
          }
          preemptionCapability: 'NotPreempt'
          preemptionVulnerability: 'Preemptable'
        }
        serviceDataFlowTemplates: [
          {
            direction: 'Uplink'
            ports: [
            ]
            remoteIpList: [
              '10.3.4.0/24'
            ]
            templateName: 'IP-to-server'
            protocol: [
              'ip'
            ]
          }
        ]
        trafficControl: 'Enabled'
      }
    ]
    servicePrecedence: 255
    serviceQosPolicy: {
      '5qi': 9
      allocationAndRetentionPriorityLevel: 9
      maximumBitRate: {
        downlink: '1 Gbps'
        uplink: '500 Mbps'
      }
      preemptionCapability: 'NotPreempt'
      preemptionVulnerability: 'Preemptable'
    }
  }
}
```

## microsoft.mobilenetwork/mobilenetworks/simpolicies

Create sim policy
```bicep
resource exampleResource 'Microsoft.MobileNetwork/mobileNetworks/simPolicies@2022-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    defaultSlice: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/slices/testSlice'
    }
    registrationTimer: 3240
    sliceConfigurations: [
      {
        dataNetworkConfigurations: [
          {
            '5qi': 9
            additionalAllowedSessionTypes: [
            ]
            allocationAndRetentionPriorityLevel: 9
            allowedServices: [
              {
                id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/services/testService'
              }
            ]
            dataNetwork: {
              id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/dataNetworks/testdataNetwork'
            }
            defaultSessionType: 'IPv4'
            preemptionCapability: 'NotPreempt'
            preemptionVulnerability: 'Preemptable'
            sessionAmbr: {
              downlink: '1 Gbps'
              uplink: '500 Mbps'
            }
          }
        ]
        defaultDataNetwork: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/dataNetworks/testdataNetwork'
        }
        slice: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/slices/testSlice'
        }
      }
    ]
    ueAmbr: {
      downlink: '1 Gbps'
      uplink: '500 Mbps'
    }
  }
}
```

## microsoft.mobilenetwork/mobilenetworks/sites

Create mobile network site
```bicep
resource exampleResource 'Microsoft.MobileNetwork/mobileNetworks/sites@2022-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'testLocation'
  properties: {
    networkFunctions: [
      {
        id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.HybridNetwork/networkFunctions/testNf'
      }
    ]
  }
}
```

## microsoft.mobilenetwork/mobilenetworks/slices

Create mobile network slice
```bicep
resource exampleResource 'Microsoft.MobileNetwork/mobileNetworks/slices@2022-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    description: 'myFavouriteSlice'
    snssai: {
      sd: '1abcde'
      sst: 1
    }
  }
}
```

## microsoft.mobilenetwork/packetcorecontrolplanes

Create packet core control plane
```bicep
resource exampleResource 'Microsoft.MobileNetwork/packetCoreControlPlanes@2022-03-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    controlPlaneAccessInterface: {
      name: 'N2'
    }
    coreNetworkTechnology: '5GC'
    customLocation: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.ExtendedLocation/customLocations/TestCustomLocation'
    }
    mobileNetwork: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork'
    }
    version: '0.2.0'
  }
}
```

## microsoft.mobilenetwork/packetcorecontrolplanes/packetcoredataplanes

Create packet core data plane
```bicep
resource exampleResource 'Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes@2022-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    userPlaneAccessInterface: {
      name: 'N3'
    }
  }
}
```

## microsoft.mobilenetwork/packetcorecontrolplanes/packetcoredataplanes/attacheddatanetworks

Create attached data network
```bicep
resource exampleResource 'Microsoft.MobileNetwork/packetCoreControlPlanes/packetCoreDataPlanes/attachedDataNetworks@2022-03-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    naptConfiguration: {
      enabled: 'Enabled'
      pinholeLimits: 65536
      pinholeTimeouts: {
        icmp: 60
        tcp: 7440
        udp: 300
      }
      portRange: {
        maxPort: 65535
        minPort: 1024
      }
      portReuseHoldTime: {
        tcp: 120
        udp: 60
      }
    }
    userEquipmentAddressPoolPrefix: [
      '2.2.0.0/16'
    ]
    userEquipmentStaticAddressPoolPrefix: [
      '2.4.0.0/16'
    ]
    userPlaneDataInterface: {
      name: 'N6'
    }
  }
}
```

## microsoft.mobilenetwork/sims

Create sim
```bicep
resource exampleResource 'Microsoft.MobileNetwork/sims@2022-03-01-preview' = {
  name: 'example'
  location: 'testLocation'
  properties: {
    authenticationKey: '00000000000000000000000000000000'
    deviceType: 'Video camera'
    integratedCircuitCardIdentifier: '8900000000000000000'
    internationalMobileSubscriberIdentity: '00000'
    mobileNetwork: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork'
    }
    operatorKeyCode: '00000000000000000000000000000000'
    simPolicy: {
      id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/simPolicies/MySimPolicy'
    }
    staticIpConfiguration: [
      {
        attachedDataNetwork: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/packetCoreControlPlanes/TestPacketCoreCP/packetCoreDataPlanes/TestPacketCoreDP/attachedDataNetworks/TestAttachedDataNetwork'
        }
        slice: {
          id: '/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.MobileNetwork/mobileNetworks/testMobileNetwork/slices/testSlice'
        }
        staticIp: {
          ipv4Address: '2.4.0.1'
        }
      }
    ]
  }
}
```
