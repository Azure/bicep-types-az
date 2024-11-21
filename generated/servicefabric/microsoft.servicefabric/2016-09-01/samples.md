# Microsoft.ServiceFabric

## microsoft.servicefabric/clusters

Put a cluster with max parameter
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters@2016-09-01' = {
  name: 'example'
  location: 'southcentralus'
  properties: {
    azureActiveDirectory: {
      clientApplication: '00000000-0000-0000-0000-000000000000'
      clusterApplication: '00000000-0000-0000-0000-000000000000'
      tenantId: '00000000-0000-0000-0000-000000000000'
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
      '5F3660C715EBBDA31DB1FFDCF508302348DE8E7A'
    ]
    clusterCodeVersion: '5.5.149.9494'
    diagnosticsStorageAccountConfig: {
      blobEndpoint: 'https://7623qfhwmnstw2.blob.core.windows.net/'
      protectedAccountKeyName: 'StorageAccountKey1'
      queueEndpoint: 'https://7623qfhwmnstw2.queue.core.windows.net/'
      storageAccountName: '7623qfhwmnstw2'
      tableEndpoint: 'https://7623qfhwmnstw2.table.core.windows.net/'
    }
    fabricSettings: [
      {
        name: 'Security'
        parameters: [
          {
            name: 'ClusterProtectionLevel'
            value: 'EncryptAndSign'
          }
        ]
      }
    ]
    managementEndpoint: 'https://sfclust2.southcentralus.cloudapp.azure.com:19080'
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
          endPort: 65534
          startPort: 49152
        }
        httpGatewayEndpointPort: 19080
        isPrimary: true
        vmInstanceCount: 5
      }
    ]
    provisioningState: 'Succeeded'
    reliabilityLevel: 'Silver'
    upgradeDescription: {
      deltaHealthPolicy: {
        maxPercentDeltaUnhealthyApplications: 0
        maxPercentDeltaUnhealthyNodes: 0
        maxPercentUpgradeDomainDeltaUnhealthyNodes: 0
      }
      forceRestart: true
      healthCheckRetryTimeout: '00:45:00'
      healthCheckStableDuration: '00:05:00'
      healthCheckWaitDuration: '00:05:00'
      healthPolicy: {
        maxPercentUnhealthyApplications: 100
        maxPercentUnhealthyNodes: 100
      }
      overrideUserUpgradePolicy: false
      upgradeDomainTimeout: '02:00:00'
      upgradeReplicaSetCheckTimeout: '10675199.02:48:05.4775807'
      upgradeTimeout: '12:00:00'
    }
    upgradeMode: 'Automatic'
    vmImage: 'Windows'
  }
  tags: {
    clusterName: 'myCluster'
    resourceType: 'Service Fabric'
  }
}
```

Put a cluster with min parameter
```bicep
resource exampleResource 'Microsoft.ServiceFabric/clusters@2016-09-01' = {
  name: 'example'
  location: 'southcentralus'
  properties: {
    clusterCodeVersion: '5.5.149.9494'
    diagnosticsStorageAccountConfig: {
      blobEndpoint: 'https://7623qfhwmnstw2.blob.core.windows.net/'
      protectedAccountKeyName: 'StorageAccountKey1'
      queueEndpoint: 'https://7623qfhwmnstw2.queue.core.windows.net/'
      storageAccountName: '7623qfhwmnstw2'
      tableEndpoint: 'https://7623qfhwmnstw2.table.core.windows.net/'
    }
    managementEndpoint: 'https://myCluster.southcentralus.cloudapp.azure.com:19080'
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
          endPort: 65534
          startPort: 49152
        }
        httpGatewayEndpointPort: 19080
        isPrimary: true
        vmInstanceCount: 5
      }
    ]
    provisioningState: 'Succeeded'
    reliabilityLevel: 'Silver'
    upgradeMode: 'Automatic'
    vmImage: 'Windows'
  }
  tags: {
    clusterName: 'myCluster'
    resourceType: 'Service Fabric'
  }
}
```
