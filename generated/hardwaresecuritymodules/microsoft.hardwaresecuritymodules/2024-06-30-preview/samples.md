# Microsoft.HardwareSecurityModules

## microsoft.hardwaresecuritymodules/cloudhsmclusters

CloudHsmCluster_CreateOrUpdate_MaximumSet_Gen
```bicep
resource exampleResource 'Microsoft.HardwareSecurityModules/cloudHsmClusters@2024-06-30-preview' = {
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
    publicNetworkAccess: 'Disabled'
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
resource exampleResource 'Microsoft.HardwareSecurityModules/cloudHsmClusters/privateEndpointConnections@2024-06-30-preview' = {
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

## microsoft.hardwaresecuritymodules/dedicatedhsms

Create a new or update an existing dedicated HSM
```bicep
resource exampleResource 'Microsoft.HardwareSecurityModules/dedicatedHSMs@2024-06-30-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    networkProfile: {
      networkInterfaces: [
        {
          privateIpAddress: '1.0.0.1'
        }
      ]
      subnet: {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01'
      }
    }
    stampId: 'stamp01'
  }
  sku: {
    name: 'SafeNet Luna Network HSM A790'
  }
  tags: {
    Dept: 'hsm'
    Environment: 'dogfood'
  }
}
```

Create a new or update an existing payment HSM
```bicep
resource exampleResource 'Microsoft.HardwareSecurityModules/dedicatedHSMs@2024-06-30-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    networkProfile: {
      networkInterfaces: [
        {
          privateIpAddress: '1.0.0.1'
        }
      ]
      subnet: {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01'
      }
    }
    stampId: 'stamp01'
  }
  sku: {
    name: 'payShield10K_LMK1_CPS60'
  }
  tags: {
    Dept: 'hsm'
    Environment: 'dogfood'
  }
}
```

Create a new or update an existing payment HSM with management profile
```bicep
resource exampleResource 'Microsoft.HardwareSecurityModules/dedicatedHSMs@2024-06-30-preview' = {
  name: 'example'
  location: 'westus'
  properties: {
    managementNetworkProfile: {
      networkInterfaces: [
        {
          privateIpAddress: '1.0.0.2'
        }
      ]
      subnet: {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01'
      }
    }
    networkProfile: {
      networkInterfaces: [
        {
          privateIpAddress: '1.0.0.1'
        }
      ]
      subnet: {
        resourceId: '/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/hsm-group/providers/Microsoft.Network/virtualNetworks/stamp01/subnets/stamp01'
      }
    }
    stampId: 'stamp01'
  }
  sku: {
    name: 'payShield10K_LMK1_CPS60'
  }
  tags: {
    Dept: 'hsm'
    Environment: 'dogfood'
  }
}
```
