# Microsoft.HardwareSecurityModules
  
> [!NOTE]
> The code samples in this document are generated from API usage examples contributed by Resource Providers in their [Azure Rest API specifications](https://github.com/Azure/azure-rest-api-specs). Any issues should be reported and addressed in the source.


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
