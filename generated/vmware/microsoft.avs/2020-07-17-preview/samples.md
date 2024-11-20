# Microsoft.AVS

## microsoft.avs/privateclouds

PrivateClouds_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds@2020-07-17-preview' = {
  name: 'example'
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

## microsoft.avs/privateclouds/clusters

Clusters_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/clusters@2020-07-17-preview' = {
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

## microsoft.avs/privateclouds/hcxenterprisesites

HcxEnterpriseSites_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/hcxEnterpriseSites@2020-07-17-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.avs/privateclouds/authorizations

Authorizations_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/authorizations@2020-07-17-preview' = {
  parent: parentResource 
  name: 'example'
}
```

## microsoft.avs/privateclouds/globalreachconnections

GlobalReachConnections_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/globalReachConnections@2020-07-17-preview' = {
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
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/segments@2020-07-17-preview' = {
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
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/dhcpConfigurations@2020-07-17-preview' = {
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
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/portMirroringProfiles@2020-07-17-preview' = {
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
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/vmGroups@2020-07-17-preview' = {
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
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/dnsServices@2020-07-17-preview' = {
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
resource exampleResource 'Microsoft.AVS/privateClouds/workloadNetworks/dnsZones@2020-07-17-preview' = {
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

## microsoft.avs/privateclouds/addons

Addons_CreateOrUpdate
```bicep
resource exampleResource 'Microsoft.AVS/privateClouds/addons@2020-07-17-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    addonType: 'SRM'
    licenseKey: '41915178-A8FF-4A4D-B683-6D735AF5E3F5'
  }
}
```
