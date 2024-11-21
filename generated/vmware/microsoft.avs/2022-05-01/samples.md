# Microsoft.AVS

## microsoft.avs/privateclouds

PrivateClouds_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds@2022-05-01' = {
  name: 'example'
  identity: {
    type: 'SystemAssigned'
  }
  location: 'eastus2'
  properties: {
    managementCluster: {
      clusterSize: 4
    }
    networkBlock: '192.168.48.0/22'
  }
  sku: {
    name: 'AV36'
  }
  tags: {
  }
}
```

PrivateClouds_CreateOrUpdate_Stretched
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds@2022-05-01' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    availability: {
      secondaryZone: 2
      strategy: 'DualZone'
      zone: 1
    }
    managementCluster: {
      clusterSize: 4
    }
    networkBlock: '192.168.48.0/22'
  }
  sku: {
    name: 'AV36'
  }
  tags: {
  }
}
```

## microsoft.avs/privateclouds/clusters

Clusters_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/clusters@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    clusterSize: 3
  }
  sku: {
    name: 'AV20'
  }
}
```

## microsoft.avs/privateclouds/clusters/datastores

Datastores_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/clusters/datastores@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    netAppVolume: {
      id: '/subscriptions/11111111-1111-1111-1111-111111111111/resourceGroups/ResourceGroup1/providers/Microsoft.NetApp/netAppAccounts/NetAppAccount1/capacityPools/CapacityPool1/volumes/NFSVol1'
    }
  }
}
```

## microsoft.avs/privateclouds/hcxenterprisesites

HcxEnterpriseSites_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/hcxEnterpriseSites@2022-05-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.avs/privateclouds/authorizations

Authorizations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/authorizations@2022-05-01' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.avs/privateclouds/globalreachconnections

GlobalReachConnections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/globalReachConnections@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    authorizationKey: '01010101-0101-0101-0101-010101010101'
    peerExpressRouteCircuit: '/subscriptions/12341234-1234-1234-1234-123412341234/resourceGroups/mygroup/providers/Microsoft.Network/expressRouteCircuits/mypeer'
  }
}
```

## microsoft.avs/privateclouds/workloadnetworks/segments

WorkloadNetworks_CreateSegments
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/segments@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    connectedGateway: '/infra/tier-1s/gateway'
    displayName: 'segment1'
    revision: 1
    subnet: {
      dhcpRanges: [
        '40.20.0.0-40.20.0.1'
      ]
      gatewayAddress: '40.20.20.20/16'
    }
  }
}
```

## microsoft.avs/privateclouds/workloadnetworks/dhcpconfigurations

WorkloadNetworks_CreateDhcp
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dhcpType: 'SERVER'
    displayName: 'dhcpConfigurations1'
    leaseTime: 86400
    revision: 1
    serverAddress: '40.1.5.1/24'
  }
}
```

## microsoft.avs/privateclouds/workloadnetworks/portmirroringprofiles

WorkloadNetworks_CreatePortMirroring
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    destination: 'vmGroup2'
    direction: 'BIDIRECTIONAL'
    displayName: 'portMirroring1'
    revision: 1
    source: 'vmGroup1'
  }
}
```

## microsoft.avs/privateclouds/workloadnetworks/vmgroups

WorkloadNetworks_CreateVMGroup
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'vmGroup1'
    members: [
      '564d43da-fefc-2a3b-1d92-42855622fa50'
    ]
    revision: 1
  }
}
```

## microsoft.avs/privateclouds/workloadnetworks/dnsservices

WorkloadNetworks_CreateDnsService
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    defaultDnsZone: 'defaultDnsZone1'
    displayName: 'dnsService1'
    dnsServiceIp: '5.5.5.5'
    fqdnZones: [
      'fqdnZone1'
    ]
    logLevel: 'INFO'
    revision: 1
  }
}
```

## microsoft.avs/privateclouds/workloadnetworks/dnszones

WorkloadNetworks_CreateDnsZone
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'dnsZone1'
    dnsServerIps: [
      '1.1.1.1'
    ]
    domain: [
    ]
    revision: 1
    sourceIp: '8.8.8.8'
  }
}
```

## microsoft.avs/privateclouds/workloadnetworks/publicips

WorkloadNetworks_CreatePublicIP
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/publicIPs@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    displayName: 'publicIP1'
    numberOfPublicIPs: 32
  }
}
```

## microsoft.avs/privateclouds/cloudlinks

CloudLinks_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/cloudLinks@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    linkedCloud: '/subscriptions/12341234-1234-1234-1234-123412341234/resourceGroups/mygroup/providers/Microsoft.AVS/privateClouds/cloud2'
  }
}
```

## microsoft.avs/privateclouds/addons

Addons_CreateOrUpdate_Arc
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/addons@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addonType: 'Arc'
    vCenter: 'subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg_test/providers/Microsoft.ConnectedVMwarevSphere/VCenters/test-vcenter'
  }
}
```

Addons_CreateOrUpdate_HCX
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/addons@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addonType: 'HCX'
    offer: 'VMware MaaS Cloud Provider (Enterprise)'
  }
}
```

Addons_CreateOrUpdate_SRM
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/addons@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addonType: 'SRM'
    licenseKey: '41915178-A8FF-4A4D-B683-6D735AF5E3F5'
  }
}
```

Addons_CreateOrUpdate_VR
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/addons@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addonType: 'VR'
    vrsCount: 1
  }
}
```

## microsoft.avs/privateclouds/clusters/placementpolicies

PlacementPolicies_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/clusters/placementPolicies@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    type: 'VmHost'
    affinityStrength: 'Must'
    affinityType: 'AntiAffinity'
    azureHybridBenefitType: 'SqlHost'
    hostMembers: [
      'fakehost22.nyc1.kubernetes.center'
      'fakehost23.nyc1.kubernetes.center'
      'fakehost24.nyc1.kubernetes.center'
    ]
    vmMembers: [
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.AVS/privateClouds/cloud1/clusters/cluster1/virtualMachines/vm-128'
      '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.AVS/privateClouds/cloud1/clusters/cluster1/virtualMachines/vm-256'
    ]
  }
}
```

## microsoft.avs/privateclouds/scriptexecutions

ScriptExecutions_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/scriptExecutions@2022-05-01' = {
  parent: parentResource 
  name: 'example'
  properties: {
    hiddenParameters: [
      {
        name: 'Password'
        type: 'SecureValue'
        secureValue: 'PlaceholderPassword'
      }
    ]
    parameters: [
      {
        name: 'DomainName'
        type: 'Value'
        value: 'placeholderDomain.local'
      }
      {
        name: 'BaseUserDN'
        type: 'Value'
        value: 'DC=placeholder, DC=placeholder'
      }
    ]
    retention: 'P0Y0M60DT0H60M60S'
    scriptCmdletId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/group1/providers/Microsoft.AVS/privateClouds/cloud1/scriptPackages/AVS.PowerCommands@1.0.0/scriptCmdlets/New-SsoExternalIdentitySource'
    timeout: 'P0Y0M0DT0H60M60S'
  }
}
```
