# Microsoft.ServiceFabric

## microsoft.servicefabric/managedclusters/applicationtypes

Put an application type
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedclusters/applicationTypes@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
}
```

## microsoft.servicefabric/managedclusters/applicationtypes/versions

Put an application type version
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedclusters/applicationTypes/versions@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    appPackageUrl: 'http://fakelink.test.com/MyAppType'
  }
}
```

## microsoft.servicefabric/managedclusters/applications

Put an application with maximum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedclusters/applications@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    parameters: {
      param1: 'value1'
    }
    upgradePolicy: {
      applicationHealthPolicy: {
        considerWarningAsError: true
        defaultServiceTypeHealthPolicy: {
          maxPercentUnhealthyPartitionsPerService: 0
          maxPercentUnhealthyReplicasPerPartition: 0
          maxPercentUnhealthyServices: 0
        }
        maxPercentUnhealthyDeployedApplications: 0
        serviceTypeHealthPolicyMap: {
          myService: {
            maxPercentUnhealthyPartitionsPerService: 30
            maxPercentUnhealthyReplicasPerPartition: 30
            maxPercentUnhealthyServices: 30
          }
        }
      }
      forceRestart: false
      instanceCloseDelayDuration: 600
      recreateApplication: false
      rollingUpgradeMonitoringPolicy: {
        failureAction: 'Rollback'
        healthCheckRetryTimeout: '00:10:00'
        healthCheckStableDuration: '00:05:00'
        healthCheckWaitDuration: '00:02:00'
        upgradeDomainTimeout: '00:15:00'
        upgradeTimeout: '01:00:00'
      }
      upgradeMode: 'UnmonitoredAuto'
      upgradeReplicaSetCheckTimeout: 3600
    }
    version: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/managedclusters/myCluster/applicationTypes/myAppType/versions/1.0'
  }
  tags: {
    a: 'b'
  }
}
```

Put an application with minimum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedclusters/applications@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    version: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/managedclusters/myCluster/applicationTypes/myAppType/versions/1.0'
  }
}
```

## microsoft.servicefabric/managedclusters/applications/services

Put a service with maximum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedclusters/applications/services@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    correlationScheme: [
      {
        scheme: 'AlignedAffinity'
        serviceName: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/managedclusters/myCluster/applications/myApp/services/myService1'
      }
    ]
    defaultMoveCost: 'Medium'
    instanceCount: 5
    minInstanceCount: 3
    minInstancePercentage: 30
    partitionDescription: {
      partitionScheme: 'Singleton'
    }
    placementConstraints: 'NodeType==frontend'
    scalingPolicies: [
      {
        scalingMechanism: {
          kind: 'ScalePartitionInstanceCount'
          maxInstanceCount: 9
          minInstanceCount: 3
          scaleIncrement: 2
        }
        scalingTrigger: {
          kind: 'AveragePartitionLoadTrigger'
          lowerLoadThreshold: 2
          metricName: 'metricName'
          scaleInterval: '00:01:00'
          upperLoadThreshold: 8
        }
      }
    ]
    serviceKind: 'Stateless'
    serviceLoadMetrics: [
      {
        name: 'metric1'
        defaultLoad: 3
        weight: 'Low'
      }
    ]
    servicePackageActivationMode: 'SharedProcess'
    servicePlacementPolicies: [
      {
        type: 'NonPartiallyPlaceService'
      }
    ]
    serviceTypeName: 'myServiceType'
  }
  tags: {
    a: 'b'
  }
}
```

Put a service with minimum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedclusters/applications/services@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  location: 'eastus'
  properties: {
    instanceCount: 1
    partitionDescription: {
      partitionScheme: 'Singleton'
    }
    serviceKind: 'Stateless'
    serviceTypeName: 'myServiceType'
  }
}
```

## microsoft.servicefabric/managedclusters

