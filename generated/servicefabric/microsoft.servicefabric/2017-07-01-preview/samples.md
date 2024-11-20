# Microsoft.ServiceFabric

## microsoft.servicefabric/clusters/applicationtypes

Put an application type
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters/applicationTypes@2017-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'myCluster'
  type: 'applicationTypes'
  id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/clusters/myCluster/applicationTypes/myAppType'
  location: 'eastus'
}
```

## microsoft.servicefabric/clusters/applicationtypes/versions

Put an application type version
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters/applicationTypes/versions@2017-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'myCluster'
  type: 'versions'
  id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/clusters/myCluster/applicationTypes/myAppType/versions/1.0'
  location: 'eastus'
  properties: {
    appPackageUrl: 'http://fakelink.test.com/MyAppType'
  }
}
```

## microsoft.servicefabric/clusters/applications

Put an application with maximum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters/applications@2017-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'myCluster'
  type: 'applications'
  id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/clusters/myCluster/applications/myApp'
  location: 'eastus'
  properties: {
    maximumNodes: 3
    metrics: [
      {
        MaximumCapacity: 3
        Name: 'metric1'
        ReservationCapacity: 1
        TotalApplicationCapacity: 5
      }
    ]
    minimumNodes: 1
    parameters: {
      param1: 'value1'
    }
    removeApplicationCapacity: false
    typeName: 'myAppType'
    typeVersion: '1.0'
    upgradePolicy: {
      applicationHealthPolicy: {
        ConsiderWarningAsError: true
        DefaultServiceTypeHealthPolicy: {
          maxPercentUnhealthyPartitionsPerService: 0
          maxPercentUnhealthyReplicasPerPartition: 0
          maxPercentUnhealthyServices: 0
        }
        MaxPercentUnhealthyDeployedApplications: 0
      }
      forceRestart: false
      rollingUpgradeMonitoringPolicy: {
        failureAction: 'Rollback'
        healthCheckRetryTimeout: '00:10:00'
        healthCheckStableDuration: '00:05:00'
        healthCheckWaitDuration: '00:02:00'
        upgradeDomainTimeout: '1.06:00:00'
        upgradeTimeout: '01:00:00'
      }
      upgradeReplicaSetCheckTimeout: '01:00:00'
    }
  }
}
```

Put an application with minimum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters/applications@2017-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'myCluster'
  type: 'applications'
  id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/clusters/myCluster/applications/myApp'
  location: 'eastus'
  properties: {
    removeApplicationCapacity: false
    typeName: 'myAppType'
    typeVersion: '1.0'
  }
}
```

## microsoft.servicefabric/clusters/applications/services

Put a service with maximum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters/applications/services@2017-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'myCluster'
  type: 'services'
  id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/clusters/myCluster/applications/myApp/services/myService'
  location: 'eastus'
  properties: {
    correlationScheme: [
      {
        Scheme: 'Affinity'
        ServiceName: 'fabric:/app1/app1~svc1'
      }
    ]
    defaultMoveCost: 'Medium'
    instanceCount: 5
    partitionDescription: {
      PartitionScheme: 'Singleton'
    }
    placementConstraints: 'NodeType==frontend'
    serviceKind: 'Stateless'
    serviceLoadMetrics: [
      {
        Name: 'metric1'
        Weight: 'Low'
      }
    ]
    servicePlacementPolicies: [
    ]
    serviceTypeName: 'myServiceType'
  }
}
```

Put a service with minimum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters/applications/services@2017-07-01-preview' = {
  parent: parentResource 
  name: 'example'
  name: 'myCluster'
  type: 'services'
  id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/clusters/myCluster/applications/myApp/services/myService'
  location: 'eastus'
  properties: {
    instanceCount: 1
    partitionDescription: {
      PartitionScheme: 'Singleton'
    }
    serviceKind: 'Stateless'
    serviceTypeName: 'myServiceType'
  }
}
```

## microsoft.servicefabric/clusters

