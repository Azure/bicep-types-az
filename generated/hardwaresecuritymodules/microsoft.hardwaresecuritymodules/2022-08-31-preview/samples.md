# Microsoft.HardwareSecurityModules

## microsoft.hardwaresecuritymodules/cloudhsmclusters

CloudHsmCluster_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HardwareSecurityModules/cloudHsmClusters@2022-08-31-preview' = {
  name: 'example'
  location: 'eastus2'
  properties: {
    securityDomain: {
      fipsState: 2
    }
  }
  sku: {
    name: 'Standard_B1'
    family: 'B'
  }
  tags: {
    Dept: 'hsm'
    Environment: 'dogfood'
  }
}
```

## microsoft.hardwaresecuritymodules/cloudhsmclusters/privateendpointconnections

CloudHsmClusterPrivateEndpointConnection_Create_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HardwareSecurityModules/cloudHsmClusters/privateEndpointConnections@2022-08-31-preview' = {
  parent: parentResource 
  name: 'example'
  properties: {
    privateLinkServiceConnectionState: {
      description: 'My name is Joe and I\'m approving this.'
      status: 'Approved'
    }
  }
}
```
