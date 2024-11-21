# Microsoft.ServiceFabric

## microsoft.servicefabric/managedclusters

Put a cluster with maximum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters@2020-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    adminPassword: '{vm-password}'
    adminUserName: 'vmadmin'
    clientConnectionPort: 19000
    clusterCodeVersion: '7.1.168.9494'
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
    httpGatewayConnectionPort: 19080
    loadBalancingRules: [
      {
        backendPort: 80
        frontendPort: 80
        probeProtocol: 'http'
        protocol: 'http'
      }
      {
        backendPort: 443
        frontendPort: 443
        probeProtocol: 'http'
        protocol: 'http'
      }
      {
        backendPort: 10000
        frontendPort: 10000
        probeProtocol: 'http'
        protocol: 'tcp'
      }
    ]
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
resource exampleResource 'Microsoft.ServiceFabric/managedClusters@2020-01-01-preview' = {
  name: 'example'
  location: 'eastus'
  properties: {
    adminPassword: '{vm-password}'
    adminUserName: 'vmadmin'
    clusterCodeVersion: '7.1.168.9494'
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

Put a node type with maximum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters/nodeTypes@2020-01-01-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    capacities: {
      ClientConnections: '65536'
    }
    dataDiskSizeGB: 200
    isPrimary: false
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
    vmInstanceCount: 10
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
    vmSize: 'Standard_D3'
  }
}
```

Put a node type with minimum parameters
```bicep
resource exampleResource 'Microsoft.ServiceFabric/managedClusters/nodeTypes@2020-01-01-preview' = {
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
