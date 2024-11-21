# Microsoft.HardwareSecurityModules

## microsoft.hardwaresecuritymodules/cloudhsmclusters

CloudHsmCluster_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HardwareSecurityModules/cloudHsmClusters@2023-12-10-preview' = {
  name: 'example'
  identity: {
    type: 'UserAssigned'
    userAssignedIdentities: {
      /subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/contoso-resources/providers/Microsoft.ManagedIdentity/userAssignedIdentities/identity-1: {
      }
    }
  }
  location: 'eastus2'
  properties: {
    backupProperties: {
      azureStorageResourceUri: 'testStorageResourceUri'
    }
    publicNetworkAccess: 'Disabled'
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
resource exampleResource 'Microsoft.HardwareSecurityModules/cloudHsmClusters/privateEndpointConnections@2023-12-10-preview' = {
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