Put a cluster with maximum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters@2022-08-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    addonFeatures: [
      'DnsService'
      'BackupRestoreService'
      'ResourceMonitorService'
    ]
    adminPassword: '{vm-password}'
    adminUserName: 'vmadmin'
    allowRdpAccess: true
    applicationTypeVersionsCleanupPolicy: {
      maxUnusedVersionsToKeep: 3
    }
    clientConnectionPort: 19000
    clusterCodeVersion: '7.1.168.9494'
    clusterUpgradeMode: 'Manual'
    dnsName: 'myCluster'
    enableAutoOSUpgrade: true
    enableIpv6: true
    fabricSettings: [
      {
        name: 'ManagedIdentityTokenService'
        parameters: [
          {
            name: 'IsEnabled'
            value: 'true'
          }
        ]
      }
    ]
    httpGatewayConnectionPort: 19080
    ipTags: [
      {
        ipTagType: 'FirstPartyUsage'
        tag: 'SQL'
      }
    ]
    loadBalancingRules: [
      {
        backendPort: 80
        frontendPort: 80
        probePort: 80
        probeProtocol: 'http'
        protocol: 'http'
      }
      {
        backendPort: 443
        frontendPort: 443
        probePort: 443
        probeProtocol: 'http'
        protocol: 'http'
      }
      {
        backendPort: 10000
        frontendPort: 10000
        loadDistribution: 'Default'
        probePort: 10000
        probeProtocol: 'http'
        protocol: 'tcp'
      }
    ]
    networkSecurityRules: [
      {
        name: 'TestName'
        description: 'Test description'
        access: 'allow'
        destinationAddressPrefixes: [
          '*'
        ]
        destinationPortRanges: [
          '*'
        ]
        direction: 'inbound'
        priority: 1010
        sourceAddressPrefixes: [
          '*'
        ]
        sourcePortRanges: [
          '*'
        ]
        protocol: 'tcp'
      }
      {
        name: 'AllowARM'
        access: 'allow'
        destinationAddressPrefix: '*'
        destinationPortRange: '33500-33699'
        direction: 'inbound'
        priority: 2002
        sourceAddressPrefix: 'AzureResourceManager'
        sourcePortRange: '*'
        protocol: '*'
      }
    ]
    zonalResiliency: true
  }
  sku: {
    name: 'Basic'
  }
  tags: {
  }
}
```

Put a cluster with minimum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters@2022-08-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    adminPassword: '{vm-password}'
    adminUserName: 'vmadmin'
    clusterUpgradeCadence: 'Wave1'
    clusterUpgradeMode: 'Automatic'
    dnsName: 'myCluster'
    fabricSettings: [
      {
        name: 'ManagedIdentityTokenService'
        parameters: [
          {
            name: 'IsEnabled'
            value: 'true'
          }
        ]
      }
    ]
  }
}
```

## microsoft.servicefabric/managedclusters/nodetypes

Put a node type with auto-scale parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters/nodeTypes@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    capacities: {
      ClientConnections: '65536'
    }
    dataDiskSizeGB: 200
    dataDiskType: 'Premium_LRS'
    isPrimary: false
    isStateless: true
    multiplePlacementGroups: true
    placementProperties: {
      HasSSD: 'true'
      NodeColor: 'green'
      SomeProperty: '5'
    }
    vmExtensions: [
      {
        name: 'Microsoft.Azure.Geneva.GenevaMonitoring'
        properties: {
          type: 'GenevaMonitoring'
          autoUpgradeMinorVersion: true
          publisher: 'Microsoft.Azure.Geneva'
          settings: {
          }
          typeHandlerVersion: '2.0'
        }
      }
    ]
    vmImageOffer: 'WindowsServer'
    vmImagePublisher: 'MicrosoftWindowsServer'
    vmImageSku: '2016-Datacenter-Server-Core'
    vmImageVersion: 'latest'
    vmInstanceCount: -1
    vmManagedIdentity: {
      userAssignedIdentities: [
        '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity'
        '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity2'
      ]
    }
    vmSecrets: [
      {
        sourceVault: {
          id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.KeyVault/vaults/myVault'
        }
        vaultCertificates: [
          {
            certificateStore: 'My'
            certificateUrl: 'https://myVault.vault.azure.net:443/secrets/myCert/ef1a31d39e1f46bca33def54b6cda54c'
          }
        ]
      }
    ]
    vmSize: 'Standard_DS3'
  }
}
```

Put a node type with maximum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters/nodeTypes@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    additionalDataDisks: [
      {
        diskLetter: 'F'
        diskSizeGB: 256
        diskType: 'StandardSSD_LRS'
        lun: 1
      }
      {
        diskLetter: 'G'
        diskSizeGB: 150
        diskType: 'Premium_LRS'
        lun: 2
      }
    ]
    capacities: {
      ClientConnections: '65536'
    }
    dataDiskLetter: 'S'
    dataDiskSizeGB: 200
    dataDiskType: 'Premium_LRS'
    enableAcceleratedNetworking: true
    enableEncryptionAtHost: true
    enableOverProvisioning: false
    evictionPolicy: 'Deallocate'
    frontendConfigurations: [
      {
        applicationGatewayBackendAddressPoolId: ' /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.Network/applicationGateways/appgw-test/backendAddressPools/appgwBepoolTest'
        loadBalancerBackendAddressPoolId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.Network/loadBalancers/test-LB/backendAddressPools/LoadBalancerBEAddressPool'
        loadBalancerInboundNatPoolId: ' /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.Network/loadBalancers/test-LB/inboundNatPools/LoadBalancerNATPool'
      }
    ]
    isPrimary: false
    isSpotVM: true
    isStateless: true
    multiplePlacementGroups: true
    placementProperties: {
      HasSSD: 'true'
      NodeColor: 'green'
      SomeProperty: '5'
    }
    spotRestoreTimeout: 'PT30M'
    useDefaultPublicLoadBalancer: true
    useEphemeralOSDisk: true
    vmExtensions: [
      {
        name: 'Microsoft.Azure.Geneva.GenevaMonitoring'
        properties: {
          type: 'GenevaMonitoring'
          autoUpgradeMinorVersion: true
          enableAutomaticUpgrade: true
          forceUpdateTag: 'v.1.0'
          publisher: 'Microsoft.Azure.Geneva'
          settings: {
          }
          typeHandlerVersion: '2.0'
        }
      }
    ]
    vmImageOffer: 'WindowsServer'
    vmImagePublisher: 'MicrosoftWindowsServer'
    vmImageSku: '2016-Datacenter-Server-Core'
    vmImageVersion: 'latest'
    vmInstanceCount: 10
    vmManagedIdentity: {
      userAssignedIdentities: [
        '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity'
        '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/myIdentity2'
      ]
    }
    vmSecrets: [
      {
        sourceVault: {
          id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/resRg/providers/Microsoft.KeyVault/vaults/myVault'
        }
        vaultCertificates: [
          {
            certificateStore: 'My'
            certificateUrl: 'https://myVault.vault.azure.net:443/secrets/myCert/ef1a31d39e1f46bca33def54b6cda54c'
          }
        ]
      }
    ]
    vmSize: 'Standard_DS3'
  }
}
```