Put a cluster with max parameter
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters@2017-07-01-preview' = {
  name: 'example'
  name: 'myCluster'
  type: 'Microsoft.ServiceFabric/clusters'
  id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/clusters/myCluster'
  location: 'eastus'
  properties: {
    addOnFeatures: [
      'RepairManager'
      'DnsService'
    ]
    azureActiveDirectory: {
      clientApplication: 'd151ad89-4bce-4ae8-b3d1-1dc79679fa75'
      clusterApplication: '5886372e-7bf4-4878-a497-8098aba608ae'
      tenantId: '6abcc6a0-8666-43f1-87b8-172cf86a9f9c'
    }
    certificate: {
      thumbprint: '5F3660C715EBBDA31DB1FFDCF508302348DE8E7A'
      thumbprintSecondary: '361A93445450CC8F2FF747F74500E8044942DAFD'
      x509StoreName: 'My'
    }
    clientCertificateCommonNames: [
      {
        certificateCommonName: 'abc.com'
        certificateIssuerThumbprint: '5F3660C715EBBDA31DB1FFDCF508302348DE8E7A'
        isAdmin: true
      }
    ]
    clientCertificateThumbprints: [
      {
        certificateThumbprint: '5F3660C715EBBDA31DB1FFDCF508302348DE8E7A'
        isAdmin: false
      }
    ]
    clusterCodeVersion: '6.0.219.9494'
    diagnosticsStorageAccountConfig: {
      blobEndpoint: 'https://diag.blob.core.windows.net/'
      protectedAccountKeyName: 'StorageAccountKey1'
      queueEndpoint: 'https://diag.queue.core.windows.net/'
      storageAccountName: 'diag'
      tableEndpoint: 'https://diag.table.core.windows.net/'
    }
    fabricSettings: [
      {
        name: 'UpgradeService'
        parameters: [
          {
            name: 'AppPollIntervalInSeconds'
            value: '60'
          }
        ]
      }
    ]
    managementEndpoint: 'https://myCluster.eastus.cloudapp.azure.com:19080'
    nodeTypes: [
      {
        name: 'nt1vm'
        applicationPorts: {
          endPort: 30000
          startPort: 20000
        }
        clientConnectionEndpointPort: 19000
        durabilityLevel: 'Bronze'
        ephemeralPorts: {
          endPort: 64000
          startPort: 49000
        }
        httpGatewayEndpointPort: 19007
        isPrimary: true
        vmInstanceCount: 5
      }
    ]
    reliabilityLevel: 'Silver'
    reverseProxyCertificate: {
      thumbprint: '5F3660C715EBBDA31DB1FFDCF508302348DE8E7A'
      thumbprintSecondary: '361A93445450CC8F2FF747F74500E8044942DAFD'
      x509StoreName: 'My'
    }
    upgradeDescription: {
      deltaHealthPolicy: {
        maxPercentDeltaUnhealthyApplications: 0
        maxPercentDeltaUnhealthyNodes: 0
        maxPercentUpgradeDomainDeltaUnhealthyNodes: 0
      }
      forceRestart: true
      healthCheckRetryTimeout: '00:05:00'
      healthCheckStableDuration: '00:00:30'
      healthCheckWaitDuration: '00:00:30'
      healthPolicy: {
        maxPercentUnhealthyApplications: 100
        maxPercentUnhealthyNodes: 100
      }
      upgradeDomainTimeout: '00:15:00'
      upgradeReplicaSetCheckTimeout: '00:10:00'
      upgradeTimeout: '00:15:00'
    }
    upgradeMode: 'Manual'
    vmImage: 'Windows'
  }
}
```

Put a cluster with min parameter
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters@2017-07-01-preview' = {
  name: 'example'
  name: 'myCluster'
  type: 'Microsoft.ServiceFabric/clusters'
  id: '/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/resRg/providers/Microsoft.ServiceFabric/clusters/myCluster'
  location: 'eastus'
  properties: {
    diagnosticsStorageAccountConfig: {
      blobEndpoint: 'https://diag.blob.core.windows.net/'
      protectedAccountKeyName: 'StorageAccountKey1'
      queueEndpoint: 'https://diag.queue.core.windows.net/'
      storageAccountName: 'diag'
      tableEndpoint: 'https://diag.table.core.windows.net/'
    }
    fabricSettings: [
      {
        name: 'UpgradeService'
        parameters: [
          {
            name: 'AppPollIntervalInSeconds'
            value: '60'
          }
        ]
      }
    ]
    managementEndpoint: 'http://myCluster.eastus.cloudapp.azure.com:19080'
    nodeTypes: [
      {
        name: 'nt1vm'
        applicationPorts: {
          endPort: 30000
          startPort: 20000
        }
        clientConnectionEndpointPort: 19000
        durabilityLevel: 'Bronze'
        ephemeralPorts: {
          endPort: 64000
          startPort: 49000
        }
        httpGatewayEndpointPort: 19007
        isPrimary: true
        vmInstanceCount: 5
      }
    ]
    reliabilityLevel: 'Silver'
    upgradeMode: 'Automatic'
  }
}
```