Put a node type with minimum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters/nodeTypes@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataDiskSizeGB: 200
    isPrimary: false
    vmImageOffer: 'WindowsServer'
    vmImagePublisher: 'MicrosoftWindowsServer'
    vmImageSku: '2016-Datacenter-Server-Core'
    vmImageVersion: 'latest'
    vmInstanceCount: 10
    vmSize: 'Standard_D3'
  }
}
```

Put an stateless node type with temporary disk for service fabric
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters/nodeTypes@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    enableEncryptionAtHost: true
    isPrimary: false
    isStateless: true
    multiplePlacementGroups: true
    useTempDataDisk: true
    vmExtensions: [
      {
        name: 'Microsoft.Azure.Geneva.GenevaMonitoring'
        properties: {
          type: 'GenevaMonitoring'
          autoUpgradeMinorVersion: true
          publisher: 'Microsoft.Azure.Geneva'
          settings: {
          }
          typeHandlerVersion: '2.0'
        }
      }
    ]
    vmImageOffer: 'WindowsServer'
    vmImagePublisher: 'MicrosoftWindowsServer'
    vmImageSku: '2016-Datacenter-Server-Core'
    vmImageVersion: 'latest'
    vmInstanceCount: 10
    vmSize: 'Standard_DS3'
  }
}
```

Put node type with custom vm image
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters/nodeTypes@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    dataDiskSizeGB: 200
    isPrimary: false
    vmImageResourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/test-custom-image/providers/Microsoft.Compute/galleries/myCustomImages/images/Win2019DC'
    vmInstanceCount: 10
    vmSize: 'Standard_D3'
  }
}
```

Put node type with dedicated hosts
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters/nodeTypes@2022-08-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    capacities: {
    }
    dataDiskSizeGB: 200
    dataDiskType: 'StandardSSD_LRS'
    hostGroupId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/testhostgroupRG/providers/Microsoft.Compute/hostGroups/testHostGroup'
    isPrimary: false
    placementProperties: {
    }
    vmImageOffer: 'WindowsServer'
    vmImagePublisher: 'MicrosoftWindowsServer'
    vmImageSku: '2019-Datacenter'
    vmImageVersion: 'latest'
    vmInstanceCount: 10
    vmSize: 'Standard_D8s_v3'
    zones: [
      '1'
    ]
  }
}
```
